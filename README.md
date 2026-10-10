# aknotwell.github.io

Personal site, built with Vite + React + TypeScript and deployed to GitHub Pages
on every push to `main`.

## Run locally

```bash
make dev
```

Run `make help` to see the other commands.

## Edit the resume

All resume content lives in `src/resume.ts`.

## Write a blog post

Add a Markdown file to `src/posts/`. The filename becomes the URL
(`src/posts/my-post.md` → `#/blog/my-post`). Start it with:

```markdown
---
title: My post
date: 2026-10-10
summary: One line shown in the post list.
---

Post body in Markdown…
```

Posts are sorted newest first, and the three latest also appear on the home page.
