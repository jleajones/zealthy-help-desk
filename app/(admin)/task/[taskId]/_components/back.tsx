"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

import { BACK_LABEL } from "@/constants";
import { capitalize } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export const Back = () => {
  const router = useRouter();

  const onClick = () => {
    router.back();
  };

  return (
    <Button variant="ghost" onClick={onClick}>
      <ArrowLeft className="h-4 w-4 mr-2" />
      {capitalize(BACK_LABEL)}
    </Button>
  );
};
