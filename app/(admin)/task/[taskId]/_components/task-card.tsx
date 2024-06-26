"use client";
import { Comment, Task, TaskStatus } from "@prisma/client";
import { formatDistance } from "date-fns";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ReplyForm } from "./reply-form";
import { TaskCardContent } from "./task-card-content";
import { TaskCardHeader } from "./task-card-header";
import { useTransition } from "react";
import { changeTaskStatus } from "@/actions/task";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { ERROR_MSG, UPDATE_SUCCESS_MSG } from "@/constants";

type TaskWithComments = Task & {
  comments: Comment[];
};

interface Props {
  task: TaskWithComments;
}

export const TaskCard = ({ task }: Props) => {
  const [isPending, startTransition] = useTransition();
  const route = useRouter();
  const onChange = (newStatus: TaskStatus) => {
    startTransition(async () => {
      try {
        await changeTaskStatus({ ...task, status: newStatus });
        route.refresh();
        toast.success(UPDATE_SUCCESS_MSG);
      } catch (error: any) {
        toast.error(error);
      }
    });
  };
  return (
    <Card className="p-6 container max-w-[600px] space-y-8 shadow-md">
      <div className="flex flex-col space-y-4">
        <TaskCardHeader id={task.id} status={task.status} onChange={onChange} />
        <TaskCardContent
          name={task.name}
          email={task.email}
          description={task.description}
          createdAt={task.createdAt}
        />
      </div>
      <Separator />
      <div className="flex flex-col space-y-6">
        {task.comments.map((comment) => {
          return (
            <div key={comment.id}>
              <p className="flex items-end space-x-2">
                <span className="text-xs font-bold">Admin </span>
                <span className="text-xs text-muted-foreground">
                  {formatDistance(comment.createdAt, new Date(), {
                    addSuffix: true,
                  })}
                </span>{" "}
              </p>
              <p className="text-sm">{comment.message}</p>
            </div>
          );
        })}
        {task.status !== TaskStatus.RESOLVED && <ReplyForm />}
      </div>
    </Card>
  );
};
