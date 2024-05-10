import { TaskForm } from "@/components/task-form";

export default function Home() {
  return (
    <main>
      <h1>Submit a ticket</h1>
      <p>Use the form below to file an issue</p>
      <TaskForm />
    </main>
  );
}
