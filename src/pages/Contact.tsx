import { type SubmitEvent, useState } from 'react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { site } from '@/lib/site'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    // Wire up Formspree, Netlify Forms, or EmailJS when you have a backend.
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      className="scroll-mt-20 mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <SectionHeading
        title="Contact us"
        subtitle="Request a free estimate or ask a question—we will get back to you soon."
        align="left"
      />

      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-6 text-stone-700">
          <div>
            <h3 className="font-semibold text-stone-900">Phone</h3>
            <a
              href={`tel:${site.phone.replace(/\D/g, '')}`}
              className="mt-1 block text-orange-700 hover:text-orange-800"
            >
              {site.phone}
            </a>
          </div>
          <div>
            <h3 className="font-semibold text-stone-900">Email</h3>
            <a
              href={`mailto:${site.email}`}
              className="mt-1 block text-orange-700 hover:text-orange-800"
            >
              {site.email}
            </a>
          </div>
          <div>
            <h3 className="font-semibold text-stone-900">Office</h3>
            <p className="mt-1">{site.address}</p>
          </div>
          <p className="text-sm text-stone-500">
            Prefer email?{' '}
            <a
              href={`mailto:${site.email}?subject=Project%20inquiry`}
              className="text-orange-700 underline hover:text-orange-800"
            >
              Send a message directly
            </a>
            .
          </p>
        </div>

        {submitted ? (
          <div
            className="rounded-xl border border-green-200 bg-green-50 p-8 text-green-900"
            role="status"
          >
            <p className="font-semibold">Thank you!</p>
            <p className="mt-2 text-green-800">
              Your message was captured locally. Connect a form service in{' '}
              <code className="rounded bg-green-100 px-1 text-sm">
                Contact.tsx
              </code>{' '}
              to receive submissions by email.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-xl border border-stone-200 bg-white p-6 shadow-sm"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-stone-700"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-stone-700"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-stone-700"
              >
                Project details
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
              />
            </div>
            <Button type="submit">Send message</Button>
          </form>
        )}
      </div>
    </section>
  )
}
