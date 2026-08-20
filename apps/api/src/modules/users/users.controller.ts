import type { Context } from "elysia";
import { UsersService } from "./users.service";

export const UsersController = {
  async getById({ params }: Context) {
    const { id } = params as { id: string };
    const user = await UsersService.getById(id);
    if (!user) {
      return {
        success: false,
        error: { code: "NOT_FOUND", message: "User not found" },
      };
    }
    return { success: true, data: user };
  },
};
