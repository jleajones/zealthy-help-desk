"use server";
import { z } from "zod";

import { taskSchema } from "@/schema/task";
import { createTask, updateTaskStatus } from "@/data/task";
import { Task, Comment, TaskStatus } from "@prisma/client";

export const submitTask = async (values: z.infer<typeof taskSchema>) => {
  const { error, success } = taskSchema.safeParse(values);

  if (success) {
    try {
      const task = await createTask(values);
      console.log(
        `send email to ${task.email}: Your issue has been logged:`,
        task
      );
      return task;
    } catch (error) {
      return error;
    }
  }

  return error;
};

export const changeTaskStatus = async (
  task: Task & { comments: Comment[] }
) => {
  if (task.comments.length === 0 && task.status === TaskStatus.RESOLVED)
    throw new Error("Please add resolution before resolving this issue");

  try {
    const newTask = await updateTaskStatus(task);
    console.log(
      `send email to ${task.email}: Your issue status has been updated:`,
      newTask
    );
    return newTask;
  } catch (error) {
    return error;
  }
};
