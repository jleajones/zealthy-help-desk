"use server";
import { z } from "zod";

import { createComment } from "@/data/comment";
import { commentSchema } from "@/schema/comment";
import { getTaskById } from "@/data/task";

export const submitComment = async (
  values: z.infer<typeof commentSchema>,
  taskId: string
) => {
  const task = await getTaskById(taskId);

  if (!task) {
    throw Error("Task not found");
  }

  const { error, success } = commentSchema.safeParse(values);

  if (success) {
    try {
      const comment = await createComment({ ...values, taskId });
      console.log(
        `send email to ${task.email}: A comment has been added to your issue.`,
        comment
      );

      return comment;
    } catch (error) {
      return error;
    }
  }

  return error;
};
