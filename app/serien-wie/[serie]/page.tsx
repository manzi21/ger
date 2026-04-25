import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { showsSimilar, showSimilarBySlug } from '@/data/showSimilar';
import { providerByKey } from '@/data/providers';
import CTAButton from '@/components/CTAButton';
import TrustBox from '@/components/TrustBox';
import VPNBlock from '@/components/VPNBlock';
import RelatedLinks from '@/components/RelatedLinks';
import FAQ from '@/components/FAQ';
import StickyCTA from '@/components/StickyCTA';
import JsonLd from '@/components/JsonLd';
import { buildMetadata, SITE } from '@/lib/seo';
import { AFFILIATE_DISCLOSURE } from '@/lib/affiliate';

interface PageProps {
  params: { serie: string };
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return showsSimilar.map((s) => ({ serie: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const s = showSimilarBySlug(params.serie);
  if (!s) return {};
  return buildMetadata({
    title: `Serien wie ${s.showName} 2026 - die ${s.similarShows.length} besten Alternativen`,
    description: `Du liebst ${s.showName}? Wir empfehlen ${s.similarShows.length} aehnlich starke Serien im ${s.genre}-Genre - mit Streaming-Anbieter pro Serie.`,
    path: `/serien-wie/${s.slug}`,
    type: 'article'
  });
}

export default function SerienWiePage({ params }: PageProps) {
  const s = showSimilarBySlug(params.serie);
  if (!s) notFound();

  const primaryProvider = providerByKey(s.primaryProvider);

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Start', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'Serien wie', item: `${SITE.url}/serien-wie/${s.slug}` },
      { '@type': 'ListItem', position: 3, name: s.showName, item: `${SITE.url}/serien-wie/${s.slug}` }
    ]
  };

  const faq = [
    { q: `Wo kann ich ${s.showName} streamen?`, a: `${s.showName} laeuft auf ${primaryProvider?.name ?? 'mehreren Anbietern'}. Klicke unten auf den Anbieter fuer Details.` },
    { q: `Welche Serie ist die beste Alternative zu ${s.showName}?`, a: `${s.similarShows[0]?.name} ist unser Top-Pick - ${s.similarShows[0]?.reason}` },
    { q: `Lohnt sich ein extra Streaming-Abo nur fuer eine Serie?`, a: 'Bei Top-Serien: ja. Die meisten Anbieter sind monatlich kuendbar - du kannst gezielt einen Monat zubuchen, die Serie schauen und wieder kuendigen.' }
  ];

  return (
    <article>
      <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">{s.genre}</p>
      <h1 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">{s.tagline}</h1>
      <p className="mt-4 text-lg text-slate-600">{s.intro}</p>
      <p className="mt-3 text-xs italic text-slate-500">{AFFILIATE_DISCLOSURE}</p>

      <TrustBox
        items={[
          { label: 'Original', value: s.showName },
          { label: 'Genre', value: s.genre },
          { label: 'Empfehlungen', value: String(s.similarShows.length) },
          { label: 'Hauptanbieter', value: primaryProvider?.name ?? '-' }
        ]}
      />

      {primaryProvider && (
        <aside className="my-8 rounded-2xl border-2 border-brand-500 bg-gradient-to-br from-brand-50 to-white p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-700">Hier laeuft {s.showName}</p>
          <h2 className="mt-1 text-2xl font-bold text-slate-900">{primaryProvider.name}</h2>
          <p className="mt-2 text-slate-700">{primaryProvider.tagline}. Hier siehst du {s.showName} und viele aehnliche Serien.</p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <CTAButton affiliate={primaryProvider.affiliate} variant="primary" size="lg">{primaryProvider.name} starten &rarr;</CTAButton>
            <Link href={`/anbieter/${primaryProvider.key}`} className="text-sm font-semibold text-brand-700 underline">{primaryProvider.name} Test lesen</Link>
          </div>
        </aside>
      )}

      <h2 className="mt-12 text-2xl font-bold text-slate-900">Die {s.similarShows.length} besten Serien wie {s.showName}</h2>
      <div className="mt-6 space-y-4">
        {s.similarShows.map((sim, i) => {
          const prov = providerByKey(sim.provider);
          return (
            <div key={sim.name} className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-xl font-bold text-slate-900">{i + 1}. {sim.name}</h3>
                {prov && <span className="text-sm font-semibold text-brand-700">auf {prov.name}</span>}
              </div>
              <p className="mt-2 text-slate-700">{sim.reason}</p>
              {prov && (
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <CTAButton affiliate={prov.affiliate} variant="ghost" size="md">Zu {prov.name} &rarr;</CTAButton>
                  <Link href={`/anbieter/${prov.key}`} className="text-xs text-brand-700 underline">{prov.name} Test</Link>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <VPNBlock headline="Serien aus dem Ausland sehen? VPN-Empfehlung fuer Reisen" />

      <FAQ items={faq} />

      <RelatedLinks
        title="Andere Serien-Empfehlungen"
        links={showsSimilar.filter((x) => x.slug !== s.slug).slice(0, 6).map((x) => ({ href: `/serien-wie/${x.slug}`, label: `Serien wie ${x.showName}`, description: x.genre }))}
      />

      {primaryProvider && <StickyCTA label={`${s.showName} auf ${primaryProvider.name}`} affiliate={primaryProvider.affiliate} ctaLabel="Anbieter ansehen" />}

      <JsonLd data={breadcrumb} />
    </article>
  );
}
