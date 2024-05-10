"use server";
import { z } from "zod";

import { taskSchema } from "@/schema/task";

export const createTask = async (values: z.infer<typeof taskSchema>) => {
  console.log("values", values);

  return {};
};
