# BU Quantum

This repository contains the website for BU Quantum, a quantum computing club at Boston University. The club is currently meeting for the Fall 2026 semester. For more information, see [our website](https://buquantum.org/).

## Development

The site is a [Next.js](https://nextjs.org) app at the root of this repository.

```bash
pnpm install
pnpm dev      # dev server at http://localhost:3000
pnpm build    # production build
pnpm start    # serve the production build
```

## Structure

| Path | Contents |
| --- | --- |
| `app/` | Routes, components, and `global.css` (the single stylesheet) |
| `app/crash-course/posts/` | Lesson pages as MDX |
| `public/` | Images and other static assets |

Lessons are ordered by a dependency graph rather than by date. Each MDX file declares an optional `requires:` field in its frontmatter listing the slugs it builds on; `app/crash-course/utils.ts` reads that to lay out the crash course.
