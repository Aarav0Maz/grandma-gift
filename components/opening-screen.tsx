'use client'

import { motion } from 'framer-motion'
import { BookHeart, Sparkles } from 'lucide-react'
import { FloatingParticles } from '@/components/floating-particles'
import { useStory } from '@/components/story-provider'

export function OpeningScreen({ onOpen }: { onOpen: () => void }) {
  const { language } = useStory()
  const isBengali = language === 'bn'

  return (
    <motion.section
      className="paper-grain relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 text-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8 }}
    >
      <div className="romance-bg" />
      <FloatingParticles theme="bloom" count={16} />
      <FloatingParticles theme="legacy" count={10} />
      <FloatingParticles theme="sunset" count={8} />

      <motion.p
        className="bn-center bn-ui relative z-10 max-w-3xl font-hand text-2xl text-primary sm:text-3xl"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        {isBengali ? 'আমার সবচেয়ে মিষ্টি স্মৃতিগুলো সবসময় তোমাকে দিয়েই শুরু হয়, মা...' : 'My sweetest memories always begin with you, Maa...'}
      </motion.p>

      <motion.div
        className="relative z-10 my-10 flex w-full justify-center"
        initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 0.5, duration: 1, type: 'spring', bounce: 0.35 }}
      >
        <div className="flex w-fit flex-col items-center">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
            className="love-frame relative size-44 shrink-0 rounded-[2rem] border-4 border-gold/70 bg-gradient-to-br from-white via-secondary to-rose/15 shadow-[0_24px_60px_-18px_rgba(138,24,43,0.45)] sm:size-52"
          >
            <div className="absolute inset-2 rounded-xl border border-dashed border-gold/50" />
            <div className="absolute inset-0 grid place-items-center">
              <BookHeart className="size-20 text-primary sm:size-24" strokeWidth={1.3} />
            </div>
            <Sparkles className="absolute -right-2 -top-2 size-6 text-gold sm:size-7" />
            <Sparkles className="absolute -bottom-2 -left-2 size-6 text-rose sm:size-7" />
          </motion.div>
          <p className="bn-center bn-ui mt-4 max-w-sm text-center font-hand text-xl text-muted-foreground">
            {isBengali ? 'আমার মায়ের জন্য ছোট্ট এক ভালোবাসার চিঠি' : 'A little love letter to my Maa'}
          </p>
        </div>
      </motion.div>

      <motion.h1
        className={`bn-center bn-heading relative z-10 font-semibold text-foreground ${
          isBengali
            ? 'max-w-2xl text-3xl leading-[1.45] sm:text-5xl'
            : 'max-w-3xl text-balance text-4xl leading-tight sm:text-6xl'
        }`}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        {isBengali ? (
          <>
            <span className="block">মা, এটা তোমাকে নিয়ে</span>
            <span className="mt-2 block">আমার হৃদয়ের কথা</span>
          </>
        ) : (
          'Maa, this is my heart speaking about you'
        )}
      </motion.h1>
      <motion.p
        className={`bn-center bn-copy relative z-10 mt-3 text-muted-foreground ${
          isBengali ? 'max-w-xl text-base sm:text-lg' : 'max-w-2xl text-pretty text-lg sm:text-xl'
        }`}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        {isBengali
          ? 'এখানকার প্রতিটি ছবি আমাকে মনে করিয়ে দেয়, তোমার ভালোবাসা, উষ্ণতা, দোয়া আর সুন্দর হৃদয় আমার জীবনে আছে বলে আমি কতটা ভাগ্যবান।'
          : 'Every photo here reminds me how lucky I am to have your love, your warmth, your prayers, and your beautiful heart in my life.'}
      </motion.p>

      <motion.button
        type="button"
        onClick={onOpen}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className={`bn-ui relative z-10 mt-10 inline-flex min-h-14 items-center justify-center rounded-full bg-primary text-center font-medium text-primary-foreground shadow-[0_14px_35px_-12px_rgba(157,23,50,0.8)] transition hover:shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-gold/50 ${
          isBengali ? 'max-w-[22rem] px-7 py-4 text-base sm:text-lg' : 'px-9 py-4 text-lg'
        }`}
      >
        {isBengali ? 'মায়ের জন্য আমার বার্তা খুলুন' : 'Open My Message For Maa'}
      </motion.button>

      <motion.p
        className="bn-center bn-ui relative z-10 mt-5 max-w-2xl text-sm text-muted-foreground/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
      >
        {isBengali ? 'সাউন্ড চালু রেখে, ভাসমান ফুল আর অনেক ভালোবাসা নিয়ে দেখলে সবচেয়ে সুন্দর লাগবে' : 'Best enjoyed with sound on, flowers floating, and lots of love'}
      </motion.p>
    </motion.section>
  )
}
