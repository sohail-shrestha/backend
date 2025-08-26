import express from 'express';
const app = express();

app.get('/tasks', (req, res) => {
  res.send('Hello world!!!');
});

app.listen(3000, () => {});
