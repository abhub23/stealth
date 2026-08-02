const config = {
  app: {
    webUrl: process.env.WEB_URL || "http://localhost:3000",
    apiUrl: process.env.API_URL || "http://localhost:4000",
    port: Number(process.env.PORT) || 4000,
  },
  betterAuth: {
    secret: process.env.BETTER_AUTH_SECRET!,
    url: process.env.BETTER_AUTH_URL || process.env.API_URL || "http://localhost:4000",
  },
  google: {
    clientId: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  },
};

export default config;
