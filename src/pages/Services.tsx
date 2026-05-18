import { SectionHeading } from '@/components/ui/SectionHeading'

const services = [
  {
    title: 'Residential remodel',
    description:
      'Kitchens, bathrooms, additions, and whole-home updates tailored to how you live.',
  },
  {
    title: 'Commercial build-out',
    description:
      'Tenant improvements, office fit-outs, and retail spaces built to code and on schedule.',
  },
  {
    title: 'Repairs & maintenance',
    description:
      'Structural fixes, drywall, flooring, and exterior work to keep your property in shape.',
  },
] as const

export function Services() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        title="Our services"
        subtitle="From small repairs to full renovations—we scope each job clearly before we break ground."
      />
      <ul className="grid gap-6 md:grid-cols-3">
        {services.map(({ title, description }) => (
          <li
            key={title}
            className="flex flex-col rounded-xl border border-stone-200 bg-white p-6 shadow-sm"
          >
            <div className="mb-4 h-1 w-12 rounded-full bg-orange-600" />
            <h3 className="text-xl font-semibold text-stone-900">{title}</h3>
            <p className="mt-3 flex-1 text-stone-600">{description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
