import type { Provider } from '@/data/providers';
import CTAButton from './CTAButton';

interface ProviderCardProps {
  provider: Provider;
  highlighted?: boolean;
}

export default function ProviderCard({ provider, highlighted }: ProviderCardProps) {
  return (
    <article
      className={[
        'flex h-full flex-col rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md',
        highlighted ? 'border-brand-500 ring-2 ring-brand-200' : 'border-slate-200'
      ].join(' ')}
    >
      <header className="flex items-baseline justify-between gap-3">
        <h3 className="text-lg font-bold text-slate-900">{provider.name}</h3>
        <p className="text-sm font-semibold text-brand-700">
          ab {provider.priceFromEUR.toFixed(2).replace('.', ',')} €
          <span className="ml-1 text-xs font-normal text-slate-500">/Monat</span>
        </p>
      </header>

      <p className="mt-1 text-sm text-slate-600">{provider.tagline}</p>

      <ul className="mt-4 flex-1 space-y-2 text-sm text-slate-700">
        {provider.highlights.map((h) => (
          <li key={h} className="flex gap-2">
            <span aria-hidden className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <p className="mt-4 rounded-md bg-slate-50 px-3 py-2 text-xs text-slate-600">
        <strong className="text-slate-900">Für wen geeignet?</strong> {provider.bestFor}
      </p>

      <div className="mt-5">
        <CTAButton affiliate={provider.affiliate} variant="primary" size="md" fullWidth>
          Zu {provider.name}
        </CTAButton>
      </div>
    </article>
  );
}
