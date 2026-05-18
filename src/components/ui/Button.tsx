import type { ComponentProps } from 'react'

type ButtonProps = ComponentProps<'button'> & {
  variant?: 'primary' | 'secondary'
}

export function Button({
  variant = 'primary',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
  const variants = {
    primary:
      'bg-orange-600 text-white hover:bg-orange-700 focus-visible:outline-orange-600',
    secondary:
      'border border-stone-300 bg-white text-stone-800 hover:bg-stone-100 focus-visible:outline-stone-500',
  }

  return (
    <button
      type="button"
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

type ButtonLinkProps = {
  href: string
  variant?: 'primary' | 'secondary'
  className?: string
  children: React.ReactNode
}

export function ButtonLink({
  href,
  variant = 'primary',
  className = '',
  children,
}: ButtonLinkProps) {
  const base =
    'inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
  const variants = {
    primary:
      'bg-orange-600 text-white hover:bg-orange-700 focus-visible:outline-orange-600',
    secondary:
      'border border-stone-300 bg-white text-stone-800 hover:bg-stone-100 focus-visible:outline-stone-500',
  }

  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </a>
  )
}
