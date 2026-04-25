interface RatingProps {
  /** Wert 0-5 (eine Dezimalstelle). */
  value: number;
  /** Optional: Anzeige-Label "Unsere Bewertung". */
  label?: string;
  /** Anzeige-Größe. */
  size?: 'sm' | 'md' | 'lg';
}

export default function Rating({ value, label = 'Unsere Bewertung', size = 'md' }: RatingProps) {
  const clamped = Math.max(0, Math.min(5, value));
  const percent = (clamped / 5) * 100;
  const sizeMap = {
    sm: { star: 'text-base', text: 'text-xs' },
    md: { star: 'text-lg', text: 'text-sm' },
    lg: { star: 'text-2xl', text: 'text-base' }
  } as const;

  return (
    <div className="flex flex-wrap items-center gap-2" aria-label={`${label}: ${clamped.toFixed(1)} von 5`}>
      {label && <span className={`font-medium text-slate-700 ${sizeMap[size].text}`}>{label}:</span>}
      <span className="relative inline-block leading-none" role="img" aria-label={`${clamped.toFixed(1)} Sterne`}>
        <span className={`text-slate-300 ${sizeMap[size].star}`}>★★★★★</span>
        <span
          className={`absolute inset-0 overflow-hidden text-amber-400 ${sizeMap[size].star}`}
          style={{ width: `${percent}%` }}
          aria-hidden
        >
          ★★★★★
        </span>
      </span>
      <span className={`font-semibold text-slate-900 ${sizeMap[size].text}`}>{clamped.toFixed(1)}</span>
      <span className={`text-slate-500 ${sizeMap[size].text}`}>/ 5,0</span>
    </div>
  );
}
