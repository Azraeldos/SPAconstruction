import { ButtonLink } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { site } from '@/lib/site'

const values = [
  {
    title: 'Built to last',
    description:
      'We use quality materials and proven methods so your project stands up to daily use and weather.',
  },
  {
    title: 'Licensed & insured',
    description:
      'Fully licensed contractors with insurance coverage for your peace of mind on every job.',
  },
  {
    title: 'Local & responsive',
    description:
      'A small team that knows the area—clear communication from estimate through final walkthrough.',
  },
] as const

export function Home() {
  return (
    <>
      <section
        id="home"
        className="scroll-mt-20 bg-stone-900 px-4 py-20 text-white sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-400">
            {site.name}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {site.tagline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-stone-300">
            Residential remodels, commercial build-outs, and dependable repairs.
            Free estimates for projects in our service area.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink href="#contact">Get a free estimate</ButtonLink>
            <ButtonLink href="#services" variant="secondary">
              View services
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          title="Why homeowners choose us"
          subtitle="Straightforward work, fair pricing, and crews who show up on schedule."
        />
        <ul className="grid gap-8 sm:grid-cols-3">
          {values.map(({ title, description }) => (
            <li
              key={title}
              className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-stone-900">{title}</h3>
              <p className="mt-2 text-stone-600">{description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-stone-200 bg-orange-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-stone-900 sm:text-3xl">
            Ready to start your project?
          </h2>
          <p className="mt-3 text-stone-600">
            Tell us about your timeline and budget—we will follow up within one
            business day.
          </p>
          <div className="mt-8">
            <ButtonLink href="#contact">Contact us</ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}
