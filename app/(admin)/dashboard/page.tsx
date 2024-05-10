import { getAllTasks } from "@/data/task";

export default async function Dashboard() {
  const tasks = await getAllTasks();
  return (
    <main>
      <h1>Admin Panel</h1>
      <p>View all issues below</p>
      {tasks.map((t) => (
        <div key={t.createdAt.toDateString()}>{t.description}</div>
      ))}
    </main>
  );
}
