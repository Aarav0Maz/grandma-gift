'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, Sparkles } from 'lucide-react'
import { memories } from '@/lib/memories'
import { FloatingParticles } from '@/components/floating-particles'
import { useStory } from '@/components/story-provider'
import { burstConfetti, celebrationShower } from '@/lib/confetti'

const collage = memories.slice(0, 12)

export function FinalScreen() {
  const { heartCount, totalHearts, language } = useStory()
  const [wished, setWished] = useState(false)
  const isBengali = language === 'bn'

  function makeWish() {
    if (wished) return
    setWished(true)
    burstConfetti()
    celebrationShower()
  }

  return (
    <section
      aria-labelledby="finale-title"
      className="paper-grain relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 py-24 text-center sm:px-8"
    >
      <div className="romance-bg" />
      <FloatingParticles theme="legacy" count={16} />
      <FloatingParticles theme="confetti" count={10} />
      <FloatingParticles theme="bloom" count={8} />

      {/* Collage */}
      <div className="mx-auto mb-12 grid w-full max-w-4xl grid-cols-3 gap-2 sm:grid-cols-4 sm:gap-3">
        {collage.map((m, i) => (
          <motion.div
            key={m.id}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className={`love-frame overflow-hidden rounded-xl bg-card p-1 shadow-md ring-1 ring-black/5 ${
              i % 5 === 0 ? 'rotate-2' : i % 3 === 0 ? '-rotate-2' : ''
            }`}
          >
            <div className="aspect-square overflow-hidden rounded-lg bg-secondary">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={m.image || '/placeholder.svg'}
                alt={m.alt}
                loading="lazy"
                className="h-full w-full object-cover"
                style={{ objectPosition: 'center 30%' }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bn-center bn-ui max-w-3xl font-hand text-3xl text-primary sm:text-4xl"
      >
        {isBengali ? 'তোমার জন্য আমার ভালোবাসা শুধু বেড়েই চলে...' : 'My love for you only keeps growing...'}
      </motion.p>

      <motion.h2
        id="finale-title"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.1 }}
        className="bn-center bn-heading mt-2 max-w-3xl text-balance text-4xl font-semibold leading-tight text-foreground sm:text-6xl"
      >
        {isBengali ? 'শুভ জন্মদিন, মা' : 'Happy Birthday, Maa'}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="bn-center bn-copy mt-4 max-w-2xl text-pretty text-xl leading-relaxed text-muted-foreground sm:text-2xl"
      >
        {isBengali
          ? 'আমি শুধু চাই তুমি জানো, যখন আমি ভালোবাসা, স্বস্তি আর ঘরের কথা ভাবি, তখন তোমার কথাই মনে পড়ে। তুমি আমাদের সবার জীবনকে আরও কোমল, উজ্জ্বল আর সুন্দর করে দাও।'
          : 'I just want you to know that when I think of love, comfort, and home, I think of you. You make life softer, brighter, and more beautiful for all of us.'}
      </motion.p>

      {/* Cake */}
      <Cake lit={!wished} onBlow={makeWish} language={language} />

      <motion.p
        key={wished ? 'wished' : 'wish'}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="bn-center bn-ui mt-6 max-w-2xl font-hand text-2xl text-primary sm:text-3xl"
      >
        {wished
          ? isBengali
            ? 'মা, আমি তোমাকে খুব খুব ভালোবাসি।'
            : 'Maa, I love you so much.'
          : isBengali
            ? 'কেকটিতে ট্যাপ করে মাকে ভালোবাসায় ভরা জন্মদিনের শুভেচ্ছা পাঠাও'
            : 'Tap the cake and send Maa a loving birthday wish'}
      </motion.p>

      {/* Hearts summary */}
      <div className="bn-chip bn-ui mt-8 gap-2 rounded-full border border-rose/40 bg-card px-5 py-2 text-sm text-muted-foreground shadow-sm">
        <Heart size={16} className="text-rose" fill="currentColor" />
        <span>
          {isBengali
            ? `${heartCount} / ${totalHearts} টি লুকানো হার্ট সংগ্রহ করা হয়েছে`
            : `${heartCount} of ${totalHearts} hidden hearts collected`}
        </span>
      </div>

      <div className="bn-ui mt-10 flex items-center gap-2 text-muted-foreground/70">
        <Sparkles size={16} className="text-gold" />
        <span className="text-sm">{isBengali ? 'আমার সব ভালোবাসা, সবসময়' : 'With all my love, always'}</span>
        <Sparkles size={16} className="text-gold" />
      </div>
    </section>
  )
}

function Cake({
  lit,
  onBlow,
  language,
}: {
  lit: boolean
  onBlow: () => void
  language: 'en' | 'bn'
}) {
  return (
    <motion.button
      type="button"
      onClick={onBlow}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      aria-label={
        lit
          ? language === 'bn'
            ? 'মোমবাতি নিভিয়ে একটি ইচ্ছা জানাও'
            : 'Blow out the candles and make a wish'
          : language === 'bn'
            ? 'ইচ্ছা জানানো হয়েছে'
            : 'Wish made'
      }
      className="group relative mt-12 flex flex-col items-center rounded-3xl px-8 py-4 focus:outline-none focus-visible:ring-4 focus-visible:ring-gold/50"
    >
      {/* Candles */}
      <div className="relative z-10 mb-1 flex items-end gap-4">
        {[0, 1, 2].map((c) => (
          <div key={c} className="flex flex-col items-center">
            {lit ? (
              <span
                className="mb-1 block h-4 w-3 rounded-full bg-gradient-to-t from-gold to-rose"
                style={{
                  animation: `flicker ${1.1 + c * 0.2}s ease-in-out infinite`,
                  filter: 'drop-shadow(0 0 6px rgba(226,163,58,0.9))',
                }}
              />
            ) : (
              <span className="mb-1 block h-2 w-3 opacity-0" />
            )}
            <span className="h-8 w-1.5 rounded-full bg-gradient-to-b from-rose to-teal" />
          </div>
        ))}
      </div>

      {/* Cake body */}
      <div className="relative z-10 w-56 overflow-hidden rounded-t-md">
        <div className="h-6 rounded-t-md bg-gradient-to-r from-rose via-gold to-rose" />
      </div>
      <div className="relative z-10 -mt-1 flex h-20 w-56 items-center justify-center rounded-b-lg bg-gradient-to-b from-secondary to-[oklch(0.88_0.07_45)] shadow-inner ring-1 ring-black/5">
        <div className="flex gap-3">
          {[0, 1, 2, 3, 4].map((d) => (
            <span key={d} className="size-2 rounded-full bg-primary/70" />
          ))}
        </div>
      </div>
      <div className="relative z-10 h-3 w-64 rounded-b-md bg-[oklch(0.8_0.06_60)] shadow-md" />
    </motion.button>
  )
}
