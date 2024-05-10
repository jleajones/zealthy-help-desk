"use client";
import { format } from "date-fns";

import * as z from "zod";
import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";

import { taskSchema } from "@/schema/task";
import { DataTableColumnHeader } from "./data-table-column-header";
import { TaskStatus } from "@prisma/client";

export const columns: ColumnDef<z.infer<typeof taskSchema>>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Task" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px] truncate">{row.getValue("id")}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    accessorFn: (row) => `${row.name} - ${row.email}`,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Reporter" />
    ),
    cell: ({ row }) => {
      return (
        <div className="w-[280px] flex flex-shrink-0 truncate font-medium">
          {row.getValue("name")}
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return (
        <div className="flex flex-shrink-0 w-[120px]">
          <Badge
            className={
              status === TaskStatus.NEW
                ? "bg-slate-500 hover:bg-slate-400"
                : status === TaskStatus.IN_PROGRESS
                ? "bg-green-500 hover:bg-green-500"
                : "bg-purple-600 hover:bg-purple-400"
            }
          >
            {status.replace("_", " ")}
          </Badge>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "description",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Description" />
    ),
    cell: ({ row }) => {
      return (
        <div className="max-w-[200px] lg:max-w-[300px] xl:max-w-[500px] truncate">
          {row.getValue("description")}
        </div>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Created" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-center">
          <span>{format(row.getValue("createdAt"), "L/MM/u")}</span>
        </div>
      );
    },
  },
];
