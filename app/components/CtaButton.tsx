'use client';

import { ReactNode } from 'react';
import { Loader2 } from 'lucide-react';

interface CtaButtonProps {
  variant?: 'primary' | 'secondary';
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
}

export function CtaButton({ 
  variant = 'primary',
  children,
  onClick,
  disabled = false,
  loading = false,
  className = ''
}: CtaButtonProps) {
  const baseClasses = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
  
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseClasses} ${className} ${
        disabled || loading ? 'opacity-50 cursor-not-allowed' : ''
      } flex items-center justify-center space-x-2 min-h-[48px]`}
    >
      {loading && <Loader2 className="w-4 h-4 animate-spin" />}
      <span>{children}</span>
    </button>
  );
}
