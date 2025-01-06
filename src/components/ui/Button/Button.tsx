import { forwardRef } from 'react';
import { cn } from '@/lib/utils/cn';
import { ButtonProps } from './types';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'solid',
      size = 'md',
      color = 'primary',
      fullWidth = false,
      isLoading = false,
      isDisabled = false,
      leftIcon,
      rightIcon,
      loadingText,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';

    const variantStyles = {
      solid: {
        primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
        secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
        success: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500',
        danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
        warning: 'bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-400',
        info: 'bg-cyan-600 text-white hover:bg-cyan-700 focus:ring-cyan-500',
      },
      outline: {
        primary: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
        secondary: 'border-2 border-gray-600 text-gray-600 hover:bg-gray-50 focus:ring-gray-500',
        success: 'border-2 border-green-600 text-green-600 hover:bg-green-50 focus:ring-green-500',
        danger: 'border-2 border-red-600 text-red-600 hover:bg-red-50 focus:ring-red-500',
        warning: 'border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-50 focus:ring-yellow-400',
        info: 'border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-50 focus:ring-cyan-500',
      },
      ghost: {
        primary: 'text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
        secondary: 'text-gray-600 hover:bg-gray-50 focus:ring-gray-500',
        success: 'text-green-600 hover:bg-green-50 focus:ring-green-500',
        danger: 'text-red-600 hover:bg-red-50 focus:ring-red-500',
        warning: 'text-yellow-500 hover:bg-yellow-50 focus:ring-yellow-400',
        info: 'text-cyan-600 hover:bg-cyan-50 focus:ring-cyan-500',
      },
      link: {
        primary: 'text-blue-600 hover:underline focus:ring-blue-500',
        secondary: 'text-gray-600 hover:underline focus:ring-gray-500',
        success: 'text-green-600 hover:underline focus:ring-green-500',
        danger: 'text-red-600 hover:underline focus:ring-red-500',
        warning: 'text-yellow-500 hover:underline focus:ring-yellow-400',
        info: 'text-cyan-600 hover:underline focus:ring-cyan-500',
      },
      subtle: {
        primary: 'bg-blue-50 text-blue-600 hover:bg-blue-100 focus:ring-blue-500',
        secondary: 'bg-gray-50 text-gray-600 hover:bg-gray-100 focus:ring-gray-500',
        success: 'bg-green-50 text-green-600 hover:bg-green-100 focus:ring-green-500',
        danger: 'bg-red-50 text-red-600 hover:bg-red-100 focus:ring-red-500',
        warning: 'bg-yellow-50 text-yellow-500 hover:bg-yellow-100 focus:ring-yellow-400',
        info: 'bg-cyan-50 text-cyan-600 hover:bg-cyan-100 focus:ring-cyan-500',
      },
    };

    const sizeStyles = {
      xs: 'h-6 px-2 text-xs',
      sm: 'h-8 px-3 text-sm',
      md: 'h-10 px-4 text-base',
      lg: 'h-12 px-6 text-lg',
      xl: 'h-14 px-8 text-xl',
    };

    const disabledStyles = 'opacity-50 cursor-not-allowed pointer-events-none';
    const loadingStyles = 'relative !text-transparent transition-none';
    const fullWidthStyles = 'w-full';

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant][color],
          sizeStyles[size],
          fullWidth && fullWidthStyles,
          (isLoading || isDisabled) && disabledStyles,
          isLoading && loadingStyles,
          className
        )}
        disabled={isLoading || isDisabled}
        {...props}
      >
        {isLoading && (
          <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
            <svg className='animate-spin h-5 w-5' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
              <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
              <path
                className='opacity-75'
                fill='currentColor'
                d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
              />
            </svg>
          </div>
        )}
        {leftIcon && <span className={cn('mr-2', isLoading && 'opacity-0')}>{leftIcon}</span>}
        <span className={isLoading ? 'opacity-0' : ''}>{isLoading ? loadingText || children : children}</span>
        {rightIcon && <span className={cn('ml-2', isLoading && 'opacity-0')}>{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
