# Personal Site

Kieran's personal site built with React, TypeScript, and Vite.

## Stack

- **React 19** + **TypeScript**
- **Vite 8** — dev server and bundler
- **React Router v7** — client-side routing
- **react-markdown** — renders blog posts written in Markdown

## Pages

| Route | Description |
|---|---|
| `/` | Home — name and nav links |
| `/about` | Bio, skills, and experience |
| `/blog` | Blog index — lists all posts |
| `/blog/:slug` | Renders a Markdown post |
| `/projects` | Projects |

## Writing a blog post

Create a `.md` file in `src/posts/`. The filename becomes the URL slug.

```md
---
title: My Post Title
date: 2026-04-11
description: A short summary shown on the blog index.
categories: Education, Projects
---

Your Markdown content goes here.
```

`src/posts/my-post.md` is published at `/blog/my-post`. Posts are sorted newest-first by the `date` field.

## Theming

A `☀ / ☾` toggle in the top-right corner switches between light and dark mode. The preference is saved to `localStorage` and defaults to light mode on first visit.

| | Light | Dark |
|---|---|---|
| Background | `#fafafa` | `#121212` |
| Text | `#151515` | `#f0f0f0` |
| Accent / hover | `#ff0022` | `#89CFF0` |

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```
