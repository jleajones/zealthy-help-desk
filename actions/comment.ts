"use server";
import { z } from "zod";

import { createComment } from "@/data/comment";
import { commentSchema } from "@/schema/comment";

export const submitComment = async (
  values: z.infer<typeof commentSchema>,
  taskId: string
) => {
  const { error, success } = commentSchema.safeParse(values);

  if (success) {
    return await createComment({ ...values, taskId });
  }

  return error;
};
