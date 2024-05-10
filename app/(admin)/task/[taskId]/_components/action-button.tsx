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

export const ActionButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <EllipsisVertical className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Set Status</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Hourglass className="h-4 w-4 mr-2" />
          In Progress
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Check className="h-4 w-4 mr-2" />
          Resolved
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
