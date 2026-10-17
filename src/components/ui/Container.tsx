import type { ReactNode } from 'react'

// Centred page-width wrapper with a 16px gutter on small screens.
export default function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 ${className}`}>{children}</div>
}
