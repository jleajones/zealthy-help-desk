"use server";
import { z } from "zod";

import { taskSchema } from "@/schema/task";

export const createTask = async (values: z.infer<typeof taskSchema>) => {
  const validatePayload = taskSchema.safeParse(values);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (validatePayload.error) reject();

      if (validatePayload.success) resolve({ name: "this is the return task" });
    }, 3000);
  });
};
