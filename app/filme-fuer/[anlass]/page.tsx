import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { movieOccasions, movieOccasionBySlug } from '@/data/movieOccasions';
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
  params: { anlass: string };
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return movieOccasions.map((m) => ({ anlass: m.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const m = movieOccasionBySlug(params.anlass);
  if (!m) return {};
  return buildMetadata({
    title: `${m.tagline} - ${m.movieIdeas.length} Streaming-Filme im Test`,
    description: `${m.intro.slice(0, 130)}`,
    path: `/filme-fuer/${m.slug}`,
    type: 'article'
  });
}

export default function FilmeFuerPage({ params }: PageProps) {
  const m = movieOccasionBySlug(params.anlass);
  if (!m) notFound();

  const primaryProvider = providerByKey(m.primaryProviders[0]);

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Start', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'Filme fuer', item: `${SITE.url}/filme-fuer/${m.slug}` },
      { '@type': 'ListItem', position: 3, name: m.occasion, item: `${SITE.url}/filme-fuer/${m.slug}` }
    ]
  };

  const faq = [
    { q: `Welcher Anbieter hat die meisten Filme fuer ${m.occasion}?`, a: `${primaryProvider?.name ?? 'Netflix'} hat die staerkste Auswahl fuer den Anlass ${m.occasion}.` },
    { q: `Lohnen sich Streaming-Abos nur fuer einzelne Anlaesse?`, a: 'Ja - mit monatlich kuendbaren Abos kann man gezielt einen Monat fuer einen Anlass zubuchen und danach wieder kuendigen.' },
    { q: `Was ist das beste Streaming-Setup fuer Filmabende?`, a: `${m.tip}` }
  ];

  return (
    <article>
      <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">{m.occasion}</p>
      <h1 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">{m.tagline}</h1>
      <p className="mt-4 text-lg text-slate-600">{m.intro}</p>
      <p className="mt-3 text-xs italic text-slate-500">{AFFILIATE_DISCLOSURE}</p>

      <TrustBox
        items={[
          { label: 'Anlass', value: m.occasion },
          { label: 'Filme', value: String(m.movieIdeas.length) },
          { label: 'Top-Anbieter', value: primaryProvider?.name ?? '-' },
          { label: 'Tipp', value: 'siehe unten' }
        ]}
      />

      {primaryProvider && (
        <aside className="my-8 rounded-2xl border-2 border-brand-500 bg-gradient-to-br from-brand-50 to-white p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-700">Beste Wahl fuer {m.occasion}</p>
          <h2 className="mt-1 text-2xl font-bold text-slate-900">{primaryProvider.name}</h2>
          <p className="mt-2 text-slate-700">{primaryProvider.tagline}. Mit Abstand staerkste Auswahl fuer {m.occasion}.</p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <CTAButton affiliate={primaryProvider.affiliate} variant="primary" size="lg">{primaryProvider.name} starten &rarr;</CTAButton>
            <Link href={`/anbieter/${primaryProvider.key}`} className="text-sm font-semibold text-brand-700 underline">Vollstaendiger Test</Link>
          </div>
        </aside>
      )}

      <h2 className="mt-12 text-2xl font-bold text-slate-900">{m.movieIdeas.length} perfekte Filme fuer {m.occasion}</h2>
      <div className="mt-6 space-y-4">
        {m.movieIdeas.map((idea, i) => {
          const prov = providerByKey(idea.provider);
          return (
            <div key={idea.title} className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-xl font-bold text-slate-900">{i + 1}. {idea.title}</h3>
                {prov && <span className="text-sm font-semibold text-brand-700">auf {prov.name}</span>}
              </div>
              <p className="mt-2 text-slate-700">{idea.note}</p>
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

      <aside className="my-10 rounded-2xl border border-emerald-200 bg-emerald-50/40 p-6">
        <h3 className="text-lg font-bold text-emerald-900">Insider-Tipp</h3>
        <p className="mt-2 text-emerald-900">{m.tip}</p>
      </aside>

      <VPNBlock />

      <FAQ items={faq} />

      <RelatedLinks
        title="Filme fuer andere Anlaesse"
        links={movieOccasions.filter((x) => x.slug !== m.slug).slice(0, 6).map((x) => ({ href: `/filme-fuer/${x.slug}`, label: `Filme fuer ${x.occasion}`, description: x.tagline }))}
      />

      {primaryProvider && <StickyCTA label={`${m.occasion}: ${primaryProvider.name}`} affiliate={primaryProvider.affiliate} ctaLabel="Angebot ansehen" />}

      <JsonLd data={breadcrumb} />
    </article>
  );
}
