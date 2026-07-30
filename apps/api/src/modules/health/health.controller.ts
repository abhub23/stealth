import { status } from "elysia";

export function getLiveliness() {
  return status(200, {
    status: "ok",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
}
