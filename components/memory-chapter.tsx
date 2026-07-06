'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Heart } from 'lucide-react'
import type { Memory } from '@/lib/memories'
import { FloatingParticles } from '@/components/floating-particles'
import { useStory } from '@/components/story-provider'
import { burstColors, burstConfetti } from '@/lib/confetti'

export function MemoryChapter({ memory, index }: { memory: Memory; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-15% 0px -15% 0px' })
  const { collected, collectHeart, language } = useStory()
  const [showReveal, setShowReveal] = useState(false)
  const isCollected = collected.includes(memory.id)
  const flip = index % 2 === 1
  const tilt = flip ? 2.2 : -2.2
  const memoryTitle = memory.title[language]
  const memoryCaption = memory.caption[language]
  const memorySubline = memory.subline[language]
  const memoryReveal = memory.reveal?.[language]

  function handleHeart() {
    collectHeart(memory.id)
    setShowReveal(true)
    if (memory.theme === 'colors') burstColors()
    else if (memory.theme === 'confetti' || memory.theme === 'legacy') burstConfetti()
  }

  return (
    <section
      ref={ref}
      aria-labelledby={`chapter-${memory.id}-title`}
      className="relative flex min-h-[100svh] items-center overflow-hidden px-5 py-20 sm:px-8"
    >
      <div className="romance-bg" />
      <FloatingParticles theme={memory.theme} count={12} />
      <FloatingParticles theme="legacy" count={6} className="opacity-60" />

      <div
        className={`mx-auto grid w-full max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-16 ${
          flip ? 'md:[&>*:first-child]:order-2' : ''
        }`}
      >
        {/* Text column */}
        <motion.div
          initial={{ opacity: 0, x: flip ? 40 : -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="relative z-10"
        >
          <span className="font-hand text-2xl text-gold drop-shadow-[0_2px_10px_rgba(255,255,255,0.65)]">
            {language === 'bn' ? `স্মৃতি ${String(memory.id).padStart(2, '0')}` : `Memory ${String(memory.id).padStart(2, '0')}`}
          </span>
          <h2
            id={`chapter-${memory.id}-title`}
            className="bn-heading mt-1 text-3xl font-semibold text-primary sm:text-4xl"
          >
            {memoryTitle}
          </h2>
          <p className="bn-copy mt-5 text-pretty text-2xl leading-relaxed text-foreground sm:text-3xl">
            {memoryCaption}
          </p>
          <p className="bn-copy mt-4 text-pretty text-lg italic leading-relaxed text-muted-foreground">
            {memorySubline}
          </p>

          <AnimatePresence>
            {showReveal && memoryReveal && (
              <motion.p
                initial={{ opacity: 0, y: 10, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0 }}
                className="bn-chip bn-ui love-frame mt-6 rounded-2xl border border-gold/50 bg-card px-5 py-3 font-hand text-2xl text-primary shadow-sm"
              >
                {memoryReveal}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Photo column */}
        <motion.div
          initial={{ opacity: 0, y: 60, rotate: tilt * 2, scale: 0.9 }}
          animate={inView ? { opacity: 1, y: 0, rotate: tilt, scale: 1 } : {}}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.15 }}
          className="relative z-10 mx-auto w-full max-w-sm"
        >
          <motion.div
            whileHover={{ rotate: 0, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 200, damping: 18 }}
            className="love-frame relative rounded-[1.5rem] bg-card p-3 pb-16 shadow-[0_25px_60px_-20px_rgba(111,20,35,0.45)] ring-1 ring-black/5"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1rem] bg-secondary">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={memory.image || '/placeholder.svg'}
                alt={memory.alt}
                loading="lazy"
                className="h-full w-full object-cover"
                style={{ objectPosition: 'center 30%' }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/10 mix-blend-overlay" />
            </div>
            <p className="bn-center bn-ui absolute bottom-4 left-0 right-0 px-4 text-center font-hand text-2xl text-foreground/80">
              {memoryTitle}
            </p>

            {/* Hidden collectible heart */}
            <button
              type="button"
              onClick={handleHeart}
              aria-label={
                isCollected
                  ? language === 'bn'
                    ? `${memoryTitle} এর জন্য হার্ট সংগ্রহ করা হয়েছে`
                    : `Heart collected for ${memoryTitle}`
                  : language === 'bn'
                    ? `${memoryTitle} এর লুকানো হার্টটি সংগ্রহ করুন`
                    : `Collect the hidden heart in ${memoryTitle}`
              }
              aria-pressed={isCollected}
              className="absolute -right-3 -top-3 flex size-11 items-center justify-center rounded-full border border-rose/40 bg-card shadow-md transition hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose"
            >
              <Heart
                size={22}
                className={isCollected ? 'text-rose' : 'text-rose/50'}
                fill={isCollected ? 'currentColor' : 'none'}
              />
              {!isCollected && (
                <span className="absolute inset-0 animate-ping rounded-full border border-rose/40" />
              )}
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
