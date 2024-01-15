import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/src/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs leading-relaxed tracking-widest font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-pointer',
  {
    variants: {
      variant: {
        reflection: 'border-dark-green text-dark-green',
        casestudy: 'border-highlight text-highlight',
        underconstruction: 'border-sweet-orange text-sweet-orange',
        outline: 'text-foreground',
      },
    },
    defaultVariants: {
      variant: 'reflection',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
