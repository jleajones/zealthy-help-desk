import { TaskStatus } from "@prisma/client";
import { Badge } from "./ui/badge";

interface Props {
  status: TaskStatus;
}

export const StatusBadge = ({ status }: Props) => {
  return (
    <Badge
      className={
        status === TaskStatus.NEW
          ? "bg-slate-500 hover:bg-slate-400"
          : status === TaskStatus.IN_PROGRESS
          ? "bg-green-500 hover:bg-green-500"
          : "bg-purple-600 hover:bg-purple-400"
      }
    >
      {status.replace("_", " ")}
    </Badge>
  );
};
