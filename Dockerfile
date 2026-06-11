# Build stage
FROM --platform=linux/amd64 node:22 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run prisma:client:generate --env=production

RUN npm run build

# Production stage
FROM --platform=linux/amd64 node:22 AS builder

WORKDIR /app

ENV NODE_ENV=production

COPY package*.json ./

RUN npm ci --only=production

COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/main.js"]
