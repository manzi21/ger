export interface ShowSimilar {
  slug: string;
  showName: string;
  tagline: string;
  intro: string;
  similarShows: Array<{ name: string; provider: string; reason: string }>;
  primaryProvider: string;
  genre: string;
}

export const showsSimilar: ShowSimilar[] = [
  {
    slug: 'haus-des-geldes',
    showName: 'Haus des Geldes',
    tagline: 'Serien wie Haus des Geldes 2026 - Heist-Drama vom Feinsten',
    intro: 'Haus des Geldes hat das Heist-Genre revolutioniert. Wenn du nach intensiven Raub-Serien mit charismatischen Anti-Helden und Cliffhanger-Episoden suchst, sind diese 8 Serien genau richtig.',
    similarShows: [
      { name: 'Lupin', provider: 'netflix', reason: 'Charmanter Meisterdieb in Paris - franzoesische Antwort auf Haus des Geldes' },
      { name: 'Berlin', provider: 'netflix', reason: 'Spin-off von Haus des Geldes mit dem genialen Diebstahl-Planer' },
      { name: 'Money Heist Korea', provider: 'netflix', reason: 'Koreanisches Remake mit eigener kultureller Wucht' },
      { name: 'The Lincoln Lawyer', provider: 'netflix', reason: 'Cleveres Anwalts-Drama mit denselben Twists' },
      { name: 'Ozark', provider: 'netflix', reason: 'Geldwaesche-Thriller mit ebenso starker Familien-Dynamik' },
      { name: 'Breaking Bad', provider: 'netflix', reason: 'Klassiker des moralisch grauen Genres' }
    ],
    primaryProvider: 'netflix',
    genre: 'Heist-Drama'
  },
  {
    slug: 'stranger-things',
    showName: 'Stranger Things',
    tagline: 'Serien wie Stranger Things 2026 - Mystery, Sci-Fi und Nostalgie',
    intro: 'Stranger Things hat eine ganze Generation von 80er-Mystery-Serien inspiriert. Hier sind die besten Alternativen mit Sci-Fi, uebernatuerlichen Elementen und Coming-of-Age-Charme.',
    similarShows: [
      { name: 'Dark', provider: 'netflix', reason: 'Deutsche Mystery-Sci-Fi-Serie mit komplexer Zeitreise-Mythologie' },
      { name: 'Fringe', provider: 'prime-video', reason: 'Paranormale Wissenschaft mit langer Mythologie-Bogen' },
      { name: 'The OA', provider: 'netflix', reason: 'Spirituelle Mystery mit aehnlich intensivem Sog' },
      { name: 'Locke and Key', provider: 'netflix', reason: 'Familien-Mystery mit magischen Schluesseln' },
      { name: 'From', provider: 'prime-video', reason: 'Atmosphaerischer Mystery-Horror in Kleinstadt-Setting' },
      { name: 'Wayward Pines', provider: 'disney-plus', reason: 'Kleinstadt-Mystery mit grossem Twist' }
    ],
    primaryProvider: 'netflix',
    genre: 'Mystery / Sci-Fi'
  },
  {
    slug: 'game-of-thrones',
    showName: 'Game of Thrones',
    tagline: 'Serien wie Game of Thrones 2026 - epische Fantasy mit Tiefe',
    intro: 'Game of Thrones hat die Fantasy-Serie auf ein neues Niveau gehoben. Diese 8 Serien liefern epische Schlachten, komplexe Politik und unvergessliche Charaktere.',
    similarShows: [
      { name: 'House of the Dragon', provider: 'wow', reason: 'Direkter Targaryen-Prequel mit demselben Ton' },
      { name: 'The Last Kingdom', provider: 'netflix', reason: 'Realistisches Mittelalter-Drama um Sachsen und Wikinger' },
      { name: 'Vikings', provider: 'prime-video', reason: 'Brutale Wikinger-Saga mit grosser historischer Tiefe' },
      { name: 'The Witcher', provider: 'netflix', reason: 'Dark Fantasy mit Henry Cavill als Geralt' },
      { name: 'Foundation', provider: 'apple-tv-plus', reason: 'Epische Sci-Fi mit Politik-Tiefe von GoT' },
      { name: 'Wheel of Time', provider: 'prime-video', reason: 'High Fantasy nach Robert Jordans Romanen' }
    ],
    primaryProvider: 'wow',
    genre: 'Fantasy'
  },
  {
    slug: 'breaking-bad',
    showName: 'Breaking Bad',
    tagline: 'Serien wie Breaking Bad 2026 - moralisch graue Anti-Helden',
    intro: 'Breaking Bad gilt als beste Serie aller Zeiten. Wenn du nach moralisch komplexen Charakter-Dramen mit intensiver Spannung suchst, sind das die besten Alternativen.',
    similarShows: [
      { name: 'Better Call Saul', provider: 'netflix', reason: 'Direkter Breaking Bad Prequel mit Saul Goodman' },
      { name: 'Ozark', provider: 'netflix', reason: 'Familie verstrickt in Drogengeld-Geschaefte' },
      { name: 'Narcos', provider: 'netflix', reason: 'Echtes Pablo-Escobar-Drama mit Breaking-Bad-Flair' },
      { name: 'The Wire', provider: 'wow', reason: 'Komplexes Drogenkrieg-Drama in Baltimore' },
      { name: 'Mindhunter', provider: 'netflix', reason: 'Psychologie-Krimi mit dunklem Ton' },
      { name: 'Sons of Anarchy', provider: 'netflix', reason: 'Biker-Drama mit moralisch grauer Familie' }
    ],
    primaryProvider: 'netflix',
    genre: 'Drama / Krimi'
  },
  {
    slug: 'the-boys',
    showName: 'The Boys',
    tagline: 'Serien wie The Boys 2026 - Superhelden mal anders',
    intro: 'The Boys hat das Superhelden-Genre auf den Kopf gestellt. Hier sind 8 Serien fuer Fans von dunklem Humor, blutiger Action und Anti-Helden-Storys.',
    similarShows: [
      { name: 'Invincible', provider: 'prime-video', reason: 'Animierte Superhelden-Serie mit ebenso brutalen Twists' },
      { name: 'Gen V', provider: 'prime-video', reason: 'Direkter The Boys Spin-off im College-Setting' },
      { name: 'Peacemaker', provider: 'wow', reason: 'James Gunns dunkel-humorvolle Anti-Helden-Serie' },
      { name: 'The Umbrella Academy', provider: 'netflix', reason: 'Dysfunctional Superhelden-Familie' },
      { name: 'Daredevil', provider: 'disney-plus', reason: 'Brutalere Marvel-Serie mit erwachsenem Ton' },
      { name: 'Watchmen', provider: 'wow', reason: 'Sequel-Serie zur legendaeren Comic-Vorlage' }
    ],
    primaryProvider: 'prime-video',
    genre: 'Superhelden / Drama'
  },
  {
    slug: 'dark',
    showName: 'Dark',
    tagline: 'Serien wie Dark 2026 - Mind-Bending Mystery aus Deutschland',
    intro: 'Dark ist die deutsche Mystery-Sci-Fi, die international gefeiert wurde. Diese Serien liefern aehnliche Komplexitaet, Atmosphaere und narrative Ambition.',
    similarShows: [
      { name: '1899', provider: 'netflix', reason: 'Direkt vom Dark-Schoepferteam - ebenso komplex und mysterioes' },
      { name: 'Devs', provider: 'wow', reason: 'Sci-Fi-Mystery um Quanten-Computing und Determinismus' },
      { name: 'The OA', provider: 'netflix', reason: 'Spirituelle Mystery mit Multidimensionen' },
      { name: 'True Detective', provider: 'wow', reason: 'Mystery-Krimi mit philosophischer Tiefe' },
      { name: 'Severance', provider: 'apple-tv-plus', reason: 'Mind-Bending Mystery um geteilte Persoenlichkeiten' },
      { name: 'The Leftovers', provider: 'wow', reason: 'Existenzielle Mystery mit unendlich tiefen Fragen' }
    ],
    primaryProvider: 'netflix',
    genre: 'Mystery / Sci-Fi'
  },
  {
    slug: 'the-crown',
    showName: 'The Crown',
    tagline: 'Serien wie The Crown 2026 - prestigetraechtige historische Dramen',
    intro: 'The Crown setzte den Massstab fuer historische Prestige-Dramen. Hier sind die besten Alternativen mit Royals, Politik-Geschichte und Top-Schauspielleistungen.',
    similarShows: [
      { name: 'Bridgerton', provider: 'netflix', reason: 'Period-Drama im Regency-England, modern erzaehlt' },
      { name: 'Victoria', provider: 'prime-video', reason: 'Konig Victoria Aufstieg, klassisch erzaehlt' },
      { name: 'The Great', provider: 'prime-video', reason: 'Schraege, satirische Sicht auf Katharina die Grosse' },
      { name: 'Wolf Hall', provider: 'wow', reason: 'Tudor-Politik mit literarischem Anspruch' },
      { name: 'A Very British Scandal', provider: 'prime-video', reason: 'Britische High-Society-Skandale' },
      { name: 'The Diplomat', provider: 'netflix', reason: 'Moderne Polit-Drama mit britischem Setting' }
    ],
    primaryProvider: 'netflix',
    genre: 'Historisches Drama'
  },
  {
    slug: 'succession',
    showName: 'Succession',
    tagline: 'Serien wie Succession 2026 - Macht, Familie, Geld',
    intro: 'Succession ist die brillanteste Familien-Drama-Satire der Streaming-Aera. Diese Serien liefern aehnlich scharfe Dialoge, machtgierige Charaktere und unbequeme Wahrheiten.',
    similarShows: [
      { name: 'Industry', provider: 'wow', reason: 'Junge Banker im Londoner Hochfinanz-Wahn' },
      { name: 'Billions', provider: 'wow', reason: 'Hedge-Fonds vs Staatsanwaltschaft - Macht-Schach' },
      { name: 'Yellowstone', provider: 'netflix', reason: 'Dynastien-Drama im modernen Wilden Westen' },
      { name: 'House of Cards', provider: 'netflix', reason: 'Politische Macht-Spiele in Washington' },
      { name: 'Empire', provider: 'disney-plus', reason: 'Hip-Hop-Music-Empire mit Familien-Krieg' },
      { name: 'Mad Men', provider: 'netflix', reason: 'Werbe-Industrie der 60er - Stilikone des Genres' }
    ],
    primaryProvider: 'wow',
    genre: 'Drama'
  },
  {
    slug: 'severance',
    showName: 'Severance',
    tagline: 'Serien wie Severance 2026 - Mind-Bending Office-Mystery',
    intro: 'Severance ist eine der besten neuen Serien der 2020er Jahre. Wer aehnliche atmosphaerische Mystery mit philosophischer Tiefe sucht, sollte diese Alternativen kennen.',
    similarShows: [
      { name: 'Lost', provider: 'disney-plus', reason: 'Mystery-Klassiker mit Ensemble und Mythologie' },
      { name: 'Westworld', provider: 'wow', reason: 'KI-Park als Existenz-Frage - aehnlich zerebral' },
      { name: 'Mr. Robot', provider: 'prime-video', reason: 'Hacker-Drama mit unzuverlaessigem Erzaehler' },
      { name: 'Black Mirror', provider: 'netflix', reason: 'Dystopische Tech-Anthologie' },
      { name: 'Foundation', provider: 'apple-tv-plus', reason: 'Hochkonzeptionelle Sci-Fi-Saga' },
      { name: 'Devs', provider: 'wow', reason: 'Quanten-Computing-Thriller' }
    ],
    primaryProvider: 'apple-tv-plus',
    genre: 'Mystery / Sci-Fi'
  },
  {
    slug: 'ted-lasso',
    showName: 'Ted Lasso',
    tagline: 'Serien wie Ted Lasso 2026 - Wohlfuehl-Comedies mit Herz',
    intro: 'Ted Lasso hat bewiesen, dass Wohlfuehl-Serien intelligent sein koennen. Hier sind die besten Alternativen mit positivem Ton, sympathischen Charakteren und echtem Tiefgang.',
    similarShows: [
      { name: 'Shrinking', provider: 'apple-tv-plus', reason: 'Vom Ted-Lasso-Team, mit Therapie-Setting' },
      { name: 'Schmigadoon!', provider: 'apple-tv-plus', reason: 'Musical-Comedy mit demselben Wohlfuehl-Faktor' },
      { name: 'Schitts Creek', provider: 'netflix', reason: 'Familie lernt Empathie und Liebe in Kleinstadt' },
      { name: 'The Good Place', provider: 'netflix', reason: 'Philosophie-Comedy mit bunten Charakteren' },
      { name: 'Parks and Recreation', provider: 'netflix', reason: 'Klassiker des feelgood Workplace-Genres' },
      { name: 'Welcome to Wrexham', provider: 'disney-plus', reason: 'Echte Fussball-Doku mit Ted-Lasso-Energie' }
    ],
    primaryProvider: 'apple-tv-plus',
    genre: 'Comedy / Drama'
  }
];

export const showSimilarBySlug = (slug: string): ShowSimilar | undefined =>
  showsSimilar.find((s) => s.slug === slug);
