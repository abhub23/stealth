import { db } from "@db/src/index";
import * as schema from "@db/src/schema";
import { eq } from "drizzle-orm";

export const UsersRepository = {
  async findById(id: string) {
    const rows = await db
      .select()
      .from(schema.user)
      .where(eq(schema.user.id, id))
      .limit(1);
    return rows[0] ?? null;
  },
};
