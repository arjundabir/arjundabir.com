ALTER TABLE "blogs" ALTER COLUMN "type" SET DATA TYPE "public"."type";--> statement-breakpoint
ALTER TABLE "blogs" ALTER COLUMN "type" SET DEFAULT 'drafts';--> statement-breakpoint
ALTER TABLE "blogs" ALTER COLUMN "type" DROP NOT NULL;