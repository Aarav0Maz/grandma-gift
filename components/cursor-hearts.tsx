'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart } from 'lucide-react'

type CursorHeart = {
  id: number
  x: number
  y: number
  size: number
  rotation: number
}

export function CursorHearts() {
  const [hearts, setHearts] = useState<CursorHeart[]>([])
  const heartId = useRef(0)
  const lastSpawn = useRef(0)

  useEffect(() => {
    const media = window.matchMedia('(pointer: fine)')
    if (!media.matches) return

    function handleMove(event: PointerEvent) {
      const now = performance.now()
      if (now - lastSpawn.current < 75) return
      lastSpawn.current = now

      const nextHeart: CursorHeart = {
        id: heartId.current++,
        x: event.clientX,
        y: event.clientY,
        size: 10 + Math.round(Math.random() * 8),
        rotation: -20 + Math.round(Math.random() * 40),
      }

      setHearts((prev) => [...prev.slice(-14), nextHeart])
    }

    window.addEventListener('pointermove', handleMove, { passive: true })
    return () => window.removeEventListener('pointermove', handleMove)
  }, [])

  function removeHeart(id: number) {
    setHearts((prev) => prev.filter((heart) => heart.id !== id))
  }

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.span
            key={heart.id}
            initial={{
              opacity: 0,
              x: heart.x - heart.size / 2,
              y: heart.y - heart.size / 2,
              scale: 0.7,
              rotate: heart.rotation,
            }}
            animate={{
              opacity: 0.72,
              x: heart.x - heart.size / 2 - 10,
              y: heart.y - heart.size / 2 - 16,
              scale: 1,
              rotate: heart.rotation + 10,
            }}
            exit={{
              opacity: 0,
              x: heart.x - heart.size / 2 - 24,
              y: heart.y - heart.size / 2 - 38,
              scale: 0.9,
              rotate: heart.rotation + 18,
            }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            onAnimationComplete={() => removeHeart(heart.id)}
            className="absolute text-rose drop-shadow-[0_4px_10px_rgba(183,42,72,0.35)]"
          >
            <Heart
              size={heart.size}
              fill="currentColor"
              strokeWidth={1.8}
              className="text-rose/85"
            />
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  )
}
