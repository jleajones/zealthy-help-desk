import { z } from "zod";
import { DESCRIPTION_ERROR, EMAIL_ERROR, NAME_ERROR } from "@/constants";

export const taskSchema = z.object({
  name: z.string().min(1, NAME_ERROR),
  email: z.string().email(EMAIL_ERROR),
  description: z.string().min(20, DESCRIPTION_ERROR),
});
