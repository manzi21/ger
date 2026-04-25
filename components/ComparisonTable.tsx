interface ComparisonTableProps {
  leftLabel: string;
  rightLabel: string;
  rows: Array<[string, string, string]>;
}

export default function ComparisonTable({ leftLabel, rightLabel, rows }: ComparisonTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-left text-slate-700">
            <tr>
              <th scope="col" className="px-4 py-3 font-semibold">Kriterium</th>
              <th scope="col" className="px-4 py-3 font-semibold text-brand-700">{leftLabel}</th>
              <th scope="col" className="px-4 py-3 font-semibold text-accent-600">{rightLabel}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map(([criterion, left, right]) => (
              <tr key={criterion} className="even:bg-slate-50/50">
                <th scope="row" className="px-4 py-3 text-left font-medium text-slate-900">
                  {criterion}
                </th>
                <td className="px-4 py-3 text-slate-700">{left}</td>
                <td className="px-4 py-3 text-slate-700">{right}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
