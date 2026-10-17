import Hero from '../components/home/Hero'
import FeaturedProjects from '../components/home/FeaturedProjects'
import Skills from '../components/home/Skills'
import LatestPosts from '../components/home/LatestPosts'
import ContactForm from '../components/home/ContactForm'

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Skills />
      <LatestPosts />
      <ContactForm />
    </>
  )
}
