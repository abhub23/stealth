import Elysia from "elysia";
import cors from "@elysiajs/cors";
import { auth } from "./src/auth";
import { authRoutes } from "./src/modules/auth/auth.routes";
import { usersRoutes } from "./src/modules/users/users.routes";

const app = new Elysia({ prefix: "/api/v1" })
  .use(cors({ origin: ["http://localhost:3000"], credentials: true }))
  .mount(auth.handler)
  .use(authRoutes)
  .use(usersRoutes)
  .get("/health", () => "server is healthy");

export default app;
