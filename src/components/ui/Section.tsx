import type { ReactNode } from 'react'
import Container from './Container'

interface SectionProps {
  id: string
  title: string
  eyebrow?: string
  action?: ReactNode
  children: ReactNode
}

export default function Section({ id, eyebrow, title, action, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-16 py-20">
      <Container>
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            {eyebrow && <p className="mb-2 font-mono text-sm text-accent">{eyebrow}</p>}
            <h2 className="text-[clamp(1.6rem,3vw,2.1rem)]">{title}</h2>
          </div>
          {action}
        </div>
        {children}
      </Container>
    </section>
  )
}
