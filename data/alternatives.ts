export interface AlternativePage {
  slug: string;
  /** Anbieter, zu dem Alternativen gesucht werden. */
  forProvider: string;
  title: string;
  metaDescription: string;
  intro: string;
  /** Anbieter-Keys, in Empfehlungsreihenfolge. */
  alternatives: string[];
  faq: Array<{ q: string; a: string }>;
}

export const alternativePages: AlternativePage[] = [
  {
    slug: 'netflix',
    forProvider: 'netflix',
    title: 'Netflix Alternativen 2026: Diese 5 Streaming-Dienste sind die echten Konkurrenten',
    metaDescription:
      'Welche Streaming-Anbieter sind die besten Netflix-Alternativen in Deutschland? Wir vergleichen Disney+, WOW, Prime Video, Apple TV+ und mehr.',
    intro:
      'Netflix ist nicht mehr der einzige Player im Markt. Wer monatlich sparen oder einfach andere Inhalte sehen will, findet inzwischen mehrere starke Alternativen. Wir zeigen, welche Anbieter inhaltlich und preislich wirklich mit Netflix mithalten können.',
    alternatives: ['disney-plus', 'wow', 'prime-video', 'apple-tv-plus'],
    faq: [
      {
        q: 'Welche Netflix-Alternative hat die meisten Originals?',
        a: 'Disney+ – durch Marvel, Star Wars und Pixar. Apple TV+ liegt bei Premium-Qualität pro Titel oft sogar vorn.'
      },
      {
        q: 'Gibt es eine kostenlose Netflix-Alternative?',
        a: 'Komplett kostenlos und legal: die Mediatheken von ARD, ZDF und Arte. Werbefinanziert: Pluto TV oder Freevee.'
      },
      {
        q: 'Lohnen sich mehrere Streaming-Abos parallel?',
        a: 'Häufig ja, wenn man monatlich rotiert – z. B. einen Monat Disney+, dann einen Monat WOW, dann Netflix. Alle Dienste sind monatlich kündbar.'
      }
    ]
  }
];

export const alternativeBySlug = (slug: string): AlternativePage | undefined =>
  alternativePages.find((a) => a.slug === slug);
