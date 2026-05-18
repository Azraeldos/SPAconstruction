import { Link } from 'react-router-dom'
import { ButtonLink } from '@/components/ui/Button'

export function NotFound() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 text-center sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-wider text-orange-600">
        404
      </p>
      <h1 className="mt-4 text-3xl font-bold text-stone-900 sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-4 text-stone-600">
        The page you are looking for does not exist or has been moved.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <ButtonLink to="/">Back to home</ButtonLink>
        <Link
          to="/contact"
          className="inline-flex items-center rounded-lg px-5 py-2.5 text-sm font-semibold text-stone-700 hover:text-stone-900"
        >
          Contact us
        </Link>
      </div>
    </section>
  )
}
