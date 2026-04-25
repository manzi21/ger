import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { guides, guideBySlug } from '@/data/guides';
import { providerByKey } from '@/data/providers';
import { vpnByKey } from '@/data/vpnProviders';
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
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const g = guideBySlug(params.slug);
  if (!g) return {};
  return buildMetadata({
    title: g.title,
    description: g.metaDescription,
    path: `/ratgeber/${g.slug}`,
    type: 'article',
    publishedTime: g.publishedISO,
    modifiedTime: g.updatedISO
  });
}

export default function GuidePage({ params }: PageProps) {
  const guide = guideBySlug(params.slug);
  if (!guide) notFound();

  const featuredProviders = (guide.highlightedProviders ?? [])
    .map((k) => providerByKey(k))
    .filter((p): p is NonNullable<typeof p> => p !== undefined);

  const featuredVpns = (guide.highlightedVpns ?? [])
    .map((k) => vpnByKey(k))
    .filter((v): v is NonNullable<typeof v> => v !== undefined);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.metaDescription,
    datePublished: guide.publishedISO,
    dateModified: guide.updatedISO,
    inLanguage: 'de-DE',
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE.url}/ratgeber/${guide.slug}` },
    author: { '@type': 'Organization', name: SITE.name, url: SITE.url },
    publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url }
  };

  return (
    <article>
      <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">Ratgeber</p>
      <h1 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">{guide.title}</h1>
      <p className="mt-3 text-sm text-slate-500">
        Veröffentlicht: {new Date(guide.publishedISO).toLocaleDateString('de-DE')} · Aktualisiert:{' '}
        {new Date(guide.updatedISO).toLocaleDateString('de-DE')}
      </p>
      <p className="mt-4 text-lg text-slate-600">{guide.intro}</p>
      <p className="mt-3 text-xs italic text-slate-500">{AFFILIATE_DISCLOSURE}</p>

      <div className="prose-de mt-6">
        {guide.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </section>
        ))}
      </div>

      {featuredProviders.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-slate-900">Empfohlene Anbieter</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProviders.map((p, i) => (
              <ProviderCard key={p.key} provider={p} highlighted={i === 0} />
            ))}
          </div>
        </section>
      )}

      {featuredVpns.length > 0 && <VPNBlock featuredKey={featuredVpns[0].key} />}

      <FAQ items={guide.faq} />

      <RelatedLinks
        title="Weitere Ratgeber"
        links={guides
          .filter((g) => g.slug !== guide.slug)
          .slice(0, 4)
          .map((g) => ({
            href: `/ratgeber/${g.slug}`,
            label: g.title,
            description: g.metaDescription
          }))}
      />

      <JsonLd data={articleSchema} />
    </article>
  );
}
