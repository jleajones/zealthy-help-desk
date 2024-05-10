import { z } from "zod";
import { DESCRIPTION_ERROR } from "@/constants";

export const commentSchema = z.object({
  message: z.string().min(20, DESCRIPTION_ERROR),
});
