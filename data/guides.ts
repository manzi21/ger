export interface GuideSection {
  heading: string;
  body: string[]; // Absätze
}

export interface Guide {
  slug: string;
  title: string;
  metaDescription: string;
  intro: string;
  /** Anbieter-Keys, die im Guide referenziert werden. */
  highlightedProviders?: string[];
  /** VPN-Keys, die im Guide referenziert werden. */
  highlightedVpns?: string[];
  sections: GuideSection[];
  faq: Array<{ q: string; a: string }>;
  publishedISO: string;
  updatedISO: string;
}

export const guides: Guide[] = [
  {
    slug: 'beste-streaming-anbieter-deutschland',
    title: 'Die besten Streaming-Anbieter in Deutschland 2026',
    metaDescription:
      'Welcher Streamingdienst ist 2026 in Deutschland am besten? Vergleich von Netflix, Disney+, WOW, DAZN, Prime Video und Apple TV+ – mit klarer Empfehlung pro Profil.',
    intro:
      'Der deutsche Streaming-Markt ist 2026 unübersichtlicher denn je. Sechs große Plattformen, drei Sport-Inseln und unterschiedliche Tarif-Konstrukte – wir geben dir den Überblick und sagen, welcher Anbieter zu welchem Zuschauer-Profil passt.',
    highlightedProviders: ['netflix', 'disney-plus', 'wow', 'dazn', 'prime-video', 'apple-tv-plus'],
    sections: [
      {
        heading: 'Was zeichnet einen guten Streaming-Anbieter aus?',
        body: [
          'Die Inhalte sind das wichtigste Kriterium – ein Streamingdienst lebt von seinen Originals und Lizenzen. Achte darauf, ob deine Lieblings-Genres (Serien, Sport, Familien-Filme) regelmäßig erweitert werden.',
          'Ebenfalls relevant: Bildqualität (Full HD, 4K, HDR), die Anzahl gleichzeitiger Streams, Profilfunktionen und natürlich der Preis. Vertragslaufzeit ist 2026 kein großes Thema mehr – fast alle Anbieter sind monatlich kündbar.'
        ]
      },
      {
        heading: 'Die wichtigsten Anbieter im Überblick',
        body: [
          'Netflix bleibt die Nummer eins für Vielserienseher und internationale Inhalte. Disney+ ist Pflicht für Marvel-, Star-Wars- und Pixar-Fans. WOW liefert HBO-Premium-Serien plus Bundesliga-Samstag, DAZN den Rest des Sport-Pakets.',
          'Prime Video ist als Bonus zum Prime-Abo extrem rentabel und bietet mit Channels eine flexible Erweiterung. Apple TV+ punktet mit kuratierten Premium-Originals in höchster Bildqualität.'
        ]
      },
      {
        heading: 'Welche Anbieter solltest du kombinieren?',
        body: [
          'Eine schlanke Standardkombination für deutsche Haushalte: Netflix oder Disney+ als Hauptdienst, plus Prime Video als „Inklusive-Bonus". Für Sportfans kommt WOW oder DAZN dazu (oder beides für komplette Bundesliga).',
          'Wer Apple-Hardware nutzt, sollte Apple TV+ einmal jährlich für eine Serien-Phase abonnieren – die Originals lohnen sich.'
        ]
      },
      {
        heading: 'Worauf achten beim Abschluss?',
        body: [
          'Aktivieren Sie immer ein neues Profil pro Person, prüfen Sie die Datenschutzeinstellungen, und kündigen Sie ungenutzte Abos diszipliniert. Viele Anbieter bieten jährliche Tarife mit Rabatt – sinnvoll, wenn der Dienst zur Daueraddresse wird.',
          'Affiliate-Hinweis: Wir empfehlen ausschließlich Dienste, die wir selbst getestet haben oder deren Funktionsumfang wir am Live-Angebot überprüft haben.'
        ]
      }
    ],
    faq: [
      {
        q: 'Welcher Streamingdienst ist 2026 der beste in Deutschland?',
        a: 'Es gibt keinen "besten" – Netflix für Vielseher, Disney+ für Familien, WOW + DAZN für Sport. Die richtige Wahl hängt von deinem Inhaltsschwerpunkt ab.'
      },
      {
        q: 'Wie viele Streamingdienste lohnen sich parallel?',
        a: 'Für die meisten Haushalte zwei: ein "Hauptdienst" (Netflix oder Disney+) plus Prime Video als Bonus. Sportfans kommen meist auf drei.'
      },
      {
        q: 'Welcher Anbieter hat das beste Preis-Leistungs-Verhältnis?',
        a: 'Prime Video, sofern du ohnehin Prime-Mitglied bist. Standalone gewinnt Disney+ mit 4K UHD inklusive im Standard-Tarif.'
      },
      {
        q: 'Welche Anbieter sind monatlich kündbar?',
        a: 'Praktisch alle relevanten Streamingdienste in Deutschland (Netflix, Disney+, WOW, DAZN-Monatsabo, Prime Video, Apple TV+) sind monatlich kündbar.'
      }
    ],
    publishedISO: '2026-01-15T00:00:00Z',
    updatedISO: '2026-04-15T00:00:00Z'
  },
  {
    slug: 'beste-vpns-fuer-streaming-deutschland',
    title: 'Die besten VPNs für sicheres Streaming in Deutschland 2026',
    metaDescription:
      'Welches VPN ist 2026 für deutsche Streaming-Nutzer das beste? NordVPN, Surfshark, ExpressVPN und CyberGhost im fairen Vergleich – legal, transparent, sicher.',
    intro:
      'Ein VPN gehört für viele zur Grundausstattung im Heimnetzwerk – aus gutem Grund. Es schützt deine Privatsphäre, sichert öffentliche WLANs und macht Reisen mit deinem deutschen Streaming-Abo (innerhalb der EU-Portabilität) komfortabler. Welche Anbieter sind 2026 wirklich gut?',
    highlightedVpns: ['nordvpn', 'surfshark', 'expressvpn', 'cyberghost'],
    sections: [
      {
        heading: 'Wozu ein VPN beim Streaming?',
        body: [
          'Ein VPN verschlüsselt deinen gesamten Internetverkehr. Das ist sinnvoll, wenn du in Cafés oder Hotels öffentliche WLANs nutzt, deine Privatsphäre vor Trackern und ISPs schützen oder Phishing reduzieren willst.',
          'Wir empfehlen VPNs niemals zur Umgehung von Geo-Sperren, die gegen die AGB eines Streaming-Dienstes verstoßen würden. Innerhalb der EU greift die Portabilitätsverordnung – dein deutsches Abo ist im EU-Ausland legal nutzbar.'
        ]
      },
      {
        heading: 'Worauf achten bei der Wahl eines VPN?',
        body: [
          'Wichtige Kriterien: nachweisliche No-Logs-Policy (idealerweise unabhängig auditiert), moderne Protokolle wie WireGuard oder Lightway, Server-Verfügbarkeit in deiner Region, Kill-Switch-Funktion und ein DNS-Leak-Schutz.',
          'Geld-zurück-Garantien (typisch 30 Tage) erlauben es, einen Anbieter risikofrei zu testen. Achte zusätzlich auf Native-Apps für deine Plattformen (Windows, macOS, iOS, Android, Smart-TV).'
        ]
      },
      {
        heading: 'Unsere Top-VPN-Empfehlungen für 2026',
        body: [
          'NordVPN ist unser Spitzenreiter in Sachen Geschwindigkeit, Stabilität und Sicherheits-Features. Surfshark ist die preisbewusste Empfehlung mit unbegrenzten Geräten – ideal für Familien.',
          'ExpressVPN überzeugt durch konstant hohe Geschwindigkeiten weltweit. CyberGhost ist der einsteigerfreundliche Anbieter mit deutschsprachigen Apps und 45 Tagen Geld-zurück-Garantie.'
        ]
      },
      {
        heading: 'Rechtliches & Verantwortung',
        body: [
          'Die Nutzung eines VPN ist in Deutschland uneingeschränkt legal. Verboten bleibt jedoch der Zugriff auf urheberrechtlich geschützte Inhalte ohne Berechtigung – ein VPN ist kein Freibrief für Piraterie.',
          'Halte dich an die AGB deines Streaming-Anbieters. Innerhalb der EU bist du mit dem deutschen Abo dank Portabilitätsverordnung sowieso abgedeckt.'
        ]
      }
    ],
    faq: [
      {
        q: 'Ist die VPN-Nutzung in Deutschland legal?',
        a: 'Ja, vollkommen legal. Verboten sind nur konkrete Handlungen, die unabhängig vom VPN ohnehin rechtswidrig wären (z. B. Urheberrechtsverletzungen).'
      },
      {
        q: 'Welches VPN ist am schnellsten?',
        a: 'In unseren Tests liefert NordVPN über das NordLynx-Protokoll auf der Mehrzahl der Server konstant hohe Geschwindigkeiten. ExpressVPN ist auf Auslandsservern oft noch konstanter.'
      },
      {
        q: 'Kann ich mit einem VPN mein Netflix-Abo überall sehen?',
        a: 'Innerhalb der EU musst du gar kein VPN nutzen – die Portabilitätsverordnung deckt dich ab. Außerhalb der EU greifen die AGB des Streaming-Dienstes – informiere dich vorher.'
      },
      {
        q: 'Sind kostenlose VPNs sicher?',
        a: 'In der Regel nein. Kostenlose Anbieter finanzieren sich häufig durch Datenverkauf oder Werbeinjektion. Wer Datenschutz ernst nimmt, sollte einen seriösen Bezahl-Anbieter wählen.'
      }
    ],
    publishedISO: '2026-02-01T00:00:00Z',
    updatedISO: '2026-04-15T00:00:00Z'
  },
  {
    slug: 'streaming-dienste-vergleich',
    title: 'Streaming-Dienste-Vergleich 2026: Alle Anbieter, Preise und Inhalte auf einen Blick',
    metaDescription:
      'Großer Streaming-Vergleich 2026: Preise, Inhalte, Bildqualität und Vertragslaufzeit aller relevanten Anbieter in Deutschland.',
    intro:
      'Welcher Streaming-Anbieter passt zu dir? Unsere Vergleichstabelle zeigt alle relevanten Dienste in Deutschland mit Preis, Inhaltsschwerpunkt, 4K-Verfügbarkeit und Vertragsbindung – ohne Marketing-Bla.',
    highlightedProviders: ['netflix', 'disney-plus', 'wow', 'dazn', 'prime-video', 'apple-tv-plus'],
    sections: [
      {
        heading: 'Die Tabelle: Streaming auf einen Blick',
        body: [
          'In unserer Tabelle vergleichen wir alle wichtigen Anbieter strukturiert. Beachte, dass Preise sich saisonal ändern – wir aktualisieren die Daten regelmäßig.',
          'Schau dir am Ende dieses Artikels unsere FAQ an: Dort beantworten wir die häufigsten Leserfragen.'
        ]
      },
      {
        heading: 'Welche Tarif-Konstrukte gibt es?',
        body: [
          'Die meisten Anbieter staffeln nach Bildqualität (HD, Full HD, 4K), Anzahl der Geräte und Werbung ja/nein. Disney+ und Apple TV+ liefern 4K standardmäßig, Netflix nur im Premium-Tarif.',
          'WOW erlaubt 4K als Aufpreis; DAZN streamt aktuell maximal in Full HD. Prime Video bietet 4K bei vielen Originals ohne Aufpreis.'
        ]
      },
      {
        heading: 'Wie viel solltest du im Monat ausgeben?',
        body: [
          'Eine sinnvolle Faustregel: 15–25 € pro Monat reichen für 2 Streamingdienste plus Prime-Video-Bonus. Sportfans landen typischerweise bei 35–50 € pro Monat.',
          'Wer mehr ausgibt, sollte Streaming-Abos rotierend buchen statt parallel laufen zu lassen – fast alle Anbieter sind monatlich kündbar.'
        ]
      }
    ],
    faq: [
      {
        q: 'Wie aktuell sind die Preise im Vergleich?',
        a: 'Wir prüfen die Preise mindestens monatlich. Das letzte Aktualisierungsdatum findest du oben am Artikel.'
      },
      {
        q: 'Welcher Anbieter hat 4K standardmäßig?',
        a: 'Disney+ und Apple TV+ liefern 4K im Standard-Tarif. Bei Netflix ist 4K dem Premium-Tarif vorbehalten.'
      },
      {
        q: 'Lohnt sich ein Jahres-Tarif?',
        a: 'Wenn du einen Anbieter dauerhaft nutzt, ja – Jahres-Tarife sparen oft 15–20 %. Bei rotierender Nutzung lohnt sich der Monats-Tarif.'
      }
    ],
    publishedISO: '2026-01-20T00:00:00Z',
    updatedISO: '2026-04-15T00:00:00Z'
  },
  {
    slug: 'legal-streamen-in-deutschland',
    title: 'Legal Streamen in Deutschland: Was ist erlaubt – und was nicht?',
    metaDescription:
      'Welche Streaming-Praktiken sind in Deutschland legal? Was sagen Urheberrecht, Portabilitätsverordnung und Bezahl-AGB? Klarheit für deutsche Streaming-Nutzer.',
    intro:
      'Streaming ist in Deutschland weit verbreitet – aber nicht jede Praxis ist auch legal. Wir erklären die wichtigsten rechtlichen Eckpfeiler: vom Urheberrecht über die EU-Portabilitätsverordnung bis zur Frage, was bei VPNs erlaubt ist.',
    sections: [
      {
        heading: 'Bezahlte Streamingdienste',
        body: [
          'Das Streamen über bezahlte Dienste wie Netflix, Disney+, WOW oder DAZN ist immer legal, wenn du ein gültiges Abo hast. Das gilt unabhängig vom verwendeten Gerät, Betriebssystem oder Browser.',
          'Innerhalb der EU greift die EU-Portabilitätsverordnung: Du darfst dein deutsches Abo auch in anderen EU-Ländern nutzen, ohne dass du dafür ein VPN brauchst.'
        ]
      },
      {
        heading: 'Mediatheken und kostenfreie Angebote',
        body: [
          'Die Mediatheken von ARD, ZDF, Arte und 3sat sind in Deutschland frei zugänglich und legal nutzbar – häufig sogar in 1080p HD oder besser.',
          'Werbefinanzierte Plattformen wie Pluto TV, Freevee, Joyn (kostenfreier Tarif) sind ebenfalls legal. Vorsicht ist nur bei dubiosen Streaming-Aggregator-Seiten geboten – siehe nächster Abschnitt.'
        ]
      },
      {
        heading: 'Was ist illegal?',
        body: [
          'Klar illegal: das Streamen von urheberrechtlich geschützten Inhalten ohne Lizenz. Dazu zählen Webseiten, die aktuelle Kinofilme, Serien oder Sport-Übertragungen kostenlos anbieten, sowie Apps und Add-ons, die diese Inhalte über inoffizielle Quellen aggregieren.',
          'Auch das gewerbliche Anbieten solcher Inhalte (z. B. der Verkauf von „Premium-IPTV-Boxen") ist nach §§ 106 ff. UrhG strafbar.'
        ]
      },
      {
        heading: 'Wo passt ein VPN ins Bild?',
        body: [
          'Ein VPN selbst ist in Deutschland legal und sinnvoll für Datenschutz, öffentliche WLANs und Reisen. Es ist aber kein Freifahrtschein für Urheberrechtsverletzungen.',
          'Bleib bei legalen Streaming-Quellen – dann ist das VPN ein wertvolles Sicherheits-Tool, kein juristisches Risiko.'
        ]
      }
    ],
    faq: [
      {
        q: 'Darf ich mein Netflix-Abo im Urlaub im Ausland nutzen?',
        a: 'Innerhalb der EU ja, dank Portabilitätsverordnung. Außerhalb der EU hängt es vom Anbieter ab – informiere dich vorab in den AGB.'
      },
      {
        q: 'Ist das Streamen aus Mediatheken legal?',
        a: 'Ja, die öffentlich-rechtlichen Mediatheken sind in Deutschland uneingeschränkt legal nutzbar.'
      },
      {
        q: 'Wann mache ich mich strafbar?',
        a: 'Wenn du wissentlich auf urheberrechtsverletzende Inhalte zugreifst – also auf Plattformen ohne Lizenz für aktuelle Filme, Serien oder Sport.'
      }
    ],
    publishedISO: '2026-02-10T00:00:00Z',
    updatedISO: '2026-04-15T00:00:00Z'
  },
  {
    slug: 'vpn-fuer-streaming-erklaert',
    title: 'VPN für Streaming erklärt: So funktioniert es – und wann es Sinn ergibt',
    metaDescription:
      'Wie funktioniert ein VPN beim Streaming? Welche Vorteile bringt es, was sind die rechtlichen Grenzen? Verständlich erklärt für deutsche Nutzer.',
    intro:
      'VPNs gelten als Universal-Tool fürs Internet – aber wofür sind sie beim Streaming wirklich gut? Wir erklären verständlich, wie ein VPN funktioniert, wann es Sinn ergibt und wann nicht.',
    sections: [
      {
        heading: 'Was ist ein VPN?',
        body: [
          'Ein VPN (Virtual Private Network) leitet deinen gesamten Internetverkehr durch einen verschlüsselten Tunnel zu einem Server des VPN-Anbieters. Erst dort wird der Verkehr ans öffentliche Internet weitergegeben.',
          'Folge: Webseiten und Streaming-Dienste sehen nicht deine echte IP, sondern die des VPN-Servers. Außerdem kann dein Internet-Anbieter (ISP) den Inhalt deines Verkehrs nicht mehr lesen.'
        ]
      },
      {
        heading: 'Warum ein VPN beim Streaming nutzen?',
        body: [
          'Drei häufige, legitime Gründe: erstens Datenschutz – dein Provider sieht nicht mehr, was du streamst. Zweitens Sicherheit in öffentlichen WLANs (Hotel, Café, Flughafen). Drittens stabiler Zugriff auf dein eigenes deutsches Streaming-Abo, wenn du innerhalb der EU reist.',
          'Wir empfehlen VPNs nicht für die Umgehung von Geo-Sperren oder Anbieter-AGB. Wer Premium-Inhalte schauen will, sollte ein passendes Abo nutzen.'
        ]
      },
      {
        heading: 'Welches VPN passt zu welchem Streaming-Setup?',
        body: [
          'Für Privathaushalte ist NordVPN die robuste Premium-Wahl. Surfshark ist preisbewusst und ideal für Familien (unbegrenzte Geräte). CyberGhost ist deutschsprachig und einsteigerfreundlich.',
          'Für vielreisende Premium-Nutzer ist ExpressVPN unsere Empfehlung – das Lightway-Protokoll liefert auf Auslandsservern stabile Geschwindigkeiten.'
        ]
      },
      {
        heading: 'Was sollte ein VPN können?',
        body: [
          'Mindeststandards: AES-256-Verschlüsselung, modernes Protokoll (WireGuard, NordLynx, Lightway), Kill-Switch, DNS-Leak-Schutz, geprüfte No-Logs-Policy, native Apps auf allen Plattformen.',
          'Premium-Features: Split-Tunneling (nur bestimmte Apps gehen durch das VPN), Multi-Hop, Threat-Protection (Tracker- und Malware-Blocker), Ad-Blocker.'
        ]
      }
    ],
    faq: [
      {
        q: 'Bremst ein VPN mein Streaming aus?',
        a: 'Mit einem modernen Protokoll und einem nahen Server: kaum spürbar. Auf Servern auf anderen Kontinenten sinkt die Geschwindigkeit naturgemäß.'
      },
      {
        q: 'Funktionieren VPNs mit Smart-TVs?',
        a: 'Direkt nur mit ausgewählten Smart-TV-Plattformen. Alternativen: VPN auf dem Router, ein Apple-TV-/Fire-TV-Stick mit VPN-App oder ein Mini-PC zwischen TV und Internet.'
      },
      {
        q: 'Welches VPN-Protokoll soll ich wählen?',
        a: 'Standardmäßig WireGuard, NordLynx oder Lightway – modern, schnell, ressourcenschonend. OpenVPN bleibt eine solide Backup-Option.'
      }
    ],
    publishedISO: '2026-02-20T00:00:00Z',
    updatedISO: '2026-04-15T00:00:00Z'
  }
];

export const guideBySlug = (slug: string): Guide | undefined =>
  guides.find((g) => g.slug === slug);
