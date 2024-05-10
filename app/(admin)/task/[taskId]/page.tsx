import { getTaskById } from "@/data/task";
import { notFound } from "next/navigation";
import { Back } from "./_components/back";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { EllipsisVertical, Send } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { StatusBadge } from "@/components/status-badge";
import { TaskStatus } from "@prisma/client";
import { TaskCard } from "./_components/task-card";

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
        <TaskCard task={task} />
      </div>
    </main>
  );
}
