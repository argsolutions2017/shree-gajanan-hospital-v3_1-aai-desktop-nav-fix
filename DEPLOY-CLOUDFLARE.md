# Cloudflare Deployment — Gajanan Hospital V3

Production domain: `https://gajananhospitalwarud.com`

This project is configured for **Cloudflare Workers Static Assets** through `wrangler.jsonc`.

## Existing GitHub-connected deployment

Cloudflare build settings:

```text
Production branch: main
Build command: npm run build
Build output directory: dist
Deploy command: npx wrangler deploy
```

The included `wrangler.jsonc` uses:

```json
{
  "name": "gajananhospitalwarud",
  "compatibility_date": "2026-10-02",
  "assets": {
    "directory": "./dist/",
    "not_found_handling": "single-page-application"
  }
}
```

This is important because all public routes such as `/services/general-medicine` are React routes. Cloudflare serves `index.html` for navigation requests that do not match a physical file.

## Deploy a new version

From the project folder:

```powershell
npm install
npm run build
git add .
git commit -m "Deploy Gajanan Hospital V3"
git push
```

Cloudflare should automatically rebuild and deploy the `main` branch.

## Production checks after deployment

Open and verify:

- `https://gajananhospitalwarud.com/`
- `https://gajananhospitalwarud.com/doctors`
- `https://gajananhospitalwarud.com/services`
- `https://gajananhospitalwarud.com/services/emergency-critical-care`
- `https://gajananhospitalwarud.com/appointment`
- `https://gajananhospitalwarud.com/contact`
- `https://gajananhospitalwarud.com/privacy`
- `https://gajananhospitalwarud.com/robots.txt`
- `https://gajananhospitalwarud.com/sitemap.xml`

Also test:

- mobile navigation
- English / Marathi switch
- doctor images
- Call Hospital button
- WhatsApp appointment flow
- Google Maps link
- `www.gajananhospitalwarud.com` redirect to the root domain
