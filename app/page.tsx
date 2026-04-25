import Link from 'next/link';
import type { Metadata } from 'next';
import { providers } from '@/data/providers';
import { vpnProviders } from '@/data/vpnProviders';
import { platforms } from '@/data/platforms';
import { comparisons } from '@/data/comparisons';
import { guides } from '@/data/guides';
import ProviderCard from '@/components/ProviderCard';
import VPNBlock from '@/components/VPNBlock';
import RelatedLinks from '@/components/RelatedLinks';
import FAQ from '@/components/FAQ';
import Rating from '@/components/Rating';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'TV-Streaming-Vergleich - Legale Streaming-Anbieter und VPNs in Deutschland',
  description: 'Unabhaengiger Vergleich legaler Streaming-Anbieter in Deutschland: Netflix, Disney+, WOW, DAZN und Prime Video - plus geprueefte VPN-Empfehlungen.',
  path: '/'
});

const homeFAQ = [
  { q: 'Welcher Streaming-Anbieter ist 2026 in Deutschland am besten?', a: 'Es kommt auf dein Profil an: Netflix fuer Vielserienseher, Disney+ fuer Familien, WOW + DAZN fuer Sportfans.' },
  { q: 'Brauche ich ein VPN zum Streamen?', a: 'Ein VPN ist sinnvoll fuer Datenschutz, oeffentliche WLANs und Reisen. Innerhalb der EU ist dein deutsches Streaming-Abo durch die Portabilitaetsverordnung abgedeckt.' },
  { q: 'Sind alle empfohlenen Anbieter legal?', a: 'Ja. Wir empfehlen ausschliesslich offizielle Streaming-Plattformen und etablierte VPN-Dienste mit geprueefter No-Logs-Policy.' }
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500 px-6 py-14 text-white shadow-lg sm:px-10 sm:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-100">Streaming und VPN fuer Deutschland</p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl">Welcher Streaming-Dienst lohnt sich 2026 wirklich?</h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-50/90">Wir vergleichen Netflix, Disney+, WOW, DAZN und Prime Video - ehrlich, ohne Marketing-Phrasen, mit klarer Empfehlung pro Profil. Plus: VPN-Tests fuer sicheres Streaming.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/ratgeber/beste-streaming-anbieter-deutschland" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-base font-semibold text-brand-700 shadow-sm hover:bg-brand-50">Zum grossen Anbieter-Test &rarr;</Link>
            <Link href="/ratgeber/beste-vpns-fuer-streaming-deutschland" className="inline-flex items-center justify-center rounded-md bg-brand-800/40 px-5 py-3 text-base font-semibold text-white ring-1 ring-inset ring-white/30 hover:bg-brand-800/60">VPN-Empfehlungen ansehen</Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="provider-heading" className="mt-16">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 id="provider-heading" className="text-3xl font-bold text-slate-900">Die wichtigsten Streaming-Anbieter</h2>
          <Link href="/ratgeber/streaming-dienste-vergleich" className="hidden text-sm font-semibold text-brand-700 hover:text-brand-800 sm:block">Alle vergleichen &rarr;</Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {providers.map((p) => (
            <ProviderCard key={p.key} provider={p} highlighted={p.key === 'wow' || p.key === 'disney-plus'} />
          ))}
        </div>
      </section>

      <section aria-labelledby="reviews-heading" className="mt-16">
        <h2 id="reviews-heading" className="text-3xl font-bold text-slate-900">Anbieter-Tests im Ueberblick</h2>
        <p className="mt-2 text-slate-600">Ehrliche Reviews mit Vor- und Nachteilen, Preisen und Profil-Empfehlung.</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {providers.map((p) => (
            <Link key={p.key} href={`/anbieter/${p.key}`} className="group flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-brand-300 hover:shadow-sm">
              <div>
                <p className="font-bold text-slate-900 group-hover:text-brand-700">{p.name} Test</p>
                <Rating value={p.rating} size="sm" label="" />
              </div>
              <span className="text-brand-700">&rarr;</span>
            </Link>
          ))}
        </div>
      </section>

      <section aria-labelledby="vpn-heading" className="mt-16">
        <h2 id="vpn-heading" className="text-3xl font-bold text-slate-900">VPN-Tests fuer deutsche Nutzer</h2>
        <p className="mt-2 text-slate-600">Vier serioese Anbieter im ehrlichen Test - mit Pros und Cons.</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {vpnProviders.map((v) => (
            <Link key={v.key} href={`/vpn/${v.key}`} className="group rounded-xl border border-slate-200 bg-white p-4 transition hover:border-brand-300 hover:shadow-sm">
              <p className="font-bold text-slate-900 group-hover:text-brand-700">{v.name}</p>
              <p className="mt-0.5 text-xs text-slate-500">ab {v.priceFromEUR.toFixed(2).replace('.', ',')} EUR/Mon.</p>
              <div className="mt-2"><Rating value={v.rating} size="sm" label="" /></div>
            </Link>
          ))}
        </div>
      </section>

      <section aria-labelledby="vergleiche-heading" className="mt-16">
        <h2 id="vergleiche-heading" className="text-3xl font-bold text-slate-900">Direkt-Vergleiche</h2>
        <p className="mt-2 text-slate-600">Welcher Dienst gewinnt das Duell? Unsere Top-Vergleiche im Detail.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {comparisons.map((c) => (
            <Link key={c.slug} href={`/vs/${c.slug}`} className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-brand-300 hover:shadow-md">
              <p className="text-sm font-semibold text-brand-700">Vergleich</p>
              <h3 className="mt-1 text-lg font-bold text-slate-900 group-hover:text-brand-700">{c.title}</h3>
              <p className="mt-2 line-clamp-3 text-sm text-slate-600">{c.metaDescription}</p>
              <p className="mt-4 text-sm font-semibold text-brand-700">Vergleich lesen &rarr;</p>
            </Link>
          ))}
        </div>
      </section>

      <VPNBlock />

      <section aria-labelledby="vpn-setup-heading" className="mt-16">
        <h2 id="vpn-setup-heading" className="text-3xl font-bold text-slate-900">VPN auf jeder Plattform einrichten</h2>
        <p className="mt-2 text-slate-600">Konkrete Setup-Anleitungen fuer die wichtigsten Geraete in deutschen Haushalten.</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {platforms.map((pl) => (
            <Link key={pl.slug} href={`/vpn-fuer/${pl.slug}`} className="group rounded-xl border border-slate-200 bg-white p-3 text-center transition hover:border-brand-300 hover:shadow-sm">
              <p className="text-sm font-semibold text-slate-900 group-hover:text-brand-700">{pl.name}</p>
              <p className="mt-0.5 text-xs text-slate-500">{pl.difficulty}</p>
            </Link>
          ))}
        </div>
      </section>

      <section aria-labelledby="ratgeber-heading" className="mt-16">
        <h2 id="ratgeber-heading" className="text-3xl font-bold text-slate-900">Ratgeber und Hintergruende</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {guides.map((g) => (
            <Link key={g.slug} href={`/ratgeber/${g.slug}`} className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-brand-300 hover:shadow-md">
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-700">{g.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{g.metaDescription}</p>
              <p className="mt-4 text-sm font-semibold text-brand-700">Weiterlesen &rarr;</p>
            </Link>
          ))}
        </div>
      </section>

      <RelatedLinks
        title="Beliebte Tools"
        links={[
          { href: '/tools/streaming-kosten-rechner', label: 'Streaming-Kosten-Rechner', description: 'So viel zahlen deutsche Haushalte 2026 fuer Streaming - plus Spar-Tipps.' },
          { href: '/tools/welcher-streaming-dienst-passt-zu-mir', label: 'Welcher Streaming-Dienst passt zu mir?', description: 'Drei Fragen, eine klare Empfehlung - in 60 Sekunden.' }
        ]}
      />

      <FAQ items={homeFAQ} />

      <p className="mt-8 text-center text-xs text-slate-500">
        Wir testen {vpnProviders.length} VPN-Anbieter und {providers.length} Streamingdienste auf {platforms.length} Plattformen.
      </p>
    </>
  );
}
