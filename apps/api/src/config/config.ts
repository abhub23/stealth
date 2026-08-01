const config = {
  port: process.env.PORT || 4000,
  betterAuth: {
    secret: process.env.BETTER_AUTH_SECRET!,
    url: process.env.BETTER_AUTH_URL!,
  },
  google: {
    clientId: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  },
};

export default config;
