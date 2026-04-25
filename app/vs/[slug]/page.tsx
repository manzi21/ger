import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { comparisons, comparisonBySlug } from '@/data/comparisons';
import { providerByKey } from '@/data/providers';
import ComparisonTable from '@/components/ComparisonTable';
import BestChoice from '@/components/BestChoice';
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
  return comparisons.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const c = comparisonBySlug(params.slug);
  if (!c) return {};
  return buildMetadata({
    title: c.title,
    description: c.metaDescription,
    path: `/vs/${c.slug}`,
    type: 'article'
  });
}

export default function VsPage({ params }: PageProps) {
  const comparison = comparisonBySlug(params.slug);
  if (!comparison) notFound();

  const left = providerByKey(comparison.left);
  const right = providerByKey(comparison.right);
  if (!left || !right) notFound();

  const winnerProvider =
    comparison.winner === 'left' ? left : comparison.winner === 'right' ? right : null;

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Start', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'Vergleiche', item: `${SITE.url}/vs/${comparison.slug}` },
      { '@type': 'ListItem', position: 3, name: comparison.title, item: `${SITE.url}/vs/${comparison.slug}` }
    ]
  };

  return (
    <article>
      <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">Direkt-Vergleich</p>
      <h1 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">{comparison.title}</h1>
      <p className="mt-4 text-lg text-slate-600">{comparison.intro}</p>

      <p className="mt-3 text-xs italic text-slate-500">{AFFILIATE_DISCLOSURE}</p>

      {winnerProvider ? (
        <BestChoice
          pick={winnerProvider}
          reason={comparison.verdict}
          label={`Unsere Empfehlung: ${winnerProvider.name}`}
        />
      ) : (
        <aside className="my-8 rounded-2xl border-2 border-brand-500 bg-brand-50/40 p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-700">Schnelles Urteil</p>
          <h2 className="mt-1 text-2xl font-bold text-slate-900">Beide haben ihre Berechtigung</h2>
          <p className="mt-2 text-sm text-slate-700">{comparison.verdict}</p>
        </aside>
      )}

      <h2 className="mt-12 text-2xl font-bold text-slate-900">{left.name} vs. {right.name} im Detail</h2>
      <p className="mt-2 text-slate-600">
        Die wichtigsten Kriterien direkt nebeneinander – ohne Marketing-Bla.
      </p>
      <div className="mt-4">
        <ComparisonTable leftLabel={left.name} rightLabel={right.name} rows={comparison.table} />
      </div>

      <section className="mt-10 grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h3 className="text-xl font-bold text-slate-900">Beste Wahl für: {left.name}</h3>
          <p className="mt-2 text-slate-700">{comparison.bestForLeft}</p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h3 className="text-xl font-bold text-slate-900">Beste Wahl für: {right.name}</h3>
          <p className="mt-2 text-slate-700">{comparison.bestForRight}</p>
        </article>
      </section>

      <VPNBlock headline="Sicher streamen – mit oder ohne Abo" />

      <FAQ items={comparison.faq} />

      <RelatedLinks
        title="Mehr Vergleiche"
        links={comparisons
          .filter((c) => c.slug !== comparison.slug)
          .map((c) => ({ href: `/vs/${c.slug}`, label: c.title, description: c.metaDescription }))}
      />

      <StickyCTA
        label={winnerProvider ? `Unsere Empfehlung: ${winnerProvider.name}` : `${left.name} oder ${right.name}?`}
        affiliate={(winnerProvider ?? left).affiliate}
        ctaLabel="Angebot ansehen"
      />

      <JsonLd data={breadcrumb} />
    </article>
  );
}
