import { useProfile } from '../../hooks/usePublicData'
import Container from '../ui/Container'

const year = new Date().getFullYear()

export default function Footer() {
  const { data: profile } = useProfile()

  return (
    <footer className="border-t border-line py-8">
      <Container className="flex flex-wrap justify-between gap-4 text-muted">
        <span>
          © {year} {profile?.name ?? ''}
        </span>
        <span className="flex gap-5">
          {profile?.socials.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noreferrer">
              {s.label}
            </a>
          ))}
        </span>
      </Container>
    </footer>
  )
}
