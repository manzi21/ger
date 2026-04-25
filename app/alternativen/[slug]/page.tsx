import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { alternativePages, alternativeBySlug } from '@/data/alternatives';
import { providerByKey, providers } from '@/data/providers';
import { comparisons } from '@/data/comparisons';
import ProviderCard from '@/components/ProviderCard';
import VPNBlock from '@/components/VPNBlock';
import RelatedLinks from '@/components/RelatedLinks';
import FAQ from '@/components/FAQ';
import JsonLd from '@/components/JsonLd';
import { buildMetadata, SITE } from '@/lib/seo';
import { AFFILIATE_DISCLOSURE } from '@/lib/affiliate';

interface PageProps {
  params: { slug: string };
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return alternativePages.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const a = alternativeBySlug(params.slug);
  if (!a) return {};
  return buildMetadata({
    title: a.title,
    description: a.metaDescription,
    path: `/alternativen/${a.slug}`,
    type: 'article'
  });
}

export default function AlternativePage({ params }: PageProps) {
  const page = alternativeBySlug(params.slug);
  if (!page) notFound();

  const baseProvider = providerByKey(page.forProvider);
  const alternatives = page.alternatives
    .map((k) => providerByKey(k))
    .filter((p): p is NonNullable<typeof p> => p !== undefined);

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Start', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'Alternativen', item: `${SITE.url}/alternativen/${page.slug}` },
      { '@type': 'ListItem', position: 3, name: page.title, item: `${SITE.url}/alternativen/${page.slug}` }
    ]
  };

  return (
    <article>
      <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">
        {baseProvider ? `${baseProvider.name} – Alternativen` : 'Alternativen'}
      </p>
      <h1 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">{page.title}</h1>
      <p className="mt-4 text-lg text-slate-600">{page.intro}</p>
      <p className="mt-3 text-xs italic text-slate-500">{AFFILIATE_DISCLOSURE}</p>

      <h2 className="mt-12 text-2xl font-bold text-slate-900">Die besten Alternativen</h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {alternatives.map((p, idx) => (
          <ProviderCard key={p.key} provider={p} highlighted={idx === 0} />
        ))}
      </div>

      <VPNBlock />

      <FAQ items={page.faq} />

      <RelatedLinks
        title="Direkt-Vergleiche"
        links={comparisons
          .filter((c) => c.left === page.forProvider || c.right === page.forProvider)
          .slice(0, 4)
          .map((c) => ({
            href: `/vs/${c.slug}`,
            label: c.title,
            description: c.metaDescription
          }))}
      />

      <RelatedLinks
        title="Weitere Streaming-Anbieter"
        links={providers
          .filter((p) => p.key !== page.forProvider && !page.alternatives.includes(p.key))
          .slice(0, 4)
          .map((p) => ({
            href: '/ratgeber/streaming-dienste-vergleich',
            label: p.name,
            description: p.tagline
          }))}
      />

      <JsonLd data={breadcrumb} />
    </article>
  );
}
