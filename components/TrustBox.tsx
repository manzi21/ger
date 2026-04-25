interface TrustItem {
  label: string;
  value: string;
}

interface TrustBoxProps {
  items: TrustItem[];
  title?: string;
}

/**
 * Trust-Signal-Box: zeigt Schnell-Fakten (Gründungsjahr, Server, Geld-zurück).
 * Macht E-E-A-T-Signale für Google und Vertrauen für den Leser sichtbar.
 */
export default function TrustBox({ items, title = 'Auf einen Blick' }: TrustBoxProps) {
  return (
    <section
      aria-labelledby="trustbox-heading"
      className="my-8 rounded-2xl border border-slate-200 bg-slate-50/60 p-6"
    >
      <h3 id="trustbox-heading" className="mb-4 text-base font-bold text-slate-900">
        {title}
      </h3>
      <dl className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {items.map((it) => (
          <div key={it.label}>
            <dt className="text-xs font-medium uppercase tracking-wider text-slate-500">{it.label}</dt>
            <dd className="mt-1 text-sm font-semibold text-slate-900">{it.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
