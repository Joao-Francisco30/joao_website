# João Francisco – Website & CV

Personal website and CV built with Next.js, TypeScript and Tailwind CSS.

## Getting started

```bash
npm install
cp .env.example .env.local   # then edit the values
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

- `/` – CV (about, education, work, projects, skills, links)
- `/football` – Football Data Dashboard. Embeds the separately deployed dashboard
  app via an iframe, using the `DASHBOARD_URL` environment variable. If it isn't
  set, a "coming soon" placeholder is shown.

## Environment variables

| Name            | Description                                         |
| --------------- | --------------------------------------------------- |
| `DASHBOARD_URL` | Public URL of the deployed football dashboard app.  |

## Deploying

Deploy to Vercel and add `DASHBOARD_URL` under Project Settings → Environment Variables.
