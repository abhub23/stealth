---
name: api-design
description: Production-grade ElysiaJS backend development patterns and best practices
license: MIT
compatibility: opencode
metadata:
  audience: backend-developers
  framework: elysia
  level: advanced
---

## Project Structure

```
apps/api/
├── src/
│   ├── config/           # Configuration files
│   │   └── config.ts     # Environment-based config with validation
│   ├── plugins/          # Reusable Elysia plugins
│   │   ├──Cors.ts        # CORS configuration
│   │   └──Helmet.ts      # Security headers
│   ├── routes/           # API route handlers
│   │   ├── index.ts      # Route aggregation
│   │   ├── v1/           # Versioned routes
│   │   │   ├── users.ts
│   │   │   └── posts.ts
│   │   └── health.ts     # Health check endpoints
│   ├── middleware/       # Custom middleware
│   │   ├── auth.ts       # Authentication middleware
│   │   └── error.ts      # Error handling middleware
│   ├── models/           # Request/Response DTOs
│   ├── services/         # Business logic
│   ├── utils/            # Utility functions
│   ├── index.ts          # Main entry point
│   └── utils/
└── package.json
```

## Configuration

Always use environment-based configuration with validation:

```typescript
// src/config/config.ts
import { t } from "elysia";

const envSchema = t.Object({
  PORT: t.Number({ default: 4000 }),
  NODE_ENV: t.UnionEnum(["development", "production", "test"], {
    default: "development",
  }),
  DATABASE_URL: t.String(),
  JWT_SECRET: t.String(),
  RATE_LIMIT_MAX: t.Number({ default: 100 }),
});

export const config = () => {
  const env = Bun.env;
  const result = envSchema.decode(env);

  if (result instanceof t.SynthesisError) {
    throw new Error(`Invalid config: ${result.message}`);
  }

  return result;
};
```

## Error Handling

Create a centralized error handling system:

```typescript
// src/utils/errors.ts
import { Elysia, t } from "elysia";

export class AppError extends Error {
  constructor(
    public statusCode: number,
    message: string,
    public code?: string,
    public details?: unknown,
  ) {
    super(message);
    this.name = "AppError";
  }
}

export class NotFoundError extends AppError {
  constructor(resource: string) {
    super(404, `${resource} not found`, "NOT_FOUND");
  }
}

export class ValidationError extends AppError {
  constructor(details: unknown) {
    super(400, "Validation failed", "VALIDATION_ERROR", details);
  }
}

export class UnauthorizedError extends AppError {
  constructor(message = "Unauthorized") {
    super(401, message, "UNAUTHORIZED");
  }
}

export class ForbiddenError extends AppError {
  constructor(message = "Forbidden") {
    super(403, message, "FORBIDDEN");
  }
}

export const errorHandler = () => (app: Elysia) =>
  app.onError(({ error, set }) => {
    if (error instanceof AppError) {
      set.status = error.statusCode;
      return {
        success: false,
        error: {
          code: error.code,
          message: error.message,
          details: error.details,
        },
      };
    }

    // Handle Elysia validation errors
    if (error.name === "ValidationError") {
      set.status = 400;
      return {
        success: false,
        error: {
          code: "VALIDATION_ERROR",
          message: "Invalid request parameters",
          details: error.all,
        },
      };
    }

    // Log unexpected errors in production
    console.error("Unexpected error:", error);

    set.status = 500;
    return {
      success: false,
      error: {
        code: "INTERNAL_ERROR",
        message: "An unexpected error occurred",
      },
    };
  });
```

## Response Format

Use a consistent response format for all endpoints:

```typescript
// Standard API response wrapper
type ApiResponse<T> =
  | {
      success: true;
      data: T;
      meta?: PaginationMeta;
    }
  | {
      success: false;
      error: {
        code: string;
        message: string;
        details?: unknown;
      };
    };

interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

// Helper to create paginated responses
export const paginate = <T>(
  data: T[],
  page: number,
  limit: number,
  total: number,
) => ({
  success: true,
  data,
  meta: {
    page,
    limit,
    total,
    totalPages: Math.ceil(total / limit),
  },
});
```

## Request Validation

Use Elysia's built-in validation with TypeBox:

```typescript
// src/routes/v1/users.ts
import { Elysia, t } from "elysia";

// Validation schemas
export const createUserSchema = t.Object({
  email: t.String({ format: "email", maxLength: 255 }),
  name: t.String({ minLength: 1, maxLength: 100 }),
  password: t.String({ minLength: 8, maxLength: 72 }), // bcrypt limit
});

export const updateUserSchema = t.Partial(createUserSchema);

export const userParamsSchema = t.Object({
  id: t.String({ format: "uuid" }),
});

export const paginationSchema = t.Object({
  page: t.Number({ minimum: 1, default: 1 }),
  limit: t.Number({ minimum: 1, maximum: 100, default: 20 }),
  search: t.Optional(t.String({ maxLength: 100 })),
});

export const userRoutes = (app: Elysia) =>
  app.group("/users", (app) =>
    app
      .get(
        "/",
        async ({ query }) => {
          const { page, limit, search } = query as {
            page?: number;
            limit?: number;
            search?: string;
          };

          // Service call here
          return paginate(users, page ?? 1, limit ?? 20, total);
        },
        {
          query: paginationSchema,
        },
      )
      .get(
        "/:id",
        async ({ params }) => {
          const user = await getUser(params.id);
          if (!user) throw new NotFoundError("User");
          return { success: true, data: user };
        },
        {
          params: userParamsSchema,
        },
      )
      .post(
        "/",
        async ({ body }) => {
          const user = await createUser(body);
          return { success: true, data: user };
        },
        {
          body: createUserSchema,
        },
      )
      .put(
        "/:id",
        async ({ params, body }) => {
          const user = await updateUser(params.id, body);
          if (!user) throw new NotFoundError("User");
          return { success: true, data: user };
        },
        {
          params: userParamsSchema,
          body: updateUserSchema,
        },
      )
      .delete(
        "/:id",
        async ({ params }) => {
          await deleteUser(params.id);
          return { success: true, data: null };
        },
        {
          params: userParamsSchema,
        },
      ),
  );
```

