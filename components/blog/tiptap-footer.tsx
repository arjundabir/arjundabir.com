"use client";

import { Loader2Icon } from "lucide-react";
import { useTiptap } from "./tiptap-wrapper";
import { Button } from "../ui/button";
import Link from "next/link";
import { publishDraft } from "@/app/actions";
import { BlogPost } from "@/types/blog";
import { useRouter } from "next/navigation";

export default function TiptapFooter({
  draft,
}: {
  draft: BlogPost | undefined;
}) {
  const { loading } = useTiptap();
  const router = useRouter();
  return (
    <footer className="container mx-auto max-w-3xl flex justify-between items-center gap-1">
      <div
        data-visible={loading}
        className="flex gap-1 items-center text-muted-foreground min-w-0 transition-opacity invisible data-[visible=true]:visible"
      >
        <Loader2Icon className="size-4 animate-spin" />
        <p className="text-sm">Saving</p>
      </div>
      <div className="flex gap-1">
        <Button variant={"secondary"} asChild>
          <Link href={"/blog/drafts"} className="hover:no-underline">
            See Drafts
          </Link>
        </Button>
        <Button
          onClick={() => {
            if (draft) {
              publishDraft(draft?.slug);
            }
            router.push("/blog");
          }}
        >
          Publish
        </Button>
      </div>
    </footer>
  );
}
