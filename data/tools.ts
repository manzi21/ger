export interface ToolPage {
  slug: string;
  title: string;
  metaDescription: string;
  intro: string;
  /** Inhalts-Abschnitte. */
  sections: Array<{ heading: string; body: string[] }>;
  faq: Array<{ q: string; a: string }>;
  publishedISO: string;
  updatedISO: string;
}

export const tools: ToolPage[] = [
  {
    slug: 'streaming-kosten-rechner',
    title: 'Streaming-Kosten-Rechner: So viel zahlen deutsche Haushalte 2026',
    metaDescription:
      'Wie viel kostet dich Streaming wirklich pro Jahr? Unser einfacher Rechner addiert deine Abos – und zeigt Sparpotenzial.',
    intro:
      'Drei, vier, fünf Streaming-Abos – und am Monatsende ist der Geldbeutel leerer als gedacht. Mit dieser Übersicht bekommst du Klarheit über deine echten Streaming-Kosten und siehst sofort, wo du sparen kannst.',
    sections: [
      {
        heading: 'So nutzt du den Rechner',
        body: [
          'Trage in deinem Kopf (oder Notizbuch) deine aktiven Abos ein – mit dem jeweiligen Monatspreis. Multipliziere mit 12. So bekommst du deine Streaming-Jahreskosten.',
          'Beispiel: Netflix 13,99 € + Disney+ 5,99 € + WOW 9,98 € + Prime Video (in Prime 8,99 €) = ~ 39 € pro Monat = ~ 468 € pro Jahr.'
        ]
      },
      {
        heading: 'Spar-Tipps für deutsche Haushalte',
        body: [
          'Rotiere statt zu parallelisieren: ein Monat Disney+, dann ein Monat Netflix. Fast alle Anbieter sind monatlich kündbar.',
          'Nutze Familienprofile statt mehrerer Abos – aber nur, wenn die AGB es im selben Haushalt erlauben.',
          'Prüfe Jahres-Tarife mit Rabatt für Dienste, die du dauerhaft nutzt. Spart oft 15–20 %.'
        ]
      }
    ],
    faq: [
      {
        q: 'Wie viel geben deutsche Haushalte durchschnittlich für Streaming aus?',
        a: 'Der Schnitt liegt 2026 bei rund 25–35 € pro Monat über alle Abos – plus Sport-Streaming bei Sportfans.'
      },
      {
        q: 'Lohnen sich Bundle-Angebote?',
        a: 'Manchmal. Vodafone, Telekom oder O2 bieten gelegentlich Streaming-Bundles. Rechne immer den Einzelpreis dagegen, sonst zahlst du drauf.'
      }
    ],
    publishedISO: '2026-03-01T00:00:00Z',
    updatedISO: '2026-04-15T00:00:00Z'
  },
  {
    slug: 'welcher-streaming-dienst-passt-zu-mir',
    title: 'Welcher Streaming-Dienst passt zu mir? Ein 60-Sekunden-Leitfaden',
    metaDescription:
      'Du weißt nicht, welcher Streaming-Dienst zu dir passt? In 60 Sekunden zur klaren Empfehlung – nach deinem Profil.',
    intro:
      'Netflix, Disney+, WOW, DAZN, Prime, Apple TV+ – sechs große Player, die alle behaupten, der „beste" zu sein. Mit unserem Leitfaden findest du in einer Minute, welcher Dienst zu deinem Profil passt.',
    sections: [
      {
        heading: 'Frage 1: Was schaust du am meisten?',
        body: [
          '→ Aktuelle internationale Serien? **Netflix.**',
          '→ Familie + Marvel + Star Wars? **Disney+.**',
          '→ Bundesliga, Champions League, NFL, Boxen? **DAZN.**',
          '→ Premier League, Formel 1, Bundesliga-Konferenz, HBO-Serien? **WOW.**',
          '→ Bonus-Streaming + flexible Channels? **Prime Video.**',
          '→ Premium-Originals in 4K Dolby Vision? **Apple TV+.**'
        ]
      },
      {
        heading: 'Frage 2: Wie wichtig ist Bildqualität?',
        body: [
          'Sehr wichtig: Disney+ und Apple TV+ liefern 4K standardmäßig.',
          'Wichtig: Netflix Premium oder Prime Video.',
          'Egal: Netflix Standard oder DAZN Standard reichen.'
        ]
      },
      {
        heading: 'Frage 3: Wie viel willst du im Monat ausgeben?',
        body: [
          'Bis 10 €: Disney+ allein oder Netflix-Werbe-Tarif.',
          'Bis 25 €: ein Hauptdienst + ein Bonus (z. B. Netflix + Prime Video).',
          'Bis 50 €: Komplett-Setup mit Sport (Netflix + WOW + DAZN).'
        ]
      }
    ],
    faq: [
      {
        q: 'Welcher Streaming-Dienst hat die größte Bibliothek?',
        a: 'Netflix gemessen an der reinen Anzahl an Titeln. Prime Video ist mit Channels-Erweiterung ähnlich groß.'
      },
      {
        q: 'Welcher Dienst ist am familienfreundlichsten?',
        a: 'Disney+ – sowohl bei Inhalten als auch bei Profilrechten.'
      }
    ],
    publishedISO: '2026-03-10T00:00:00Z',
    updatedISO: '2026-04-15T00:00:00Z'
  }
];

export const toolBySlug = (slug: string): ToolPage | undefined =>
  tools.find((t) => t.slug === slug);
