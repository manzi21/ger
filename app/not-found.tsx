import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Seite nicht gefunden – TV-Streaming-Vergleich',
  robots: { index: false, follow: false }
};

export default function NotFound() {
  return (
    <section className="py-20 text-center">
      <p className="text-sm font-semibold text-brand-700">404</p>
      <h1 className="mt-2 text-4xl font-extrabold text-slate-900">Diese Seite gibt es nicht</h1>
      <p className="mt-4 text-slate-600">
        Vielleicht ist sie umgezogen oder es war ein Tippfehler. Hier ein paar gute Anlaufstellen:
      </p>
      <ul className="mx-auto mt-6 max-w-md space-y-2 text-left">
        <li>
          <Link className="text-brand-700 underline" href="/">Startseite</Link>
        </li>
        <li>
          <Link className="text-brand-700 underline" href="/ratgeber/beste-streaming-anbieter-deutschland">
            Beste Streaming-Anbieter
          </Link>
        </li>
        <li>
          <Link className="text-brand-700 underline" href="/ratgeber/beste-vpns-fuer-streaming-deutschland">
            Beste VPNs für Streaming
          </Link>
        </li>
      </ul>
    </section>
  );
}
