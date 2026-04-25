/**
 * Analytics-ready click tracking. Sendet zu window.dataLayer (Google Tag Manager)
 * oder window.plausible (Plausible Analytics) wenn vorhanden. Sonst no-op.
 */

export type AffiliateEvent = {
  type: 'affiliate_click';
  partner: string;
  network: string;
  placement: 'hero' | 'middle' | 'sticky' | 'comparison' | 'best_choice' | 'card';
  page?: string;
};

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    plausible?: (event: string, opts?: { props?: Record<string, unknown> }) => void;
  }
}

export function trackAffiliateClick(ev: AffiliateEvent): void {
  if (typeof window === 'undefined') return;
  try {
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({ event: ev.type, ...ev });
    }
    if (typeof window.plausible === 'function') {
      window.plausible('affiliate_click', { props: { partner: ev.partner, placement: ev.placement } });
    }
  } catch {
    // never throw on tracking
  }
}

/** Generischer Custom-Event-Sender. */
export function trackEvent(name: string, props?: Record<string, unknown>): void {
  if (typeof window === 'undefined') return;
  try {
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({ event: name, ...(props || {}) });
    }
    if (typeof window.plausible === 'function') {
      window.plausible(name, props ? { props } : undefined);
    }
  } catch {}
}
