import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { credentials } from 'amqplib';
import { getCACertificates } from 'node:tls';
import { TaskRunnerService } from './task-runner.service';

@Global()
@Module({
  imports: [
    RabbitMQModule.forRootAsync({
      inject: [ConfigService],
      useFactory(config: ConfigService) {
        const useSsl: boolean = JSON.parse(config.get('RABBITMQ_USE_SSL', 'false'));
        const host = config.get<string>('RABBITMQ_HOST')
        const port = Number(config.get<number>('RABBITMQ_PORT'))
        const vhost = config.get<string>('RABBITMQ_VHOST', '/')

        return {
          uri: `${useSsl ? 'amqps' : 'amqp'}://${host}:${port}${vhost}`,
          connectionInitOptions: { wait: true },
          connectionManagerOptions: {
            connectionOptions: {
              ca: getCACertificates("system"),
              cert: Buffer.from(config.getOrThrow<string>('DB_SSLCERT_DATA')),
              key: Buffer.from(config.getOrThrow<string>('DB_SSLKEY_DATA')),
              credentials: credentials.external(),
            }
          },
        }
      },
    })
  ],
  providers: [TaskRunnerService],
  exports: [TaskRunnerService],
})
export class TaskRunnerModule { }
