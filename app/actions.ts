"use server";

import { db } from "@/lib/db/drizzle";
import { posts } from "@/lib/db/schema";
import { BlogPost } from "@/types/blog";
import { eq } from "drizzle-orm";
import { z } from "zod";
import bcrypt from "bcrypt";
import { createSession } from "@/lib/admin/session";
import { redirect } from "next/navigation";

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

async function switchDraftType(slug: BlogPost["slug"]) {
  const post = await db.query.posts.findFirst({
    where: (posts, { eq }) => eq(posts.slug, slug),
  });
  if (!post) throw new Error("Post not found");
  const newType = post.type === "drafts" ? "published" : "drafts";
  await db.update(posts).set({ type: newType }).where(eq(posts.slug, slug));
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

// admin

const adminFormSchema = z.object({
  username: z.string(),
  password: z.string(),
});

async function verifyAdmin(form: FormData) {
  const validatedFields = adminFormSchema.safeParse({
    username: form.get("username"),
    password: form.get("password"),
  });

  if (!validatedFields.success) throw new Error("error during login");

  const { username, password } = validatedFields.data;

  const admin = await db.query.admins.findFirst({
    where: (admin, { eq }) => eq(admin.username, username),
  });

  if (!admin) throw new Error("admin verification failed");

  const passwordMatch = await bcrypt.compare(password, admin.password);
  if (!passwordMatch) throw new Error("admin verification failed");

  await createSession(admin.username);
  redirect("/");
}

export {
  getPosts,
  getPost,
  createDraft,
  deleteDraft,
  switchDraftType,
  updateDraftContent,
  verifyAdmin,
};
