import Link from 'next/link';
import { providers, type Provider } from '@/data/providers';
import CTAButton from './CTAButton';

interface StreamingComparisonTableProps {
  highlight?: string;
  items?: Provider[];
}

export default function StreamingComparisonTable({ highlight, items }: StreamingComparisonTableProps) {
  const list = items ?? providers;
  return (
    <section aria-labelledby="streaming-compare-heading" className="my-10">
      <h2 id="streaming-compare-heading" className="text-2xl font-bold text-slate-900">Streaming-Vergleichstabelle</h2>
      <p className="mt-2 text-slate-600">Alle Anbieter direkt nebeneinander - Preis, 4K-Verfuegbarkeit, Bewertung, Aktion.</p>
      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-left text-slate-700">
              <tr>
                <th className="px-4 py-3 font-semibold">Anbieter</th>
                <th className="px-4 py-3 font-semibold">ab Preis/Mon.</th>
                <th className="px-4 py-3 font-semibold">4K UHD</th>
                <th className="px-4 py-3 font-semibold">Sport</th>
                <th className="px-4 py-3 font-semibold">Bewertung</th>
                <th className="px-4 py-3 font-semibold">Aktion</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {list.map((p) => {
                const isHighlight = p.key === highlight;
                return (
                  <tr key={p.key} className={isHighlight ? 'bg-brand-50/40' : ''}>
                    <th scope="row" className="px-4 py-3 text-left font-semibold text-slate-900">
                      <Link href={`/anbieter/${p.key}`} className="hover:text-brand-700">{p.name}{isHighlight ? ' ★' : ''}</Link>
                    </th>
                    <td className="px-4 py-3 text-brand-700 font-semibold">{p.priceFromEUR.toFixed(2).replace('.', ',')} EUR</td>
                    <td className="px-4 py-3 text-slate-700">{p.uhdInStandard ? 'Ja, im Standard' : 'nur Premium'}</td>
                    <td className="px-4 py-3 text-slate-700">{p.sport ? 'Ja' : 'Nein'}</td>
                    <td className="px-4 py-3 text-slate-900 font-semibold">{p.rating.toFixed(1)} / 5</td>
                    <td className="px-4 py-3"><CTAButton affiliate={p.affiliate} variant={isHighlight ? 'primary' : 'ghost'} size="md" placement="comparison">Zu {p.name}</CTAButton></td>
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
