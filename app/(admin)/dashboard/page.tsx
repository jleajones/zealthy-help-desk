import { PageHeading } from "@/components/page-heading";
import { getAllTasks } from "@/data/task";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import { DASHBOARD_DESCRIPTION, DASHBOARD_TITLE } from "@/constants";

export const dynamic = "force-dynamic";

export default async function Dashboard() {
  const tasks = await getAllTasks();
  return (
    <main>
      <div className="flex flex-col px-4 pb-24">
        <PageHeading
          heading={DASHBOARD_TITLE}
          description={DASHBOARD_DESCRIPTION}
          slim
        />
        <DataTable columns={columns} data={tasks} />
      </div>
    </main>
  );
}
