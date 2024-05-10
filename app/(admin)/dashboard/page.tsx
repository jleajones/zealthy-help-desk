import { PageHeading } from "@/components/page-heading";
import { getAllTasks } from "@/data/task";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";

export default async function Dashboard() {
  const tasks = await getAllTasks();
  return (
    <main>
      <div className="flex flex-col px-4 pb-24">
        <PageHeading
          heading="Dashboard"
          description="View all issues below"
          slim
        />
        <DataTable columns={columns} data={tasks} />
      </div>
    </main>
  );
}
