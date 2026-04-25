import Link from 'next/link';
import type { Metadata } from 'next';
import { providers } from '@/data/providers';
import { vpnProviders } from '@/data/vpnProviders';
import { comparisons } from '@/data/comparisons';
import { guides } from '@/data/guides';
import ProviderCard from '@/components/ProviderCard';
import VPNBlock from '@/components/VPNBlock';
import RelatedLinks from '@/components/RelatedLinks';
import FAQ from '@/components/FAQ';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'TV-Streaming-Vergleich – Legale Streaming-Anbieter & VPNs in Deutschland',
  description:
    'Unabhängiger Vergleich legaler Streaming-Anbieter in Deutschland: Netflix, Disney+, WOW, DAZN und Prime Video – plus geprüfte VPN-Empfehlungen.',
  path: '/'
});

const homeFAQ = [
  {
    q: 'Welcher Streaming-Anbieter ist 2026 in Deutschland am besten?',
    a: 'Es kommt auf dein Profil an: Netflix für Vielserienseher, Disney+ für Familien, WOW + DAZN für Sportfans. Wir empfehlen die Kombination aus einem Hauptdienst und einem Bonus-Dienst.'
  },
  {
    q: 'Brauche ich ein VPN zum Streamen?',
    a: 'Ein VPN ist sinnvoll für Datenschutz, öffentliche WLANs und Reisen. Innerhalb der EU ist dein deutsches Streaming-Abo ohnehin durch die Portabilitätsverordnung abgedeckt.'
  },
  {
    q: 'Sind alle empfohlenen Anbieter legal?',
    a: 'Ja. Wir empfehlen ausschließlich offizielle Streaming-Plattformen, deren Inhalte lizenziert sind, sowie etablierte VPN-Dienste mit geprüfter No-Logs-Policy.'
  }
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500 px-6 py-14 text-white shadow-lg sm:px-10 sm:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-100">
            Streaming &amp; VPN für Deutschland
          </p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl">
            Welcher Streaming-Dienst lohnt sich 2026 wirklich?
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-50/90">
            Wir vergleichen Netflix, Disney+, WOW, DAZN und Prime Video – ehrlich, ohne Marketing-Phrasen,
            und mit klarer Empfehlung pro Profil. Plus: VPN-Tests für sicheres Streaming.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/ratgeber/beste-streaming-anbieter-deutschland"
              className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-base font-semibold text-brand-700 shadow-sm hover:bg-brand-50"
            >
              Zum großen Anbieter-Test →
            </Link>
            <Link
              href="/ratgeber/beste-vpns-fuer-streaming-deutschland"
              className="inline-flex items-center justify-center rounded-md bg-brand-800/40 px-5 py-3 text-base font-semibold text-white ring-1 ring-inset ring-white/30 hover:bg-brand-800/60"
            >
              VPN-Empfehlungen ansehen
            </Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="provider-heading" className="mt-16">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 id="provider-heading" className="text-3xl font-bold text-slate-900">
            Die wichtigsten Streaming-Anbieter
          </h2>
          <Link
            href="/ratgeber/streaming-dienste-vergleich"
            className="hidden text-sm font-semibold text-brand-700 hover:text-brand-800 sm:block"
          >
            Alle vergleichen →
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {providers.map((p) => (
            <ProviderCard key={p.key} provider={p} highlighted={p.key === 'wow' || p.key === 'disney-plus'} />
          ))}
        </div>
      </section>

      <section aria-labelledby="vergleiche-heading" className="mt-16">
        <h2 id="vergleiche-heading" className="text-3xl font-bold text-slate-900">
          Direkt-Vergleiche
        </h2>
        <p className="mt-2 text-slate-600">Welcher Dienst gewinnt das Duell? Unsere Top-Vergleiche im Detail.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {comparisons.map((c) => (
            <Link
              key={c.slug}
              href={`/vs/${c.slug}`}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-brand-300 hover:shadow-md"
            >
              <p className="text-sm font-semibold text-brand-700">Vergleich</p>
              <h3 className="mt-1 text-lg font-bold text-slate-900 group-hover:text-brand-700">{c.title}</h3>
              <p className="mt-2 line-clamp-3 text-sm text-slate-600">{c.metaDescription}</p>
              <p className="mt-4 text-sm font-semibold text-brand-700">Vergleich lesen →</p>
            </Link>
          ))}
        </div>
      </section>

      <VPNBlock />

      <section aria-labelledby="ratgeber-heading" className="mt-16">
        <h2 id="ratgeber-heading" className="text-3xl font-bold text-slate-900">
          Ratgeber &amp; Hintergründe
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {guides.map((g) => (
            <Link
              key={g.slug}
              href={`/ratgeber/${g.slug}`}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-brand-300 hover:shadow-md"
            >
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-700">{g.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{g.metaDescription}</p>
              <p className="mt-4 text-sm font-semibold text-brand-700">Weiterlesen →</p>
            </Link>
          ))}
        </div>
      </section>

      <RelatedLinks
        title="Beliebte Tools"
        links={[
          {
            href: '/tools/streaming-kosten-rechner',
            label: 'Streaming-Kosten-Rechner',
            description: 'So viel zahlen deutsche Haushalte 2026 für Streaming – plus Spar-Tipps.'
          },
          {
            href: '/tools/welcher-streaming-dienst-passt-zu-mir',
            label: 'Welcher Streaming-Dienst passt zu mir?',
            description: 'Drei Fragen, eine klare Empfehlung – in 60 Sekunden.'
          }
        ]}
      />

      <FAQ items={homeFAQ} />

      <p className="mt-8 text-center text-xs text-slate-500">
        Wir empfehlen {vpnProviders.length} VPN-Anbieter und {providers.length} Streamingdienste. Stand:{' '}
        {new Date().toLocaleDateString('de-DE')}.
      </p>
    </>
  );
}
