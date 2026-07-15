import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { Injectable, Optional } from '@nestjs/common';
import { InjectPinoLogger, PinoLogger } from 'pino-nestjs';
import { randomUUID } from 'node:crypto';
import { rabbitmqQueue, taskRunnerEnabled } from '../common/consts/env';
import { TaskRegistry } from './interfaces/task-registry.interface';

@Injectable()
export class TaskRunnerService {
  constructor(
    private readonly amqp: AmqpConnection,
    @InjectPinoLogger(TaskRunnerService.name) private readonly logger: PinoLogger,
  ) { }

  sendTask<
    TTaskName extends keyof TaskRegistry,
    TTaskArgs extends TaskRegistry[TTaskName]['args'],
    TTaskKwargs extends TaskRegistry[TTaskName]['kwargs']
  >(name: TTaskName, args?: TTaskArgs, kwargs?: TTaskKwargs): void {
    if (!taskRunnerEnabled) {
      this.logger.info(`Task runner disabled — ignoring task "${name}"`);
      return;
    }

    const id = randomUUID();

    const body = Buffer.from(
      JSON.stringify([
        args ?? [],
        kwargs ?? {},
        {
          callbacks: null,
          errbacks: null,
          chain: null,
          chord: null,
        },
      ]),
      "utf8",
    );

    this.amqp.channel.sendToQueue(
      rabbitmqQueue!,
      body,
      {
        contentType: "application/json",
        contentEncoding: "utf-8",
        deliveryMode: 2,
        correlationId: id,
        headers: {
          lang: "py",
          task: name,
          id,
          root_id: id,
          parent_id: null,
          group: null,
        },
      },
    );
  }
}
