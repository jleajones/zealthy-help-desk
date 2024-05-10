import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";

interface Props {
  heading: string;
  description: string;
  center?: boolean;
  slim?: boolean;
}

export const PageHeading = ({ heading, description, center, slim }: Props) => {
  return (
    <div className={cn("py-12", center && "text-center", slim && "py-6")}>
      <h1 className="text-4xl">{heading}</h1>
      <p className="text-muted-foreground text-sm">{description}</p>
      {slim && <Separator className="mt-4" />}
    </div>
  );
};
