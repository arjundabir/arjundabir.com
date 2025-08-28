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

async function updateDraftContent(slug: string, content: BlogPost["content"]) {
  try {
    await db
      .update(posts)
      .set({ content: content })
      .where(eq(posts.slug, slug));
  } catch (e) {
    console.error(e);
  }
}

export { getDrafts, getDraft, createDraft, updateDraftContent };
