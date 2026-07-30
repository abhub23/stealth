import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: "http://localhost:4000", // The base URL of your auth server
});

export async function googleSignIn() {
  await authClient.signIn.social({
    provider: "google",
    callbackURL: "http://localhost:4000"
  });
}

export async function googleSignOut() {
    await authClient.signOut()
}