"use client";
import { z } from "zod";
import { useTransition } from "react";
import { LoaderCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { taskSchema } from "@/schema/task";
import { submitTask } from "@/actions/task";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  DESCRIPTION_LABEL,
  DESCRIPTION_MESSAGE,
  EMAIL_LABEL,
  EMAIL_MESSAGE,
  ERROR_MSG,
  NAME_LABEL,
  NAME_MESSAGE,
  SUBITTING_TEXT,
  SUBIT_TEXT,
  SUCCESS_MSG,
} from "@/constants";

export function TaskForm() {
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof taskSchema>>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      name: "",
      email: "",
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof taskSchema>) {
    startTransition(async () => {
      try {
        await submitTask(values);
        toast.success(SUCCESS_MSG);
      } catch {
        toast.error(ERROR_MSG);
      }
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name={NAME_LABEL}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {NAME_LABEL[0].toUpperCase() + NAME_LABEL.slice(1)}
              </FormLabel>
              <FormControl>
                <Input placeholder="Jason Lea-Jones" {...field} />
              </FormControl>
              <FormDescription>{NAME_MESSAGE}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name={EMAIL_LABEL}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {EMAIL_LABEL[0].toUpperCase() + EMAIL_LABEL.slice(1)}
              </FormLabel>
              <FormControl>
                <Input placeholder="jleajones@gmail.com" {...field} />
              </FormControl>
              <FormDescription>{EMAIL_MESSAGE}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name={DESCRIPTION_LABEL}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {DESCRIPTION_LABEL[0].toUpperCase() +
                  DESCRIPTION_LABEL.slice(1)}
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Click here and start typing..."
                  {...field}
                />
              </FormControl>
              <FormDescription>{DESCRIPTION_MESSAGE}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending}>
          {isPending ? (
            <>
              <LoaderCircle className="animate-spin h-4 w-4 mr-2" />{" "}
              {SUBITTING_TEXT}
            </>
          ) : (
            <>{SUBIT_TEXT}</>
          )}
        </Button>
      </form>
    </Form>
  );
}
