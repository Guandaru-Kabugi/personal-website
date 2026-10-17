import { useSkills } from '../../hooks/usePublicData'
import Section from '../ui/Section'
import Skeleton from '../ui/Skeleton'

export default function Skills() {
  const { data: skills, isLoading } = useSkills()

  return (
    <Section id="skills" eyebrow="02 / stack" title="Skills & stack">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-x-6 gap-y-8">
        {isLoading
          ? [1, 2, 3, 4].map((n) => (
              <div key={n} className="border-t-2 border-accent pt-4">
                <Skeleton width="40%" style={{ marginBottom: '1rem' }} />
                <Skeleton height="5rem" />
              </div>
            ))
          : skills?.map((group) => (
              <div key={group.group} className="border-t-2 border-accent pt-4">
                <h3 className="mb-3.5 font-mono text-sm font-medium tracking-wider text-muted uppercase">
                  {group.group}
                </h3>
                <ul className="grid gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="font-medium">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
      </div>
    </Section>
  )
}
