'use client';

import { MouseEvent, ReactNode } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

type Variant = 'outline' | 'solid' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

type RippleButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  target?: '_blank' | '_self';
  variant?: Variant;
  size?: Size;
};

const variantStyles: Record<Variant, string> = {
  outline:
    'bg-primary text-white hover:scale-15',
  solid:
    'bg-[#4b5d4b] text-white hover:bg-[#3f5a45]',
  ghost:
    'text-[#4b5d4b] hover:bg-[#4b5d4b]/10',
};

const sizeStyles: Record<Size, string> = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

export const RippleButton = ({
  href,
  children,
  className,
  target = '_self',
  variant = 'outline',
  size = 'md',
}: RippleButtonProps) => {
  const createRipple = (e: MouseEvent<HTMLAnchorElement>) => {
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const button = e.currentTarget;
    const circle = document.createElement('span');

    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    const rect = button.getBoundingClientRect();

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - rect.left - radius}px`;
    circle.style.top = `${e.clientY - rect.top - radius}px`;
    circle.className = 'ripple';

    const ripple = button.querySelector('.ripple');
    if (ripple) ripple.remove();

    button.appendChild(circle);
  };

  return (
    <Link
      href={href}
      target={target}
      onClick={createRipple}
      className={clsx(
        'relative overflow-hidden inline-flex items-center justify-center rounded-full transition font-sf',
        'hover:scale-[1.03] active:scale-[0.98]',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </Link>
  );
};
