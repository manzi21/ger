export interface Audience {
  slug: string;
  label: string;
  tagline: string;
  intro: string;
  recommendedProviders: string[];
  recommendedVpn?: string;
  budget: string;
  reasons: string[];
  avoidReasons: string[];
}

export const audiences: Audience[] = [
  {
    slug: 'familie',
    label: 'Familien mit Kindern',
    tagline: 'Streaming fuer die ganze Familie - sicher und altersgerecht',
    intro: 'Familien brauchen Streaming-Angebote mit kindgerechten Inhalten, robusten Profil-Funktionen und Kindersicherung. Wir empfehlen die besten Dienste fuer Eltern.',
    recommendedProviders: ['disney-plus', 'netflix', 'prime-video'],
    recommendedVpn: 'cyberghost',
    budget: '15-25 EUR/Monat',
    reasons: ['Disney+ liefert die groesste familienfreundliche Bibliothek', 'Kinderprofile mit strenger Kontrolle', 'Marvel und Star Wars fuer aeltere Kinder', '4K UHD ohne Aufpreis bei Disney+'],
    avoidReasons: ['Sportabos wie DAZN sind fuer Familien selten sinnvoll', 'Apple TV+ hat zu wenige Kinderinhalte']
  },
  {
    slug: 'sport-fans',
    label: 'Sport-Fans',
    tagline: 'Bundesliga, Champions League, NFL: alle Top-Sport-Events 2026',
    intro: 'Wer alle grossen Live-Sportereignisse sehen will, kommt um die Kombination DAZN + WOW nicht herum. Wir erklaeren, wie du dein Sport-Setup aufbaust.',
    recommendedProviders: ['dazn', 'wow', 'prime-video'],
    recommendedVpn: 'expressvpn',
    budget: '40-60 EUR/Monat',
    reasons: ['DAZN bringt Champions League Dienstags und alle deutschen UEFA-Spiele', 'WOW bietet Bundesliga Samstag und Premier League', 'NFL und MotoGP exklusiv bei DAZN', 'VPN fuer EU-Reisen mit deutschem Abo'],
    avoidReasons: ['Disney+ und Apple TV+ ohne Sport-Inhalte', 'Netflix ist fuer Sportfans nutzlos']
  },
  {
    slug: 'kinder',
    label: 'Kinder',
    tagline: 'Sichere Streaming-Angebote fuer Kinder unter 12',
    intro: 'Kinder brauchen kuratierte, altersgerechte Inhalte und keine Werbeblasen. Wir empfehlen die kindersichersten Plattformen 2026.',
    recommendedProviders: ['disney-plus', 'netflix'],
    budget: '6-10 EUR/Monat',
    reasons: ['Disney+ Kinder-Modus mit komplettem Lockdown', 'Netflix Kids mit kuratierten Inhalten', 'Auch Mediatheken (KiKA, Kindernetz) kostenlos legal'],
    avoidReasons: ['Prime Video hat keinen sauberen Kinder-Modus', 'WOW und DAZN ohne Kinder-Inhalte']
  },
  {
    slug: 'rentner',
    label: 'Rentner und Senioren',
    tagline: 'Einfaches Streaming fuer Senioren - klar, guenstig, ohne Stolperfallen',
    intro: 'Senioren wollen klare Apps, gute Bedienbarkeit, und keine Abo-Fallen. Wir empfehlen die einsteigerfreundlichsten Anbieter und sagen, was zu vermeiden ist.',
    recommendedProviders: ['netflix', 'prime-video'],
    recommendedVpn: 'cyberghost',
    budget: '10-15 EUR/Monat',
    reasons: ['Netflix-App ist auf jeder Plattform identisch und einfach', 'Prime Video bei vielen schon im Prime-Abo', 'CyberGhost mit deutscher App und Telefon-Support'],
    avoidReasons: ['DAZN und WOW haben unuebersichtliche Tarif-Strukturen', 'Channel-Dschungel bei Prime Video kann ueberfordern']
  },
  {
    slug: 'studenten',
    label: 'Studierende',
    tagline: 'Streaming auf Studi-Budget - maximaler Wert fuer kleines Geld',
    intro: 'Studierende mit kleinem Budget bekommen mit ein paar Tricks viel Streaming. Wir zeigen die guenstigsten Optionen plus VPN fuer WG-Sicherheit.',
    recommendedProviders: ['disney-plus', 'prime-video', 'netflix'],
    recommendedVpn: 'surfshark',
    budget: '10-15 EUR/Monat',
    reasons: ['Disney+ liefert 4K im Standard-Tarif', 'Prime Student deutlich guenstiger als Prime', 'Surfshark erlaubt unbegrenzte Geraete (perfekt fuer WG)'],
    avoidReasons: ['DAZN unbezahlbar fuer Studi-Budget', 'Apple TV+ hat zu wenig Inhalte fuer den Preis']
  },
  {
    slug: 'wenig-zeit',
    label: 'Vielbeschaeftigte',
    tagline: 'Streaming fuer Menschen mit wenig Freizeit - Premium statt Masse',
    intro: 'Wer nur ein, zwei Stunden pro Woche schaut, sollte auf kuratierte Premium-Inhalte setzen statt auf riesige Bibliotheken. Wir zeigen die Anbieter mit dem hoechsten Premium-Anteil.',
    recommendedProviders: ['apple-tv-plus', 'disney-plus'],
    budget: '10-15 EUR/Monat',
    reasons: ['Apple TV+ kuratiert nur Premium-Originals', 'Hoechste Bild- und Tonqualitaet', 'Keine Zeitverschwendung mit schlechten Inhalten'],
    avoidReasons: ['Netflix und Prime Video bieten zu viele mittelmaessige Inhalte', 'Sport-Abos lohnen sich nicht ohne Live-Zeit']
  },
  {
    slug: 'vielseher',
    label: 'Serien-Vielseher',
    tagline: 'Maximale Bibliothek fuer Marathon-Sessions',
    intro: 'Wer mehrere Serien parallel schaut und gerne Marathon-Sessions macht, braucht maximale Bibliotheks-Tiefe. Wir empfehlen die Anbieter mit den meisten Stunden Inhalt.',
    recommendedProviders: ['netflix', 'prime-video', 'disney-plus'],
    recommendedVpn: 'nordvpn',
    budget: '25-40 EUR/Monat',
    reasons: ['Netflix mit groesstem Originals-Volumen', 'Prime Video Channels erweitern Bibliothek dauerhaft', 'Disney+ mit komplettem Marvel/Star Wars Universum'],
    avoidReasons: ['Apple TV+ wird zu schnell durchgesehen', 'WOW und DAZN sind nicht fuer Bibliotheks-Surfen gedacht']
  },
  {
    slug: 'sparfuechse',
    label: 'Spar-Fuechse',
    tagline: 'Streaming maximieren bei minimalen Kosten',
    intro: 'Mit der richtigen Strategie kannst du fuer unter 10 Euro pro Monat erstklassiges Streaming bekommen. Wir zeigen die Tricks: rotierende Abos, Werbe-Tarife, Mediatheken.',
    recommendedProviders: ['disney-plus', 'prime-video'],
    recommendedVpn: 'cyberghost',
    budget: 'unter 10 EUR/Monat',
    reasons: ['Werbe-Tarife sparen 40-60 Prozent', 'Rotierende Monats-Abos statt parallele Mehrfach-Buchungen', 'Mediatheken ARD/ZDF/Arte komplett kostenfrei legal'],
    avoidReasons: ['Premium-VPNs ohne Bedarf', 'Mehrere Sport-Abos parallel']
  }
];

export const audienceBySlug = (slug: string): Audience | undefined =>
  audiences.find((a) => a.slug === slug);
