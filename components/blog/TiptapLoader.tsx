"use client";

import { Loader2Icon } from "lucide-react";
import { useTiptap } from "./TiptapWrapper";

export default function TiptapLoader() {
  const { loading } = useTiptap();
  return (
    <div
      data-visible={loading}
      className="flex gap-1 items-center text-muted-foreground min-w-0 transition-opacity invisible data-[visible=true]:visible"
    >
      <Loader2Icon className="size-4 animate-spin" />
      <p className="text-sm">Saving</p>
    </div>
  );
}
