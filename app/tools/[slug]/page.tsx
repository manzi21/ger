import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { tools, toolBySlug } from '@/data/tools';
import { guides } from '@/data/guides';
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
  return tools.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const t = toolBySlug(params.slug);
  if (!t) return {};
  return buildMetadata({
    title: t.title,
    description: t.metaDescription,
    path: `/tools/${t.slug}`,
    type: 'article',
    publishedTime: t.publishedISO,
    modifiedTime: t.updatedISO
  });
}

export default function ToolPage({ params }: PageProps) {
  const tool = toolBySlug(params.slug);
  if (!tool) notFound();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: tool.title,
    description: tool.metaDescription,
    datePublished: tool.publishedISO,
    dateModified: tool.updatedISO,
    inLanguage: 'de-DE',
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE.url}/tools/${tool.slug}` },
    author: { '@type': 'Organization', name: SITE.name, url: SITE.url },
    publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url }
  };

  return (
    <article>
      <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">Tool &amp; Leitfaden</p>
      <h1 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">{tool.title}</h1>
      <p className="mt-4 text-lg text-slate-600">{tool.intro}</p>
      <p className="mt-3 text-xs italic text-slate-500">{AFFILIATE_DISCLOSURE}</p>

      <div className="prose-de mt-6">
        {tool.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </section>
        ))}
      </div>

      <VPNBlock />

      <FAQ items={tool.faq} />

      <RelatedLinks
        title="Vertiefe das Thema"
        links={guides
          .slice(0, 4)
          .map((g) => ({ href: `/ratgeber/${g.slug}`, label: g.title, description: g.metaDescription }))}
      />

      <JsonLd data={articleSchema} />
    </article>
  );
}
