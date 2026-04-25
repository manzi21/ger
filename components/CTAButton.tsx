'use client';
import { type ReactNode } from 'react';
import { buildAffiliateLink, type AffiliateConfig } from '@/lib/affiliate';
import { trackAffiliateClick, type AffiliateEvent } from '@/lib/tracking';

interface CTAButtonProps {
  affiliate: AffiliateConfig;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'md' | 'lg';
  fullWidth?: boolean;
  placement?: AffiliateEvent['placement'];
}

const variantClasses = {
  primary: 'bg-brand-600 text-white hover:bg-brand-700 focus-visible:ring-brand-500',
  secondary: 'bg-accent-500 text-white hover:bg-accent-600 focus-visible:ring-accent-500',
  ghost: 'bg-white text-brand-700 ring-1 ring-inset ring-brand-300 hover:bg-brand-50 focus-visible:ring-brand-500'
} as const;

const sizeClasses = {
  md: 'px-4 py-2 text-sm',
  lg: 'px-5 py-3 text-base'
} as const;

export default function CTAButton({
  affiliate,
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  placement = 'card'
}: CTAButtonProps) {
  const href = buildAffiliateLink(affiliate);

  function onClick() {
    trackAffiliateClick({
      type: 'affiliate_click',
      partner: affiliate.key,
      network: affiliate.network,
      placement,
      page: typeof window !== 'undefined' ? window.location.pathname : undefined
    });
  }

  return (
    <a
      href={href}
      rel="sponsored noopener nofollow"
      target="_blank"
      data-affiliate={affiliate.key}
      data-placement={placement}
      onClick={onClick}
      className={[
        'inline-flex items-center justify-center rounded-md font-semibold shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        variantClasses[variant],
        sizeClasses[size],
        fullWidth ? 'w-full' : ''
      ].join(' ')}
    >
      {children}
    </a>
  );
}
