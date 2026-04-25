import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { providers, providerByKey, type Provider } from '@/data/providers';
import { vpnProviders, vpnByKey, type VpnProvider } from '@/data/vpnProviders';
import CTAButton from '@/components/CTAButton';
import ProsCons from '@/components/ProsCons';
import Rating from '@/components/Rating';
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
    title: `Lohnt sich ${item.name} 2026? Ehrliches Urteil & Empfehlung`,
    description: `Lohnt sich ${item.name} wirklich? Wir beantworten die Frage ehrlich – mit Vor- und Nachteilen, Preisen und konkreten Profil-Empfehlungen.`,
    path: `/lohnt-sich/${params.slug}`,
    type: 'article'
  });
}

export default function LohntSichPage({ params }: PageProps) {
  const item = getItem(params.slug);
  if (!item) notFound();

  const isVpn = item.__kind === 'vpn';
  const detailLink = isVpn ? `/vpn/${item.key}` : `/anbieter/${item.key}`;
  const kostenLink = `/kosten/${item.key}`;

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Start', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'Lohnt sich', item: `${SITE.url}/lohnt-sich/${item.key}` },
      { '@type': 'ListItem', position: 3, name: item.name, item: `${SITE.url}/lohnt-sich/${item.key}` }
    ]
  };

  const verdict =
    item.rating >= 4.5
      ? 'Ja, klar empfehlenswert'
      : item.rating >= 4.2
        ? 'Ja, mit kleinen Vorbehalten'
        : item.rating >= 4.0
          ? 'Vielleicht – kommt aufs Profil an'
          : 'Nur in Ausnahmefällen';

  const faq = [
    { q: `Lohnt sich ${item.name} wirklich?`, a: `${verdict}. ${item.whoFor}` },
    { q: `Was kostet ${item.name}?`, a: `Einstieg ab ${item.priceFromEUR.toFixed(2).replace('.', ',')} € pro Monat.` },
    { q: `Gibt es Alternativen zu ${item.name}?`, a: isVpn ? 'Ja — andere starke VPNs sind je nach Profil NordVPN, Surfshark, ExpressVPN oder CyberGhost.' : 'Ja — wir vergleichen alle Streaming-Alternativen ausführlich auf der Hauptseite.' },
    { q: `Größter Schwachpunkt von ${item.name}?`, a: item.cons[0] }
  ];

  return (
    <article>
      <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">Kaufberatung</p>
      <h1 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
        Lohnt sich {item.name} 2026? Ehrliche Antwort
      </h1>
      <div className="mt-3"><Rating value={item.rating} size="lg" /></div>
      <p className="mt-4 text-lg text-slate-600">Bevor du dein Geld bei {item.name} ausgibst: Hier ist die ehrliche Antwort, ob sich das Abo für dich lohnt — basierend auf konkreten Pro-Profilen und konkreten Kontra-Profilen.</p>
      <p className="mt-3 text-xs italic text-slate-500">{AFFILIATE_DISCLOSURE}</p>

      <aside className="my-8 rounded-2xl border-2 border-brand-500 bg-gradient-to-br from-brand-50 to-white p-6">
        <p className="text-xs font-bold uppercase tracking-wider text-brand-700">Schnelle Antwort</p>
        <h2 className="mt-1 text-3xl font-extrabold text-slate-900">{verdict}.</h2>
        <p className="mt-3 text-slate-700">{item.whoFor}</p>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <CTAButton affiliate={item.affiliate} variant="primary" size="lg">{item.name} testen →</CTAButton>
          <span className="text-xs text-slate-500">ab {item.priceFromEUR.toFixed(2).replace('.', ',')} €/Monat{isVpn ? ` · ${(item as VpnProvider).moneyBackDays} Tage Geld-zurück` : ' · monatlich kündbar'}</span>
        </div>
      </aside>

      <TrustBox
        items={
          isVpn
            ? [
                { label: 'Einstieg', value: `${item.priceFromEUR.toFixed(2).replace('.', ',')} €/Mon.` },
                { label: 'Server', value: `${(item as VpnProvider).servers.toLocaleString('de-DE')}` },
                { label: 'Sitz', value: (item as VpnProvider).jurisdiction.split('(')[0].trim() },
                { label: 'Geld-zurück', value: `${(item as VpnProvider).moneyBackDays} Tage` }
              ]
            : [
                { label: 'Einstieg', value: `${item.priceFromEUR.toFixed(2).replace('.', ',')} €/Mon.` },
                { label: 'Gegründet', value: String((item as Provider).founded) },
                { label: '4K UHD', value: (item as Provider).uhdInStandard ? 'im Standard inkl.' : 'nur Premium' },
                { label: 'Kündigung', value: 'monatlich' }
              ]
        }
      />

      <h2 className="mt-12 text-2xl font-bold text-slate-900">Für wen lohnt sich {item.name}?</h2>
      <div className="mt-4 prose-de">
        <p><strong>Ja, lohnt sich für dich, wenn:</strong></p>
        <ul>
          {item.pros.slice(0, 4).map((pro) => (
            <li key={pro}>{pro}</li>
          ))}
        </ul>
        <p className="mt-6"><strong>Eher nicht, wenn:</strong></p>
        <ul>
          {item.cons.slice(0, 3).map((con) => (
            <li key={con}>{con}</li>
          ))}
        </ul>
      </div>

      <ProsCons title="Vor- und Nachteile im Detail" pros={item.pros} cons={item.cons} />

      <h2 className="mt-12 text-2xl font-bold text-slate-900">Was {item.name} besser kann als die Konkurrenz</h2>
      <div className="mt-4 prose-de">
        <p>{item.tagline}. Konkret: {item.highlights.join('; ')}.</p>
        <p>Das macht {item.name} besonders interessant, wenn dein Profil zu den oben genannten Vorteilen passt. Bei abweichenden Anforderungen (z. B. {item.cons[0].toLowerCase()}) lohnt sich der Vergleich mit Alternativen.</p>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <CTAButton affiliate={item.affiliate} variant="primary" size="lg">Jetzt {item.name} testen →</CTAButton>
        <Link href={detailLink} className="text-sm font-semibold text-brand-700 underline">Vollständiger Test →</Link>
        <Link href={kostenLink} className="text-sm font-semibold text-brand-700 underline">Detaillierte Preise →</Link>
      </div>

      <FAQ items={faq} />

      <RelatedLinks
        title="Diese Tests interessieren dich auch"
        links={(isVpn ? vpnProviders : providers)
          .filter((x) => x.key !== item.key)
          .slice(0, 4)
          .map((o) => ({ href: `/lohnt-sich/${o.key}`, label: `Lohnt sich ${o.name}?`, description: o.tagline }))}
      />

      <StickyCTA label={`${item.name}: ${verdict}`} affiliate={item.affiliate} ctaLabel="Angebot ansehen" />

      <JsonLd data={breadcrumb} />
    </article>
  );
}
