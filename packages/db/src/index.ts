import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import * as authSchema from "./schema";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

try {
  await pool.query( "SELECT 1");

  console.log("✅ Database connected successfully!");
} catch (err) {
  console.error("❌ Database connection failed:");
  console.error(err);
}

export const db = drizzle(pool, {
  schema: authSchema,
});