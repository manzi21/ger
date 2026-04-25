import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { vpnProviders, vpnByKey } from '@/data/vpnProviders';
import CTAButton from '@/components/CTAButton';
import ProsCons from '@/components/ProsCons';
import Rating from '@/components/Rating';
import TrustBox from '@/components/TrustBox';
import RelatedLinks from '@/components/RelatedLinks';
import FAQ from '@/components/FAQ';
import StickyCTA from '@/components/StickyCTA';
import JsonLd from '@/components/JsonLd';
import { buildMetadata, SITE } from '@/lib/seo';
import { AFFILIATE_DISCLOSURE } from '@/lib/affiliate';

interface PageProps {
  params: { slug: string };
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return vpnProviders.map((v) => ({ slug: v.key }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const v = vpnByKey(params.slug);
  if (!v) return {};
  return buildMetadata({
    title: `${v.name} Test 2026: Ehrliche Bewertung & Erfahrungen`,
    description: `${v.name} ausführlich getestet: Geschwindigkeit, Sicherheit, Server, Preis und Pros/Cons. Plus klare Empfehlung für deutsche Nutzer.`,
    path: `/vpn/${v.key}`,
    type: 'article'
  });
}

export default function VpnReviewPage({ params }: PageProps) {
  const v = vpnByKey(params.slug);
  if (!v) notFound();

  const others = vpnProviders.filter((x) => x.key !== v.key);

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: { '@type': 'Service', name: v.name, provider: { '@type': 'Organization', name: v.name } },
    author: { '@type': 'Organization', name: SITE.name },
    publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
    reviewRating: { '@type': 'Rating', ratingValue: v.rating, bestRating: 5, worstRating: 1 },
    name: `${v.name} Test 2026`
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Start', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'VPN', item: `${SITE.url}/vpn/${v.key}` },
      { '@type': 'ListItem', position: 3, name: v.name, item: `${SITE.url}/vpn/${v.key}` }
    ]
  };

  const faq = [
    { q: `Wie viel kostet ${v.name}?`, a: `${v.name} startet ab ${v.priceFromEUR.toFixed(2).replace('.', ',')} € pro Monat im längsten Tarif. Es gibt eine ${v.moneyBackDays}-Tage-Geld-zurück-Garantie, somit risikoloser Test möglich.` },
    { q: `Ist ${v.name} sicher?`, a: `${v.name} hat eine ${v.noLogs ? 'unabhängig auditierte No-Logs-Policy' : 'No-Logs-Policy ohne unabhängiges Audit'}. Sitz: ${v.jurisdiction}.` },
    { q: `Wie viele Server hat ${v.name}?`, a: `${v.name} betreibt rund ${v.servers.toLocaleString('de-DE')} Server in ${v.countries} Ländern.` },
    { q: `Welche Zahlungsmethoden werden akzeptiert?`, a: `${v.paymentMethods.join(', ')}.` }
  ];

