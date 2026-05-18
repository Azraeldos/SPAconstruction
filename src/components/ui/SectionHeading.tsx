type SectionHeadingProps = {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  title,
  subtitle,
  align = 'center',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left'

  return (
    <header className={`mb-10 ${alignClass}`}>
      <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-lg text-stone-600">{subtitle}</p>
      )}
    </header>
  )
}
