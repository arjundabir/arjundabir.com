"use client";

import { BlogPost } from "@/types/blog";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../ui/table";
import Link from "next/link";
import { BookmarkCheckIcon, TrashIcon } from "lucide-react";
import { Button } from "../ui/button";
import { deleteDraft, publishDraft } from "@/app/actions";
import { useRouter } from "next/navigation";

export default function DraftsTable({ drafts }: { drafts: BlogPost[] }) {
  const router = useRouter();

  return (
    <Table>
      <TableHeader className="sr-only">
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Title</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {drafts.map((post) => (
          <TableRow key={post.slug} className="group">
            <TableCell className="py-2 pr-4 align-top w-32">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </TableCell>
            <TableCell>
              <Link
                href={`/blog/drafts/${post.slug}`}
                className="group-hover:underline"
              >
                {post.title}
              </Link>
            </TableCell>
            <TableCell className="hidden justify-end group-hover:flex">
              <Button
                variant={"ghost"}
                size={"icon"}
                className="h-full w-auto hover:text-destructive"
                onClick={() => {
                  deleteDraft(post.slug);
                  router.refresh();
                }}
              >
                <TrashIcon />
              </Button>
              <Button
                variant={"ghost"}
                size={"icon"}
                className="h-full w-auto hover:text-green-500"
                onClick={() => {
                  publishDraft(post.slug);
                  router.refresh();
                }}
              >
                <BookmarkCheckIcon className="" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
