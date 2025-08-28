CREATE TABLE "admins" (
	"username" text PRIMARY KEY NOT NULL,
	"password" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "blogs" (
	"slug" varchar(8) PRIMARY KEY NOT NULL,
	"date" varchar(10) NOT NULL,
	"title" text DEFAULT 'Hello World' NOT NULL,
	"type" "post_type" DEFAULT 'drafts',
	"content" text
);