## Authentication

Implement JWT authentication with middleware:

```typescript
// src/middleware/auth.ts
import { Elysia, t } from "elysia";
import jwt from "@elysiajs/jwt";
import { AppError } from "../utils/errors";

const jwtConfig = {
  name: "jwt",
  secret: Bun.env.JWT_SECRET!,
  exp: "7d",
};

export const authPlugin = (app: Elysia) =>
  app
    .use(jwt(jwtConfig))
    .derive(async ({ cookie, headers }) => {
      const token =
        cookie.access_token?.value ||
        headers.authorization?.replace("Bearer ", "");

      if (!token) {
        throw new UnauthorizedError("No token provided");
      }

      try {
        const payload = await app.jwt.verify(token);
        return { user: payload };
      } catch {
        throw new UnauthorizedError("Invalid token");
      }
    })
    .onBeforeHandle(({ error, cookie }) => {
      // Optional: public routes check
    });

// Decorator augmentation for TypeScript
declare module "elysia" {
  interface Decorator<Base> {
    user: { id: string; email: string; role: string };
  }
}

// Protected route example
const protectedRoutes = (app: Elysia) =>
  app.guard(
    {
      beforeHandle: ({ user }) => {
        if (!user) throw new UnauthorizedError();
      },
    },
    (app) => app.get("/profile", ({ user }) => ({ success: true, data: user })),
  );
```

## Rate Limiting

Implement rate limiting to prevent abuse:

```typescript
// src/plugins/rate-limit.ts
import { Elysia } from "elysia";
import { rateLimit as rateLimitPlugin } from "@elysiajs/rate-limit";
import { config } from "../config/config";

export const rateLimit = (app: Elysia) =>
  app.use(
    rateLimitPlugin({
      max: config().RATE_LIMIT_MAX,
      duration: 60 * 1000, // 1 minute
      customResponse: (context) => ({
        success: false,
        error: {
          code: "RATE_LIMIT_EXCEEDED",
          message: "Too many requests. Please try again later.",
        },
      }),
    }),
  );
```

## API Versioning

Implement versioning to maintain backward compatibility:

```typescript
// src/routes/index.ts
import { Elysia } from "elysia";
import { userRoutes } from "./v1/users";
import { postRoutes } from "./v1/posts";

export const routes = (app: Elysia) =>
  app.group("/api/v1", (app) => [userRoutes(app), postRoutes(app)]);

// Or use URL prefix strategy
export const routesWithVersion = (app: Elysia) =>
  app.group("/api", (app) =>
    app.group("/v1", (app) => [userRoutes(app), postRoutes(app)]),
  );
```

## Health Checks

Implement proper health check endpoints:

```typescript
// src/routes/health.ts
import { Elysia } from "elysia";
import { config } from "../config/config";

export const healthRoutes = (app: Elysia) =>
  app
    .get("/health", () => ({
      status: "ok",
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    }))
    .get("/health/ready", async () => {
      // Check dependencies (DB, Redis, etc.)
      const dbReady = await checkDatabase();

      if (!dbReady) {
        throw new Error("Database not ready");
      }

      return { status: "ready" };
    })
    .get("/health/live", () => ({ status: "alive" }));

async function checkDatabase(): Promise<boolean> {
  try {
    // await db.query("SELECT 1");
    return true;
  } catch {
    return false;
  }
}
```

## Logging

Use structured logging for production:

```typescript
// src/utils/logger.ts
const log = (level: string, message: string, meta?: object) => {
  console.log(
    JSON.stringify({
      timestamp: new Date().toISOString(),
      level,
      message,
      ...meta,
    }),
  );
};

export const logger = {
  info: (message: string, meta?: object) => log("INFO", message, meta),
  warn: (message: string, meta?: object) => log("WARN", message, meta),
  error: (message: string, meta?: object) => log("ERROR", message, meta),
  debug: (message: string, meta?: object) => log("DEBUG", message, meta),
};
```

## Main Entry Point

Assemble everything in the main file:

```typescript
// src/index.ts
import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { config } from "./config/config";
import { errorHandler } from "./utils/errors";
import { logger } from "./utils/logger";
import { rateLimit } from "./plugins/rate-limit";
import { healthRoutes } from "./routes/health";
import { routes } from "./routes";

const app = new Elysia()
  .use(
    cors({
      origin:
        Bun.env.NODE_ENV === "production" ? ["https://yourdomain.com"] : true,
      credentials: true,
    }),
  )
  .use(errorHandler())
  .use(rateLimit())
  .use(healthRoutes())
  .use(routes())
  .listen(config().PORT);

logger.info(`Server running on port ${config().PORT}`);

export type App = typeof app;
```

## Best Practices Summary

1. **Always validate input** - Use TypeBox schemas for request validation
2. **Consistent response format** - Wrap all responses in standard format
3. **Proper error handling** - Centralized error handling with AppError class
4. **Environment-based config** - Use config with validation, never hardcode
5. **API versioning** - Version your APIs from the start
6. **Rate limiting** - Protect against abuse
7. **Health checks** - Implement /health, /health/ready, /health/live
8. **Structured logging** - Use JSON logging in production
9. **TypeScript** - Use strict mode, define proper types for all DTOs
10. **Pagination** - Always paginate list endpoints
