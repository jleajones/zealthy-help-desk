import { db } from "@/lib/conn";
import { Comment } from "@prisma/client";

export const createComment = async ({
  message,
  taskId,
}: Pick<Comment, "message" | "taskId">) => {
  return db.comment.create({
    data: {
      message,
      taskId,
    },
  });
};
