import cors from 'cors';
import express from 'express';
import { prisma } from './config';
import controller from './controller';

const app = express();

app.use(cors());
app.use(express.json());
app.use(controller);

app.listen(3000, async () => {
  await prisma.$connect();
  console.log('Database connected');
});
