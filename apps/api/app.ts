import Elysia from "elysia";
import cors from "@elysiajs/cors";
import { auth } from "./src/auth";
import { authRoutes } from "./src/modules/auth/auth.routes";
import { healthRoutes } from "./src/modules/health/health.routes";
import { usersRoutes } from "./src/modules/users/users.routes";

const app = new Elysia()
  .use(cors({
     origin: ["http://localhost:3000"],
     credentials: true,
     allowedHeaders: ["Content-Type", "Authorization"], }))
  .mount(auth.handler)
  .group("/api/v1", (app) =>
    app.use(healthRoutes)
      .use(authRoutes)
      .use(usersRoutes)
  );

export default app;
