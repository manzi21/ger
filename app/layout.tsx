import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { DEFAULT_METADATA, SITE } from '@/lib/seo';

export const metadata: Metadata = DEFAULT_METADATA;

export const viewport: Viewport = {
  themeColor: '#1f43ee',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.url,
    inLanguage: 'de-DE',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE.url}/?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <html lang="de">
      <body className="has-sticky-cta">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:font-medium focus:text-slate-900 focus:shadow"
        >
          Zum Inhalt springen
        </a>
        <Header />
        <main id="main" className="mx-auto w-full max-w-content px-4 py-10 sm:px-6 lg:px-8">
          {children}
        </main>
        <Footer />
        <JsonLd data={orgSchema} />
      </body>
    </html>
  );
}
