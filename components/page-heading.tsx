import { cn } from "@/lib/utils";

interface Props {
  heading: string;
  description: string;
  center?: boolean;
}

export const PageHeading = ({ heading, description, center }: Props) => {
  return (
    <div className={cn("py-12", center && "text-center")}>
      <h1 className="text-4xl">{heading}</h1>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};
