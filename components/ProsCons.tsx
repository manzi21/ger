interface ProsConsProps {
  pros: string[];
  cons: string[];
  /** Optional: alternative Überschrift z. B. "Vor- und Nachteile von Netflix". */
  title?: string;
}

export default function ProsCons({ pros, cons, title }: ProsConsProps) {
  return (
    <section aria-labelledby="proscons-heading" className="my-10">
      {title && (
        <h2 id="proscons-heading" className="mb-4 text-2xl font-bold text-slate-900">
          {title}
        </h2>
      )}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50/40 p-6">
          <h3 className="flex items-center gap-2 text-base font-bold text-emerald-800">
            <span aria-hidden className="text-lg">✓</span> Vorteile
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            {pros.map((p) => (
              <li key={p} className="flex gap-2">
                <span aria-hidden className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-rose-200 bg-rose-50/40 p-6">
          <h3 className="flex items-center gap-2 text-base font-bold text-rose-800">
            <span aria-hidden className="text-lg">✗</span> Nachteile
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            {cons.map((c) => (
              <li key={c} className="flex gap-2">
                <span aria-hidden className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
