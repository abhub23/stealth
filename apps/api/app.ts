import Elysia from "elysia";
import cors from "@elysiajs/cors";
import config from "./src/config/config";
import { auth } from "./src/auth";
import { healthRoutes } from "./src/modules/health/health.routes";
import { usersRoutes } from "./src/modules/users/users.routes";

const app = new Elysia()
  .use(cors({
     origin: [config.app.webUrl],
     credentials: true,
     allowedHeaders: ["Content-Type", "Authorization"], }))
  .mount(auth.handler)
  .group("/api/v1", (app) =>
    app.use(healthRoutes)
      .use(usersRoutes)
  );

export default app;
