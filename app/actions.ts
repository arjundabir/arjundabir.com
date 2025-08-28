"use server";

import { db } from "@/lib/db/drizzle";
import { posts } from "@/lib/db/schema";
import { BlogPost } from "@/types/blog";
import { eq } from "drizzle-orm";

// blogs

async function getPosts(type: BlogPost["type"]) {
  return await db.query.posts.findMany({
    where: (posts, { eq }) => eq(posts.type, type!),
  });
}

async function getPost(slug: BlogPost["slug"], type: BlogPost["type"]) {
  return await db.query.posts.findFirst({
    where: (posts, { eq, and }) =>
      and(eq(posts.slug, slug), eq(posts.type, type!)),
  });
}
async function createDraft(blog: BlogPost) {
  const draft = await getPost(blog.slug, blog.type);
  if (!draft) await db.insert(posts).values(blog);
}

async function deleteDraft(slug: BlogPost["slug"]) {
  await db.delete(posts).where(eq(posts.slug, slug));
}

async function publishDraft(slug: BlogPost["slug"]) {
  await db.update(posts).set({ type: "published" }).where(eq(posts.slug, slug));
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

export {
  getPosts,
  getPost,
  createDraft,
  deleteDraft,
  publishDraft,
  updateDraftContent,
};
