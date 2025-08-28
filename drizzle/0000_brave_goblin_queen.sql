CREATE TABLE "blogs" (
	"slug" varchar(8) PRIMARY KEY NOT NULL,
	"date" varchar(10) NOT NULL,
	"title" text DEFAULT 'Hello World' NOT NULL,
	"type" text DEFAULT 'drafts' NOT NULL,
	"content" jsonb
);
