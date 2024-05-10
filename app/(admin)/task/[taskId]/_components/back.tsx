"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export const Back = () => {
  const router = useRouter();

  const onClick = () => {
    router.back();
  };
  return (
    <Button variant="ghost" onClick={onClick}>
      <ArrowLeft className="h-4 w-4 mr-2" />
      Back
    </Button>
  );
};
