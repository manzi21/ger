export interface Comparison {
  slug: string;
  left: string; // provider key
  right: string; // provider key
  title: string;
  metaDescription: string;
  intro: string;
  verdict: string;
  winner: 'left' | 'right' | 'tie';
  bestForLeft: string;
  bestForRight: string;
  /** Tabellenzeilen [Kriterium, links, rechts]. */
  table: Array<[string, string, string]>;
  faq: Array<{ q: string; a: string }>;
}

export const comparisons: Comparison[] = [
  {
    slug: 'dazn-vs-wow',
    left: 'dazn',
    right: 'wow',
    title: 'DAZN vs. WOW: Welcher Sport-Streamingdienst lohnt sich 2026?',
    metaDescription:
      'DAZN vs. WOW im direkten Vergleich: Bundesliga, Champions League, Preise, Bildqualität und Vertragsbindung. Plus klare Empfehlung für Sportfans.',
    intro:
      'Sportfans in Deutschland stehen vor einer klaren Entscheidung: DAZN oder WOW? Beide Anbieter teilen sich einen Großteil der Premium-Sportrechte – doch sie decken sehr unterschiedliche Schwerpunkte ab. Wir vergleichen Inhalte, Preise und Komfort, damit du genau weißt, welches Abo zu dir passt.',
    verdict:
      'DAZN ist die bessere Wahl für Vielseher, die mehr als nur Fußball schauen. WOW (Sky) bleibt die erste Adresse für Bundesliga-Samstage und Premier League. Wer beides will, kommt an einer Kombination beider Dienste nicht vorbei.',
    winner: 'tie',
    bestForLeft:
      'Champions-League-Topspiel-Dienstag, Freitag- und Sonntagsspiele der Bundesliga, NFL, Boxen, MotoGP.',
    bestForRight:
      'Bundesliga Konferenz und Samstag-Topspiel, Premier League, Formel 1, Rennsportwochenenden.',
    table: [
      ['Bundesliga', 'Freitag, Sonntag, Topspiele', 'Samstag-Konferenz + Topspiel'],
      ['Champions League', 'Dienstags-Topspiel + alle dt. Spiele', '–'],
      ['Premier League', '–', 'Komplett'],
      ['Formel 1', '–', 'Komplett'],
      ['NFL / Boxen / MotoGP', 'Inklusive', 'Begrenzt / nur Highlights'],
      ['Einstiegspreis', 'ab 24,99 €/Monat', 'ab 9,98 €/Monat'],
      ['Vertragslaufzeit', 'monatlich oder jährlich', 'monatlich kündbar'],
      ['Bildqualität', 'bis Full HD', 'bis 4K (Aufpreis)']
    ],
    faq: [
      {
        q: 'Kann ich Bundesliga komplett mit nur einem Dienst sehen?',
        a: 'Nein. Die Rechte sind in Deutschland zwischen DAZN und WOW (Sky) aufgeteilt. Wer alle Spiele live sehen will, braucht beide Abos.'
      },
      {
        q: 'Welcher Dienst ist günstiger für Gelegenheitsschauer?',
        a: 'WOW – das Sport-Monatsabo ist deutlich günstiger und monatlich kündbar, ideal für einzelne Saisonphasen.'
      },
      {
        q: 'Brauche ich für DAZN oder WOW ein VPN?',
        a: 'Im Inland nicht. Auf Reisen kannst du mit einem VPN dein deutsches Abo wie gewohnt nutzen, sofern es die AGB erlauben (z. B. EU-Portabilität).'
      }
    ]
  },
  {
    slug: 'disney-plus-vs-netflix',
    left: 'disney-plus',
    right: 'netflix',
    title: 'Disney+ vs. Netflix: Welcher Streamingdienst hat 2026 mehr zu bieten?',
    metaDescription:
      'Disney+ vs. Netflix: Bibliothek, Originals, Preise, Bildqualität und Familientauglichkeit im direkten Vergleich. Plus klare Empfehlung.',
    intro:
      'Disney+ und Netflix dominieren das Streaming-Geschäft in Deutschland – aber mit sehr unterschiedlichen Bibliotheken. Während Disney+ auf etablierte IPs (Marvel, Star Wars, Pixar) setzt, lebt Netflix von Volumen und neuen Originals. Wir zeigen, welcher Dienst zu welchem Profil passt.',
    verdict:
      'Disney+ punktet bei Familien, Marvel- und Star-Wars-Fans. Netflix bleibt die erste Wahl für Vielserienseher und international Interessierte. Für viele ist die Antwort: beides – aber wenn du dich entscheiden musst, hängt es vor allem an deinem Inhaltsschwerpunkt.',
    winner: 'tie',
    bestForLeft: 'Familien, Marvel & Star Wars, hochwertige Pixar-Filme.',
    bestForRight: 'Vielseher, internationale Serien, breite Genre-Abdeckung.',
    table: [
      ['Originals', 'Marvel, Star Wars, Pixar, Star', 'Stranger Things, Squid Game u. v. m.'],
      ['Familien-Inhalte', 'Sehr stark', 'Stark, eigener Familien-Modus'],
      ['Sport', '–', '–'],
      ['Einstiegspreis', 'ab 5,99 €/Monat', 'ab 4,99 €/Monat (Werbe-Tarif)'],
      ['4K UHD', 'inklusive', 'nur im Premium-Tarif'],
      ['Geräteprofile', 'bis 7 Profile', 'bis 5 Profile'],
      ['Werbefreiheit', 'gegen Aufpreis', 'gegen Aufpreis']
    ],
    faq: [
      {
        q: 'Welcher Dienst ist familienfreundlicher?',
        a: 'Disney+. Die Inhaltsbibliothek ist von Haus aus stärker auf Kinder und Familien ausgelegt, und die Profilrechte sind streng konfigurierbar.'
      },
      {
        q: 'Lohnt sich ein gemeinsames Abo für beide Dienste?',
        a: 'Wenn du sowohl Marvel/Star Wars als auch internationale Serien wie „Squid Game" liebst, ja. Sonst reicht oft einer der beiden – orientiere dich an deinem Lieblings-Genre.'
      },
      {
        q: 'Kann ich Disney+ oder Netflix offline schauen?',
        a: 'Beide bieten Downloads in den meisten Tarifen an – ideal für Reisen oder unterwegs.'
      }
    ]
  },
  {
    slug: 'netflix-vs-prime-video',
    left: 'netflix',
    right: 'prime-video',
    title: 'Prime Video vs. Netflix: Lohnt sich ein zusätzliches Netflix-Abo?',
    metaDescription:
      'Prime Video vs. Netflix im Vergleich: Originals, Preise, Bildqualität, Channels und Bibliothek. Welcher Dienst hat 2026 die Nase vorn?',
    intro:
      'Prime Video kommt für viele „kostenlos" mit dem Prime-Abo. Aber reicht das, oder brauchst du Netflix zusätzlich? Wir vergleichen Bibliothek, Originals, Bildqualität und Preis-Leistung – inklusive der Channels-Strategie von Amazon.',
    verdict:
      'Wenn du bereits Prime hast, ist Prime Video ein Pflicht-Bonus. Netflix bleibt aber durch die schiere Menge an Originals und internationalen Serien der inhaltlich stärkere Standalone-Dienst.',
    winner: 'right',
    bestForLeft:
      'Vielseher, Originals-Fans, internationale Serien, Genre-Vielfalt.',
    bestForRight:
      'Prime-Mitglieder, Channel-Käufer, gelegentliche Streaming-Nutzer.',
    table: [
      ['Im Abo enthalten?', 'Eigenständiges Abo', 'Inklusive bei Prime'],
      ['Originals', 'Sehr stark', 'Solid (The Boys, Reacher, Fallout)'],
      ['Channels-System', '–', 'Paramount+, MGM+, Discovery+ etc.'],
      ['4K UHD', 'nur im Premium-Tarif', 'in vielen Inhalten enthalten'],
      ['Einstiegspreis', 'ab 4,99 €/Monat', 'inklusive bei Prime (8,99 €)'],
      ['Werbung', 'im günstigsten Tarif', 'standardmäßig (gegen Aufpreis werbefrei)']
    ],
    faq: [
      {
        q: 'Reicht Prime Video als einziger Streaming-Dienst?',
        a: 'Für Gelegenheitsschauer oft ja – vor allem mit Channels. Wer aber jede Woche neue Serien will, kommt mit Netflix breiter weg.'
      },
      {
        q: 'Bekomme ich Prime Video ohne Prime-Abo?',
        a: 'Ja, als „Prime Video Standalone" – allerdings ohne die anderen Prime-Vorteile.'
      },
      {
        q: 'Ist Prime Video in 4K?',
        a: 'Viele Originals und ausgewählte Lizenztitel sind in 4K verfügbar – ohne Aufpreis.'
      }
    ]
  }
];

export const comparisonBySlug = (slug: string): Comparison | undefined =>
  comparisons.find((c) => c.slug === slug);
