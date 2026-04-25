import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { providers, providerByKey } from '@/data/providers';
import CTAButton from '@/components/CTAButton';
import ProsCons from '@/components/ProsCons';
import Rating from '@/components/Rating';
import TrustBox from '@/components/TrustBox';
import VPNBlock from '@/components/VPNBlock';
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
  return providers.map((p) => ({ slug: p.key }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const p = providerByKey(params.slug);
  if (!p) return {};
  return buildMetadata({
    title: `${p.name} Test 2026: Lohnt sich der Streamingdienst wirklich?`,
    description: `${p.name} im ehrlichen Test 2026: Preise, Inhalte, Bildqualität, Vor- und Nachteile. Plus klare Empfehlung, für wen sich das Abo lohnt.`,
    path: `/anbieter/${p.key}`,
    type: 'article'
  });
}

export default function ProviderReviewPage({ params }: PageProps) {
  const p = providerByKey(params.slug);
  if (!p) notFound();

  const others = providers.filter((x) => x.key !== p.key);

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: { '@type': 'Service', name: p.name, provider: { '@type': 'Organization', name: p.name } },
    author: { '@type': 'Organization', name: SITE.name },
    publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
    reviewRating: { '@type': 'Rating', ratingValue: p.rating, bestRating: 5, worstRating: 1 },
    name: `${p.name} Test 2026`
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Start', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'Anbieter', item: `${SITE.url}/anbieter/${p.key}` },
      { '@type': 'ListItem', position: 3, name: p.name, item: `${SITE.url}/anbieter/${p.key}` }
    ]
  };

  const faq = [
    { q: `Was kostet ${p.name} pro Monat?`, a: `${p.name} startet ab ${p.priceFromEUR.toFixed(2).replace('.', ',')} € pro Monat. Im Detail: ${p.priceTiers.map((t) => `${t.name} ${t.priceEUR.toFixed(2).replace('.', ',')} €`).join('; ')}.` },
    { q: `Lohnt sich ${p.name} wirklich?`, a: `${p.whoFor}` },
    { q: `Hat ${p.name} 4K UHD?`, a: p.uhdInStandard ? `Ja, ${p.name} liefert 4K UHD bereits im Standard-Tarif – ohne Aufpreis.` : `4K UHD ist bei ${p.name} nur im Premium-Tarif verfügbar.` },
    { q: `Ist ${p.name} monatlich kündbar?`, a: `Ja, alle Tarife von ${p.name} sind monatlich kündbar.` }
  ];

  return (
    <article>
      <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">Anbieter-Test</p>
      <h1 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
        {p.name} Test 2026: Lohnt sich der Streamingdienst wirklich?
      </h1>
      <div className="mt-3"><Rating value={p.rating} size="lg" /></div>
      <p className="mt-4 text-lg text-slate-600">{p.tagline}. Wir haben {p.name} ausführlich getestet — Preise, Bibliothek, Bildqualität, Tarife. Hier ist unser ehrliches Urteil.</p>
      <p className="mt-3 text-xs italic text-slate-500">{AFFILIATE_DISCLOSURE}</p>

      <TrustBox
        title="Auf einen Blick"
        items={[
          { label: 'Einstiegspreis', value: `${p.priceFromEUR.toFixed(2).replace('.', ',')} €/Mon.` },
          { label: 'Gegründet', value: String(p.founded) },
          { label: '4K UHD', value: p.uhdInStandard ? 'im Standard inkl.' : 'nur Premium' },
          { label: 'Kündigung', value: 'monatlich' }
        ]}
      />

      <aside className="my-8 rounded-2xl border-2 border-brand-500 bg-brand-50/40 p-6">
        <p className="text-xs font-bold uppercase tracking-wider text-brand-700">Schnelles Urteil</p>
        <h2 className="mt-1 text-2xl font-bold text-slate-900">{p.name} {p.rating >= 4.4 ? 'klar empfehlenswert' : p.rating >= 4.0 ? 'gut, mit Vorbehalten' : 'nur mit Einschränkungen'}</h2>
        <p className="mt-2 text-slate-700"><strong>Für wen geeignet?</strong> {p.bestFor}</p>
        <p className="mt-2 text-slate-700"><strong>Für wen ungeeignet?</strong> {p.cons[0]} ist das größte Manko.</p>
        <div className="mt-5">
          <CTAButton affiliate={p.affiliate} variant="primary" size="lg">Direkt zu {p.name} →</CTAButton>
        </div>
      </aside>

      <h2 className="mt-12 text-2xl font-bold text-slate-900">Was bietet {p.name}?</h2>
      <div className="mt-4 prose-de">
        <p>{p.whoFor}</p>
        <p>Im Detail überzeugt {p.name} mit {p.highlights.length} zentralen Stärken: {p.highlights.join('; ')}. Wir gehen jeden Punkt unten ehrlich durch — inklusive der Schwächen, die andere Tests gerne verschweigen.</p>
      </div>

      <ProsCons title={`Vor- und Nachteile von ${p.name}`} pros={p.pros} cons={p.cons} />

      <h2 className="mt-12 text-2xl font-bold text-slate-900">Preise im Detail</h2>
      <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-left">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-700">Tarif</th>
              <th className="px-4 py-3 font-semibold text-slate-700">Preis pro Monat</th>
              <th className="px-4 py-3 font-semibold text-slate-700">Was du bekommst</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {p.priceTiers.map((t) => (
              <tr key={t.name}>
                <th scope="row" className="px-4 py-3 text-left font-medium text-slate-900">{t.name}</th>
                <td className="px-4 py-3 text-brand-700">{t.priceEUR.toFixed(2).replace('.', ',')} €</td>
                <td className="px-4 py-3 text-slate-700">{t.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <CTAButton affiliate={p.affiliate} variant="primary" size="lg">Zu {p.name} →</CTAButton>
        <Link href={`/kosten/${p.key}`} className="text-sm font-semibold text-brand-700 underline">
          Vollständiger Kosten-Guide →
        </Link>
      </div>

      <VPNBlock headline="Sicher streamen mit deinem neuen Abo" />

      <FAQ items={faq} />

      <RelatedLinks
        title={`Andere Streaming-Anbieter`}
        links={others.slice(0, 4).map((o) => ({ href: `/anbieter/${o.key}`, label: o.name, description: o.tagline }))}
      />

      <StickyCTA label={`Jetzt ${p.name} testen`} affiliate={p.affiliate} ctaLabel="Angebot ansehen" />

      <JsonLd data={reviewSchema} />
      <JsonLd data={breadcrumb} />
    </article>
  );
}
