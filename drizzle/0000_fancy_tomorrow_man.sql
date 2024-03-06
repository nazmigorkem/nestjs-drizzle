CREATE TABLE IF NOT EXISTS "links" (
	"id" uuid PRIMARY KEY NOT NULL,
	"user_id" uuid NOT NULL,
	"teams_id" uuid NOT NULL,
	"url" varchar(255) NOT NULL,
	"description" varchar(255) NOT NULL,
	"created_at" date DEFAULT CURRENT_DATE NOT NULL,
	"author" varchar(255) NOT NULL,
	"title" varchar(255) NOT NULL
);
