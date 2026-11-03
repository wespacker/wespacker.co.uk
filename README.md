# wespacker.co.uk

Personal site and blog for Wes Packer. It's built with [Eleventy](https://www.11ty.dev/) and hosted on Cloudflare Pages.

## Local development

```sh
npm install
npm start      # dev server at http://localhost:8080
npm run build  # outputs to _site/
```

## Writing a post

Add a Markdown file to `src/posts/` named `YYYY-MM-DD-slug.md`:

```md
---
title: My post title
---
Post body here.
```

The date comes from the filename. The post shows up on the homepage automatically.

## Cloudflare Pages settings

| Setting                | Value           |
| ---------------------- | --------------- |
| Framework preset       | Eleventy        |
| Build command          | `npm run build` |
| Build output directory | `_site`         |
| Production branch      | `main`          |

Node 22 comes from `.nvmrc`. Security headers live in `src/_headers`.

## Never commit secrets

Keys, `.env` files and similar are blocked in `.gitignore`. Put API tokens in Cloudflare's environment variables instead.
