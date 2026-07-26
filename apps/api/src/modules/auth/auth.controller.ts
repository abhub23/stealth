import type { Context } from "elysia";
import { AuthService } from "./auth.service";

export const AuthController = {
  async getProfile({ query }: Context) {
    const { userId } = query as { userId: string };
    const user = await AuthService.getProfile(userId);
    if (!user) {
      return { success: false, error: { code: "NOT_FOUND", message: "User not found" } };
    }
    return { success: true, data: user };
  },
};
