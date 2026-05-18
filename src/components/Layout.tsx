import { useState, type ReactNode } from 'react'
import { site } from '@/lib/site'

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
] as const

export function Layout({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="flex min-h-svh flex-col">
      <header className="border-b border-stone-200 bg-white shadow-sm">
        <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <a
            href="#home"
            className="text-lg font-bold text-stone-900 sm:text-xl"
            onClick={() => setMenuOpen(false)}
          >
            {site.name}
          </a>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-stone-700 hover:bg-stone-100 md:hidden"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          <nav
            className={`${
              menuOpen ? 'flex' : 'hidden'
            } absolute left-0 right-0 top-[4.25rem] z-10 flex-col gap-1 border-b border-stone-200 bg-white px-4 py-4 shadow-md md:static md:flex md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
          >
            {navItems.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="rounded-md px-3 py-2 text-sm font-medium text-stone-700 transition-colors hover:bg-stone-100 hover:text-stone-900"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-stone-200 bg-stone-900 text-stone-300">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-semibold text-white">{site.name}</p>
              <p className="mt-1 text-sm">{site.tagline}</p>
            </div>
            <div className="text-sm">
              <p>
                <a
                  href={`tel:${site.phone.replace(/\D/g, '')}`}
                  className="hover:text-white"
                >
                  {site.phone}
                </a>
              </p>
              <p className="mt-1">
                <a href={`mailto:${site.email}`} className="hover:text-white">
                  {site.email}
                </a>
              </p>
            </div>
          </div>
          <p className="mt-8 border-t border-stone-700 pt-6 text-center text-xs text-stone-500">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
