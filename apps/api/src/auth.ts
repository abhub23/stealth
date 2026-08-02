import { betterAuth } from "better-auth";
import { drizzleAdapter } from "@better-auth/drizzle-adapter";
import { db } from "@db/src/index";
import config from "./config/config";

export const auth = betterAuth({
  secret: config.betterAuth.secret,
  baseURL: config.betterAuth.url,
  trustedOrigins: ["http://localhost:3000"],

  advanced:{
      useSecureCookies: false,
  
      cookies: {
        session_token: {
          name: "better-auth.session_token",
          attributes: {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
          },
        },
        state: {
          attributes: {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
          },
  }, 
},
},

  database: drizzleAdapter(db, { provider: "pg" }),

  socialProviders: {
    google: {
      prompt: "select_account",
      clientId: config.google.clientId,
      clientSecret: config.google.clientSecret,
    },
  },
});
