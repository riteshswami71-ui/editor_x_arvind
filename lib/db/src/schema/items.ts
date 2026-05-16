import { pgTable, text, serial, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const itemsTable = pgTable("items", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(),
  imageUrl: text("image_url"),
  price: text("price"),
  downloadUrl: text("download_url"),
  fileKey: text("file_key"),
  tags: text("tags"),
  isFeatured: boolean("is_featured").notNull().default(false),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const insertItemSchema = createInsertSchema(itemsTable).omit({ id: true, createdAt: true });
export type InsertItem = z.infer<typeof insertItemSchema>;
export type Item = typeof itemsTable.$inferSelect;
