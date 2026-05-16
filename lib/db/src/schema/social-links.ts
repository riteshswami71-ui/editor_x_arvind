import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const socialLinksTable = pgTable("social_links", {
  id: serial("id").primaryKey(),
  youtube: text("youtube"),
  instagram: text("instagram"),
  whatsapp: text("whatsapp"),
  telegram: text("telegram"),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow().$onUpdate(() => new Date()),
});

export const insertSocialLinksSchema = createInsertSchema(socialLinksTable).omit({ id: true, updatedAt: true });
export type InsertSocialLinks = z.infer<typeof insertSocialLinksSchema>;
export type SocialLinks = typeof socialLinksTable.$inferSelect;
