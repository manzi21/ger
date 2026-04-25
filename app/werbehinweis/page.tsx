import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { AFFILIATE_DISCLOSURE } from '@/lib/affiliate';

export const metadata: Metadata = buildMetadata({
  title: 'Werbehinweis & Affiliate-Disclosure',
  description:
    'Transparenz-Hinweis zu Affiliate-Links auf TV-Streaming-Vergleich: Wie wir Anbieter empfehlen, wie wir verdienen und welche Standards wir einhalten.',
  path: '/werbehinweis'
});

export default function WerbehinweisPage() {
  return (
    <article className="prose-de max-w-3xl">
      <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Werbehinweis</h1>
      <p className="mt-4 text-lg">{AFFILIATE_DISCLOSURE}</p>

      <h2>Was sind Affiliate-Links?</h2>
      <p>
        Affiliate-Links sind besondere Links zu Partner-Anbietern. Wenn du über einen solchen Link auf die
        Webseite des Anbieters klickst und dort einen Vertrag abschließt, kann es sein, dass wir eine kleine
        Provision erhalten. Für dich entstehen dadurch <strong>keinerlei Mehrkosten</strong>.
      </p>

      <h2>Wie wählen wir Anbieter aus?</h2>
      <p>
        Unsere Empfehlungen basieren auf inhaltlicher Recherche, dem geprüften Funktionsumfang und unseren
        eigenen Tests. Wir empfehlen ausschließlich Anbieter, hinter denen wir aus Verbraucherperspektive
        stehen können. Eine Provision ist für die Aufnahme in die Empfehlungsliste keine Voraussetzung.
      </p>

      <h2>Welche Programme nutzen wir?</h2>
      <ul>
        <li>AWIN (z. B. NordVPN, CyberGhost, Surfshark, WOW)</li>
        <li>Impact Radius (z. B. ExpressVPN)</li>
        <li>Amazon PartnerNet (für Geräte- und Hardware-Empfehlungen)</li>
        <li>Direkt-Partnerschaften mit ausgewählten Anbietern</li>
      </ul>

      <h2>Kennzeichnung im Inhalt</h2>
      <p>
        Affiliate-Links sind im HTML mit <code>rel="sponsored noopener nofollow"</code> ausgezeichnet, was
        den Empfehlungen der Suchmaschinen und der Wettbewerbsregeln nach UWG entspricht. Zusätzlich findest
        du auf jeder Seite mit Affiliate-Links einen sichtbaren Hinweis.
      </p>

      <h2>Unabhängigkeit unserer Inhalte</h2>
      <p>
        Inhaltliche Bewertungen folgen ausschließlich redaktionellen Kriterien. Provisionssätze, Höhe der
        Vergütung oder geschäftliche Beziehungen haben keinen Einfluss auf Test- oder Empfehlungsergebnisse.
      </p>
    </article>
  );
}
