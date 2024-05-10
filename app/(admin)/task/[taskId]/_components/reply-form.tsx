"use client";
import { z } from "zod";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { commentSchema } from "@/schema/comment";
import { submitComment } from "@/actions/comment";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

import { ERROR_MSG, REPLY_LABEL, UPDATE_SUCCESS_MSG } from "@/constants";
import { capitalize } from "@/lib/utils";
import { ReplyFormButton } from "./reply-form-button";
import { useParams, useRouter } from "next/navigation";

export function ReplyForm() {
  const { taskId } = useParams<{ taskId: string }>();
  const route = useRouter();

  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof commentSchema>>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof commentSchema>) {
    startTransition(async () => {
      try {
        await submitComment(values, taskId);
        form.reset();
        route.refresh();
        toast.success(UPDATE_SUCCESS_MSG);
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
          name={"message"}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-muted-foreground">
                {capitalize(REPLY_LABEL)}
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Click here and start typing..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <ReplyFormButton isDisabled={isPending} />
      </form>
    </Form>
  );
}
