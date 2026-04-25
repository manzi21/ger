import type { Metadata } from 'next';

export const SITE = {
  name: 'TV-Streaming-Vergleich',
  domain: 'tvstreamingvergleich.de',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://tvstreamingvergleich.de',
  defaultLocale: 'de_DE',
  twitter: '@tvstreamingvgl'
} as const;

interface BuildMetaInput {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noindex?: boolean;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
}

/** Erstellt vollständige `Metadata` inkl. Canonical, OG, Twitter. */
export function buildMetadata(input: BuildMetaInput): Metadata {
  const url = new URL(input.path, SITE.url).toString();
  const title = `${input.title} | ${SITE.name}`;
  const ogImage = input.ogImage || `${SITE.url}/og-default.png`;

  return {
    title,
    description: input.description,
    metadataBase: new URL(SITE.url),
    alternates: {
      canonical: url
    },
    robots: input.noindex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
    openGraph: {
      type: input.type || 'website',
      locale: SITE.defaultLocale,
      url,
      siteName: SITE.name,
      title,
      description: input.description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: input.title }],
      ...(input.publishedTime ? { publishedTime: input.publishedTime } : {}),
      ...(input.modifiedTime ? { modifiedTime: input.modifiedTime } : {})
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: input.description,
      images: [ogImage]
    }
  };
}

export const DEFAULT_METADATA: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} – Legal streamen in Deutschland`,
    template: `%s | ${SITE.name}`
  },
  description:
    'Unabhängiger Vergleich legaler Streaming-Anbieter in Deutschland: Netflix, Disney+, WOW, DAZN und Prime Video – plus VPN-Empfehlungen für sicheres Streaming.',
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  generator: 'Next.js',
  keywords: [
    'Streaming Vergleich',
    'Netflix Alternative',
    'Disney Plus',
    'WOW',
    'DAZN',
    'VPN Streaming',
    'legal streamen Deutschland'
  ],
  formatDetection: { email: false, address: false, telephone: false }
};
