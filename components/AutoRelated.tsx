import Link from 'next/link';

interface RelatedItem {
  href: string;
  label: string;
  description?: string;
}

interface AutoRelatedProps {
  /** 3-5 verwandte Links - automatisch generiert pro Page-Typ. */
  links: RelatedItem[];
  title?: string;
}

/**
 * Strukturierter "Verwandte Inhalte"-Block - mit Hover-States und SEO-freundlichen Anchors.
 * Garantiert 3-5 interne Links pro Page (Mindestmass fuer Google-Crawl-Tiefe).
 */
export default function AutoRelated({ links, title = 'Das interessiert dich auch' }: AutoRelatedProps) {
  if (!links || links.length === 0) return null;
  const safe = links.slice(0, 5);
  return (
    <aside aria-labelledby="auto-related-heading" className="my-10 rounded-2xl border border-slate-200 bg-gradient-to-br from-brand-50/30 to-white p-6">
      <h2 id="auto-related-heading" className="text-lg font-bold text-slate-900">{title}</h2>
      <p className="mt-1 text-xs text-slate-500">Handverlesen fuer dich - {safe.length} weiterfuehrende Artikel.</p>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {safe.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="group block rounded-lg border border-slate-200 bg-white p-4 transition hover:border-brand-300 hover:bg-brand-50/40">
              <p className="font-semibold text-slate-900 group-hover:text-brand-700">{link.label} &rarr;</p>
              {link.description && <p className="mt-1 text-sm text-slate-600">{link.description}</p>}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
