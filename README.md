# Commando Server

A sample NestJS application with Docker support and environment management.

## Project Structure

```
.
├── src/
│   ├── main.ts           # Application entry point
│   ├── app.module.ts     # Root module
│   ├── app.controller.ts # REST controller
│   └── app.service.ts    # Business logic service
├── Dockerfile            # Multi-stage Docker build
├── docker-compose.yml    # Docker Compose configuration
├── .env                  # Environment variables (development)
├── .env.example          # Environment variables template
├── tsconfig.json         # TypeScript configuration
├── nest-cli.json         # NestJS CLI configuration
└── package.json          # Dependencies and scripts
```

## Prerequisites

- Node.js 18+ (for local development)
- Docker & Docker Compose (for containerized development)
- npm or yarn

## Getting Started

### Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```

3. **Run the application in development mode:**
   ```bash
   npm run start:dev
   ```

   The application will start on `http://localhost:3000`

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Run production build:**
   ```bash
   npm start
   ```

### Docker Development

1. **Start with Docker Compose:**
   ```bash
   docker-compose up
   ```

   The application will start on `http://localhost:3000` with hot-reload enabled.

2. **Build Docker image:**
   ```bash
   docker build -t commando-server:latest .
   ```

3. **Run Docker container:**
   ```bash
   docker run -p 3000:3000 --env-file .env commando-server:latest
   ```

## Available Endpoints

- `GET /` - Returns "Hello World!"
- `GET /health` - Returns application health status

### Health Check Response

```json
{
  "status": "ok",
  "timestamp": "2025-01-01T12:00:00.000Z",
  "environment": "development"
}
```

## Environment Variables

The following environment variables can be configured:

| Variable   | Default | Description                  |
| ---------- | ------- | ---------------------------- |
| `NODE_ENV` | development | Application environment      |
| `PORT`     | 3000    | Port on which app listens    |

## Scripts

- `npm run build` - Build the application for production
- `npm start` - Run production build
- `npm run start:dev` - Run in development mode with hot-reload
- `npm run start:debug` - Run in debug mode with hot-reload
- `npm test` - Run tests

## Project Features

- ✅ Multi-stage Docker build for optimized images
- ✅ Docker Compose for local development
- ✅ Environment variable management
- ✅ TypeScript support with strict mode
- ✅ RESTful API with health check endpoint
- ✅ Hot-reload in development mode
- ✅ Production-ready configuration

## Development

### Adding New Features

1. Create new modules/controllers in the `src/` directory
2. Register them in `src/app.module.ts`
3. The application will auto-reload with changes when running `npm run start:dev`

### Building for Production

The Dockerfile uses a multi-stage build process:
1. **Builder stage**: Installs all deps and builds the app
2. **Production stage**: Uses only production dependencies to minimize image size

## Troubleshooting

- **Port already in use**: Change the `PORT` in `.env` or use `docker-compose`
- **Module not found**: Run `npm install` to ensure dependencies are installed
- **Docker build failure**: Check Docker is running and you have sufficient disk space

## License

ISC

## Repository

[BIData373/commando-server](git@bidata:BIData373/commando-server.git)
