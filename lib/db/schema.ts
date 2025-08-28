import { pgTable, varchar, text, pgEnum } from "drizzle-orm/pg-core";

const postTypeEnum = pgEnum("type", ["drafts", "published"]);

export const posts = pgTable("blogs", {
  slug: varchar({ length: "YYYYMMDD".length }).primaryKey(),
  date: varchar({ length: "YYYY-MM-DD".length }).notNull(),
  title: text().notNull().default("Hello World"),
  type: postTypeEnum("type").notNull().default("drafts"),
  content: text(),
});
