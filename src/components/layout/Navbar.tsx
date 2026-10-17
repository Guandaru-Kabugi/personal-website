import { useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '../ui/Container'

const links = [
  { href: '/#projects', label: 'Projects' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#blog', label: 'Blog' },
  { href: '/#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-10 border-b border-line bg-background/85 backdrop-blur-md">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Link to="/" className="font-mono text-lg font-semibold text-foreground" onClick={() => setOpen(false)}>
            alex<span className="text-accent">.</span>
          </Link>

          <button
            className="flex cursor-pointer flex-col gap-1.5 p-2 sm:hidden"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="block h-0.5 w-5.5 bg-foreground" />
            <span className="block h-0.5 w-5.5 bg-foreground" />
          </button>

          {/* Mobile: dropdown under the bar, shown when open. Desktop (sm+): inline row. */}
          <ul
            className={`${open ? 'flex' : 'hidden'} absolute inset-x-0 top-16 flex-col border-b border-line bg-background px-4 pt-2 pb-4 sm:static sm:flex sm:flex-row sm:gap-8 sm:border-0 sm:bg-transparent sm:p-0`}
          >
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-[0.95rem] font-medium text-muted hover:text-foreground sm:py-0"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  )
}
