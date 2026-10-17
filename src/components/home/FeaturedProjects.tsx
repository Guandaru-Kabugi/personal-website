import { useFeaturedProjects } from '../../hooks/usePublicData'
import type { Project } from '../../types'
import { Card, CardGrid, TagList } from '../ui/Card'
import Section from '../ui/Section'
import Skeleton from '../ui/Skeleton'

export default function FeaturedProjects() {
  const { data: projects, isLoading, isError } = useFeaturedProjects()

  return (
    <Section id="projects" eyebrow="01 / work" title="Featured projects">
      {isError && <p className="text-muted">Couldn&apos;t load projects.</p>}

      <CardGrid>
        {isLoading
          ? [1, 2, 3].map((n) => <CardSkeleton key={n} />)
          : projects?.map((project) => <ProjectCard key={project.id} project={project} />)}
      </CardGrid>
    </Section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    // Will become <Link to={`/projects/${project.slug}`}> once the case study page exists.
    <Card hoverable>
      <h3 className="mb-2.5 text-lg">{project.title}</h3>
      <p className="mb-5 flex-1 text-muted">{project.summary}</p>
      <TagList tags={project.tags} />
    </Card>
  )
}

function CardSkeleton() {
  return (
    <Card aria-hidden="true">
      <Skeleton width="70%" height="1.4rem" style={{ marginBottom: '1rem' }} />
      <Skeleton style={{ marginBottom: '0.5rem' }} />
      <Skeleton style={{ marginBottom: '0.5rem' }} />
      <Skeleton width="60%" style={{ marginBottom: '1.5rem' }} />
      <Skeleton width="50%" height="1.5rem" radius="999px" />
    </Card>
  )
}
