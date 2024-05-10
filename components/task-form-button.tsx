import { LoaderCircle } from "lucide-react";
import { Button } from "./ui/button";
import { SUBITTING_TEXT, SUBIT_TEXT } from "@/constants";
import { capitalize } from "@/lib/utils";

interface Props {
  isDisabled: boolean;
}

export const TaskFormButton = ({ isDisabled }: Props) => {
  return (
    <Button type="submit" disabled={isDisabled}>
      {isDisabled ? (
        <>
          <LoaderCircle className="animate-spin h-4 w-4 mr-2" />{" "}
          {capitalize(SUBITTING_TEXT)}
        </>
      ) : (
        <>{capitalize(SUBIT_TEXT)}</>
      )}
    </Button>
  );
};
