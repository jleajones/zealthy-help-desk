import { PageHeading } from "@/components/page-heading";
import { getAllTasks } from "@/data/task";

export default async function Dashboard() {
  const tasks = await getAllTasks();
  return (
    <main>
      <div className="flex flex-col px-4">
        <PageHeading heading="Dashboard" description="View all issues below" />

        {tasks.map((t) => (
          <div key={t.createdAt.toDateString()}>{t.description}</div>
        ))}
      </div>
    </main>
  );
}
