interface TrustBadgesProps {
  variant?: 'compact' | 'full';
}

export default function TrustBadges({ variant = 'compact' }: TrustBadgesProps) {
  const badges = [
    { icon: '✓', label: 'Unabhaengig getestet', sub: 'Keine bezahlten Reviews' },
    { icon: '🔒', label: 'Datenschutz first', sub: 'GDPR-konform, kein Tracking ohne Zustimmung' },
    { icon: '🇩🇪', label: 'Fuer Deutschland', sub: 'AGB-konform, EU-Portabilitaet' },
    { icon: '⭐', label: 'Experten-Bewertet', sub: 'Manuell getestet 2026' }
  ];
  const list = variant === 'compact' ? badges.slice(0, 3) : badges;
  return (
    <section aria-label="Vertrauen" className="my-8 grid gap-3 rounded-2xl border border-slate-200 bg-slate-50/40 p-4 sm:grid-cols-2 md:grid-cols-4">
      {list.map((b) => (
        <div key={b.label} className="flex items-start gap-3">
          <span aria-hidden className="text-2xl">{b.icon}</span>
          <div>
            <p className="text-sm font-semibold text-slate-900">{b.label}</p>
            <p className="text-xs text-slate-600">{b.sub}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
