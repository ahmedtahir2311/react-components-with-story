import { forwardRef } from 'react';
import { cn } from '@/lib/utils/cn';
import { DividerProps } from './types';

export const Divider = forwardRef<HTMLHRElement, DividerProps>(
  (
    {
      light = false,
      orientation = 'horizontal',
      textAlign = 'center',
      variant = 'fullWidth',
      flexItem = false,
      absolute = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = cn(
      'border-gray-200 dark:border-gray-700',
      light && 'border-gray-100 dark:border-gray-800',
      orientation === 'horizontal' ? 'border-t' : 'border-l',
      absolute && 'absolute',
      flexItem && 'flex-shrink-0'
    );

    const variantStyles = {
      fullWidth: 'w-full',
      inset: 'ml-16',
      middle: 'mx-8',
    };

    const orientationStyles = {
      horizontal: 'my-2',
      vertical: cn('h-auto self-stretch', flexItem ? 'mx-2' : 'mx-4 inline-block'),
    };

    if (children) {
      const textAlignStyles = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
      };

      return (
        <div
          className={cn(
            'relative flex items-center',
            orientation === 'vertical' && 'flex-col',
            variantStyles[variant],
            className
          )}
        >
          <div
            className={cn(
              baseStyles,
              orientation === 'horizontal' ? 'flex-grow' : 'h-full',
              textAlign === 'center' && 'flex-1'
            )}
          />
          <span
            className={cn(
              'px-2 text-sm text-gray-500',
              textAlignStyles[textAlign],
              orientation === 'vertical' && 'py-2'
            )}
          >
            {children}
          </span>
          {textAlign === 'center' && (
            <div className={cn(baseStyles, orientation === 'horizontal' ? 'flex-grow' : 'h-full')} />
          )}
        </div>
      );
    }

    return (
      <hr
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], orientationStyles[orientation], className)}
        {...props}
      />
    );
  }
);

Divider.displayName = 'Divider';
