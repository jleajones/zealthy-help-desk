import { format } from "date-fns";
import { capitalize } from "@/lib/utils";
import {
  CREATED_AT_LABEL,
  DESCRIPTION_LABEL,
  EMAIL_LABEL,
  NAME_LABEL,
} from "@/constants";

interface Props {
  name: string;
  email: string;
  description: string;
  createdAt: Date;
}
export const TaskCardContent = ({
  name,
  email,
  createdAt,
  description,
}: Props) => {
  return (
    <>
      <div className="flex space-x-3 flex-row justify-between items-center">
        <div className="flex flex-col flex-shrink">
          <span className="text-sm text-muted-foreground">
            {capitalize(NAME_LABEL)}
          </span>
          <span className="font-medium">{name}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-muted-foreground">
            {capitalize(EMAIL_LABEL)}
          </span>
          <span className="font-medium">{email}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-muted-foreground">
            {capitalize(CREATED_AT_LABEL)}
          </span>
          <span className="font-medium">{format(createdAt, "MM/dd/yyyy")}</span>
        </div>
      </div>

      <div>
        <span className="flex text-sm mb-1 text-muted-foreground">
          {capitalize(DESCRIPTION_LABEL)}
        </span>
        <p className="whitespace-break-spaces border-input border p-4 rounded-lg text-sm">
          {description}
        </p>
      </div>
    </>
  );
};
