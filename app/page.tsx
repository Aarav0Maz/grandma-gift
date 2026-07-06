'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { StoryProvider, useStory } from '@/components/story-provider'
import { CherryBlossomDrift } from '@/components/cherry-blossom-drift'
import { CursorHearts } from '@/components/cursor-hearts'
import { OpeningScreen } from '@/components/opening-screen'
import { MemoryChapter } from '@/components/memory-chapter'
import { FinalScreen } from '@/components/final-screen'
import { MusicPlayer } from '@/components/music-player'
import { memories } from '@/lib/memories'

function HeartTracker() {
  const { heartCount, totalHearts } = useStory()
  return (
    <div
      className="fixed left-5 top-5 z-50 flex items-center gap-2 rounded-full border border-rose/40 bg-card/90 px-4 py-2 text-sm font-medium text-foreground shadow-lg backdrop-blur"
      aria-live="polite"
    >
      <Heart size={16} className="text-rose" fill="currentColor" />
      <span className="tabular-nums">
        {heartCount}
        <span className="text-muted-foreground">/{totalHearts}</span>
      </span>
    </div>
  )
}

function LanguageToggle() {
  const { language, toggleLanguage } = useStory()

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className="fixed right-5 top-5 z-50 inline-flex min-w-[118px] items-center justify-center gap-2 rounded-full border border-rose/40 bg-card/90 px-4 py-2 text-center text-sm font-medium text-foreground shadow-lg backdrop-blur transition hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-rose"
      aria-pressed={language === 'bn'}
      aria-label={language === 'en' ? 'Switch to Bengali' : 'Switch to English'}
    >
      <span className="text-primary">{language === 'en' ? 'EN' : 'বাং'}</span>
      <span className="bn-ui text-muted-foreground">{language === 'en' ? 'বাংলা' : 'English'}</span>
    </button>
  )
}

function Story() {
  const [opened, setOpened] = useState(false)
  const { startMusic, language } = useStory()

  function handleOpen() {
    startMusic()
    setOpened(true)
    // Scroll to the top of the story once revealed.
    requestAnimationFrame(() => window.scrollTo({ top: 0 }))
  }

  return (
    <>
      <LanguageToggle />
      <MusicPlayer visible={opened} />

      <AnimatePresence mode="wait">
        {!opened ? (
          <div key="opening-wrapper" lang={language}>
            <OpeningScreen key="opening" onOpen={handleOpen} />
          </div>
        ) : (
          <motion.div
            key="story"
            lang={language}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <HeartTracker />
            {memories.map((memory, index) => (
              <MemoryChapter key={memory.id} memory={memory} index={index} />
            ))}
            <FinalScreen />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default function Page() {
  return (
    <StoryProvider>
      <main className="relative overflow-hidden">
        <div className="romance-bg" />
        <CherryBlossomDrift />
        <CursorHearts />
        <Story />
      </main>
    </StoryProvider>
  )
}
