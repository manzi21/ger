import Link from 'next/link';
import { routes } from '@/lib/internal-links';
import { SITE } from '@/lib/seo';
import { AFFILIATE_DISCLOSURE } from '@/lib/affiliate';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-content px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-base font-semibold text-slate-900">{SITE.name}</p>
            <p className="mt-2 max-w-md text-sm text-slate-600">
              Unabhängiger Vergleich legaler Streaming-Anbieter und VPN-Empfehlungen für Deutschland.
            </p>
          </div>

          <nav aria-label="Inhalte">
            <p className="text-sm font-semibold text-slate-900">Inhalte</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><Link href="/ratgeber/beste-streaming-anbieter-deutschland" className="hover:text-brand-700">Beste Streaming-Anbieter</Link></li>
              <li><Link href="/ratgeber/beste-vpns-fuer-streaming-deutschland" className="hover:text-brand-700">Beste VPNs</Link></li>
              <li><Link href="/ratgeber/streaming-dienste-vergleich" className="hover:text-brand-700">Streaming-Vergleich</Link></li>
              <li><Link href="/ratgeber/legal-streamen-in-deutschland" className="hover:text-brand-700">Legal streamen</Link></li>
              <li><Link href="/ratgeber/vpn-fuer-streaming-erklaert" className="hover:text-brand-700">VPN erklärt</Link></li>
            </ul>
          </nav>

          <nav aria-label="Rechtliches">
            <p className="text-sm font-semibold text-slate-900">Rechtliches</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><Link href={routes.legal.werbehinweis} className="hover:text-brand-700">Werbehinweis</Link></li>
              <li><Link href={routes.legal.impressum} className="hover:text-brand-700">Impressum</Link></li>
              <li><Link href={routes.legal.datenschutz} className="hover:text-brand-700">Datenschutz</Link></li>
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-xs text-slate-500">
          <p className="mb-3">{AFFILIATE_DISCLOSURE}</p>
          <p>© {year} {SITE.name}. Alle Markennamen sind Eigentum der jeweiligen Anbieter.</p>
        </div>
      </div>
    </footer>
  );
}
