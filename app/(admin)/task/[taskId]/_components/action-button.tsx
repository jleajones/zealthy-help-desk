import { Check, EllipsisVertical, Hourglass } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TaskStatus } from "@prisma/client";

interface Props {
  onChange: (status: TaskStatus) => void;
  status: TaskStatus;
}

export const ActionButton = ({ onChange, status }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger disabled={status === TaskStatus.RESOLVED} asChild>
        <Button variant="ghost" size="icon">
          <EllipsisVertical className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Update Status</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {status === TaskStatus.NEW && (
          <DropdownMenuItem
            onClick={() => {
              onChange(TaskStatus.IN_PROGRESS);
            }}
          >
            <Hourglass className="h-4 w-4 mr-2" />
            In Progress
          </DropdownMenuItem>
        )}
        {status === TaskStatus.IN_PROGRESS && (
          <DropdownMenuItem
            onClick={() => {
              onChange(TaskStatus.RESOLVED);
            }}
          >
            <Check className="h-4 w-4 mr-2" />
            Resolve
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
