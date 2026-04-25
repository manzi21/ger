import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/seo';
import { providers } from '@/data/providers';
import { vpnProviders } from '@/data/vpnProviders';
import { platforms } from '@/data/platforms';
import { audiences } from '@/data/audiences';
import { showsSimilar } from '@/data/showSimilar';
import { movieOccasions } from '@/data/movieOccasions';
import { comparisons } from '@/data/comparisons';
import { alternativePages } from '@/data/alternatives';
import { guides } from '@/data/guides';
import { tools } from '@/data/tools';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = [
    { url: `${SITE.url}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE.url}/werbehinweis`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${SITE.url}/impressum`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${SITE.url}/datenschutz`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 }
  ];

  const compEntries = comparisons.map((c) => ({ url: `${SITE.url}/vs/${c.slug}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 }));
  const altEntries = alternativePages.map((a) => ({ url: `${SITE.url}/alternativen/${a.slug}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 }));
  const guideEntries = guides.map((g) => ({ url: `${SITE.url}/ratgeber/${g.slug}`, lastModified: new Date(g.updatedISO), changeFrequency: 'monthly' as const, priority: 0.9 }));
  const toolEntries = tools.map((t) => ({ url: `${SITE.url}/tools/${t.slug}`, lastModified: new Date(t.updatedISO), changeFrequency: 'monthly' as const, priority: 0.6 }));
  const providerEntries = providers.map((p) => ({ url: `${SITE.url}/anbieter/${p.key}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 }));
  const vpnEntries = vpnProviders.map((v) => ({ url: `${SITE.url}/vpn/${v.key}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.85 }));
  const lohntSichEntries = [...providers, ...vpnProviders].map((x) => ({ url: `${SITE.url}/lohnt-sich/${x.key}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.75 }));
  const kostenEntries = [...providers, ...vpnProviders].map((x) => ({ url: `${SITE.url}/kosten/${x.key}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.75 }));
  const platformEntries = platforms.map((pl) => ({ url: `${SITE.url}/vpn-fuer/${pl.slug}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 }));
  const audienceEntries = audiences.map((a) => ({ url: `${SITE.url}/streaming-fuer/${a.slug}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.75 }));
  const showEntries = showsSimilar.map((s) => ({ url: `${SITE.url}/serien-wie/${s.slug}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 }));
  const movieEntries = movieOccasions.map((m) => ({ url: `${SITE.url}/filme-fuer/${m.slug}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 }));

  return [
    ...staticEntries,
    ...compEntries,
    ...altEntries,
    ...guideEntries,
    ...toolEntries,
    ...providerEntries,
    ...vpnEntries,
    ...lohntSichEntries,
    ...kostenEntries,
    ...platformEntries,
    ...audienceEntries,
    ...showEntries,
    ...movieEntries
  ];
}
