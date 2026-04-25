/**
 * Zentrale Definition aller internen Routen.
 * Vermeidet hard-codierte Strings in Komponenten und macht
 * spätere Refactorings (z. B. URL-Umbenennungen) trivial.
 */

export const routes = {
  home: '/',
  vs: (slug: string) => `/vs/${slug}`,
  alternative: (slug: string) => `/alternativen/${slug}`,
  guide: (slug: string) => `/ratgeber/${slug}`,
  tool: (slug: string) => `/tools/${slug}`,
  legal: {
    werbehinweis: '/werbehinweis',
    impressum: '/impressum',
    datenschutz: '/datenschutz'
  }
} as const;

/** Standard-Footer-Links für die Sitewide-Navigation. */
export const primaryNav = [
  { href: '/vs/dazn-vs-wow', label: 'DAZN vs. WOW' },
  { href: '/vs/disney-plus-vs-netflix', label: 'Disney+ vs. Netflix' },
  { href: '/vs/prime-video-vs-netflix', label: 'Prime vs. Netflix' },
  { href: '/alternativen/netflix', label: 'Netflix Alternativen' },
  { href: '/ratgeber/beste-streaming-anbieter-deutschland', label: 'Beste Anbieter' },
  { href: '/ratgeber/beste-vpns-fuer-streaming-deutschland', label: 'Beste VPNs' }
] as const;
