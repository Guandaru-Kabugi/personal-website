// Shapes of the data returned by /api/public/**.
// Keep these in sync with the Spring Boot DTOs.

export interface SocialLink {
  label: string
  url: string
}

export interface Profile {
  name: string
  role: string
  pitch: string
  location: string
  email: string
  cvUrl: string
  socials: SocialLink[]
}

export interface Project {
  id: number
  slug: string
  title: string
  summary: string
  tags: string[]
  featured: boolean
  repoUrl: string | null
  liveUrl: string | null
}

export interface SkillGroup {
  group: string
  items: string[]
}

export interface PostSummary {
  id: number
  slug: string
  title: string
  excerpt: string
  publishedAt: string // ISO date, e.g. "2026-10-12"
  readingMinutes: number
  tags: string[]
}

export interface ContactMessage {
  name: string
  email: string
  message: string
}
