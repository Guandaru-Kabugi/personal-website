import type { CSSProperties } from 'react'

interface SkeletonProps {
  width?: string
  height?: string
  radius?: string
  style?: CSSProperties
}

// A grey pulsing block shown while data loads.
export default function Skeleton({ width = '100%', height = '1rem', radius = '6px', style }: SkeletonProps) {
  return (
    <span
      className="block bg-skeleton motion-safe:animate-pulse"
      style={{ width, height, borderRadius: radius, ...style }}
    />
  )
}
