"use server";
import { taskSchema } from "@/schema/task";
import * as z from "zod";

export const createTask = async (values: z.infer<typeof taskSchema>) => {
  console.log("values", values);

  return {};
};
