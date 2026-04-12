import Elysia from "elysia";
import cors from "@elysiajs/cors";
import config from "./config/config";
import { auth } from "./auth";

const app = new Elysia({ prefix: "/api/v1" })
  .use(cors({ origin: ["localhost:3000"], credentials: true }))
  .mount(auth.handler)
  .get("/health", () => ({ message: "Server is healthy" }))
  .listen(config.port, () => {
    console.log(`server listening on port ${config.port}`);
  });
