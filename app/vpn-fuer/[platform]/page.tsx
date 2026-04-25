import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { platforms, platformBySlug } from '@/data/platforms';
import { vpnProviders, vpnByKey } from '@/data/vpnProviders';
import CTAButton from '@/components/CTAButton';
import TrustBox from '@/components/TrustBox';
import RelatedLinks from '@/components/RelatedLinks';
import FAQ from '@/components/FAQ';
import StickyCTA from '@/components/StickyCTA';
import JsonLd from '@/components/JsonLd';
import { buildMetadata, SITE } from '@/lib/seo';
import { AFFILIATE_DISCLOSURE } from '@/lib/affiliate';

interface PageProps {
  params: { platform: string };
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return platforms.map((p) => ({ platform: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const pl = platformBySlug(params.platform);
  if (!pl) return {};
  return buildMetadata({
    title: `${pl.tagline} – Anleitung 2026`,
    description: `So richtest du ein VPN auf ${pl.name} ein – Schritt-für-Schritt-Anleitung, beste Anbieter und Lösung für häufige Probleme.`,
    path: `/vpn-fuer/${pl.slug}`,
    type: 'article'
  });
}

export default function VpnFuerPlatformPage({ params }: PageProps) {
  const pl = platformBySlug(params.platform);
  if (!pl) notFound();

  const recommended = vpnByKey(pl.recommendedVpn);
  const compatible = pl.compatibleVpns
    .map((k) => vpnByKey(k))
    .filter((v): v is NonNullable<typeof v> => v !== undefined);

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Start', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'VPN für', item: `${SITE.url}/vpn-fuer/${pl.slug}` },
      { '@type': 'ListItem', position: 3, name: pl.name, item: `${SITE.url}/vpn-fuer/${pl.slug}` }
    ]
  };

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `VPN auf ${pl.name} einrichten`,
    description: pl.description,
    step: pl.setupSteps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: `Schritt ${i + 1}`,
      text: s
    }))
  };

  const faq = [
    { q: `Welches VPN ist das beste für ${pl.name}?`, a: `Wir empfehlen ${recommended?.name ?? 'NordVPN'} – ${recommended?.tagline ?? ''}.` },
    { q: `Ist die VPN-Nutzung auf ${pl.name} legal?`, a: 'Ja, die VPN-Nutzung in Deutschland ist uneingeschränkt legal. Verboten bleiben nur Aktivitäten, die unabhängig vom VPN ohnehin rechtswidrig wären.' },
    { q: `Wie schwierig ist das Setup auf ${pl.name}?`, a: `Wir stufen das Setup als „${pl.difficulty}" ein. Mit unserer Anleitung schaffst du es in unter 10 Minuten.` },
    { q: `Verlangsamt ein VPN ${pl.name}?`, a: 'Mit modernen Protokollen wie WireGuard oder Lightway: kaum spürbar. Auf nahen Servern oft unter 10 % Geschwindigkeitsverlust.' }
  ];

  return (
    <article>
      <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">Setup-Anleitung</p>
      <h1 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
        {pl.tagline}
      </h1>
      <p className="mt-4 text-lg text-slate-600">{pl.description}</p>
      <p className="mt-3 text-xs italic text-slate-500">{AFFILIATE_DISCLOSURE}</p>

      <TrustBox
        items={[
          { label: 'Schwierigkeit', value: pl.difficulty },
          { label: 'Empfohlen', value: recommended?.name ?? 'NordVPN' },
          { label: 'Setup-Zeit', value: pl.difficulty === 'einfach' ? '5 Min.' : pl.difficulty === 'mittel' ? '10-15 Min.' : '20-30 Min.' },
          { label: 'Kompatibel', value: `${compatible.length} VPNs` }
        ]}
      />

      {recommended && (
        <aside className="my-8 rounded-2xl border-2 border-brand-500 bg-gradient-to-br from-brand-50 to-white p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-700">Beste Wahl für {pl.name}</p>
          <h2 className="mt-1 text-2xl font-bold text-slate-900">{recommended.name}</h2>
          <p className="mt-2 text-slate-700">{recommended.tagline}</p>
          <ul className="mt-3 space-y-1 text-sm text-slate-700">
            {recommended.highlights.slice(0, 3).map((h) => (
              <li key={h} className="flex gap-2">
                <span aria-hidden className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <CTAButton affiliate={recommended.affiliate} variant="primary" size="lg">{recommended.name} testen →</CTAButton>
            <span className="text-xs text-slate-500">ab {recommended.priceFromEUR.toFixed(2).replace('.', ',')} €/Mon. · {recommended.moneyBackDays} Tage Geld-zurück</span>
          </div>
        </aside>
      )}

      <h2 className="mt-12 text-2xl font-bold text-slate-900">Setup in {pl.setupSteps.length} Schritten</h2>
      <ol className="mt-4 space-y-4 list-none">
        {pl.setupSteps.map((step, i) => (
          <li key={i} className="flex gap-4 rounded-xl border border-slate-200 bg-white p-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
              {i + 1}
            </span>
            <span className="pt-1 text-slate-700">{step}</span>
          </li>
        ))}
      </ol>

      <h2 className="mt-12 text-2xl font-bold text-slate-900">Häufige Probleme &amp; Lösungen</h2>
      <dl className="mt-4 space-y-3">
        {pl.troubleshooting.map((t) => (
          <details key={t.issue} className="rounded-xl border border-slate-200 bg-white px-5 py-4 open:shadow-sm">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
              <dt className="font-semibold text-slate-900">{t.issue}</dt>
              <span aria-hidden className="text-slate-400">+</span>
            </summary>
            <dd className="mt-3 text-sm text-slate-700">{t.solution}</dd>
          </details>
        ))}
      </dl>

      <h2 className="mt-12 text-2xl font-bold text-slate-900">Andere kompatible VPNs für {pl.name}</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {compatible.map((v) => (
          <div key={v.key} className="rounded-xl border border-slate-200 bg-white p-5">
            <div className="flex items-baseline justify-between">
              <h3 className="text-base font-bold text-slate-900">{v.name}</h3>
              <span className="text-xs font-semibold text-brand-700">ab {v.priceFromEUR.toFixed(2).replace('.', ',')} €</span>
            </div>
            <p className="mt-1 text-xs text-slate-500">{v.tagline}</p>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <CTAButton affiliate={v.affiliate} variant="ghost" size="md">Zu {v.name}</CTAButton>
              <Link href={`/vpn/${v.key}`} className="text-xs text-brand-700 underline">Test lesen</Link>
            </div>
          </div>
        ))}
      </div>

      <FAQ items={faq} />

      <RelatedLinks
        title="VPN auf anderen Plattformen einrichten"
        links={platforms
          .filter((x) => x.slug !== pl.slug)
          .slice(0, 6)
          .map((o) => ({ href: `/vpn-fuer/${o.slug}`, label: `VPN auf ${o.name}`, description: o.tagline }))}
      />

      {recommended && (
        <StickyCTA
          label={`${pl.name}: ${recommended.name} empfohlen`}
          affiliate={recommended.affiliate}
          ctaLabel="Angebot ansehen"
        />
      )}

      <JsonLd data={howToSchema} />
      <JsonLd data={breadcrumb} />
    </article>
  );
}
