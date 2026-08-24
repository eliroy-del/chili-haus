# Chili Haus

Official homepage for **Chili Haus** — local & continental meals, freezer-friendly foods, baked products, sauces, meal packages and bulk orders in Accra.

Order flow is WhatsApp-first. Menu content is data-driven and CMS-ready.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Motion-friendly reveal animations (`prefers-reduced-motion` respected)
- Lucide icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configuration

Public business settings live in `.env.local` (see `.env.example`):

- `NEXT_PUBLIC_WHATSAPP_NUMBER`
- `NEXT_PUBLIC_PHONE_PRIMARY`
- `NEXT_PUBLIC_PHONE_MOMO`
- `NEXT_PUBLIC_INSTAGRAM_URL`
- `NEXT_PUBLIC_SITE_URL`

Central config: `src/lib/config.ts`  
WhatsApp helpers: `src/lib/whatsapp.ts`  
Menu data: `src/data/`

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Notes

- Pricing and product names are taken from supplied Chili Haus artwork.
- Flyer images are brand references used as visual atmosphere — not pasted layouts.
- Do not invent addresses, hours, delivery fees or testimonials.
