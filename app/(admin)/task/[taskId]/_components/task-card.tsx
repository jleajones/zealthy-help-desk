import { StatusBadge } from "@/components/status-badge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Task, TaskStatus } from "@prisma/client";
import { format } from "date-fns";
import { EllipsisVertical, Send } from "lucide-react";
import React from "react";
import { ActionButton } from "./action-button";
import { capitalize } from "@/lib/utils";
import {
  EMAIL_LABEL,
  NAME_LABEL,
  CREATED_AT_LABEL,
  DESCRIPTION_LABEL,
  RESOLUTION_LABEL,
  SEND_LABEL,
} from "@/constants";

interface Props {
  task: Task;
}

export const TaskCard = ({ task }: Props) => {
  return (
    <Card className="p-6 container max-w-[600px] space-y-8 shadow-md">
      <div className="flex flex-col space-y-4">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col space-y-1">
            <div>
              <StatusBadge status={task.status} />
            </div>
            <Badge className="px-4">ID: {task.id}</Badge>
          </div>
          <ActionButton />
        </div>
        <div className="flex space-x-3 flex-row justify-between items-center">
          <div className="flex flex-col flex-shrink">
            <span className="text-sm text-muted-foreground">
              {capitalize(NAME_LABEL)}
            </span>
            <span className="font-medium">{task.name}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">
              {capitalize(EMAIL_LABEL)}
            </span>
            <span className="font-medium">{task.email}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">
              {capitalize(CREATED_AT_LABEL)}
            </span>
            <span className="font-medium">
              {format(task.createdAt, "MM/dd/yyyy")}
            </span>
          </div>
        </div>
        <div>
          <span className="flex text-sm mb-1 text-muted-foreground">
            {capitalize(DESCRIPTION_LABEL)}
          </span>
          <p className="whitespace-break-spaces border-input border p-4 rounded-lg text-sm">
            {task.description}
          </p>
        </div>
      </div>
      <Separator />
      <div className="flex flex-col space-y-4">
        {/* TODO: add other comments */}
        {task.status !== TaskStatus.RESOLVED && (
          <>
            <div>
              <span className="text-sm text-muted-foreground flex mb-2">
                {capitalize(RESOLUTION_LABEL)}
              </span>
              <Textarea
                placeholder="Click here and start typing..."
                className="resize-none h-[280px]"
              />
            </div>
            <Button>
              <Send className="h-4 w-4 mr-2" />
              {capitalize(SEND_LABEL)}
            </Button>
          </>
        )}
      </div>
    </Card>
  );
};
