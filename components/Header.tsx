import Link from 'next/link';
import { primaryNav } from '@/lib/internal-links';
import { SITE } from '@/lib/seo';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold text-slate-900 hover:text-brand-700"
          aria-label={`${SITE.name} – Startseite`}
        >
          <span aria-hidden className="inline-block h-7 w-7 rounded bg-brand-600 text-center leading-7 text-white">
            ▶
          </span>
          <span>{SITE.name}</span>
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden md:block">
          <ul className="flex items-center gap-5 text-sm font-medium text-slate-700">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-brand-700">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
