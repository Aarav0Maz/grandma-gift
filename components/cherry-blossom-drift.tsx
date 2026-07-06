'use client'

import { useEffect, useState } from 'react'
import type { CSSProperties } from 'react'

type Blossom = {
  id: number
  delay: number
  duration: number
  size: number
  startX: number
  sway: number
  rotate: number
  opacity: number
}

export function CherryBlossomDrift({ count = 14 }: { count?: number }) {
  const [blossoms, setBlossoms] = useState<Blossom[]>([])

  useEffect(() => {
    setBlossoms(
      Array.from({ length: count }).map((_, index) => ({
        id: index,
        delay: Math.random() * 18,
        duration: 14 + Math.random() * 10,
        size: 10 + Math.round(Math.random() * 12),
        startX: 72 + Math.random() * 28,
        sway: 40 + Math.round(Math.random() * 70),
        rotate: -30 + Math.round(Math.random() * 60),
        opacity: 0.32 + Math.random() * 0.38,
      })),
    )
  }, [count])

  return (
    <div aria-hidden="true" className="blossom-drift">
      {blossoms.map((blossom) => (
        <span
          key={blossom.id}
          className="blossom-petal"
          style={
            {
              '--blossom-delay': `${blossom.delay}s`,
              '--blossom-duration': `${blossom.duration}s`,
              '--blossom-size': `${blossom.size}px`,
              '--blossom-start-x': `${blossom.startX}%`,
              '--blossom-sway': `${blossom.sway}px`,
              '--blossom-rotate': `${blossom.rotate}deg`,
              '--blossom-opacity': blossom.opacity,
            } as CSSProperties
          }
        />
      ))}
    </div>
  )
}
