import { createAuthClient } from "better-auth/client";

export const authClient = createAuthClient({
  baseURL: "http://localhost:4000", // The base URL of your auth server
});

export async function googleSignIn() {
  await authClient.signIn.social({
    provider: "google",
    callbackURL: "http://localhost:3000"
  });
}

export async function googleSignOut() {
    await authClient.signOut()
}

export async function emailSignIn(email: string, password: string) {
  return authClient.signIn.email({ email, password });
}

export async function emailSignUp(name: string, email: string, password: string) {
  return authClient.signUp.email({ email, password, name });
}