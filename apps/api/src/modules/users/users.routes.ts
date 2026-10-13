import { Elysia } from "elysia";
import { UsersController } from "./users.controller";
import { getUserParams } from "./users.schema";

export const usersRoutes = new Elysia({ prefix: "/users" }).get(
  "/:id",
  UsersController.getById,
  { params: getUserParams },
);
