'use client';

import { useEffect, useState } from 'react';
import type { AffiliateConfig } from '@/lib/affiliate';
import CTAButton from './CTAButton';

interface StickyCTAProps {
  label: string;
  affiliate: AffiliateConfig;
  ctaLabel: string;
}

/**
 * Eingeblendet, sobald der Nutzer mehr als 30 % der Seite gescrollt hat,
 * und nur auf mobilen Geräten. Verhindert nervige Overlays auf Desktop.
 */
export default function StickyCTA({ label, affiliate, ctaLabel }: StickyCTAProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      if (total <= 0) return;
      const ratio = doc.scrollTop / total;
      setVisible(ratio > 0.3);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={[
        'fixed inset-x-0 bottom-0 z-30 border-t border-slate-200 bg-white/95 px-4 py-3 shadow-2xl backdrop-blur transition-transform sm:hidden',
        visible ? 'translate-y-0' : 'translate-y-full'
      ].join(' ')}
    >
      <div className="flex items-center gap-3">
        <p className="flex-1 text-xs font-medium text-slate-700">{label}</p>
        <CTAButton affiliate={affiliate} variant="primary" size="md">
          {ctaLabel}
        </CTAButton>
      </div>
    </div>
  );
}
