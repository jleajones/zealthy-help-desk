import { getTaskById } from "@/data/task";
import { notFound } from "next/navigation";
import { Back } from "./_components/back";
import { PageHeading } from "@/components/page-heading";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { EllipsisVertical, Send } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { StatusBadge } from "@/components/status-badge";

interface Props {
  params: {
    taskId: string;
  };
}
export default async function TaskDetailPage({ params }: Props) {
  const task = await getTaskById(params.taskId);

  if (!task) notFound();

  return (
    <main>
      <div className="flex flex-col px-4 pb-24 mt-4">
        <div>
          <Back />
        </div>
        <Card className="p-6 container max-w-[600px] space-y-8 shadow-md">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row space-x-2">
                <StatusBadge status={task.status} />
                <Badge className="px-4">ID: {task.id}</Badge>
              </div>
              <Button variant="ghost" size="icon">
                <EllipsisVertical className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex space-x-3 flex-row justify-between items-center">
              <div className="flex flex-col flex-shrink">
                <span className="text-sm text-muted-foreground">Name</span>
                <span className="font-medium">{task.name}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground">Email</span>
                <span className="font-medium">{task.email}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground">Created</span>
                <span className="font-medium">
                  {format(task.createdAt, "MM/dd/yyyy")}
                </span>
              </div>
            </div>
            <div>
              <span className="flex text-sm mb-1 text-muted-foreground">
                Description
              </span>
              <p className="whitespace-break-spaces border-input border p-4 rounded-lg text-sm">
                {task.description}
              </p>
            </div>
          </div>
          <Separator />
          <div className="flex flex-col space-y-4">
            <div>
              <span className="text-sm text-muted-foreground flex mb-2">
                Resolution
              </span>
              <Textarea
                placeholder="Click here and start typing..."
                className="resize-none h-[280px]"
              />
            </div>
            <Button>
              <Send className="h-4 w-4 mr-2" />
              Send
            </Button>
          </div>
        </Card>
      </div>
    </main>
  );
}
