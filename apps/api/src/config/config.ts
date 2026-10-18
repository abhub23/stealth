function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

const config = {
  app: {
    webUrl: process.env.WEB_URL || "http://localhost:3000",
    apiUrl: process.env.API_URL || "http://localhost:4000",
    port: Number(process.env.PORT) || 4000,
  },
  betterAuth: {
    secret: requireEnv("BETTER_AUTH_SECRET"),
    url: process.env.BETTER_AUTH_URL || process.env.API_URL || "http://localhost:4000",
  },
  google: {
    clientId: requireEnv("GOOGLE_CLIENT_ID"),
    clientSecret: requireEnv("GOOGLE_CLIENT_SECRET"),
  },
};

export default config;