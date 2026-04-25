interface ExpertBadgeProps {
  label?: string;
  date?: string;
}

export default function ExpertBadge({ label = 'Von Experten getestet', date }: ExpertBadgeProps) {
  const d = date ?? new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long' });
  return (
    <div className="my-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-900 ring-1 ring-inset ring-emerald-200">
      <span aria-hidden>✓</span>
      <span>{label} - Stand: {d}</span>
    </div>
  );
}
