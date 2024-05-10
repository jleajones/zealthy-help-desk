"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { LayoutList, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

export const Header = () => {
  const pathname = usePathname();
  return (
    <header className="flex flex-row justify-between items-center px-4 py-6 border border-b">
      <span>Helpdesk</span>
      <nav>
        {pathname === "/" && (
          <Button size="sm" variant="outline" asChild>
            <Link href="/dashboard">
              <LayoutList className="h-4 w-4 mr-2" /> Admin Panel
            </Link>
          </Button>
        )}
        {pathname !== "/" && (
          <Button size="sm" asChild>
            <Link href="/">
              <Plus className="h-4 w-4 mr-2" /> Create Issue
            </Link>
          </Button>
        )}
      </nav>
    </header>
  );
};
