import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Impressum',
  description: 'Anbieterkennzeichnung gemäß § 5 TMG für tvstreamingvergleich.de.',
  path: '/impressum',
  noindex: true
});

/**
 * WICHTIG: Diese Seite ist gesetzlich vorgeschrieben (§ 5 TMG, § 18 MStV).
 * Die unten stehenden Platzhalter MÜSSEN vor der Veröffentlichung mit den
 * echten Kontaktdaten ersetzt werden.
 */
export default function ImpressumPage() {
  return (
    <article className="prose-de max-w-3xl">
      <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Impressum</h1>

      <h2>Angaben gemäß § 5 TMG</h2>
      <p>
        [Vor- und Nachname des Betreibers]
        <br />
        [Straße, Hausnummer]
        <br />
        [PLZ Ort]
        <br />
        Deutschland
      </p>

      <h2>Kontakt</h2>
      <p>
        E-Mail: [kontakt@tvstreamingvergleich.de]
        <br />
        Telefon: [+49 …]
      </p>

      <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
      <p>
        [Vor- und Nachname]
        <br />
        [Anschrift wie oben]
      </p>

      <h2>Streitschlichtung</h2>
      <p>
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
        <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener">
          https://ec.europa.eu/consumers/odr
        </a>
        . Wir sind nicht bereit oder verpflichtet, an einem Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <h2>Haftung für Inhalte</h2>
      <p>
        Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den
        allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
        verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
        zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
      </p>

      <h2>Haftung für Links</h2>
      <p>
        Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss
        haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
        verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
      </p>

      <h2>Urheberrecht</h2>
      <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
        deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
        außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors.
      </p>

      <p className="text-xs italic text-slate-500">
        Hinweis für den Betreiber: Bitte ersetze vor dem Live-Gang alle in eckigen Klammern markierten
        Platzhalter mit deinen echten Kontaktdaten. Ein unvollständiges Impressum ist abmahnfähig.
      </p>
    </article>
  );
}
