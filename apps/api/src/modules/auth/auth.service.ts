import { AuthRepository } from "./auth.repository";

export const AuthService = {
  async getProfile(userId: string) {
    const user = await AuthRepository.findUserById(userId);
    if (!user) return null;
    return user;
  },
};
