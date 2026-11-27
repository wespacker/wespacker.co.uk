# wespacker.co.uk

Website for Wes Packer's consultancy (private, open-source AI and automation for charities, the public sector and small businesses), with a blog and a personal "Beyond work" page. Built with Eleventy and deployed to Cloudflare Workers (static assets) via Workers Builds. The site is static and uses no tracking, ads, or cookies.

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

The date comes from the filename. The post shows up on /blog/ automatically.

## Cloudflare Workers Builds settings

| Setting                | Value           |
| ---------------------- | --------------- |
| Build command          | `npm run build` |
| Deploy command         | `npx wrangler deploy` |
| Build output directory | `_site`         |

Worker settings (name, assets folder, 404 page, branch previews) live in `wrangler.jsonc`.
| Production branch      | `main`          |

Node 22 comes from `.nvmrc`. Security headers live in `src/_headers`.

## Never commit secrets

Keys, `.env` files and similar are blocked in `.gitignore`. Put API tokens in Cloudflare's environment variables instead.
