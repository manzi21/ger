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
}

/**
 * VPNs werden ausschließlich für legitime Anwendungsfälle empfohlen:
 * Datenschutz, öffentliche WLANs, Reisen mit eigenem Streaming-Abo.
 * Wir empfehlen niemals Geo-Restriction-Umgehungen, die gegen die AGB
 * eines Streaming-Dienstes verstoßen.
 */
export const vpnProviders: VpnProvider[] = [
  {
    key: 'nordvpn',
    name: 'NordVPN',
    tagline: 'Marktführer für Geschwindigkeit und Server-Qualität',
    priceFromEUR: 3.39,
    highlights: [
      'NordLynx-Protokoll (WireGuard-basiert)',
      'Threat Protection gegen Tracker und Malware',
      '30 Tage Geld-zurück-Garantie'
    ],
    servers: 6300,
    countries: 111,
    noLogs: true,
    bestFor: 'Privatsphäre + Reisen + sicheres öffentliches WLAN.',
    affiliate: {
      key: 'nordvpn',
      network: 'awin',
      fallbackUrl: 'https://nordvpn.com/de/',
      awinMerchantId: '17374'
    }
  },
  {
    key: 'surfshark',
    name: 'Surfshark',
    tagline: 'Unbegrenzte Geräte – preislich top',
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
    affiliate: {
      key: 'surfshark',
      network: 'awin',
      fallbackUrl: 'https://surfshark.com/de/',
      awinMerchantId: '20338'
    }
  },
  {
    key: 'expressvpn',
    name: 'ExpressVPN',
    tagline: 'Konstant hohe Geschwindigkeiten weltweit',
    priceFromEUR: 6.18,
    highlights: [
      'Lightway-Protokoll (eigenes, leichtgewichtig)',
      'TrustedServer (RAM-only)',
      'Apps für nahezu jede Plattform'
    ],
    servers: 3000,
    countries: 105,
    noLogs: true,
    bestFor: 'Premium-Nutzer, die Stabilität priorisieren.',
    affiliate: {
      key: 'expressvpn',
      network: 'impact',
      fallbackUrl: 'https://www.expressvpn.com/de',
      impactCampaignId: 'placeholder-campaign'
    }
  },
  {
    key: 'cyberghost',
    name: 'CyberGhost',
    tagline: 'Streaming-optimierte Server für Heimnetz-Datenschutz',
    priceFromEUR: 2.03,
    highlights: [
      'Über 100 Standorte weltweit',
      '45 Tage Geld-zurück-Garantie',
      'Apps in deutscher Sprache'
    ],
    servers: 11500,
    countries: 100,
    noLogs: true,
    bestFor: 'Einsteiger, die einen günstigen, deutschen Anbieter wollen.',
    affiliate: {
      key: 'cyberghost',
      network: 'awin',
      fallbackUrl: 'https://www.cyberghostvpn.com/de_DE/',
      awinMerchantId: '11705'
    }
  }
];

export const vpnByKey = (key: string): VpnProvider | undefined =>
  vpnProviders.find((v) => v.key === key);
