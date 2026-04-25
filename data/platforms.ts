/**
 * Plattformen für Pages /vpn-fuer/[platform].
 * Jede Plattform hat eigene technische Eigenheiten — die Pages liefern
 * konkrete Setup-Anleitungen pro Plattform, mit empfohlenem VPN-Anbieter.
 */

export interface Platform {
  slug: string;
  /** Anzeigename. */
  name: string;
  /** SEO-optimierte Tagline (max. 80 Zeichen). */
  tagline: string;
  /** Empfohlener VPN-Key (aus vpnProviders.ts). */
  recommendedVpn: string;
  /** Setup-Schwierigkeit: 'einfach' | 'mittel' | 'komplex'. */
  difficulty: 'einfach' | 'mittel' | 'komplex';
  /** Konkrete Setup-Schritte (3-7 kurze Schritte). */
  setupSteps: string[];
  /** Kompatible VPN-Apps (per Anbieter-Key). */
  compatibleVpns: string[];
  /** Häufige Probleme + Lösung. */
  troubleshooting: Array<{ issue: string; solution: string }>;
  /** Plattform-Beschreibung für die Intro. */
  description: string;
}

export const platforms: Platform[] = [
  {
    slug: 'fire-tv-stick',
    name: 'Fire TV Stick',
    tagline: 'VPN auf Amazon Fire TV einrichten — Schritt für Schritt',
    recommendedVpn: 'nordvpn',
    difficulty: 'einfach',
    setupSteps: [
      'Im Amazon Appstore die VPN-App des Anbieters suchen (z. B. „NordVPN")',
      'App installieren und mit Apple-/Google-Konto-Zugangsdaten anmelden (oder QR-Code)',
      'VPN-Server auswählen (für Streaming: deutsche oder EU-Standorte)',
      'Verbindung herstellen — Statusleiste zeigt VPN-Schloss',
      'Streaming-App (Netflix, Disney+) öffnen und wie gewohnt schauen'
    ],
    compatibleVpns: ['nordvpn', 'surfshark', 'expressvpn', 'cyberghost'],
    troubleshooting: [
      { issue: 'VPN-App nicht im Appstore gefunden', solution: 'Stick auf Software-Update prüfen — alte Generationen unterstützen weniger Apps. Notfalls Sideloading via Downloader-App.' },
      { issue: 'Streaming-Dienst zeigt Proxy-Fehler', solution: 'Anderer Server desselben Landes wählen — Streaming-Anbieter blocken bekannte VPN-IPs gelegentlich.' },
      { issue: 'Verbindung sehr langsam', solution: 'Im VPN-Protokoll auf WireGuard/NordLynx/Lightway umschalten — modernere Protokolle sind deutlich schneller als OpenVPN.' }
    ],
    description: 'Der Amazon Fire TV Stick ist die meistverkaufte Streaming-Hardware in Deutschland. Ein VPN auf dem Fire TV Stick schützt deine Privatsphäre, sichert öffentliche WLANs (im Hotel, Camping) und macht das Streaming auf Reisen entspannt.'
  },
  {
    slug: 'smart-tv',
    name: 'Smart TV',
    tagline: 'VPN auf Smart TV (Samsung, LG, Sony, Philips) nutzen',
    recommendedVpn: 'expressvpn',
    difficulty: 'mittel',
    setupSteps: [
      'Prüfen ob dein Smart-TV-OS (Tizen, webOS, Android TV) eine native VPN-App unterstützt',
      'Bei nicht-Android-TVs: VPN auf Router installieren — schützt automatisch alle Geräte',
      'Alternativ: Mini-PC oder Fire TV Stick zwischen TV und Internet schalten',
      'VPN-Verbindung herstellen, danach Streaming-App nutzen',
      'Geschwindigkeit prüfen — bei 4K-Streaming mind. 25 Mbit/s nötig'
    ],
    compatibleVpns: ['nordvpn', 'expressvpn', 'surfshark'],
    troubleshooting: [
      { issue: 'Smart TV bietet keine VPN-Option', solution: 'Auf einen Android-TV mit nativer VPN-App-Unterstützung wechseln, ODER VPN am Router einrichten — das schützt alle Geräte.' },
      { issue: '4K-Streaming bricht ein', solution: 'Server in der Nähe wählen (deutsche oder EU-Server) und WireGuard/Lightway-Protokoll aktivieren.' },
      { issue: 'Smart-Hub-Apps werden geblockt', solution: 'DNS-Einstellungen prüfen — manche TVs ignorieren Router-DNS und nutzen Google DNS direkt.' }
    ],
    description: 'Auf den meisten Smart-TVs (Samsung, LG, Sony) gibt es keine native VPN-App. Wir zeigen dir die zwei zuverlässigen Wege: VPN auf dem Router (schützt alles) oder Android-TV mit eigener VPN-App.'
  },
  {
    slug: 'fritzbox',
    name: 'FRITZ!Box',
    tagline: 'VPN auf der FRITZ!Box einrichten — komplettes Heimnetzwerk',
    recommendedVpn: 'expressvpn',
    difficulty: 'komplex',
    setupSteps: [
      'FRITZ!OS-Version prüfen (mind. 7.50 für WireGuard) und ggf. updaten',
      'Bei FRITZ!Boxen mit WireGuard: VPN-Anbieter mit WireGuard-Konfig-Generator wählen',
      'Im VPN-Account: WireGuard-Konfig für FRITZ!Box exportieren',
      'In FRITZ!Box: Internet → Freigaben → VPN → WireGuard → Konfiguration importieren',
      'Verbindung testen mit https://www.dnsleaktest.com'
    ],
    compatibleVpns: ['expressvpn', 'nordvpn', 'cyberghost'],
    troubleshooting: [
      { issue: 'Konfig-Datei wird nicht akzeptiert', solution: 'WireGuard-Konfig öffnen und prüfen, ob die FRITZ!Box-spezifischen Felder (z. B. PostUp/PostDown) entfernt sind — diese werden nicht unterstützt.' },
      { issue: 'Internet nach VPN-Aktivierung weg', solution: 'DNS-Server in der FRITZ!Box manuell auf 1.1.1.1 / 9.9.9.9 setzen statt VPN-DNS, falls das VPN keinen funktionierenden DNS bereitstellt.' },
      { issue: 'Geschwindigkeit halbiert sich', solution: 'Normal bei VPN auf Router — die FRITZ!Box hat begrenzte CPU. Für 4K-Streaming einen schnelleren Router (z. B. ASUS RT-AX88U) nutzen.' }
    ],
    description: 'Die FRITZ!Box ist der meistverbreitete Router in deutschen Haushalten. Ab FRITZ!OS 7.50 unterstützt sie WireGuard nativ — was VPN-Setup deutlich einfacher macht als früher mit IPsec.'
  },
  {
    slug: 'ipad',
    name: 'iPad',
    tagline: 'VPN auf dem iPad einrichten — Streaming, Reisen, Schule',
    recommendedVpn: 'nordvpn',
    difficulty: 'einfach',
    setupSteps: [
      'Im App Store die VPN-App des Anbieters laden',
      'Account anlegen oder anmelden',
      'iOS bittet einmalig um Erlaubnis, ein VPN-Profil zu installieren — bestätigen',
      'Server-Standort wählen (für Streaming: deutsche Server)',
      'Tippe „Verbinden" — VPN-Symbol erscheint in der Statusleiste'
    ],
    compatibleVpns: ['nordvpn', 'surfshark', 'expressvpn', 'cyberghost'],
    troubleshooting: [
      { issue: 'VPN-Profil-Installation schlägt fehl', solution: 'Einstellungen → Allgemein → VPN & Geräteverwaltung — alte Profile löschen, dann erneut installieren.' },
      { issue: 'VPN trennt sich, wenn iPad sperrt', solution: 'In der VPN-App: Einstellungen → „Auto-Connect on Demand" aktivieren — Profile wird neu angefordert.' },
      { issue: 'Akku-Verbrauch zu hoch', solution: 'WireGuard-/NordLynx-Protokoll wählen statt OpenVPN — bis zu 4× weniger Akku-Last.' }
    ],
    description: 'Auf dem iPad ist ein VPN besonders sinnvoll: Schul-Captive-Portals umgehen, öffentliche Café-WLANs absichern, oder dein deutsches Streaming-Abo auf Reisen nutzen.'
  },
  {
    slug: 'iphone',
    name: 'iPhone',
    tagline: 'VPN auf dem iPhone einrichten — schnell, sicher, einfach',
    recommendedVpn: 'nordvpn',
    difficulty: 'einfach',
    setupSteps: [
      'VPN-App im App Store laden',
      'Bei der Anmeldung iOS-Profil-Installation bestätigen',
      'Server wählen — für maximale Geschwindigkeit Deutschland oder Schweiz',
      'Verbinden — Status-Icon „VPN" erscheint',
      'Optional: „Bei Bedarf verbinden" aktivieren — VPN startet automatisch in unsicheren WLANs'
    ],
    compatibleVpns: ['nordvpn', 'surfshark', 'expressvpn', 'cyberghost'],
    troubleshooting: [
      { issue: 'Apps funktionieren nicht mit aktivem VPN', solution: 'Split-Tunneling aktivieren — bestimmte Apps (z. B. Banking) gehen direkt ans Internet, nicht durch das VPN.' },
      { issue: 'iCloud Private Relay-Konflikt', solution: 'Private Relay deaktivieren wenn VPN aktiv — beide gleichzeitig funktionieren oft nicht stabil.' },
      { issue: 'VPN bricht 5G-Verbindung', solution: 'Auf 4G LTE umschalten oder anderes Protokoll wählen — manche 5G-Provider blocken bestimmte VPN-Ports.' }
    ],
    description: 'iOS ist die sicherste Plattform — aber ein VPN ist trotzdem sinnvoll, vor allem in öffentlichen WLANs und bei Reisen mit deutschem Streaming-Abo.'
  },
  {
    slug: 'android',
    name: 'Android (Smartphone & Tablet)',
    tagline: 'VPN auf Android einrichten — Apps, Smart-TV, Tablets',
    recommendedVpn: 'surfshark',
    difficulty: 'einfach',
    setupSteps: [
      'VPN-App aus dem Google Play Store laden',
      'Account anlegen oder anmelden',
      'Bei erster Verbindung: Android fragt nach VPN-Profil-Erlaubnis — bestätigen',
      'Server-Standort wählen, „Verbinden" tippen',
      'Optional: Auto-Start beim Boot aktivieren (in App-Einstellungen)'
    ],
    compatibleVpns: ['surfshark', 'nordvpn', 'expressvpn', 'cyberghost'],
    troubleshooting: [
      { issue: 'VPN-App stürzt ab', solution: 'In den App-Einstellungen Cache löschen, VPN-Profil zurücksetzen (Einstellungen → Verbindungen → VPN).' },
      { issue: 'Akku schnell leer', solution: 'WireGuard statt OpenVPN aktivieren — bei Surfshark/NordVPN per Default an. Außerdem im Energiesparmodus VPN-App auf „Nicht beschränken" setzen.' },
      { issue: 'Mobile Daten ohne VPN-Schutz', solution: 'In der VPN-App „Always-On VPN" aktivieren — verhindert, dass Android das VPN beim Netz-Wechsel deaktiviert.' }
    ],
    description: 'Android-Smartphones und -Tablets profitieren stark von einem VPN: ungesicherte WLAN-Hotspots, Schul- und Firmen-Netze, sowie Apps mit Tracker-Aktivität.'
  },
  {
    slug: 'apple-tv',
    name: 'Apple TV',
    tagline: 'VPN auf Apple TV einrichten — ab tvOS 17',
    recommendedVpn: 'expressvpn',
    difficulty: 'mittel',
    setupSteps: [
      'tvOS-Version prüfen — VPN-App-Support gibt es ab tvOS 17 (Apple TV 4K, 2. & 3. Gen)',
      'App Store auf Apple TV öffnen, VPN-App suchen und installieren',
      'Login mit deinen Account-Daten (oder QR-Code-Login)',
      'Server wählen, „Verbinden" — VPN-Status oben in der Status-Leiste',
      'Streaming-App öffnen und wie gewohnt nutzen'
    ],
    compatibleVpns: ['expressvpn', 'nordvpn', 'surfshark'],
    troubleshooting: [
      { issue: 'VPN-App nicht im App Store', solution: 'tvOS-Update prüfen (Einstellungen → System). Apple TV vor 4K (1./2. Gen) unterstützt keine VPN-Apps.' },
      { issue: '4K-Bildqualität sinkt', solution: 'Server in Deutschland oder Frankreich wählen — niedrigere Latenz, höherer Durchsatz.' },
      { issue: 'AirPlay funktioniert nicht', solution: 'AirPlay umgeht VPN-Tunnel auf manchen Geräten — entweder VPN ausschalten zum AirPlayen oder Inhalte direkt am Apple TV streamen.' }
    ],
    description: 'Seit tvOS 17 (Herbst 2023) unterstützt Apple TV 4K endlich native VPN-Apps. Davor brauchte man komplexe Workarounds via Router oder Mac-Sharing — jetzt ist es ein 5-Minuten-Setup.'
  },
  {
    slug: 'router',
    name: 'Router (allgemein)',
    tagline: 'VPN auf dem Router einrichten — schützt das ganze Heimnetz',
    recommendedVpn: 'expressvpn',
    difficulty: 'komplex',
    setupSteps: [
      'Router-Modell mit VPN-Client-Support wählen (ASUS, GL.iNet, Synology, FRITZ!Box ab 7.50)',
      'Auf der Web-Oberfläche des Routers VPN-Einstellungen öffnen',
      'Konfig-Datei oder Login-Daten vom VPN-Anbieter holen',
      'WireGuard- oder OpenVPN-Konfig importieren',
      'Verbinden, dann mit https://www.dnsleaktest.com prüfen ob alles getunnelt wird'
    ],
    compatibleVpns: ['expressvpn', 'nordvpn', 'surfshark'],
    troubleshooting: [
      { issue: 'Geschwindigkeit halbiert', solution: 'Router-CPU ist der Flaschenhals. Modell mit min. 1.4 GHz Dual-Core nehmen (z. B. ASUS RT-AX88U).' },
      { issue: 'Manche Apps brechen ab', solution: 'Selektives Routing einrichten — nur bestimmte Geräte/IPs gehen durch das VPN, der Rest direkt.' },
      { issue: 'Streaming-Dienst erkennt VPN', solution: 'Auf dem Router andere Server der gleichen Region testen, oder Dual-Router-Setup nutzen.' }
    ],
    description: 'VPN auf dem Router ist die ultimative Lösung — ein Setup schützt automatisch alle Geräte: Smart TV, IoT, Konsolen, Tablets. Der Aufwand lohnt sich für Power-User.'
  },
  {
    slug: 'ps5',
    name: 'PlayStation 5',
    tagline: 'VPN auf PS5 — Setup über Router oder Mac/PC',
    recommendedVpn: 'nordvpn',
    difficulty: 'mittel',
    setupSteps: [
      'PS5 unterstützt keine native VPN-App — daher VPN auf Router oder PC einrichten',
      'Variante 1 (Router): VPN auf Router aktivieren, PS5 ist automatisch geschützt',
      'Variante 2 (PC-Hotspot): PC mit VPN, dann WLAN-Hotspot teilen, PS5 mit dem Hotspot verbinden',
      'In den PS5-Netzwerkeinstellungen DNS auf 1.1.1.1 / 9.9.9.9 setzen',
      'Test: Game-Server-Latenz prüfen — Region-VPN für Online-Gaming sinnvoll'
    ],
    compatibleVpns: ['nordvpn', 'expressvpn', 'surfshark'],
    troubleshooting: [
      { issue: 'Hohe Latenz beim Online-Gaming', solution: 'Server in der Nähe deiner Online-Gaming-Region wählen — Latenz steigt mit Distanz.' },
      { issue: 'Streaming-Apps auf PS5 zeigen Geo-Fehler', solution: 'VPN-Server in Deutschland wählen, ggf. anderen Server testen wenn der erste geblockt wird.' },
      { issue: 'PS Store-Region wechselt nicht', solution: 'Region wird durch dein Konto bestimmt, nicht durch IP — VPN ändert das nicht.' }
    ],
    description: 'Die PS5 hat keine native VPN-App. Wir zeigen dir die zwei besten Methoden: VPN am Router (schützt alles automatisch) oder PC-Hotspot mit VPN.'
  },
  {
    slug: 'mac',
    name: 'Mac (macOS)',
    tagline: 'VPN auf Mac einrichten — schnell, sicher, einfach',
    recommendedVpn: 'expressvpn',
    difficulty: 'einfach',
    setupSteps: [
      'Lade die macOS-App des VPN-Anbieters direkt von der Anbieter-Webseite',
      'Installiere — macOS verlangt Admin-Passwort und Systemerweiterungs-Erlaubnis',
      'Anmelden, Server wählen, verbinden',
      'In Systemeinstellungen → Netzwerk siehst du den VPN-Status',
      'Optional: VPN-Auto-Start beim Login aktivieren (in App-Einstellungen)'
    ],
    compatibleVpns: ['expressvpn', 'nordvpn', 'surfshark', 'cyberghost'],
    troubleshooting: [
      { issue: 'Systemerweiterung wird nicht aktiviert', solution: 'Systemeinstellungen → Datenschutz & Sicherheit → Allgemein → „Erlauben" für die VPN-App.' },
      { issue: 'IPv6-Leak', solution: 'Im VPN: IPv6-Leak-Schutz aktivieren. Manche VPNs deaktivieren IPv6 komplett, was sicherer ist.' },
      { issue: 'WiFi-Reconnect bricht VPN', solution: 'Kill-Switch aktivieren — verhindert, dass macOS während des Reconnects ungeschützt online geht.' }
    ],
    description: 'Auf dem Mac ist VPN-Setup einfach. Wichtig: Apps direkt vom Anbieter laden (nicht über App Store, da macOS-Apps mehr Zugriff haben und stabiler laufen).'
  }
];

export const platformBySlug = (slug: string): Platform | undefined =>
  platforms.find((p) => p.slug === slug);
