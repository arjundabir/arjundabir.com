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
import { BookmarkCheckIcon, BookmarkMinusIcon, TrashIcon } from "lucide-react";
import { Button } from "../ui/button";
import { deleteDraft, switchDraftType } from "@/app/actions";
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
          <TableRow
            key={post.slug}
            className="group grid grid-cols-[min-content_1fr_min-content]"
          >
            <TableCell className="py-2 pr-4 whitespace-nowrap">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </TableCell>
            <TableCell className="truncate">
              <Link
                href={`/blog${post.type === "drafts" ? "/drafts" : ""}/${
                  post.slug
                }`}
                className="group-hover:underline"
              >
                {post.title}
              </Link>
            </TableCell>
            <TableCell className="whitespace-nowrap flex items-center invisible group-hover:visible">
              <Button
                variant={"ghost"}
                size={"icon"}
                className="h-full w-auto hover:text-destructive"
                onClick={async () => {
                  await deleteDraft(post.slug);
                  router.refresh();
                }}
              >
                <TrashIcon />
              </Button>
              <Button
                data-type={post.type}
                variant={"ghost"}
                size={"icon"}
                className="h-full w-auto data-[type='drafts']:hover:text-green-500 data-[type='published']:hover:text-destructive"
                onClick={async () => {
                  await switchDraftType(post.slug);
                  router.refresh();
                }}
              >
                {post.type === "drafts" ? (
                  <BookmarkCheckIcon />
                ) : (
                  <BookmarkMinusIcon />
                )}
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
