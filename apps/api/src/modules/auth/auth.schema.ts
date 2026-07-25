import { t } from "elysia";

export const getProfileQuery = t.Object({
  userId: t.String(),
});
