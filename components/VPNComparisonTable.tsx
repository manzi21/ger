import Link from 'next/link';
import { vpnProviders, type VpnProvider } from '@/data/vpnProviders';
import CTAButton from './CTAButton';

interface VPNComparisonTableProps {
  highlight?: string;
  items?: VpnProvider[];
}

export default function VPNComparisonTable({ highlight, items }: VPNComparisonTableProps) {
  const list = items ?? vpnProviders;
  return (
    <section aria-labelledby="vpn-compare-heading" className="my-10">
      <h2 id="vpn-compare-heading" className="text-2xl font-bold text-slate-900">VPN-Vergleichstabelle</h2>
      <p className="mt-2 text-slate-600">Direkt-Vergleich aller getesteten VPN-Anbieter - Preis, Server, Bewertung, Streaming-Tauglichkeit.</p>
      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-left text-slate-700">
              <tr>
                <th className="px-4 py-3 font-semibold">Anbieter</th>
                <th className="px-4 py-3 font-semibold">Preis</th>
                <th className="px-4 py-3 font-semibold">Server</th>
                <th className="px-4 py-3 font-semibold">Streaming</th>
                <th className="px-4 py-3 font-semibold">Bewertung</th>
                <th className="px-4 py-3 font-semibold">Aktion</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {list.map((v) => {
                const isHighlight = v.key === highlight;
                return (
                  <tr key={v.key} className={isHighlight ? 'bg-brand-50/40' : ''}>
                    <th scope="row" className="px-4 py-3 text-left font-semibold text-slate-900">
                      <Link href={`/vpn/${v.key}`} className="hover:text-brand-700">{v.name}{isHighlight ? ' ★' : ''}</Link>
                    </th>
                    <td className="px-4 py-3 text-brand-700 font-semibold">ab {v.priceFromEUR.toFixed(2).replace('.', ',')} EUR</td>
                    <td className="px-4 py-3 text-slate-700">{v.servers.toLocaleString('de-DE')} / {v.countries} Laender</td>
                    <td className="px-4 py-3 text-slate-700">Geeignet</td>
                    <td className="px-4 py-3 text-slate-900 font-semibold">{v.rating.toFixed(1)} / 5</td>
                    <td className="px-4 py-3"><CTAButton affiliate={v.affiliate} variant={isHighlight ? 'primary' : 'ghost'} size="md" placement="comparison">Zu {v.name}</CTAButton></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
