import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { audiences, audienceBySlug } from '@/data/audiences';
import { providerByKey } from '@/data/providers';
import { vpnByKey } from '@/data/vpnProviders';
import CTAButton from '@/components/CTAButton';
import ProviderCard from '@/components/ProviderCard';
import TrustBox from '@/components/TrustBox';
import VPNBlock from '@/components/VPNBlock';
import RelatedLinks from '@/components/RelatedLinks';
import FAQ from '@/components/FAQ';
import StickyCTA from '@/components/StickyCTA';
import JsonLd from '@/components/JsonLd';
import { buildMetadata, SITE } from '@/lib/seo';
import { AFFILIATE_DISCLOSURE } from '@/lib/affiliate';

interface PageProps {
  params: { zielgruppe: string };
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return audiences.map((a) => ({ zielgruppe: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const a = audienceBySlug(params.zielgruppe);
  if (!a) return {};
  return buildMetadata({
    title: `Streaming fuer ${a.label} 2026 - Beste Anbieter und Tipps`,
    description: `Welche Streaming-Anbieter sind die beste Wahl fuer ${a.label}? Konkrete Empfehlungen, Budget und VPN-Tipps - 2026 aktualisiert.`,
    path: `/streaming-fuer/${a.slug}`,
    type: 'article'
  });
}

export default function StreamingFuerPage({ params }: PageProps) {
  const a = audienceBySlug(params.zielgruppe);
  if (!a) notFound();

  const recommendedProviders = a.recommendedProviders
    .map(providerByKey)
    .filter((p): p is NonNullable<typeof p> => !!p);
  const recommendedVpn = a.recommendedVpn ? vpnByKey(a.recommendedVpn) : undefined;
  const top = recommendedProviders[0];

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Start', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'Streaming fuer', item: `${SITE.url}/streaming-fuer/${a.slug}` },
      { '@type': 'ListItem', position: 3, name: a.label, item: `${SITE.url}/streaming-fuer/${a.slug}` }
    ]
  };

  const faq = [
    { q: `Welcher Streaming-Anbieter passt fuer ${a.label}?`, a: `Wir empfehlen ${recommendedProviders.map((p) => p.name).join(', ')}. Detail in unseren Bewertungen.` },
    { q: `Wie hoch sollte das Budget fuer ${a.label} sein?`, a: `Realistisch: ${a.budget}. Mit Werbe-Tarifen oder rotierenden Abos kann man auch unter dem Budget bleiben.` },
    { q: `Brauchen ${a.label} ein VPN?`, a: recommendedVpn ? `Ein VPN wie ${recommendedVpn.name} ist sinnvoll - vor allem bei oeffentlichen WLANs und EU-Reisen.` : 'Nicht zwingend. Innerhalb der EU greift die Portabilitaetsverordnung.' }
  ];

  return (
    <article>
      <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">Zielgruppe</p>
      <h1 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">{a.tagline}</h1>
      <p className="mt-4 text-lg text-slate-600">{a.intro}</p>
      <p className="mt-3 text-xs italic text-slate-500">{AFFILIATE_DISCLOSURE}</p>

      <TrustBox
        items={[
          { label: 'Zielgruppe', value: a.label },
          { label: 'Empf. Budget', value: a.budget },
          { label: 'Top-Pick', value: top?.name ?? '-' },
          { label: 'VPN', value: recommendedVpn?.name ?? 'optional' }
        ]}
      />

      {top && (
        <aside className="my-8 rounded-2xl border-2 border-brand-500 bg-gradient-to-br from-brand-50 to-white p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-700">Beste Wahl fuer {a.label}</p>
          <h2 className="mt-1 text-2xl font-bold text-slate-900">{top.name}</h2>
          <p className="mt-2 text-slate-700">{top.tagline}</p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <CTAButton affiliate={top.affiliate} variant="primary" size="lg">{top.name} starten &rarr;</CTAButton>
            <Link href={`/anbieter/${top.key}`} className="text-sm font-semibold text-brand-700 underline">Vollstaendiger Test</Link>
          </div>
        </aside>
      )}

      <h2 className="mt-12 text-2xl font-bold text-slate-900">Warum {a.label} hier richtig liegen</h2>
      <ul className="mt-4 space-y-2 text-slate-700">
        {a.reasons.map((r) => (
          <li key={r} className="flex gap-2"><span aria-hidden className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" /><span>{r}</span></li>
        ))}
      </ul>

      <h2 className="mt-12 text-2xl font-bold text-slate-900">Was du als {a.label} vermeiden solltest</h2>
      <ul className="mt-4 space-y-2 text-slate-700">
        {a.avoidReasons.map((r) => (
          <li key={r} className="flex gap-2"><span aria-hidden className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" /><span>{r}</span></li>
        ))}
      </ul>

      <h2 className="mt-12 text-2xl font-bold text-slate-900">Empfohlene Anbieter im Detail</h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {recommendedProviders.map((p, i) => (
          <ProviderCard key={p.key} provider={p} highlighted={i === 0} />
        ))}
      </div>

      {recommendedVpn && <VPNBlock featuredKey={recommendedVpn.key} headline={`VPN-Empfehlung fuer ${a.label}`} />}

      <FAQ items={faq} />

      <RelatedLinks
        title="Streaming fuer andere Zielgruppen"
        links={audiences.filter((x) => x.slug !== a.slug).slice(0, 6).map((x) => ({ href: `/streaming-fuer/${x.slug}`, label: x.label, description: x.tagline }))}
      />

      {top && <StickyCTA label={`Top-Pick: ${top.name}`} affiliate={top.affiliate} ctaLabel="Angebot ansehen" />}

      <JsonLd data={breadcrumb} />
    </article>
  );
}
