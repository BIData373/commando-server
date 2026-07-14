import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { randomUUID } from 'node:crypto';

@Injectable()
export class TaskRunnerService {
  constructor(
    private readonly amqp: AmqpConnection,
    private readonly config: ConfigService,
  ) { }

  sendTask(name: string, args: unknown[] = [], kwargs: Record<string, unknown> = {}): void {
    const id = randomUUID();

    const body = Buffer.from(
      JSON.stringify([
        args,
        kwargs,
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
      this.config.getOrThrow<string>("RABBITMQ_QUEUE"),
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
