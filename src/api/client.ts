import * as seed from '../data/seed'
import type { ContactMessage, PostSummary, Profile, Project, SkillGroup } from '../types'

// Mock API. Each function returns a Promise, just like a real fetch would,
// with a short delay so you can see the loading skeletons.
//
// When the Spring Boot API is ready, replace each body with a real request, e.g.
//   export const getProfile = () => request<Profile>('/api/public/profile')

const DELAY_MS = 600

const respond = <T>(data: T): Promise<T> =>
  new Promise((resolve) => setTimeout(() => resolve(data), DELAY_MS))

export async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const res = await fetch(path, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  })
  if (!res.ok) throw new Error(`Request failed: ${res.status}`)
  return (res.status === 204 ? null : await res.json()) as T
}

export const getProfile = (): Promise<Profile> => respond(seed.profile)

export const getFeaturedProjects = (): Promise<Project[]> =>
  respond(seed.projects.filter((p) => p.featured))

export const getSkills = (): Promise<SkillGroup[]> => respond(seed.skills)

export const getLatestPosts = (limit = 3): Promise<PostSummary[]> => respond(seed.posts.slice(0, limit))

export const sendContactMessage = (message: ContactMessage): Promise<{ ok: boolean }> => {
  console.info('Contact message (mock):', message)
  return respond({ ok: true })
}
