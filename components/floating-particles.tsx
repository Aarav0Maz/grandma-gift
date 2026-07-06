'use client'

import { useEffect, useState } from 'react'
import { Flower2, Sparkles, Star, Leaf, Heart } from 'lucide-react'
import type { ChapterTheme } from '@/lib/memories'

type ParticleKind = 'petal' | 'sparkle' | 'star' | 'leaf' | 'heart'

const themeParticle: Record<ChapterTheme, { kind: ParticleKind; color: string }> = {
  sunset: { kind: 'sparkle', color: 'text-gold' },
  bloom: { kind: 'petal', color: 'text-rose' },
  wedding: { kind: 'petal', color: 'text-gold' },
  nurture: { kind: 'heart', color: 'text-rose' },
  colors: { kind: 'sparkle', color: 'text-primary' },
  travel: { kind: 'sparkle', color: 'text-gold' },
  kitchen: { kind: 'leaf', color: 'text-primary' },
  family: { kind: 'heart', color: 'text-rose' },
  city: { kind: 'sparkle', color: 'text-gold' },
  confetti: { kind: 'star', color: 'text-gold' },
  nature: { kind: 'leaf', color: 'text-primary' },
  lantern: { kind: 'star', color: 'text-gold' },
  elegance: { kind: 'petal', color: 'text-rose' },
  blossom: { kind: 'petal', color: 'text-rose' },
  garden: { kind: 'leaf', color: 'text-primary' },
  faith: { kind: 'sparkle', color: 'text-gold' },
  dream: { kind: 'star', color: 'text-gold' },
  legacy: { kind: 'heart', color: 'text-rose' },
}

function ParticleIcon({ kind, size }: { kind: ParticleKind; size: number }) {
  const props = { size, className: 'drop-shadow-sm' }
  switch (kind) {
    case 'petal':
      return <Flower2 {...props} />
    case 'sparkle':
      return <Sparkles {...props} />
    case 'star':
      return <Star {...props} />
    case 'leaf':
      return <Leaf {...props} />
    case 'heart':
      return <Heart {...props} />
  }
}

export function FloatingParticles({
  theme,
  count = 12,
  className = '',
}: {
  theme: ChapterTheme
  count?: number
  className?: string
}) {
  const config = themeParticle[theme]
  // Generate randomized particles only on the client after mount to avoid
  // a server/client hydration mismatch from Math.random().
  const [particles, setParticles] = useState<
    { id: number; left: number; delay: number; duration: number; size: number; opacity: number }[]
  >([])

  useEffect(() => {
    setParticles(
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 12,
        duration: 13 + Math.random() * 12,
        size: 12 + Math.round(Math.random() * 18),
        opacity: 0.3 + Math.random() * 0.4,
      })),
    )
  }, [count])

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className={`absolute bottom-[-40px] ${config.color}`}
          style={{
            left: `${p.left}%`,
            opacity: p.opacity,
            animation: `floatUp ${p.duration}s linear ${p.delay}s infinite`,
          }}
        >
          <ParticleIcon kind={config.kind} size={p.size} />
        </span>
      ))}
    </div>
  )
}
