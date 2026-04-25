/**
 * Affiliate-Link-Builder.
 *
 * Strategie:
 *   1. Wenn ein Programm-spezifischer Partner-/Tracking-ID gesetzt ist, wird er
 *      in den Tracking-Link eingebaut.
 *   2. Wenn kein ID vorhanden ist, fällt die Funktion auf eine sichere, direkte
 *      URL des Anbieters zurück (kein Tracking, aber kein toter Link).
 *
 * Alle Provisionen werden ausschließlich für legale Dienste vergeben.
 */

export type AffiliateNetwork =
  | 'awin'
  | 'impact'
  | 'amazon'
  | 'direct';

export interface AffiliateConfig {
  /** Eindeutiger Schlüssel des Anbieters (z. B. "nordvpn"). */
  key: string;
  /** Netzwerk, das den Klick zählt. */
  network: AffiliateNetwork;
  /** Direktlink (Fallback ohne Tracking). */
  fallbackUrl: string;
  /** AWIN-Merchant-ID, falls Netzwerk = "awin". */
  awinMerchantId?: string;
  /** Impact-Campaign- oder Click-ID, falls Netzwerk = "impact". */
  impactCampaignId?: string;
  /** Amazon-ASIN, falls Netzwerk = "amazon". */
  amazonAsin?: string;
}

const env = {
  awinPublisher: process.env.NEXT_PUBLIC_AWIN_PUBLISHER_ID || '',
  impactPartner: process.env.NEXT_PUBLIC_IMPACT_PARTNER_ID || '',
  amazonTag: process.env.NEXT_PUBLIC_AMAZON_TAG || ''
};

export function buildAffiliateLink(config: AffiliateConfig): string {
  switch (config.network) {
    case 'awin': {
      if (!env.awinPublisher || !config.awinMerchantId) return config.fallbackUrl;
      const target = encodeURIComponent(config.fallbackUrl);
      return `https://www.awin1.com/cread.php?awinmid=${config.awinMerchantId}&awinaffid=${env.awinPublisher}&ued=${target}`;
    }
    case 'impact': {
      if (!env.impactPartner || !config.impactCampaignId) return config.fallbackUrl;
      const target = encodeURIComponent(config.fallbackUrl);
      return `https://imp.pxf.io/c/${env.impactPartner}/${config.impactCampaignId}/?u=${target}`;
    }
    case 'amazon': {
      if (!env.amazonTag || !config.amazonAsin) return config.fallbackUrl;
      return `https://www.amazon.de/dp/${config.amazonAsin}/?tag=${env.amazonTag}`;
    }
    case 'direct':
    default:
      return config.fallbackUrl;
  }
}

/** Gibt zurück, ob mindestens ein Tracking-ID konfiguriert ist. */
export function hasAffiliateConfig(): boolean {
  return Boolean(env.awinPublisher || env.impactPartner || env.amazonTag);
}

/** Standard-Disclosure-Text (Pflicht laut UWG/§ 5a Abs. 6 UWG). */
export const AFFILIATE_DISCLOSURE =
  'Diese Seite enthält Affiliate-Links. Wenn du über diese Links kaufst, erhalten wir möglicherweise eine Provision – für dich entstehen keine Mehrkosten.';
