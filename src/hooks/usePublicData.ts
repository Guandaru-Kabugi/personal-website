import { useMutation, useQuery } from '@tanstack/react-query'
import * as api from '../api/client'

// One hook per resource. Components never call the API directly,
// which keeps loading/error/caching logic in one place.

export const useProfile = () => useQuery({ queryKey: ['profile'], queryFn: api.getProfile })

export const useFeaturedProjects = () =>
  useQuery({ queryKey: ['projects', 'featured'], queryFn: api.getFeaturedProjects })

export const useSkills = () => useQuery({ queryKey: ['skills'], queryFn: api.getSkills })

export const useLatestPosts = (limit = 3) =>
  useQuery({ queryKey: ['posts', 'latest', limit], queryFn: () => api.getLatestPosts(limit) })

export const useSendContactMessage = () => useMutation({ mutationFn: api.sendContactMessage })
