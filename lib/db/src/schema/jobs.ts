import { pgTable, text, serial, timestamp, boolean } from "drizzle-orm/pg-core";

export const jobsTable = pgTable("jobs", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  jobType: text("job_type").notNull(),
  description: text("description").notNull(),
  requirements: text("requirements"),
  budget: text("budget"),
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export type Job = typeof jobsTable.$inferSelect;
