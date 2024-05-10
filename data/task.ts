import { db } from "@/lib/conn";
import { Task, TaskStatus } from "@prisma/client";

export const writeTask = async ({
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
