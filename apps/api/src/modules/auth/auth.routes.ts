import { Elysia } from "elysia";
import { AuthController } from "./auth.controller";
import { getProfileQuery } from "./auth.schema";

export const authRoutes = new Elysia({prefix: '/auth'})
    .get("/profile", AuthController.getProfile, { query: getProfileQuery })
  
