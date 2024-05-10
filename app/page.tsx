import { PageHeading } from "@/components/page-heading";
import { TaskForm } from "@/components/task-form";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col container max-w-2xl">
        <PageHeading
          heading="Submit a ticket"
          description="Use the form below to file an issue"
          center
        />
        <div className="flex-grow">
          <TaskForm />
        </div>
      </div>
    </main>
  );
}
