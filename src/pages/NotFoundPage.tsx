import { Link } from 'react-router-dom'
import { buttonClass } from '../components/ui/button'
import Container from '../components/ui/Container'

export default function NotFoundPage() {
  return (
    <Container className="py-32 text-center">
      <h1 className="mb-2 text-4xl">Page not found</h1>
      <p className="mb-8 text-muted">That page doesn&apos;t exist yet.</p>
      <Link className={buttonClass('primary')} to="/">
        Back home
      </Link>
    </Container>
  )
}
