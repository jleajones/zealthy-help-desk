"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { LayoutList, Lightbulb, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

export const Header = () => {
  const pathname = usePathname();
  return (
    <header className="flex flex-row justify-between items-center px-4 py-6 border border-b">
      <Link href="/">
        <span className="flex items-center font-medium">
          <Lightbulb className="h-6 w-6 mr-1" />
          Helpdesk
        </span>
      </Link>
      <nav>
        {pathname === "/" && (
          <Button size="sm" variant="outline" asChild>
            <Link href="/dashboard">
              <LayoutList className="h-4 w-4 mr-2" /> Admin Panel
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
              <Plus className="h-4 w-4 mr-2" /> Create Issue
            </Link>
          </Button>
        )}
      </nav>
    </header>
  );
};
