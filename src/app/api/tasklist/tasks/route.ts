import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
  if (req.method === 'GET') {
    const tasks = await prisma.task.findMany();
    res.status(200).json(tasks);
  } else if (req.method === 'POST') {
    const { title } = req.body;
    const newTask = await prisma.task.create({
      data: { title },
    });
    res.status(201).json(newTask);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
