import { forwardRef } from 'react';
import { cn } from '@/lib/utils/cn';
import { IconProps } from './types';

export const Icon = forwardRef<HTMLDivElement, IconProps>(
  (
    {
      src,
      alt,
      size = 'md',
      shape = 'rounded',
      bordered = false,
      shadowed = false,
      width,
      height,
      className,
      ...props
    },
    ref
  ) => {
    const sizeStyles = {
      xs: 'w-4 h-4',
      sm: 'w-6 h-6',
      md: 'w-8 h-8',
      lg: 'w-12 h-12',
      xl: 'w-16 h-16',
      '2xl': 'w-20 h-20',
    };

    const shapeStyles = {
      circle: 'rounded-full',
      square: 'rounded-none',
      rounded: 'rounded-md',
    };

    const containerStyles = cn(
      'inline-flex items-center justify-center',
      'transition-all duration-200 ease-in-out',
      sizeStyles[size],
      shapeStyles[shape],
      bordered && 'border border-gray-200 dark:border-gray-700',
      shadowed && 'shadow-sm hover:shadow-md',
      className
    );

    const imageStyles = cn('w-full h-full', 'object-contain', 'transition-transform duration-200', 'hover:scale-105');

    const isSVG = src?.endsWith('.svg');

    return (
      <div ref={ref} className={containerStyles} style={{ width, height }} {...props}>
        {isSVG ? (
          <object data={src} type='image/svg+xml' className={imageStyles} aria-label={alt} />
        ) : (
          <img src={src} alt={alt} className={imageStyles} />
        )}
      </div>
    );
  }
);

Icon.displayName = 'Icon';
