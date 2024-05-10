"use client";
import { LayoutList, Lightbulb, Plus } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { ADMIN_PANEL_LABEL, BRAND_NAME, CREATE_ISSUE } from "@/constants";

export const Header = () => {
  const pathname = usePathname();
  return (
    <header className="flex flex-row justify-between items-center px-4 py-6 border border-b">
      <Link href="/">
        <span className="flex items-center font-medium">
          <Lightbulb className="h-6 w-6 mr-1" />
          {BRAND_NAME[0].toUpperCase() + BRAND_NAME.slice(1).toLowerCase()}
        </span>
      </Link>
      <nav>
        {pathname === "/" && (
          <Button size="sm" variant="outline" asChild>
            <Link href="/dashboard">
              <LayoutList className="h-4 w-4 mr-2" /> {ADMIN_PANEL_LABEL}
            </Link>
          </Button>
        )}
        {pathname !== "/" && (
          <Button
            size="sm"
            asChild
            className="bg-blue-200 hover:bg-blue-500 transition-all"
          >
            <Link href="/">
              <Plus className="h-4 w-4 mr-2" />{" "}
              {CREATE_ISSUE.split(" ").map((part) => {
                return `${part[0].toUpperCase()}${part.slice(1)} `;
              })}
            </Link>
          </Button>
        )}
      </nav>
    </header>
  );
};
