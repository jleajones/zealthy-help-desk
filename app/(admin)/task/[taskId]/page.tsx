import { getTaskById } from "@/data/task";
import { notFound } from "next/navigation";

interface Props {
  params: {
    taskId: string;
  };
}
export default async function TaskDetailPage({ params }: Props) {
  const task = await getTaskById(params.taskId);

  if (!task) notFound();

  return (
    <div>
      {task.id}
      {task.name}
      {task.email}
      {task.description}
      {task.status}
    </div>
  );
}
