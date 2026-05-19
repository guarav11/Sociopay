# Sociopay Website

A React + Vite marketing site for the Sociopay mobile app.

This version is aligned to the actual product in the app workspace:

- Housing society maintenance payments
- Resident and admin member management
- Razorpay-backed online collection flows
- PDF receipts, reminders, complaints, expenses, and reports
- Responsive product website with real app branding assets

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Branding assets used

The website reuses brand assets from the app project:

- `public/sociopay-icon.png`
- `public/favicon.png`
- `public/app-preview.png`

## Contact form setup

### Option 1: Netlify Forms

This project is ready for Netlify form detection already.

1. Deploy the site to Netlify.
2. Keep the hidden `sociopay-contact` form in `index.html`.
3. The React form will submit to Netlify automatically when `VITE_CONTACT_FORM_ENDPOINT` is not set.

### Option 2: Custom endpoint

Set an environment variable before building:

```bash
VITE_CONTACT_FORM_ENDPOINT=https://your-api.example.com/contact
```

The frontend will POST JSON to that endpoint with:

- `name`
- `email`
- `company`
- `message`

## Deployment

### Netlify

The included `netlify.toml` uses:

- Build command: `npm run build`
- Publish directory: `dist`

### Vercel

The included `vercel.json` provides SPA routing support.

If you deploy on Vercel and want the contact form to work, set `VITE_CONTACT_FORM_ENDPOINT` to your own backend or form service.
