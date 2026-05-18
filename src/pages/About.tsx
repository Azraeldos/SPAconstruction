import { SectionHeading } from '@/components/ui/SectionHeading'
import { site } from '@/lib/site'

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <SectionHeading
        title="About us"
        subtitle={`Family-owned builders serving the community for ${site.yearsInBusiness}+ years.`}
        align="left"
      />
      <div className="prose prose-stone max-w-3xl">
        <p className="text-lg leading-relaxed text-stone-700">
          {site.name} started with a simple idea: treat every job like it is our
          own home. Today we are a small crew of carpenters, framers, and
          finishers who take pride in clean job sites and honest timelines.
        </p>
        <p className="mt-6 leading-relaxed text-stone-700">
          We work closely with homeowners, property managers, and local
          businesses. Whether you are updating a single room or opening a new
          location, you will work directly with the people managing your
          project—not a call center.
        </p>
        <p className="mt-6 leading-relaxed text-stone-700">
          Licensed, insured, and happy to provide references from recent
          projects in the area. Replace this copy with your company story and
          team photos when you are ready.
        </p>
      </div>
    </section>
  )
}
