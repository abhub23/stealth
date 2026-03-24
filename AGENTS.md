# AGENTS.md - Agentic Coding Guidelines

This document provides guidelines for AI agents working in this codebase.

## Project Overview

This is a Turborepo monorepo containing:

- **apps/web**: Next.js 16 frontend with React 19, Tailwind CSS, shadcn/ui
- **apps/api**: Bun + Elysia backend API
- **packages/db**: Database utilities package

Package manager: **Bun** (v1.3.10)

---

## Build / Lint / Test Commands

### Root Commands (Monorepo)

```bash
# Build all apps
bun run build

# Run all apps in development
bun run dev

# Lint all apps
bun run lint

# Format code (Prettier)
bun run fmt

# Type check all apps
bun run check-types
```

### Single App Commands

```bash
# Web app (Next.js)
cd apps/web
bun run dev      # Start dev server on localhost:3000
bun run build    # Production build
bun run start    # Start production server
bun run lint     # ESLint with --max-warnings 0
bun run check-types  # next typegen && tsc --noEmit

# API app (Bun + Elysia)
cd apps/api
bun run dev      # Start dev server
bun run start    # Production start
```

### Turbo Filters (Run command on specific app)

```bash
# Build only web app
bun run build --filter=web

# Build only API
bun run build --filter=api

# Develop only web
bun run dev --filter=web
```

---

## Code Style Guidelines

### TypeScript

- **Strict mode enabled** (`strict: true`, `strictNullChecks: true`)
- Always define return types for functions when obvious
- Use `type` for unions/intersections, `interface` for objects
- Avoid `any`, use `unknown` when type is truly unknown

### Imports

- **Web app**: Use path alias `@/` for local imports
  ```typescript
  import { cn } from "@/lib/utils";
  import Button from "@/components/ui/button";
  ```
- **Relative imports** for sibling components when cleaner
- **Group imports**: External first, then blank line, then internal

### Formatting (Prettier)

- Run `bun run fmt` before committing
- Configured for: `.ts`, `.tsx`, `.md` files
- Uses default Prettier settings

### Naming Conventions

- **Components**: PascalCase (`Button`, `UserProfile`)
- **Files**: kebab-case for utilities (`api.ts`, `utils.ts`), PascalCase for components (`Button.tsx`)
- **Variables/functions**: camelCase
- **Constants**: UPPER_SNAKE_CASE
- **React components**: Export as named export + default

### React Patterns

- Use **functional components** with hooks only
- Use `class-variance-authority` (cva) for component variants
- Use `cn()` utility (clsx + tailwind-merge) for conditional classes
- Follow shadcn/ui component structure:
  - Use Radix UI primitives where possible
  - Use `data-slot` attribute for component identification
  - Support `asChild` prop with Slot from Radix

### Error Handling

- API: Use Elysia's error handling with proper status codes
- Frontend: Use React Query error states, show toast notifications (sonner)
- Never expose internal errors to clients; return safe messages

### CSS / Styling

- **Tailwind CSS v4** with PostCSS
- Use utility classes; avoid custom CSS unless necessary
- Follow existing color scheme (use CSS variables from theme)
- Components use `rounded-none` as per project default

### File Organization

```
apps/web/src/
  app/           # Next.js App Router pages
  components/    # React components
    ui/           # shadcn/ui components
  lib/           # Utilities, API client, config
apps/api/
  config/         # Configuration files
  routes/         # API route handlers
```

---

## Key Dependencies

### Web

- next: 16.1.5
- react: 19.2.0
- tailwindcss: 4.2.1
- @tanstack/react-query: 5.x
- axios
- recharts
- radix-ui
- sonner (toasts)
- motion (animations)

### API

- bun
- elysia: 1.4.x
- @elysiajs/cors

---

## Environment Variables

- API runs on port 4000 (configurable in `apps/api/config/config.ts`)
- Web runs on port 3000 (Next.js default)
- CORS configured for `localhost:3000` on API

---

## Notes for Agents

1. **Always run lint and typecheck** before marking work complete:

   ```bash
   bun run lint && bun run check-types
   ```

2. **Use Turbo filters** for faster builds during development

3. **API changes** may require CORS updates in `apps/api/index.ts`

4. **Tailwind v4** uses CSS-based configuration; avoid legacy Tailwind config patterns

5. **Testing**: No test framework is currently configured. Do not add tests unless explicitly requested.
