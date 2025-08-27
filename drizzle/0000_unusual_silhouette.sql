CREATE TABLE "blogs" (
	"slug" varchar(32) PRIMARY KEY NOT NULL,
	"date" varchar(8) NOT NULL,
	"title" text DEFAULT 'Hello World' NOT NULL,
	"type" text DEFAULT 'drafts' NOT NULL,
	"content" jsonb
);
