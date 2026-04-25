import type { AffiliateConfig } from '@/lib/affiliate';

export interface VpnProvider {
  key: string;
  name: string;
  tagline: string;
  priceFromEUR: number;
  highlights: string[];
  servers: number;
  countries: number;
  noLogs: boolean;
  bestFor: string;
  affiliate: AffiliateConfig;
  rating: number;
  pros: string[];
  cons: string[];
  whoFor: string;
  founded: number;
  jurisdiction: string;
  moneyBackDays: number;
  paymentMethods: string[];
}

export const vpnProviders: VpnProvider[] = [
  {
    key: 'nordvpn',
    name: 'NordVPN',
    tagline: 'Marktfuehrer fuer Geschwindigkeit und Server-Qualitaet',
    priceFromEUR: 3.39,
    highlights: [
      'NordLynx-Protokoll (WireGuard-basiert)',
      'Threat Protection gegen Tracker und Malware',
      '30 Tage Geld-zurueck-Garantie'
    ],
    servers: 6300,
    countries: 111,
    noLogs: true,
    bestFor: 'Privatsphaere + Reisen + sicheres oeffentliches WLAN.',
    affiliate: { key: 'nordvpn', network: 'awin', fallbackUrl: 'https://nordvpn.com/de/', awinMerchantId: '17374' },
    rating: 4.7,
    pros: [
      'Beste Server-Performance im Test',
      'NordLynx ist sehr schnell auf Auslandsservern',
      'Threat Protection (Tracker + Malware-Blocker)',
      'Unabhaengig auditierte No-Logs-Policy',
      'Apps fuer jede Plattform (auch Smart-TVs)'
    ],
    cons: [
      'Preis bei Monatsabo deutlich hoeher',
      'Kein kostenloser Plan',
      'Setup auf manchen Routern komplex',
      'Treuepreis nach 1. Jahr steigt'
    ],
    whoFor: 'Premium-Nutzer, die maximale Performance wollen - schnell, sicher, mit erweiterten Features wie Threat Protection und Double-VPN.',
    founded: 2012,
    jurisdiction: 'Panama (datenschutzfreundlich)',
    moneyBackDays: 30,
    paymentMethods: ['Kreditkarte', 'PayPal', 'Crypto', 'Google Pay', 'Apple Pay']
  },
  {
    key: 'surfshark',
    name: 'Surfshark',
    tagline: 'Unbegrenzte Geraete - preislich top',
    priceFromEUR: 2.19,
    highlights: [
      'Unbegrenzte gleichzeitige Verbindungen',
      'CleanWeb gegen Ads und Tracker',
      'Kill-Switch und MultiHop'
    ],
    servers: 3200,
    countries: 100,
    noLogs: true,
    bestFor: 'Familien und WG-Haushalte.',
    affiliate: { key: 'surfshark', network: 'awin', fallbackUrl: 'https://surfshark.com/de/', awinMerchantId: '20338' },
    rating: 4.5,
    pros: [
      'Unbegrenzte Geraete parallel (einziger Top-Anbieter)',
      'Sehr guenstig im 2-Jahres-Tarif',
      'CleanWeb (Ad- und Malware-Blocker)',
      'MultiHop fuer doppelte Verschluesselung'
    ],
    cons: [
      'Server-Performance schwankt mehr als NordVPN',
      'Kuerzere Track-Record (juenger als ExpressVPN)',
      'Manche Server in Asien langsam',
      'Setup auf Smart-TV erfordert App-Cast'
    ],
    whoFor: 'Familien (5+ Geraete), Studierende mit kleinem Budget oder WG-Bewohner, die einen einzigen Account nutzen wollen.',
    founded: 2018,
    jurisdiction: 'Niederlande (Teil von Nord Security)',
    moneyBackDays: 30,
    paymentMethods: ['Kreditkarte', 'PayPal', 'Crypto', 'Amazon Pay']
  },
  {
    key: 'expressvpn',
    name: 'ExpressVPN',
    tagline: 'Konstant hohe Geschwindigkeiten weltweit',
    priceFromEUR: 6.18,
    highlights: [
      'Lightway-Protokoll (eigenes, leichtgewichtig)',
      'TrustedServer (RAM-only)',
      'Apps fuer nahezu jede Plattform'
    ],
    servers: 3000,
    countries: 105,
    noLogs: true,
    bestFor: 'Premium-Nutzer, die Stabilitaet priorisieren.',
    affiliate: { key: 'expressvpn', network: 'impact', fallbackUrl: 'https://www.expressvpn.com/de', impactCampaignId: 'placeholder-campaign' },
    rating: 4.6,
    pros: [
      'Sehr stabile Auslandsserver-Performance',
      'Lightway-Protokoll: schnell und ressourcenschonend',
      'TrustedServer-Architektur (RAM-only, kein Festplatten-Logging)',
      'Beste Apps fuer Router (eigene Firmware)'
    ],
    cons: [
      'Teuerster Premium-VPN auf dem Markt',
      'Nur 8 gleichzeitige Geraete',
      'Keine spezialisierten Server (kein Tor-over-VPN)',
      'Keine Anonymisierungsfeatures wie Double-VPN'
    ],
    whoFor: 'Premium-Anwender, die Stabilitaet auf Auslandsservern brauchen (Geschaeftsreisende, Expats) - und denen der Preis weniger wichtig ist.',
    founded: 2009,
    jurisdiction: 'British Virgin Islands',
    moneyBackDays: 30,
    paymentMethods: ['Kreditkarte', 'PayPal', 'Crypto', 'Apple Pay']
  },
  {
    key: 'cyberghost',
    name: 'CyberGhost',
    tagline: 'Streaming-optimierte Server fuer Heimnetz-Datenschutz',
    priceFromEUR: 2.03,
    highlights: [
      'Ueber 100 Standorte weltweit',
      '45 Tage Geld-zurueck-Garantie',
      'Apps in deutscher Sprache'
    ],
    servers: 11500,
    countries: 100,
    noLogs: true,
    bestFor: 'Einsteiger, die einen guenstigen, deutschen Anbieter wollen.',
    affiliate: { key: 'cyberghost', network: 'awin', fallbackUrl: 'https://www.cyberghostvpn.com/de_DE/', awinMerchantId: '11705' },
    rating: 4.2,
    pros: [
      'Groesste Server-Anzahl aller Top-VPNs (11.500+)',
      '45 Tage Geld-zurueck-Garantie (statt 30)',
      'Deutschsprachige Apps und Support',
      'Sehr guenstige 2- und 3-Jahres-Tarife'
    ],
    cons: [
      'Performance unter Premium-Wettbewerbern',
      'Im Besitz von Kape Technologies (Kontroversen)',
      'Audit-Frequenz geringer als NordVPN',
      'WireGuard-Implementation noch nicht ueberall'
    ],
    whoFor: 'Einsteiger, die einen guenstigen, einsteigerfreundlichen, deutschsprachigen Anbieter wollen - und die 45 Tage Bedenkzeit schaetzen.',
    founded: 2011,
    jurisdiction: 'Rumaenien (ausserhalb der 14-Eyes)',
    moneyBackDays: 45,
    paymentMethods: ['Kreditkarte', 'PayPal', 'Crypto', 'SOFORT', 'GiroPay']
  }
];

export const vpnByKey = (key: string): VpnProvider | undefined =>
  vpnProviders.find((v) => v.key === key);
