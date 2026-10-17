import type { PostSummary, Profile, Project, SkillGroup } from '../types'

// Skeleton content for the landing page.
// The shapes here mirror what the Spring Boot API will return from /api/public/**,
// so when the backend is ready only src/api/client.ts needs to change.

export const profile: Profile = {
  name: 'Alex Guandaru',
  role: 'Full Stack Developer',
  pitch: 'I build fast, reliable web apps with React and Spring Boot, and I host them myself.',
  location: 'Nairobi, Kenya',
  email: 'hello@alexguandaru.com',
  cvUrl: '/cv.pdf',
  socials: [
    { label: 'GitHub', url: 'https://github.com/' },
    { label: 'LinkedIn', url: 'https://linkedin.com/' },
  ],
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'personal-website',
    title: 'Personal Website & CMS',
    summary:
      'This site: a React frontend, an admin dashboard with a TipTap editor, and a Spring Boot API on a self-hosted VPS.',
    tags: ['React', 'Spring Boot', 'PostgreSQL', 'Docker'],
    featured: true,
    repoUrl: null,
    liveUrl: null,
  },
  {
    id: 2,
    slug: 'mpesa-payments',
    title: 'M-Pesa Payments Integration',
    summary: 'A checkout flow using the Daraja API with STK push, callbacks and a transaction ledger.',
    tags: ['Java', 'Spring Boot', 'REST'],
    featured: true,
    repoUrl: null,
    liveUrl: null,
  },
  {
    id: 3,
    slug: 'task-tracker',
    title: 'Team Task Tracker',
    summary: 'Kanban boards with drag and drop, real-time updates and role-based access.',
    tags: ['React', 'TanStack Query', 'WebSockets'],
    featured: true,
    repoUrl: null,
    liveUrl: null,
  },
]

export const skills: SkillGroup[] = [
  { group: 'Frontend', items: ['React', 'JavaScript', 'HTML & CSS', 'React Router', 'TanStack Query'] },
  { group: 'Backend', items: ['Java', 'Spring Boot', 'Spring Security', 'JPA / Hibernate', 'REST APIs'] },
  { group: 'Data', items: ['PostgreSQL', 'Flyway', 'SQL'] },
  { group: 'DevOps', items: ['Docker', 'Nginx', 'Linux VPS', 'Git', 'CI/CD'] },
]

export const posts: PostSummary[] = [
  {
    id: 1,
    slug: 'self-hosting-on-a-vps',
    title: 'Self-hosting a full stack app on a VPS',
    excerpt: 'Docker Compose, Nginx and free SSL: what it took to get from localhost to a real domain.',
    publishedAt: '2026-10-12',
    readingMinutes: 7,
    tags: ['DevOps'],
  },
  {
    id: 2,
    slug: 'jwt-auth-spring-boot',
    title: 'JWT authentication in Spring Boot 3',
    excerpt: 'A minimal, understandable setup for protecting admin endpoints with Spring Security.',
    publishedAt: '2026-10-05',
    readingMinutes: 9,
    tags: ['Spring Boot', 'Security'],
  },
  {
    id: 3,
    slug: 'react-query-basics',
    title: 'Why I fetch data with TanStack Query',
    excerpt: 'Caching, loading states and refetching without writing the same useEffect over and over.',
    publishedAt: '2026-09-28',
    readingMinutes: 5,
    tags: ['React'],
  },
]
