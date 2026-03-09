# Build stage
FROM node:22 AS builder

WORKDIR /app

COPY ../dist ./dist

EXPOSE 3000

CMD ["node", "dist/main.js"]
