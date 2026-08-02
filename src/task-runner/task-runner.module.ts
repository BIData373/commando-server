import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Global, Module } from '@nestjs/common';
import { credentials } from 'amqplib';
import { getCACertificates } from 'node:tls';
import { dbSSLCertData, dbSSLKeyData, rabbitmqHost, rabbitmqPort, rabbitmqUseSsl, rabbitmqVhost, taskRunnerEnabled } from '../common/consts/env';
import { TaskRunnerService } from './task-runner.service';

@Global()
@Module({
  imports: taskRunnerEnabled
    ? [
      RabbitMQModule.forRoot({
        uri: `${rabbitmqUseSsl ? 'amqps' : 'amqp'}://${rabbitmqHost}:${rabbitmqPort}${rabbitmqVhost}`,
        connectionInitOptions: { wait: true },
        ...(rabbitmqUseSsl && {
          connectionManagerOptions: {
            connectionOptions: {
              ca: getCACertificates("system"),
              cert: Buffer.from(dbSSLCertData!),
              key: Buffer.from(dbSSLKeyData!),
              credentials: credentials.external(),
            }
          },
        }),
      })
    ]
    : [],
  providers: [TaskRunnerService],
  exports: [TaskRunnerService],
})
export class TaskRunnerModule { }
