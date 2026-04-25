export interface MovieOccasion {
  slug: string;
  occasion: string;
  tagline: string;
  intro: string;
  primaryProviders: string[];
  movieIdeas: Array<{ title: string; provider: string; note: string }>;
  tip: string;
}

export const movieOccasions: MovieOccasion[] = [
  {
    slug: 'familienabend',
    occasion: 'Familienabend',
    tagline: 'Filme fuer den perfekten Familienabend - fuer alle Altersstufen',
    intro: 'Der Familienabend gelingt mit den richtigen Filmen. Wir empfehlen 8 Streaming-Filme, die Eltern und Kinder gleichermassen begeistern - kein Kompromiss.',
    primaryProviders: ['disney-plus', 'netflix'],
    movieIdeas: [
      { title: 'Encanto', provider: 'disney-plus', note: 'Disney-Musical mit Tiefgang und tollen Songs' },
      { title: 'Inside Out', provider: 'disney-plus', note: 'Pixar-Klassiker ueber Gefuehle - fuer Kinder und Erwachsene' },
      { title: 'Paddington 2', provider: 'netflix', note: 'Britischer Familien-Klassiker - witzig und herzerwaermend' },
      { title: 'Soul', provider: 'disney-plus', note: 'Pixar-Meisterwerk ueber den Sinn des Lebens' },
      { title: 'Die Mitchells gegen die Maschinen', provider: 'netflix', note: 'Familien-Animationsfilm mit Tech-Kritik und Humor' },
      { title: 'Up', provider: 'disney-plus', note: 'Bewegender Pixar-Abenteuer-Film fuer alle Generationen' }
    ],
    tip: 'Disney+ ist die sicherste Bank fuer Familienabende - keine Werbung, kuratierte Bibliothek, Kinder-Profile.'
  },
  {
    slug: 'date-night',
    occasion: 'Date Night',
    tagline: 'Filme fuer Date Night - Romantik, Comedy, Drama mit Tiefgang',
    intro: 'Die richtige Filmwahl macht eine Date Night perfekt. Wir empfehlen 8 Streaming-Filme fuer den intimen Filmabend - jenseits offensichtlicher Klischees.',
    primaryProviders: ['netflix', 'prime-video'],
    movieIdeas: [
      { title: 'Past Lives', provider: 'wow', note: 'Subtile Romanze mit emotionaler Tiefe' },
      { title: 'Crazy Rich Asians', provider: 'netflix', note: 'Stylische Romantik-Komoedie' },
      { title: 'About Time', provider: 'netflix', note: 'Romantisch-philosophischer Zeitreise-Film' },
      { title: 'La La Land', provider: 'netflix', note: 'Musical-Klassiker des modernen Hollywoods' },
      { title: 'Vor und Nach Sonnenaufgang', provider: 'wow', note: 'Linklater-Trilogie - perfektes Date-Material' },
      { title: 'Eternal Sunshine of the Spotless Mind', provider: 'prime-video', note: 'Sci-Fi-Romanze mit Herz und Hirn' }
    ],
    tip: 'Prime Video Channels lassen sich monatlich mieten - perfekt fuer einmalige Premium-Filme zur Date Night.'
  },
  {
    slug: 'halloween',
    occasion: 'Halloween',
    tagline: 'Filme fuer Halloween 2026 - Horror, Thriller, schraege Klassiker',
    intro: 'Halloween-Abend ohne den richtigen Film? Undenkbar. Wir empfehlen 8 Streaming-Optionen - vom familienfreundlich-schraegen bis zum echten Horror.',
    primaryProviders: ['netflix', 'prime-video', 'disney-plus'],
    movieIdeas: [
      { title: 'Coraline', provider: 'prime-video', note: 'Stop-Motion-Grusel fuer die ganze Familie' },
      { title: 'Hocus Pocus', provider: 'disney-plus', note: 'Halloween-Klassiker mit den Sanderson-Schwestern' },
      { title: 'A Quiet Place', provider: 'netflix', note: 'Atmosphaerischer Horror-Hit - kein Wort, viel Spannung' },
      { title: 'The Conjuring', provider: 'netflix', note: 'Gruselklassiker fuer Erwachsene' },
      { title: 'Beetlejuice', provider: 'wow', note: 'Tim-Burton-Klassiker - schraeg und kultig' },
      { title: 'Get Out', provider: 'netflix', note: 'Sozial-Horror-Meisterwerk von Jordan Peele' }
    ],
    tip: 'Spaerlich beleuchtet, Snacks bereit, Handy weg - das ist Halloween-Filmabend wie es sein soll.'
  },
  {
    slug: 'weihnachten',
    occasion: 'Weihnachten',
    tagline: 'Weihnachtsfilme 2026 - Klassiker und neue Hits zum Streamen',
    intro: 'Weihnachten ohne Weihnachtsfilm? Geht nicht. Wir empfehlen 8 Streaming-Filme - vom kuscheligen Klassiker bis zum frischen Hit.',
    primaryProviders: ['disney-plus', 'netflix'],
    movieIdeas: [
      { title: 'Kevin allein zu Haus', provider: 'disney-plus', note: 'Der Weihnachts-Klassiker schlechthin' },
      { title: 'Klaus', provider: 'netflix', note: 'Animierter Weihnachts-Hit mit Herzschmerz' },
      { title: 'The Holiday', provider: 'netflix', note: 'Romantischer Weihnachts-Klassiker' },
      { title: 'Stirb Langsam', provider: 'disney-plus', note: 'Der inoffizielle Weihnachts-Action-Klassiker' },
      { title: 'Tatsaechlich Liebe', provider: 'netflix', note: 'Britischer Weihnachts-Episodenfilm' },
      { title: 'Last Christmas', provider: 'netflix', note: 'Wham!-inspirierte Weihnachts-Komoedie' }
    ],
    tip: 'Mit dem Disney+ Standard-Tarif siehst du alle Weihnachts-Klassiker in 4K - ohne Aufpreis.'
  },
  {
    slug: 'regentage',
    occasion: 'Regen-Tage',
    tagline: 'Filme fuer Regentage - lange Geschichten zum Versinken',
    intro: 'Wenn draussen der Regen prasselt, ist das die perfekte Zeit fuer epische Filme oder lange Serien. Hier sind 8 Optionen fuer den ultimativen Couch-Tag.',
    primaryProviders: ['prime-video', 'netflix'],
    movieIdeas: [
      { title: 'Der Herr der Ringe Trilogie', provider: 'prime-video', note: '12 Stunden epische Fantasy in Extended Cuts' },
      { title: 'The Irishman', provider: 'netflix', note: '3,5 Stunden Scorsese-Mafia-Epos' },
      { title: 'Lawrence of Arabia', provider: 'wow', note: 'Klassisches Epos in 4K UHD' },
      { title: 'Once Upon a Time in America', provider: 'wow', note: 'Lange Mafia-Saga - perfekt fuer den ganzen Tag' },
      { title: 'Schindlers Liste', provider: 'netflix', note: 'Spielbergs Meisterwerk - bewegend und lang' },
      { title: 'Apocalypse Now', provider: 'wow', note: 'Vietnam-Epos mit unglaublicher Atmosphaere' }
    ],
    tip: 'Regentag = perfekter Tag fuer einen Streaming-Anbieter, den du laenger nicht genutzt hast - reaktiviere fuer einen Monat.'
  },
  {
    slug: 'sommer',
    occasion: 'Sommer-Abend',
    tagline: 'Filme fuer laue Sommer-Abende - leicht, sonnig, perfekt zur Saison',
    intro: 'Lange Sommerabende verlangen nach leichten, sonnigen Filmen. Hier sind 8 Streaming-Empfehlungen, die das Sommer-Gefuehl perfekt einfangen.',
    primaryProviders: ['netflix', 'prime-video'],
    movieIdeas: [
      { title: 'Call Me by Your Name', provider: 'netflix', note: 'Italienischer Sommer in Bildern - traumhaft' },
      { title: 'Mamma Mia!', provider: 'netflix', note: 'Griechische Insel + ABBA = perfekter Sommer' },
      { title: 'Aftersun', provider: 'wow', note: 'Melancholischer Sommer-Vater-Tochter-Film' },
      { title: 'Booksmart', provider: 'netflix', note: 'Coming-of-Age-Comedy mit Sommer-Energie' },
      { title: 'The Trip', provider: 'wow', note: 'Roadtrip-Comedy - perfekt fuer Sommerabende' },
      { title: 'Lady Bird', provider: 'netflix', note: 'Sacramento-Sommer-Klassiker' }
    ],
    tip: 'Im Sommer lohnt sich Apple TV+ extra - das beste 4K-Bild bei Outdoor-Filmen mit gutem TV.'
  },
  {
    slug: 'party',
    occasion: 'Party-Abend',
    tagline: 'Filme fuer Party-Abende - Comedy und Action fuer Gruppen',
    intro: 'Wenn die Wohnzimmer-Party laeuft, brauchst du Filme, die jeder versteht und mitlaufen lassen kann. Wir empfehlen 8 Streaming-Filme als perfekten Hintergrund.',
    primaryProviders: ['netflix', 'prime-video'],
    movieIdeas: [
      { title: 'Project X', provider: 'netflix', note: 'Eskalierende Party-Komoedie - meta-perfekt' },
      { title: 'Hangover Trilogie', provider: 'wow', note: 'Komoedien-Klassiker fuer jede Stimmung' },
      { title: 'Step Brothers', provider: 'netflix', note: 'Will-Ferrell-Klassiker - jeder lacht' },
      { title: 'Borat', provider: 'prime-video', note: 'Subtile Comedy mit Party-Energie' },
      { title: 'Tropic Thunder', provider: 'netflix', note: 'Action-Comedy ueber Schauspieler-Egomanen' },
      { title: 'Spider-Man Into the Spider-Verse', provider: 'netflix', note: 'Visuell ueberragend - jeder bleibt haengen' }
    ],
    tip: 'Bei Partys: Untertitel an + Lautstaerke kontrolliert. Comedy laeuft besser im Hintergrund als Action.'
  },
  {
    slug: 'allein',
    occasion: 'Allein zu Hause',
    tagline: 'Filme fuer den Solo-Abend - emotional, anspruchsvoll, persoenlich',
    intro: 'Allein zu Hause? Das ist die Chance fuer Filme, die du sonst nicht teilen wuerdest - emotionaler, anspruchsvoller, persoenlicher. Hier sind 8 Empfehlungen.',
    primaryProviders: ['apple-tv-plus', 'netflix'],
    movieIdeas: [
      { title: 'Manchester by the Sea', provider: 'prime-video', note: 'Stilles Trauma-Drama - braucht Konzentration' },
      { title: 'Moonlight', provider: 'netflix', note: 'Bewegend, intim, Oscar-Sieger' },
      { title: 'Roma', provider: 'netflix', note: 'Schwarz-Weiss-Meisterwerk von Cuaron' },
      { title: 'A Hidden Life', provider: 'netflix', note: 'Terrence-Malick-Meditation - Solo-Pflicht' },
      { title: 'The Father', provider: 'netflix', note: 'Demenz aus Sicht des Erkrankten - intensiv' },
      { title: 'Fleabag', provider: 'prime-video', note: 'Allein-Schauen verstaerkt das vierte-Wand-Erlebnis' }
    ],
    tip: 'Apple TV+ hat die hoechste Premium-Originals-Dichte fuer anspruchsvolles Solo-Streaming.'
  }
];

export const movieOccasionBySlug = (slug: string): MovieOccasion | undefined =>
  movieOccasions.find((m) => m.slug === slug);
