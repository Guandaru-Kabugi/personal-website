import type { HTMLAttributes, ReactNode } from 'react'

interface CardProps extends HTMLAttributes<HTMLElement> {
  hoverable?: boolean
}

export function Card({ children, hoverable = false, ...props }: CardProps) {
  return (
    <article
      className={`flex flex-col rounded-2xl border border-line bg-surface p-6 transition ${
        hoverable ? 'hover:-translate-y-0.5 hover:border-accent' : ''
      }`}
      {...props}
    >
      {children}
    </article>
  )
}

export function TagList({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {tags.map((tag) => (
        <li key={tag} className="rounded-full bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent-fg">
          {tag}
        </li>
      ))}
    </ul>
  )
}

export function CardGrid({ children }: { children: ReactNode }) {
  return <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-5">{children}</div>
}
