import { TaskStatus } from "@prisma/client";
import { Badge } from "@/components/ui/badge";
import { StatusBadge } from "@/components/status-badge";
import { ActionButton } from "./action-button";

interface Props {
  status: TaskStatus;
  id: string;
  onChange: (status: TaskStatus) => void;
}

export const TaskCardHeader = ({ status, id, onChange }: Props) => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-col space-y-1">
        <div>
          <StatusBadge status={status} />
        </div>
        <Badge className="px-4">ID: {id}</Badge>
      </div>
      <ActionButton onChange={onChange} status={status} />
    </div>
  );
};
