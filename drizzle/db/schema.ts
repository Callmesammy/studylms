import { integer, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("companion", {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity().unique(),
  icon: varchar('icon').notNull(),
name: varchar('name').notNull(),
topic: varchar('topic').notNull(),
time: integer('time').notNull(),
course: varchar('course').notNull(),
style: varchar('style').notNull(),
createdAt: timestamp('createdAT', {
    mode: 'date',
    withTimezone: true,
}).defaultNow(),


});
