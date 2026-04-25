import Link from 'next/link';
import { vpnProviders } from '@/data/vpnProviders';
import CTAButton from './CTAButton';

interface VPNBlockProps {
  /** Optional: nur einen Top-Anbieter hervorheben. */
  featuredKey?: string;
  /** Eigene Headline. */
  headline?: string;
}

export default function VPNBlock({
  featuredKey = 'nordvpn',
  headline = 'VPN-Empfehlung für sicheres Streaming'
}: VPNBlockProps) {
  const featured = vpnProviders.find((v) => v.key === featuredKey) || vpnProviders[0];
  const others = vpnProviders.filter((v) => v.key !== featured.key).slice(0, 2);

  return (
    <section
      aria-label="VPN-Empfehlungen"
      className="my-10 rounded-2xl border border-slate-200 bg-slate-50/60 p-6"
    >
      <header className="mb-4">
        <h2 className="text-xl font-bold text-slate-900">{headline}</h2>
        <p className="mt-1 text-sm text-slate-600">
          Ein VPN schützt deine Privatsphäre, sichert öffentliche WLANs und sorgt auf Reisen für stabile Verbindungen.
          Wir empfehlen ausschließlich Anbieter mit geprüfter No-Logs-Policy.
        </p>
      </header>

      <div className="rounded-xl border-2 border-brand-500 bg-white p-5">
        <div className="flex items-baseline justify-between">
          <h3 className="text-lg font-bold text-slate-900">★ {featured.name}</h3>
          <p className="text-sm font-semibold text-brand-700">
            ab {featured.priceFromEUR.toFixed(2).replace('.', ',')} €/Monat
          </p>
        </div>
        <p className="mt-1 text-sm text-slate-600">{featured.tagline}</p>
        <ul className="mt-3 space-y-1 text-sm text-slate-700">
          {featured.highlights.map((h) => (
            <li key={h} className="flex gap-2">
              <span aria-hidden className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <CTAButton affiliate={featured.affiliate} variant="primary" size="md">
            Zu {featured.name} →
          </CTAButton>
        </div>
      </div>

      {others.length > 0 && (
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {others.map((vpn) => (
            <div key={vpn.key} className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">{vpn.name}</p>
              <p className="mt-0.5 text-xs text-slate-500">
                ab {vpn.priceFromEUR.toFixed(2).replace('.', ',')} €/Monat · {vpn.tagline}
              </p>
              <div className="mt-3">
                <CTAButton affiliate={vpn.affiliate} variant="ghost" size="md">
                  Mehr zu {vpn.name}
                </CTAButton>
              </div>
            </div>
          ))}
        </div>
      )}

      <p className="mt-4 text-xs text-slate-500">
        Mehr Details? <Link href="/ratgeber/beste-vpns-fuer-streaming-deutschland" className="text-brand-700 underline">
          Lies unseren VPN-Vergleich für Deutschland
        </Link>.
      </p>
    </section>
  );
}
