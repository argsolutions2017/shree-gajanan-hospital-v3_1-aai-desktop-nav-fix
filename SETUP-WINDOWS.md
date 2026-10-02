# Windows Local Setup — Gajanan Hospital V3

Open PowerShell in the project folder.

```powershell
node --version
npm --version
npm install
npm run dev
```

Open the Vite URL shown in the terminal, normally:

```text
http://localhost:5173
```

## Production build

```powershell
npm run build
npm run preview
```

The deployable output is created in:

```text
dist/
```

## Push to GitHub

```powershell
git add .
git commit -m "Gajanan Hospital V3 multi-page rebuild"
git push
```

If Cloudflare is connected to the repository, the push will trigger the production deployment automatically.
