import type { Metadata } from 'next';
import { buildMetadata, SITE } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Datenschutzerklärung',
  description:
    'Datenschutzerklärung für tvstreamingvergleich.de gemäß DSGVO – inkl. Hinweise zu Affiliate-Tracking und Server-Logs.',
  path: '/datenschutz',
  noindex: true
});

/**
 * Mustertext-Datenschutzerklärung. Vor dem Live-Gang muss der Betreiber
 * die Inhalte an seinen tatsächlichen Tech-Stack anpassen (z. B. Analytics,
 * Cookie-Banner, Hosting-Anbieter).
 */
export default function DatenschutzPage() {
  return (
    <article className="prose-de max-w-3xl">
      <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Datenschutzerklärung</h1>

      <p>
        Wir freuen uns über dein Interesse an {SITE.name}. Der Schutz deiner personenbezogenen Daten ist uns
        ein wichtiges Anliegen. Im Folgenden erklären wir, wie wir mit deinen Daten umgehen.
      </p>

      <h2>1. Verantwortlicher</h2>
      <p>
        Verantwortlich für die Datenverarbeitung auf dieser Website ist der im{' '}
        <a href="/impressum">Impressum</a> genannte Betreiber.
      </p>

      <h2>2. Server-Logfiles</h2>
      <p>
        Beim Aufruf unserer Seiten erhebt unser Hosting-Provider (Vercel Inc., USA – mit
        EU-Standardvertragsklauseln) automatisch Informationen, die dein Browser übermittelt: IP-Adresse,
        Datum und Uhrzeit der Anfrage, Referrer-URL, User-Agent. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f
        DSGVO (berechtigtes Interesse an einem stabilen Betrieb).
      </p>

      <h2>3. Cookies</h2>
      <p>
        Diese Website setzt nur technisch notwendige Cookies ein. Es werden keine Tracking- oder Analyse-
        Cookies gesetzt, die deine Einwilligung erfordern würden. Sofern du auf einen Affiliate-Link klickst
        und auf die Seite eines Partner-Anbieters wechselst, kann dieser Partner eigene Cookies setzen –
        Details findest du in dessen Datenschutzerklärung.
      </p>

      <h2>4. Affiliate-Programme</h2>
      <p>
        Wir nutzen die Affiliate-Programme AWIN, Impact Radius sowie Amazon PartnerNet. Beim Klick auf einen
        Affiliate-Link wirst du auf die Seite des jeweiligen Anbieters weitergeleitet. Über einen Tracking-
        Parameter erkennt der Anbieter, dass du über uns kamst – wir erhalten in dem Fall ggf. eine
        Provision. Personenbezogene Daten werden auf unserer Seite dabei <strong>nicht</strong> erhoben.
      </p>

      <h2>5. Externe Links</h2>
      <p>
        Wir verlinken auf externe Webseiten, auf deren Datenverarbeitung wir keinen Einfluss haben. Bitte
        beachte die jeweiligen Datenschutzerklärungen der verlinkten Anbieter.
      </p>

      <h2>6. Kontaktaufnahme</h2>
      <p>
        Wenn du uns per E-Mail kontaktierst, werden deine Angaben aus der E-Mail einschließlich der
        angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns
        gespeichert. Rechtsgrundlage: Art. 6 Abs. 1 lit. b und f DSGVO.
      </p>

      <h2>7. Deine Rechte</h2>
      <ul>
        <li>Auskunft (Art. 15 DSGVO)</li>
        <li>Berichtigung (Art. 16 DSGVO)</li>
        <li>Löschung (Art. 17 DSGVO)</li>
        <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
        <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
        <li>Widerspruch (Art. 21 DSGVO)</li>
        <li>Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)</li>
      </ul>

      <h2>8. SSL-Verschlüsselung</h2>
      <p>
        Diese Seite nutzt aus Sicherheitsgründen HTTPS. Eine verschlüsselte Verbindung ist daran zu erkennen,
        dass dein Browser ein Schloss-Symbol anzeigt.
      </p>

      <p className="text-xs italic text-slate-500">
        Stand: {new Date().toLocaleDateString('de-DE')}. Hinweis für den Betreiber: Sobald du Tools wie
        Plausible, Matomo oder Google Analytics einbindest, ergänze diese Erklärung um die jeweiligen
        Abschnitte (Rechtsgrundlage, Speicherdauer, Empfänger, Drittlandtransfer).
      </p>
    </article>
  );
}
