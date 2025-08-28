## Description
API to perform CRUD operations on Tasks

## Requirements
- Docker
- Node v23.6.0

## Instructions for setup.
You can setup the project in two ways, one with docker and one without. 

## Setting up database
You can setup mysql with docker running the command `docker compose up -d mysql` 

## Envorinment variable
Create a `.env` file with environment variable `DATABASE_URL="mysql://root:root@localhost:3306/nooro"`
DATABASE_URL is based on the database we'd set up in docker in the previous step. 


## Setting up project with docker:
1. Make sure docker is installed on your system along with docker compose.
2. `docker compose up -d` should get the entire project running.

## Setting up project locally.
1. Run `npm install -g corepack@latest`
2. Enable corepack `corepack enable pnpm`
3. Setup pnpm `corepack use pnpm@latest-10`
4. Install dependency `pnpm install`
5. Generate repository for prisma entity  `pnpm prisma generate`
6. Create tables on database `pnpm prisma migrate dev`
7. Run the project `pnpm tsx entrypoint.ts`



