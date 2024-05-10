interface Props {
  params: {
    taskId: string;
  };
}
export default function TaskDetailPage({ params }: Props) {
  return <div>{params.taskId}</div>;
}
