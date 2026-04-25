/**
 * Zentrale Definition aller internen Routen.
 */

export const routes = {
  home: '/',
  vs: (slug: string) => `/vs/${slug}`,
  alternative: (slug: string) => `/alternativen/${slug}`,
  guide: (slug: string) => `/ratgeber/${slug}`,
  tool: (slug: string) => `/tools/${slug}`,
  provider: (slug: string) => `/anbieter/${slug}`,
  vpn: (slug: string) => `/vpn/${slug}`,
  lohntSich: (slug: string) => `/lohnt-sich/${slug}`,
  kosten: (slug: string) => `/kosten/${slug}`,
  vpnFuer: (slug: string) => `/vpn-fuer/${slug}`,
  legal: {
    werbehinweis: '/werbehinweis',
    impressum: '/impressum',
    datenschutz: '/datenschutz'
  }
} as const;

export const primaryNav = [
  { href: '/anbieter/netflix', label: 'Anbieter-Tests' },
  { href: '/vpn/nordvpn', label: 'VPN-Tests' },
  { href: '/vs/dazn-vs-wow', label: 'Vergleiche' },
  { href: '/ratgeber/beste-streaming-anbieter-deutschland', label: 'Ratgeber' },
  { href: '/vpn-fuer/fire-tv-stick', label: 'VPN-Setup' }
] as const;