  return (
    <article>
      <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">VPN-Test</p>
      <h1 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
        {v.name} Test 2026: Ehrliche Bewertung &amp; Erfahrungen
      </h1>
      <div className="mt-3"><Rating value={v.rating} size="lg" /></div>
      <p className="mt-4 text-lg text-slate-600">{v.tagline}. Wir haben {v.name} ausführlich getestet — Geschwindigkeit, Sicherheit, Streaming-Tauglichkeit und Preis.</p>
      <p className="mt-3 text-xs italic text-slate-500">{AFFILIATE_DISCLOSURE}</p>

      <TrustBox
        items={[
          { label: 'Einstiegspreis', value: `${v.priceFromEUR.toFixed(2).replace('.', ',')} €/Mon.` },
          { label: 'Server', value: `${v.servers.toLocaleString('de-DE')} in ${v.countries} Ländern` },
          { label: 'Sitz', value: v.jurisdiction.split('(')[0].trim() },
          { label: 'Geld-zurück', value: `${v.moneyBackDays} Tage` }
        ]}
      />

      <aside className="my-8 rounded-2xl border-2 border-brand-500 bg-brand-50/40 p-6">
        <p className="text-xs font-bold uppercase tracking-wider text-brand-700">Schnelles Urteil</p>
        <h2 className="mt-1 text-2xl font-bold text-slate-900">{v.name} {v.rating >= 4.5 ? 'klar empfehlenswert' : v.rating >= 4.2 ? 'sehr solide Wahl' : 'gut, aber nicht erste Wahl'}</h2>
        <p className="mt-2 text-slate-700"><strong>Für wen geeignet?</strong> {v.whoFor}</p>
        <p className="mt-2 text-slate-700"><strong>Größtes Manko:</strong> {v.cons[0]}.</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <CTAButton affiliate={v.affiliate} variant="primary" size="lg">{v.name} {v.moneyBackDays} Tage testen →</CTAButton>
          <span className="self-center text-xs text-slate-500">{v.moneyBackDays} Tage Geld-zurück-Garantie</span>
        </div>
      </aside>

      <h2 className="mt-12 text-2xl font-bold text-slate-900">Was bietet {v.name}?</h2>
      <div className="mt-4 prose-de">
        <p>{v.tagline}: {v.highlights.join('; ')}.</p>
        <p>{v.whoFor}</p>
      </div>

      <ProsCons title={`Vor- und Nachteile von ${v.name}`} pros={v.pros} cons={v.cons} />

      <h2 className="mt-12 text-2xl font-bold text-slate-900">Sicherheit &amp; Privatsphäre</h2>
      <div className="mt-4 prose-de">
        <p><strong>Sitz:</strong> {v.jurisdiction}. <strong>No-Logs-Policy:</strong> {v.noLogs ? 'Ja — und unabhängig auditiert.' : 'Beworben, aber ohne aktuelles externes Audit.'}</p>
        <p><strong>Verschlüsselung:</strong> AES-256 sowie moderne Protokolle (WireGuard / Lightway / NordLynx).</p>
        <p><strong>Zusatz-Features:</strong> Kill-Switch, DNS-Leak-Schutz, Split-Tunneling — Standardrepertoire für seriöse Anbieter, wie es {v.name} bietet.</p>
      </div>

      <h2 className="mt-12 text-2xl font-bold text-slate-900">Preise &amp; Bezahlung</h2>
      <div className="mt-4 prose-de">
        <p>Der günstigste Einstieg liegt bei <strong>{v.priceFromEUR.toFixed(2).replace('.', ',')} € pro Monat</strong> (im längsten Tarif, Stand Recherche). Bezahlbar via {v.paymentMethods.slice(0, 4).join(', ')}{v.paymentMethods.length > 4 ? ' und mehr' : ''}.</p>
        <p>{v.moneyBackDays}-Tage-Geld-zurück-Garantie ohne Begründungspflicht — du kannst {v.name} also entspannt testen und bei Nicht-Gefallen kostenlos zurückgeben.</p>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <CTAButton affiliate={v.affiliate} variant="primary" size="lg">Zu {v.name} →</CTAButton>
        <Link href={`/kosten/${v.key}`} className="text-sm font-semibold text-brand-700 underline">Detaillierter Preis-Vergleich →</Link>
      </div>

      <FAQ items={faq} />

      <RelatedLinks
        title="Andere VPN-Anbieter im Test"
        links={others.map((o) => ({ href: `/vpn/${o.key}`, label: `${o.name} Test`, description: o.tagline }))}
      />

      <StickyCTA label={`Jetzt ${v.name} ${v.moneyBackDays} Tage testen`} affiliate={v.affiliate} ctaLabel="Angebot ansehen" />

      <JsonLd data={reviewSchema} />
      <JsonLd data={breadcrumb} />
    </article>
  );
}
