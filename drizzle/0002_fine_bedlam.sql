CREATE TABLE IF NOT EXISTS "link_usages" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"link_id" uuid NOT NULL,
	"user_id" uuid NOT NULL,
	"created_at" date DEFAULT CURRENT_DATE NOT NULL,
	CONSTRAINT "link_usages_link_id_unique" UNIQUE("link_id")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "link_usages" ADD CONSTRAINT "link_usages_link_id_links_id_fk" FOREIGN KEY ("link_id") REFERENCES "links"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
