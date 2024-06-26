import { db } from "@/lib/conn";
import { Task, TaskStatus } from "@prisma/client";

export const createTask = async ({
  name,
  email,
  description,
}: Pick<Task, "name" | "email" | "description">) => {
  return await db.task.create({
    data: {
      name,
      email,
      description,
      status: TaskStatus.NEW,
    },
  });
};

export const updateTaskStatus = async (task: Task) => {
  return await db.task.update({
    data: {
      status: task.status,
    },
    where: {
      id: task.id,
    },
  });
};

export const getAllTasks = async () => {
  return await db.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const getTaskById = async (id: string) => {
  return await db.task.findUnique({
    where: {
      id,
    },
    include: {
      comments: {
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });
};
