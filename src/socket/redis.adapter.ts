import { IoAdapter } from '@nestjs/platform-socket.io'
import { createAdapter } from '@socket.io/redis-adapter'
import { createClient } from 'redis'
import { ServerOptions } from 'socket.io'
import { redisHost, redisPassword, redisPort, redisSocketPrefix, redisUsername } from '../common/consts/env'

export class RedisAdapter extends IoAdapter {
  private adapterConstructor: ReturnType<typeof createAdapter>

  async connect(): Promise<void> {
    if (!redisHost) {
      return
    }

    const pubClient = createClient({
      socket: {
        host: redisHost,
        port: redisPort,
        // TODO - how does it actually get the TSL?
        tls: true,
        rejectUnauthorized: false
      },
      ...(redisUsername && { username: redisUsername }),
      ...(redisPassword && { password: redisPassword }),
    })

    const subClient = pubClient.duplicate()

    try {
      await Promise.all([pubClient.connect(), subClient.connect()])

      this.adapterConstructor = createAdapter(pubClient, subClient, {
        key: redisSocketPrefix
      })

      console.log(`[Redis] Adapter Connected - ${redisHost}:${redisPort}`)
    } catch (e) {
      console.error('[Redis] Failed to Connect:', e)
    }
  }

  createIOServer(port: number, options?: ServerOptions) {
    const server = super.createIOServer(port, options)

    if (this.adapterConstructor) {
      server.adapter(this.adapterConstructor)
    }

    return server
  }
}
