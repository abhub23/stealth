import { Elysia } from "elysia";
import { UsersController } from "./users.controller";
import { getUserParams } from "./users.schema";

export const usersRoutes = new Elysia({prefix: '/user'})
      .get("/:id", UsersController.getById, { params: getUserParams })

