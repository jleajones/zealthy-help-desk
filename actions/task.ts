"use server";
import { z } from "zod";

import { taskSchema } from "@/schema/task";
import { writeTask } from "@/data/task";

export const createTask = async (values: z.infer<typeof taskSchema>) => {
  const { error, success } = taskSchema.safeParse(values);

  if (success) {
    return await writeTask(values);
  }

  return error;
};
