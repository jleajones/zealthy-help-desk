import { LoaderCircle, Send } from "lucide-react";
import { SEND_TEXT, SENDING_TEXT } from "@/constants";
import { capitalize } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface Props {
  isDisabled: boolean;
}

export const ReplyFormButton = ({ isDisabled }: Props) => {
  return (
    <Button type="submit" disabled={isDisabled} className="w-full">
      {isDisabled ? (
        <>
          <LoaderCircle className="animate-spin h-4 w-4 mr-2" />{" "}
          {capitalize(SENDING_TEXT)}
        </>
      ) : (
        <>
          <Send className="w-4 h-4 mr-2" />
          {capitalize(SEND_TEXT)}
        </>
      )}
    </Button>
  );
};
