# Shree Gajanan Hospital — V3 Multi-page Public Website

Production domain: **https://gajananhospitalwarud.com**

## Stack
- React 18 + TypeScript
- Tailwind CSS
- Vite
- Build-time SEO route prerendering (no extra package)
- Cloudflare Workers Static Assets
- WhatsApp appointment / quick-help integration

## What changed in V3
This version uses a **multi-page, service-oriented information architecture** inspired by the useful structural pattern seen on large hospital websites (service overview + dedicated service pages), while using original Gajanan Hospital content, branding and UI.

Pages:
- `/` Home
- `/about`
- `/doctors`
- `/services`
- 7 dedicated service pages under `/services/...`
- `/facilities`
- `/health-tips`
- `/appointment`
- `/contact`
- `/privacy`

## Local run
```powershell
npm install
npm run dev
```

## Production test
```powershell
npm run build
npm run preview
```

## Cloudflare deployment
The repository includes `wrangler.jsonc` configured for the existing Worker name `gajananhospitalwarud` and SPA fallback. The build also creates route-specific HTML shells with page-specific title, description, canonical, Open Graph and JSON-LD metadata for stronger crawlability.

Build settings:
- Production branch: `main`
- Build command: `npm run build`
- Output directory: `dist`
- Deploy command (if Cloudflare asks): `npx wrangler deploy`

There is intentionally **no `public/_redirects` file**. Cloudflare's `single-page-application` asset routing handles page routes.

## Important before publishing
Confirm with the doctors/hospital:
- doctor qualifications and registration numbers
- exact OPD timings
- 24×7 emergency wording
- diagnostic availability
- address wording

The site does not store patient records. Appointment details are handed to WhatsApp in the patient's browser.
