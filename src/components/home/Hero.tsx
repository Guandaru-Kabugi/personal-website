import { useProfile } from '../../hooks/usePublicData'
import { buttonClass } from '../ui/button'
import Container from '../ui/Container'
import Skeleton from '../ui/Skeleton'

export default function Hero() {
  const { data: profile, isLoading } = useProfile()

  return (
    <section className="border-b border-line bg-radial-[ellipse_60%_50%_at_80%_0%] from-accent/15 to-transparent pt-[clamp(5rem,14vh,9rem)] pb-16">
      <Container>
        {isLoading ? (
          <HeroSkeleton />
        ) : !profile ? (
          <p className="text-muted">Couldn&apos;t load profile.</p>
        ) : (
          <>
            <p className="mb-3 font-mono text-accent">Hi, I&apos;m</p>
            <h1 className="mb-4 text-[clamp(2.5rem,7vw,4.25rem)] leading-none tracking-tighter">{profile.name}</h1>
            <p className="mb-6 font-medium text-muted">
              {profile.role} · {profile.location}
            </p>
            <p className="mb-9 max-w-[36ch] text-[clamp(1.1rem,2vw,1.3rem)]">{profile.pitch}</p>
            <div className="flex flex-wrap gap-3">
              <a className={buttonClass('primary')} href="#contact">
                Get in touch
              </a>
              <a className={buttonClass('ghost')} href={profile.cvUrl} download>
                Download CV
              </a>
            </div>
          </>
        )}
      </Container>
    </section>
  )
}

function HeroSkeleton() {
  return (
    <div aria-busy="true" aria-label="Loading">
      <Skeleton width="90px" style={{ marginBottom: '1rem' }} />
      <Skeleton width="min(480px, 100%)" height="3.5rem" style={{ marginBottom: '1rem' }} />
      <Skeleton width="260px" style={{ marginBottom: '1.5rem' }} />
      <Skeleton width="min(560px, 100%)" height="1.2rem" style={{ marginBottom: '0.5rem' }} />
      <Skeleton width="min(400px, 80%)" height="1.2rem" style={{ marginBottom: '2rem' }} />
      <Skeleton width="300px" height="2.75rem" radius="10px" />
    </div>
  )
}
