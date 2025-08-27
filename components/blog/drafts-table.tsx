"use client";

import { useEffect, useState } from "react";
import { BLOG_ARRAY_KEY } from "./tiptap-wrapper";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../ui/table";
import Link from "next/link";
import { BlogPost } from "@/types/blog";

export default function DraftsTable() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  useEffect(() => {
    const blogKeys = localStorage.getItem(BLOG_ARRAY_KEY);
    if (blogKeys) {
      const blogKeysList = JSON.parse(blogKeys) as string[];
      const blogs = blogKeysList.map((blogKey) => {
        const blog = JSON.parse(localStorage.getItem(blogKey) || "{}");
        const slug = blogKey.split(":").at(-1) as string;
        console.log(slug);

        const year = slug.slice(4, 8);
        const month = slug.slice(0, 2);
        const day = slug.slice(2, 4);
        const date = `${year}-${month}-${day}`;

        const title = (blog.content?.[0]?.content?.[0]?.text as string) ?? "";
        return {
          title,
          date,
          slug,
        };
      });
      setPosts(blogs);
    }
  }, []);
  return (
    <Table>
      <TableHeader className="sr-only">
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Title</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {posts.map((post) => (
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
                href={`/blog/${post.slug}`}
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
