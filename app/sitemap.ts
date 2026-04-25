import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/seo';
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

  const compEntries = comparisons.map((c) => ({
    url: `${SITE.url}/vs/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8
  }));

  const altEntries = alternativePages.map((a) => ({
    url: `${SITE.url}/alternativen/${a.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }));

  const guideEntries = guides.map((g) => ({
    url: `${SITE.url}/ratgeber/${g.slug}`,
    lastModified: new Date(g.updatedISO),
    changeFrequency: 'monthly' as const,
    priority: 0.9
  }));

  const toolEntries = tools.map((t) => ({
    url: `${SITE.url}/tools/${t.slug}`,
    lastModified: new Date(t.updatedISO),
    changeFrequency: 'monthly' as const,
    priority: 0.6
  }));

  return [...staticEntries, ...compEntries, ...altEntries, ...guideEntries, ...toolEntries];
}
