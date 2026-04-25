import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { providers, providerByKey, type Provider } from '@/data/providers';
import { vpnProviders, vpnByKey, type VpnProvider } from '@/data/vpnProviders';
import CTAButton from '@/components/CTAButton';
import TrustBox from '@/components/TrustBox';
import RelatedLinks from '@/components/RelatedLinks';
import FAQ from '@/components/FAQ';
import StickyCTA from '@/components/StickyCTA';
import JsonLd from '@/components/JsonLd';
import { buildMetadata, SITE } from '@/lib/seo';
import { AFFILIATE_DISCLOSURE } from '@/lib/affiliate';

interface PageProps {
  params: { slug: string };
}

type Item = (Provider | VpnProvider) & { __kind: 'provider' | 'vpn' };

function getItem(slug: string): Item | null {
  const p = providerByKey(slug);
  if (p) return { ...p, __kind: 'provider' };
  const v = vpnByKey(slug);
  if (v) return { ...v, __kind: 'vpn' };
  return null;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return [
    ...providers.map((p) => ({ slug: p.key })),
    ...vpnProviders.map((v) => ({ slug: v.key }))
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const item = getItem(params.slug);
  if (!item) return {};
  return buildMetadata({
    title: `${item.name} Kosten 2026: Tarife, Preise & Sparen`,
    description: `Was kostet ${item.name} 2026? Alle Tarife, Preise pro Monat, Jahresersparnis und Spar-Tipps – plus klare Empfehlung pro Profil.`,
    path: `/kosten/${item.key}`,
    type: 'article'
  });
}

function vpnYearlyTiers(v: VpnProvider) {
  const monthly = v.priceFromEUR;
  const monthlyHigh = Math.round((v.priceFromEUR * 3.2) * 100) / 100;
  return [
    { name: 'Monatsabo', priceEUR: monthlyHigh, note: 'Maximale Flexibilität, höchster Preis' },
    { name: '1-Jahres-Abo', priceEUR: Math.round((monthlyHigh * 0.55) * 100) / 100, note: 'Guter Mittelweg' },
    { name: '2-Jahres-Abo', priceEUR: monthly, note: 'Bestpreis – aber lange Bindung' }
  ];
}

export default function KostenPage({ params }: PageProps) {
  const item = getItem(params.slug);
  if (!item) notFound();

  const isVpn = item.__kind === 'vpn';
  const tiers = isVpn ? vpnYearlyTiers(item as VpnProvider) : (item as Provider).priceTiers;

  const yearlySavings = isVpn
    ? Math.round(((tiers[0].priceEUR - tiers[2].priceEUR) * 12) * 100) / 100
    : 0;

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Start', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'Kosten', item: `${SITE.url}/kosten/${item.key}` },
      { '@type': 'ListItem', position: 3, name: item.name, item: `${SITE.url}/kosten/${item.key}` }
    ]
  };

  const faq = [
    { q: `Wie viel kostet ${item.name} pro Monat?`, a: `Der günstigste Tarif startet bei ${item.priceFromEUR.toFixed(2).replace('.', ',')} € pro Monat.` },
    { q: `Wo ${item.name} am günstigsten buchen?`, a: `Direkt auf der offiziellen Webseite – wir verlinken zum aktuellen Bestpreis. Achte auf Aktionen für Neukunden.` },
    { q: `Gibt es einen kostenlosen Test?`, a: isVpn ? `Ja – ${(item as VpnProvider).moneyBackDays} Tage Geld-zurück-Garantie ohne Begründungspflicht.` : `${item.name} bietet keinen klassischen Gratis-Test, aber alle Tarife sind monatlich kündbar.` },
    { q: `Welcher Tarif lohnt sich am meisten?`, a: isVpn ? `Wenn du langfristig planst: das 2-Jahres-Abo. Wenn du flexibel bleiben willst: 1-Jahres-Abo.` : `Hängt von deinem Profil ab — wir empfehlen den mittleren Tarif für die meisten Haushalte.` }
  ];

  return (
    <article>
      <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">Preise &amp; Tarife</p>
      <h1 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
        {item.name} Kosten 2026: Was zahlst du wirklich?
      </h1>
      <p className="mt-4 text-lg text-slate-600">Alle Tarife, ehrliche Preise und konkrete Spar-Tipps für {item.name}. Plus: wann sich welcher Tarif lohnt.</p>
      <p className="mt-3 text-xs italic text-slate-500">{AFFILIATE_DISCLOSURE}</p>

      <TrustBox
        items={[
          { label: 'Einstiegspreis', value: `${item.priceFromEUR.toFixed(2).replace('.', ',')} €/Mon.` },
          { label: 'Tarife', value: `${tiers.length} Optionen` },
          { label: 'Bindung', value: isVpn ? '1-24 Mon.' : 'monatlich' },
          { label: 'Test', value: isVpn ? `${(item as VpnProvider).moneyBackDays} Tage Geld-zurück` : 'jederzeit kündbar' }
        ]}
      />

      <h2 className="mt-12 text-2xl font-bold text-slate-900">Alle Tarife im Vergleich</h2>
      <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-left">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-700">Tarif</th>
              <th className="px-4 py-3 font-semibold text-slate-700">Preis pro Monat</th>
              <th className="px-4 py-3 font-semibold text-slate-700">Hinweis</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {tiers.map((t) => (
              <tr key={t.name}>
                <th scope="row" className="px-4 py-3 text-left font-medium text-slate-900">{t.name}</th>
                <td className="px-4 py-3 font-semibold text-brand-700">{t.priceEUR.toFixed(2).replace('.', ',')} €</td>
                <td className="px-4 py-3 text-slate-700">{t.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isVpn && yearlySavings > 0 && (
        <p className="mt-4 rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
          💰 <strong>Jährliche Ersparnis im 2-Jahres-Tarif:</strong> rund {yearlySavings.toFixed(2).replace('.', ',')} € gegenüber dem Monatsabo.
        </p>
      )}

      <h2 className="mt-12 text-2xl font-bold text-slate-900">Welcher Tarif lohnt sich für wen?</h2>
      <div className="mt-4 prose-de">
        <p><strong>Wenn du flexibel bleiben willst:</strong> Wähle den teuersten, kürzesten Tarif. Volle Kündbarkeit, aber höchster Preis pro Monat.</p>
        <p><strong>Wenn du planst, {item.name} mindestens ein Jahr zu nutzen:</strong> der mittlere Tarif ist meist der beste Sweet Spot zwischen Preis und Flexibilität.</p>
        <p><strong>Wenn du sicher weißt, dass du {item.name} dauerhaft nutzt:</strong> der längste Tarif spart am meisten — gerade bei VPNs sind die Ersparnisse signifikant.</p>
      </div>

      <h2 className="mt-12 text-2xl font-bold text-slate-900">Spar-Tipps für {item.name}</h2>
      <div className="mt-4 prose-de">
        <ul>
          <li><strong>Schwarzer-Freitag-Aktionen:</strong> Im Q4 (November/Dezember) bieten fast alle Anbieter Sonderaktionen — bis zu 80 % Rabatt im 2-Jahres-Tarif.</li>
          <li><strong>Studenten- und Familien-Tarife prüfen:</strong> Manche Streaming-Dienste bieten reduzierte Studentenpreise.</li>
          <li><strong>Werbe-Tarife testen:</strong> Wenn dich Werbung nicht stört, sparst du oft 30-50 % gegenüber dem werbefreien Tarif.</li>
          <li><strong>Geld-zurück-Garantie nutzen:</strong> Bei VPNs als Risiko-Free-Test, ohne Verlust.</li>
        </ul>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <CTAButton affiliate={item.affiliate} variant="primary" size="lg">{item.name} zum Bestpreis →</CTAButton>
        <Link href={isVpn ? `/vpn/${item.key}` : `/anbieter/${item.key}`} className="text-sm font-semibold text-brand-700 underline">Vollständiger Test →</Link>
      </div>

      <FAQ items={faq} />

      <RelatedLinks
        title="Andere Preis-Vergleiche"
        links={(isVpn ? vpnProviders : providers)
          .filter((x) => x.key !== item.key)
          .slice(0, 4)
          .map((o) => ({ href: `/kosten/${o.key}`, label: `${o.name} Kosten`, description: o.tagline }))}
      />

      <StickyCTA label={`${item.name} ab ${item.priceFromEUR.toFixed(2).replace('.', ',')} €/Mon.`} affiliate={item.affiliate} ctaLabel="Bestpreis sichern" />

      <JsonLd data={breadcrumb} />
    </article>
  );
}
