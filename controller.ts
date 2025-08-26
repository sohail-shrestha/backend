import express from 'express';

const router = express.Router();

router.get('/tasks', (req, res) => {});

router.post('/tasks', (req, res) => {});

router.put('tasks/:id', (req, res) => {
  req.params.id = '';
});

router.delete('tasks/:id', (req, res) => {
  req.params.id;
});
