import { TaskForm } from "@/components/task-form";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col container max-w-2xl">
        <div className="text-center py-12">
          <h1 className="text-4xl">Submit a ticket</h1>
          <p className="text-muted-foreground">
            Use the form below to file an issue
          </p>
        </div>
        <div className="flex-grow">
          <TaskForm />
        </div>
      </div>
    </main>
  );
}
