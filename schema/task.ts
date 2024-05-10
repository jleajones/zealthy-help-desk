import { z } from "zod";

export const taskSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("A valid email address is required"),
  description: z.string().min(20, "More details are required."),
});
