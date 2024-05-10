"use server";
import { z } from "zod";

import { taskSchema } from "@/schema/task";
import { createTask } from "@/data/task";

export const submitTask = async (values: z.infer<typeof taskSchema>) => {
  const { error, success } = taskSchema.safeParse(values);

  if (success) {
    return await createTask(values);
  }

  return error;
};
