# tvstreamingvergleich.de

Production-ready Next.js 14 + TypeScript + Tailwind affiliate website comparing legal streaming services and VPN providers in Germany.

## Stack

- **Next.js 14** (App Router) — fully static-rendered pages
- **TypeScript** with strict mode
- **Tailwind CSS** for styling
- **Built-in `sitemap.ts` and `robots.ts`** (Next.js Metadata Routes)
- **JSON-LD** schema (Article, FAQPage, BreadcrumbList, WebSite)
- **No analytics, no tracking cookies** by default — GDPR-friendly out of the box

## Local development

```bash
cp .env.example .env.local   # then fill in your IDs
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm run start
```

## Project structure

```
app/                       # routes (App Router)
  page.tsx                 # Homepage
  layout.tsx               # Site shell + WebSite JSON-LD
  globals.css              # Tailwind + prose-de styles
  not-found.tsx            # 404 page
  sitemap.ts               # /sitemap.xml
  robots.ts                # /robots.txt
  vs/[slug]/               # Direct comparisons (e.g. DAZN vs WOW)
  alternativen/[slug]/     # Provider alternatives (e.g. Netflix Alternativen)
  ratgeber/[slug]/         # Long-form guides
  tools/[slug]/            # Calculators / interactive guides
  werbehinweis/            # Affiliate disclosure (legal)
  impressum/               # German legal imprint (mandatory)
  datenschutz/             # GDPR privacy policy
components/                # 11 React components
data/                      # Typed content (providers, vpns, comparisons…)
lib/                       # affiliate, seo, slugs, internal-links
```

## Affiliate setup

The site is wired for four programs. Without IDs, links fall back to direct URLs (no tracking, but never broken).

| Network | Used for | Env variable |
| --- | --- | --- |
| AWIN | NordVPN, Surfshark, CyberGhost, WOW | `NEXT_PUBLIC_AWIN_PUBLISHER_ID` |
| Impact Radius | ExpressVPN | `NEXT_PUBLIC_IMPACT_PARTNER_ID` |
| Amazon PartnerNet | (future hardware reviews) | `NEXT_PUBLIC_AMAZON_TAG` |
| Direct | Netflix, Disney+, Apple TV+, Prime Video, DAZN | none required |

Update merchant IDs in `data/vpnProviders.ts` and `data/providers.ts` once your AWIN/Impact accounts are approved.

## Deploying to Vercel

1. Push this repository to GitHub (`manzi21/ger`).
2. On https://vercel.com → "Add New… → Project", import the repo.
3. Set the following environment variables:
   - `NEXT_PUBLIC_SITE_URL` = `https://tvstreamingvergleich.de`
   - `NEXT_PUBLIC_AWIN_PUBLISHER_ID` = (your ID, optional at first)
   - `NEXT_PUBLIC_IMPACT_PARTNER_ID` = (your ID, optional)
   - `NEXT_PUBLIC_AMAZON_TAG` = (e.g. `yourname-21`, optional)
4. Click Deploy. Vercel will build automatically.
5. Add custom domain `tvstreamingvergleich.de` → Domain Settings.

## Mandatory manual steps before going live

- [ ] Replace `[…]` placeholders in `app/impressum/page.tsx` with real contact data.
- [ ] Review `app/datenschutz/page.tsx` and adapt to your hosting/analytics setup.
- [ ] Drop a square `og-default.png` (1200×630) into `/public/og-default.png` for OG images.
- [ ] Validate prices in `data/providers.ts` and `data/vpnProviders.ts` against live offers.
- [ ] Apply for AWIN, Impact Radius, and Amazon PartnerNet, then add IDs to `.env.local` and Vercel.

## Editorial principles

- **No piracy, no Kodi, no IPTV** content — ever.
- **No content claims that violate AGB** (e.g. encouraging geo-bypass).
- VPN recommendations are framed around privacy, public Wi-Fi, EU portability — never circumvention.
- Every external link to a partner uses `rel="sponsored noopener nofollow"`.

## License

Proprietary — all content © tvstreamingvergleich.de.
