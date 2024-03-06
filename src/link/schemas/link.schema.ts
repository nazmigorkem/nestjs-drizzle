import { sql } from 'drizzle-orm';
import { date, pgTable, uuid, varchar } from 'drizzle-orm/pg-core';

export const Links = pgTable('links', {
    id: uuid('id')
        .primaryKey()
        .default(sql`gen_random_uuid()`),
    userID: uuid('user_id').notNull(),
    teamsID: uuid('teams_id').notNull(),
    url: varchar('url', { length: 255 }).notNull(),
    description: varchar('description', { length: 255 }).notNull(),
    createdAt: date('created_at')
        .notNull()
        .default(sql`CURRENT_DATE`),
    author: varchar('author', { length: 255 }).notNull(),
    title: varchar('title', { length: 255 }).notNull(),
});

export type ILinks = typeof Links.$inferSelect;
