import Link from 'next/link';

interface RelatedLink {
  href: string;
  label: string;
  description?: string;
}

interface RelatedLinksProps {
  title?: string;
  links: RelatedLink[];
}

export default function RelatedLinks({ title = 'Weiterlesen', links }: RelatedLinksProps) {
  if (links.length === 0) return null;

  return (
    <aside aria-labelledby="related-heading" className="my-10 rounded-2xl border border-slate-200 bg-white p-6">
      <h2 id="related-heading" className="text-lg font-bold text-slate-900">
        {title}
      </h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="group block rounded-lg border border-slate-200 p-4 transition hover:border-brand-300 hover:bg-brand-50/50"
            >
              <p className="font-semibold text-slate-900 group-hover:text-brand-700">
                {link.label} →
              </p>
              {link.description && (
                <p className="mt-1 text-sm text-slate-600">{link.description}</p>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
