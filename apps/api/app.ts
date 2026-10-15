import cors from "@elysiajs/cors";
import Elysia from "elysia";
import { auth } from "./src/auth";
import config from "./src/config/config";
import { healthRoutes } from "./src/modules/health/health.routes";
import { usersRoutes } from "./src/modules/users/users.routes";

const app = new Elysia()
  .use(
    cors({
      origin: [config.app.webUrl],
      credentials: true,
      allowedHeaders: ["Content-Type", "Authorization"],
    })
  )
  .mount(auth.handler)
  .use(healthRoutes)
  .group("/api/v1", ({ use }) => use(usersRoutes));

export default app;
