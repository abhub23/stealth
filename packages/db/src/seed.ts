import "dotenv/config";
import { db } from "./index";
import { user } from "./schema";
import { randomUUID } from "crypto";

async function seed() {
  await db.insert(user).values({
    id: randomUUID(),
    name: "Test User",
    email: "test@example.com",
    emailVerified: true,
  });

  console.log("Seed complete");
  process.exit(0);
}

seed();