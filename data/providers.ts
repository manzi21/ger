import type { AffiliateConfig } from '@/lib/affiliate';

export interface Provider {
  /** Eindeutiger Slug. */
  key: string;
  /** Anzeigename. */
  name: string;
  /** Kurze Marketing-Tagline (max. 80 Zeichen). */
  tagline: string;
  /** Monatlicher Einstiegspreis (Stand Recherche – muss im Detail geprüft werden). */
  priceFromEUR: number;
  /** Inhaltliche Schwerpunkte. */
  highlights: string[];
  /** "Für wen geeignet?". */
  bestFor: string;
  /** Affiliate-Konfiguration. */
  affiliate: AffiliateConfig;
  /** Ist dies ein Sport-Streamingdienst? */
  sport?: boolean;
}

/**
 * Die Preise und Features sind Recherche-Stände und müssen vor jeder
 * Veröffentlichung am Live-Angebot des Anbieters validiert werden.
 */
export const providers: Provider[] = [
  {
    key: 'netflix',
    name: 'Netflix',
    tagline: 'Größte Bibliothek an Originals und Lizenzserien',
    priceFromEUR: 4.99,
    highlights: [
      'Originals wie „Stranger Things" oder „Squid Game"',
      'Bis zu 4K HDR im Premium-Tarif',
      'Profile, Kindersicherung, Downloads'
    ],
    bestFor: 'Vielserienseher, Familien, internationale Inhalte.',
    affiliate: {
      key: 'netflix',
      network: 'direct',
      fallbackUrl: 'https://www.netflix.com/de/'
    }
  },
  {
    key: 'disney-plus',
    name: 'Disney+',
    tagline: 'Disney, Pixar, Marvel, Star Wars und Star',
    priceFromEUR: 5.99,
    highlights: [
      'Marvel & Star Wars Originals',
      'Family-freundliche Profile',
      '4K UHD und Dolby Atmos inklusive'
    ],
    bestFor: 'Familien und Marvel-/Star-Wars-Fans.',
    affiliate: {
      key: 'disney-plus',
      network: 'direct',
      fallbackUrl: 'https://www.disneyplus.com/de-de'
    }
  },
  {
    key: 'wow',
    name: 'WOW',
    tagline: 'Sky-Inhalte ohne Vertragsbindung – Sport, Filme, Serien',
    priceFromEUR: 9.98,
    highlights: [
      'HBO-Serien (House of the Dragon, The Last of Us)',
      'Bundesliga & Champions League (im Sport-Paket)',
      'Monatlich kündbar'
    ],
    bestFor: 'HBO-Fans und Sportzuschauer ohne Sky-Vertrag.',
    affiliate: {
      key: 'wow',
      network: 'awin',
      fallbackUrl: 'https://www.wowtv.de/',
      awinMerchantId: '20982'
    },
    sport: true
  },
  {
    key: 'dazn',
    name: 'DAZN',
    tagline: 'Live-Sport: Fußball, Boxen, NFL, MotoGP',
    priceFromEUR: 24.99,
    highlights: [
      'Bundesliga-Topspiele Freitag/Sonntag',
      'Champions League Dienstags-Top-Pick',
      'NFL, MotoGP, Boxen, Tennis'
    ],
    bestFor: 'Sportfans, die mehr als nur Fußball sehen wollen.',
    affiliate: {
      key: 'dazn',
      network: 'direct',
      fallbackUrl: 'https://www.dazn.com/de-DE/'
    },
    sport: true
  },
  {
    key: 'prime-video',
    name: 'Prime Video',
    tagline: 'Inklusive bei Prime + zubuchbare Channels',
    priceFromEUR: 8.99,
    highlights: [
      'Im Prime-Abo enthalten',
      'Originals wie „The Boys" und „Reacher"',
      'Channels (Paramount+, MGM+ usw.) zubuchbar'
    ],
    bestFor: 'Prime-Mitglieder, die Streaming als Bonus wollen.',
    affiliate: {
      key: 'prime-video',
      network: 'direct',
      fallbackUrl: 'https://www.amazon.de/gp/video/storefront'
    }
  },
  {
    key: 'apple-tv-plus',
    name: 'Apple TV+',
    tagline: 'Hochwertige Originals in 4K Dolby Vision',
    priceFromEUR: 9.99,
    highlights: [
      '„Ted Lasso", „Severance", „For All Mankind"',
      'Sehr hohe Bild-/Tonqualität',
      'Werbefrei'
    ],
    bestFor: 'Cineasten, die kuratierte Originals statt Masse wollen.',
    affiliate: {
      key: 'apple-tv-plus',
      network: 'direct',
      fallbackUrl: 'https://tv.apple.com/de'
    }
  }
];

export const providerByKey = (key: string): Provider | undefined =>
  providers.find((p) => p.key === key);
