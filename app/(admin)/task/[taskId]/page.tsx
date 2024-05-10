import { getTaskById } from "@/data/task";
import { notFound } from "next/navigation";
import { Back } from "./_components/back";
import { TaskCard } from "./_components/task-card";

interface Props {
  params: {
    taskId: string;
  };
}

export const dynamic = "force-dynamic";

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
