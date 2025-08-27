import { pgTable, varchar, text, jsonb } from "drizzle-orm/pg-core";

export const posts = pgTable("blogs", {
  slug: varchar({ length: 32 }).primaryKey(),
  date: varchar({ length: 8 }).notNull(),
  title: text().notNull().default("Hello World"),
  type: text().notNull().default("drafts"),
  content: jsonb("content"),
});
