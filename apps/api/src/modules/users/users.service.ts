import { UsersRepository } from "./users.repository";

export const UsersService = {
  async getById(id: string) {
    return UsersRepository.findById(id);
  },
};
