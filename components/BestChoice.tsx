import type { Provider } from '@/data/providers';
import type { VpnProvider } from '@/data/vpnProviders';
import CTAButton from './CTAButton';

interface BestChoiceProps {
  pick: Provider | VpnProvider;
  reason: string;
  label?: string;
}

function isVpn(item: Provider | VpnProvider): item is VpnProvider {
  return 'noLogs' in item;
}

export default function BestChoice({ pick, reason, label = 'Beste Wahl' }: BestChoiceProps) {
  return (
    <aside
      role="complementary"
      aria-label={`${label}: ${pick.name}`}
      className="my-8 rounded-2xl border-2 border-brand-500 bg-gradient-to-br from-brand-50 to-white p-6 shadow-sm"
    >
      <p className="text-xs font-bold uppercase tracking-wider text-brand-700">
        ★ {label}
      </p>
      <h3 className="mt-1 text-2xl font-bold text-slate-900">{pick.name}</h3>
      <p className="mt-1 text-sm text-slate-600">{pick.tagline}</p>

      <p className="mt-4 text-sm text-slate-700">
        <strong className="text-slate-900">Schnelles Urteil:</strong> {reason}
      </p>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
        <CTAButton affiliate={pick.affiliate} variant="primary" size="lg">
          Zu {pick.name} →
        </CTAButton>
        <p className="text-xs text-slate-500">
          ab {pick.priceFromEUR.toFixed(2).replace('.', ',')} € pro Monat
          {isVpn(pick) ? ' · 30 Tage Geld-zurück' : ' · monatlich kündbar'}
        </p>
      </div>
    </aside>
  );
}
