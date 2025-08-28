"use server";

import { db } from "@/lib/db/drizzle";
import { posts } from "@/lib/db/schema";
import { BlogPost } from "@/types/blog";
import { eq } from "drizzle-orm";

async function getDrafts() {
  return await db.query.posts.findMany({
    where: (posts, { eq }) => eq(posts.type, "drafts"),
  });
}

async function getDraft(slug: string) {
  return await db.query.posts.findFirst({
    where: (posts, { eq }) => eq(posts.slug, slug),
  });
}
async function createDraft(blog: BlogPost) {
  const draft = await getDraft(blog.slug);
  if (!draft) await db.insert(posts).values(blog);
}

async function updateDraftContent(slug: string, html: BlogPost["content"]) {
  const h1Text = html?.match(/<h1>(.*?)<\/h1>/);
  if (!h1Text) throw Error("Document must contain a title");
  try {
    await db
      .update(posts)
      .set({ title: h1Text![1], content: html })
      .where(eq(posts.slug, slug));
  } catch (e) {
    console.error(e);
  }
}

export { getDrafts, getDraft, createDraft, updateDraftContent };
