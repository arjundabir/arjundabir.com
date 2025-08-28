import { posts } from "@/lib/db/schema";

type BlogPost = typeof posts.$inferInsert;

export type { BlogPost };
