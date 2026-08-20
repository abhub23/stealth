import { Elysia } from "elysia";
import { getLiveliness } from "./health.controller";

export const healthRoutes = new Elysia().get("/health", getLiveliness);
