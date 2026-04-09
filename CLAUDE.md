# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A country listing app built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4. Data is fetched from the [REST Countries API](https://restcountries.com/). The project is a Codante.io mini-challenge.

**Key features to implement:**
- List all countries with flag and name (in Portuguese)
- Country detail page: capital, population (formatted as 1K/1M), continent, region, languages spoken
- Border countries list with navigation links
- Extra: countries that speak the same language, search functionality

## Commands

```bash
npm run dev       # Start development server
npm run build     # Production build
npm run lint      # Run ESLint
npm run format    # Format with Prettier (Tailwind class sorting included)
```

## Architecture

**App Router structure** (Next.js `app/` directory):
- `app/layout.tsx` — Root layout: sets font (Nunito Sans), metadata, and base HTML structure
- `app/(root)/layout.tsx` — Route group layout wrapping pages with `<Header>` and `<main>`
- `app/(root)/page.tsx` — Home page (country list)
- `app/globals.css` — Global styles with Tailwind v4

**Path alias:** `@/` maps to the project root (e.g., `@/components/header`, `@/lib/constants`).

**Shared code:**
- `lib/constants/index.tsx` — App-wide constants (`APP_NAME`, `APP_DESCRIPTION`, `SERVER_URL`) driven by env vars
- `components/header/index.tsx` — Site header with logo and app name

**No testing setup** is present in this project.

## Conventions

- Components are organized as `components/<name>/index.tsx`
- Pages follow Next.js App Router conventions with Server Components by default
- Tailwind v4 is used via `@tailwindcss/postcss`; class order is enforced by `prettier-plugin-tailwindcss`
- Population formatting: 1,000 → 1K, 1,000,000 → 1M
