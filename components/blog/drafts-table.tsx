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

export default function DraftsTable({ drafts }: { drafts: BlogPost[] }) {
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
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
