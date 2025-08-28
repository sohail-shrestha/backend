import { NextFunction, Request, Response } from 'express';
import { prisma } from './config';

const exists = async (req: Request, res: Response, next: NextFunction) => {
  const params = req.params.id;

  const task = await prisma.tasks.findFirst({
    select: {
      id: true,
    },
    where: {
      id: +params,
    },
  });

  if (task === null) {
    return res.status(404).json({ message: 'Task not found.' });
  }

  next();
};

const validateBody = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const body = req.body;
  console.debug('Body:', body);

  if (
    body.title === undefined ||
    body.color === undefined ||
    body.completed === undefined
  )
    return res
      .status(422)
      .json({ message: 'Request needs to have title, color and completed.' });

  if (typeof body.completed !== 'boolean')
    return res
      .status(422)
      .json({ message: 'Completed needs to be of type boolean.' });

  if (typeof body.title !== 'string')
    return res
      .status(422)
      .json({ message: 'Title needs to be of type string.' });

  if (typeof body.color !== 'string')
    return res
      .status(422)
      .json({ message: 'Color needs to be of type string.' });

  next();
};

export { exists, validateBody };
