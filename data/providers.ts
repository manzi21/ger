import type { AffiliateConfig } from '@/lib/affiliate';

export interface Provider {
  key: string;
  name: string;
  tagline: string;
  priceFromEUR: number;
  highlights: string[];
  bestFor: string;
  affiliate: AffiliateConfig;
  sport?: boolean;
  rating: number;
  pros: string[];
  cons: string[];
  whoFor: string;
  founded: number;
  uhdInStandard: boolean;
  priceTiers: Array<{ name: string; priceEUR: number; note: string }>;
}

export const providers: Provider[] = [
  {
    key: 'netflix',
    name: 'Netflix',
    tagline: 'Groesste Bibliothek an Originals und Lizenzserien',
    priceFromEUR: 4.99,
    highlights: [
      'Originals wie Stranger Things oder Squid Game',
      'Bis zu 4K HDR im Premium-Tarif',
      'Profile, Kindersicherung, Downloads'
    ],
    bestFor: 'Vielserienseher, Familien, internationale Inhalte.',
    affiliate: { key: 'netflix', network: 'direct', fallbackUrl: 'https://www.netflix.com/de/' },
    rating: 4.4,
    pros: [
      'Groesste Originals-Bibliothek im DACH-Raum',
      'Sehr ausgereifte App auf jeder Plattform',
      '5 Profile + Kindersicherung serienmaessig',
      'Stabile 4K-Qualitaet (im Premium-Tarif)',
      'Internationale Hits zuerst hier'
    ],
    cons: [
      'Werbe-Tarif ohne Downloads und ohne 4K',
      'Preiserhoehungen im Jahresrhythmus',
      'Kein Sport, kein Live-TV',
      'Account-Sharing-Restriktionen seit 2023'
    ],
    whoFor: 'Du schaust mehrere Stunden Serien pro Woche, willst aktuelle internationale Originals zuerst sehen und legst Wert auf eine ausgereifte App-Erfahrung.',
    founded: 1997,
    uhdInStandard: false,
    priceTiers: [
      { name: 'Standard mit Werbung', priceEUR: 4.99, note: 'Full HD, 2 Geraete, mit Werbung' },
      { name: 'Standard', priceEUR: 13.99, note: 'Full HD, 2 Geraete, ohne Werbung' },
      { name: 'Premium', priceEUR: 19.99, note: '4K UHD, 4 Geraete, Spatial Audio' }
    ]
  },
  {
    key: 'disney-plus',
    name: 'Disney+',
    tagline: 'Disney, Pixar, Marvel, Star Wars und Star',
    priceFromEUR: 5.99,
    highlights: [
      'Marvel und Star Wars Originals',
      'Family-freundliche Profile',
      '4K UHD und Dolby Atmos inklusive'
    ],
    bestFor: 'Familien und Marvel-/Star-Wars-Fans.',
    affiliate: { key: 'disney-plus', network: 'direct', fallbackUrl: 'https://www.disneyplus.com/de-de' },
    rating: 4.5,
    pros: [
      '4K UHD im Standard-Tarif inklusive',
      'Marvel, Star Wars, Pixar, Disney Klassiker',
      'Bis zu 7 Profile mit Kinder-Modus',
      'Star-Bibliothek fuer Erwachsene'
    ],
    cons: [
      'Weniger neue Erwachsenen-Originals als Netflix',
      'Werbe-Tarif weniger flexibel',
      'Wenige Live-Events (nur ESPN-Highlights)',
      'App-UI weniger ausgereift als Netflix'
    ],
    whoFor: 'Familien mit Kindern, Marvel-/Star-Wars-Fans und Cineasten, die Pixar- und Disney-Klassiker in 4K wollen.',
    founded: 2019,
    uhdInStandard: true,
    priceTiers: [
      { name: 'Standard mit Werbung', priceEUR: 5.99, note: 'Full HD, 2 Geraete, mit Werbung' },
      { name: 'Standard', priceEUR: 9.99, note: 'Full HD, 2 Geraete, werbefrei' },
      { name: 'Premium', priceEUR: 13.99, note: '4K UHD, 4 Geraete, Dolby Atmos' }
    ]
  },
  {
    key: 'wow',
    name: 'WOW',
    tagline: 'Sky-Inhalte ohne Vertragsbindung - Sport, Filme, Serien',
    priceFromEUR: 9.98,
    highlights: [
      'HBO-Serien (House of the Dragon, The Last of Us)',
      'Bundesliga und Champions League (im Sport-Paket)',
      'Monatlich kuendbar'
    ],
    bestFor: 'HBO-Fans und Sportzuschauer ohne Sky-Vertrag.',
    affiliate: { key: 'wow', network: 'awin', fallbackUrl: 'https://www.wowtv.de/', awinMerchantId: '20982' },
    sport: true,
    rating: 4.1,
    pros: [
      'HBO-Premium-Serien exklusiv',
      'Bundesliga-Samstag (Konferenz + Topspiel)',
      'Premier League und Formel 1',
      'Monatlich kuendbar (anders als Sky-Vertrag)'
    ],
    cons: [
      'Keine Werbefreiheit im Standard',
      'Kein eigener 4K-Tarif fuer Filme/Serien',
      'Sport-Paket separat zu zahlen',
      'Streaming-Qualitaet bei Sport gelegentlich Stuttering'
    ],
    whoFor: 'Sportfans (vor allem Bundesliga-Samstag und Premier League) und HBO-Liebhaber, die keinen langfristigen Sky-Vertrag wollen.',
    founded: 2022,
    uhdInStandard: false,
    priceTiers: [
      { name: 'WOW Filme und Serien', priceEUR: 9.98, note: 'Filme + Serien-Bibliothek' },
      { name: 'WOW Live-Sport', priceEUR: 29.99, note: 'Bundesliga + Premier League + F1' },
      { name: 'Komplett-Paket', priceEUR: 39.99, note: 'Filme, Serien und Sport' }
    ]
  },
  {
    key: 'dazn',
    name: 'DAZN',
    tagline: 'Live-Sport: Fussball, Boxen, NFL, MotoGP',
    priceFromEUR: 24.99,
    highlights: [
      'Bundesliga-Topspiele Freitag/Sonntag',
      'Champions League Dienstags-Top-Pick',
      'NFL, MotoGP, Boxen, Tennis'
    ],
    bestFor: 'Sportfans, die mehr als nur Fussball sehen wollen.',
    affiliate: { key: 'dazn', network: 'direct', fallbackUrl: 'https://www.dazn.com/de-DE/' },
    sport: true,
    rating: 4.0,
    pros: [
      'Champions League Dienstags-Topspiel exklusiv',
      'Bundesliga Freitag, Sonntag, Topspiele',
      'NFL komplett, MotoGP, Boxen-Topkampf',
      'Multi-View und Live-Stats'
    ],
    cons: [
      'Hoechster Einstiegspreis im Streaming-Markt',
      'Kein 4K (nur Full HD)',
      'Jahresvertrag mit Strafgebuehren bei Kuendigung',
      'Preiserhoehungen sehr haeufig'
    ],
    whoFor: 'Hardcore-Sportfans, die ALLE grossen Live-Events sehen wollen - Bundesliga, Champions League, NFL, MotoGP, Boxen und mehr.',
    founded: 2016,
    uhdInStandard: false,
    priceTiers: [
      { name: 'DAZN Unlimited Monatlich', priceEUR: 44.99, note: 'Komplettes Paket monatlich' },
      { name: 'DAZN Unlimited Jaehrlich', priceEUR: 24.99, note: 'Komplettes Paket im Jahresabo' },
      { name: 'DAZN World', priceEUR: 9.99, note: 'Internationale Sportarten' }
    ]
  },
  {
    key: 'prime-video',
    name: 'Prime Video',
    tagline: 'Inklusive bei Prime + zubuchbare Channels',
    priceFromEUR: 8.99,
    highlights: [
      'Im Prime-Abo enthalten',
      'Originals wie The Boys und Reacher',
      'Channels (Paramount+, MGM+ usw.) zubuchbar'
    ],
    bestFor: 'Prime-Mitglieder, die Streaming als Bonus wollen.',
    affiliate: { key: 'prime-video', network: 'direct', fallbackUrl: 'https://www.amazon.de/gp/video/storefront' },
    rating: 4.2,
    pros: [
      'Inklusive bei Prime (lohnt sich doppelt)',
      'Channels-Marketplace flexibel',
      'Solide Originals (The Boys, Reacher, Fallout)',
      '4K bei vielen Originals ohne Aufpreis'
    ],
    cons: [
      'Werbe-Standard im neuen Tarif',
      'Channels-Buchung verteuert das Bundle schnell',
      'UI ist mit Marketplace-Inhalten ueberladen',
      'Weniger neue internationale Hits als Netflix'
    ],
    whoFor: 'Du bist eh Prime-Mitglied (Versand) oder magst Channels-Flexibilitaet: einen Monat Paramount+, einen Monat MGM+, kuendbar.',
    founded: 2006,
    uhdInStandard: false,
    priceTiers: [
      { name: 'Prime Video Standalone', priceEUR: 9.99, note: 'Mit Werbung, ohne andere Prime-Vorteile' },
      { name: 'Amazon Prime', priceEUR: 8.99, note: 'Mit Versand-Vorteilen, Music, etc.' },
      { name: 'Werbefrei-Aufpreis', priceEUR: 2.99, note: 'Zusaetzlich zum Prime-Abo' }
    ]
  },
  {
    key: 'apple-tv-plus',
    name: 'Apple TV+',
    tagline: 'Hochwertige Originals in 4K Dolby Vision',
    priceFromEUR: 9.99,
    highlights: [
      'Ted Lasso, Severance, For All Mankind',
      'Sehr hohe Bild-/Tonqualitaet',
      'Werbefrei'
    ],
    bestFor: 'Cineasten, die kuratierte Originals statt Masse wollen.',
    affiliate: { key: 'apple-tv-plus', network: 'direct', fallbackUrl: 'https://tv.apple.com/de' },
    rating: 4.3,
    pros: [
      '4K Dolby Vision serienmaessig (kein Aufpreis)',
      'Werbefrei in jedem Tarif',
      'Premium-Originals (Severance, Ted Lasso, Foundation)',
      'Sauberes UI, keine Cluttered-Werbeflaechen'
    ],
    cons: [
      'Sehr kleine Bibliothek (nur Originals)',
      'Keine Lizenz-Filme der grossen Studios',
      'Werbung fuer Apple-Hardware in der App',
      'Browser-Streaming weniger gut als App'
    ],
    whoFor: 'Cineasten, die Premium-Qualitaet pro Titel statt Masse wollen - und die das Apple-Oekosystem nutzen.',
    founded: 2019,
    uhdInStandard: true,
    priceTiers: [
      { name: 'Apple TV+', priceEUR: 9.99, note: 'Alle Inhalte, 4K Dolby Vision, werbefrei' },
      { name: 'Apple One Individual', priceEUR: 19.95, note: 'Mit Music, iCloud+, Arcade' },
      { name: 'Apple One Family', priceEUR: 25.95, note: 'Familien-Bundle fuer bis zu 6 Personen' }
    ]
  }
];

export const providerByKey = (key: string): Provider | undefined =>
  providers.find((p) => p.key === key);
