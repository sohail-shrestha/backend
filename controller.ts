import express from 'express';
import { prisma } from './config';
import { exists, validateBody } from './validation';

const router = express.Router();

router.get('/tasks', async (req, res) => {
  const tasks = await prisma.tasks.findMany();
  return res.json(tasks);
});

router.post('/tasks', validateBody, async (req, res) => {
  const { title, color, completed } = req.body;
  const created = await prisma.tasks.create({
    data: {
      title,
      color,
      completed,
    },
  });

  res.json(created);
});

router.put('/tasks/:id', exists, validateBody, async (req, res) => {
  const id = req.params.id;
  const { title, color, completed } = req.body;

  const updated = await prisma.tasks.update({
    where: {
      id: +id,
    },
    data: {
      title,
      color,
      completed,
    },
  });

  return res.json(updated);
});

router.delete('/tasks/:id', exists, async (req, res) => {
  const id = req.params.id;
  const deleted = await prisma.tasks.delete({
    where: {
      id: +id,
    },
  });

  return res.json({ message: 'Task deleted', task: deleted });
});

export default router;
