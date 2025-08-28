FROM node:23.6.0-alpine

WORKDIR /app
RUN npm install --global corepack@latest && corepack enable pnpm
COPY . .
RUN pnpm install && pnpm prisma generate
EXPOSE 3000
CMD ["pnpm", "start"]





