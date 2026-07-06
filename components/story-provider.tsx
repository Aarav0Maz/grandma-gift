'use client'

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { totalHearts } from '@/lib/memories'

export type StoryLanguage = 'en' | 'bn'

type StoryContextValue = {
  collected: number[]
  collectHeart: (id: number) => void
  heartCount: number
  totalHearts: number
  allHeartsFound: boolean
  musicPlaying: boolean
  musicAvailable: boolean
  toggleMusic: () => void
  startMusic: () => void
  registerAudio: (el: HTMLAudioElement | null) => void
  language: StoryLanguage
  toggleLanguage: () => void
}

const StoryContext = createContext<StoryContextValue | null>(null)

export function StoryProvider({ children }: { children: ReactNode }) {
  const [collected, setCollected] = useState<number[]>([])
  const [musicPlaying, setMusicPlaying] = useState(false)
  const [musicAvailable, setMusicAvailable] = useState(true)
  const [language, setLanguage] = useState<StoryLanguage>('en')
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const collectHeart = useCallback((id: number) => {
    setCollected((prev) => (prev.includes(id) ? prev : [...prev, id]))
  }, [])

  const registerAudio = useCallback((el: HTMLAudioElement | null) => {
    audioRef.current = el
  }, [])

  const startMusic = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    audio
      .play()
      .then(() => setMusicPlaying(true))
      .catch(() => {
        // Audio file missing or blocked — hide controls gracefully.
        setMusicAvailable(false)
        setMusicPlaying(false)
      })
  }, [])

  const toggleMusic = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    if (musicPlaying) {
      audio.pause()
      setMusicPlaying(false)
    } else {
      audio
        .play()
        .then(() => setMusicPlaying(true))
        .catch(() => {
          setMusicAvailable(false)
          setMusicPlaying(false)
        })
    }
  }, [musicPlaying])

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === 'en' ? 'bn' : 'en'))
  }, [])

  const value = useMemo<StoryContextValue>(
    () => ({
      collected,
      collectHeart,
      heartCount: collected.length,
      totalHearts,
      allHeartsFound: collected.length >= totalHearts,
      musicPlaying,
      musicAvailable,
      toggleMusic,
      startMusic,
      registerAudio,
      language,
      toggleLanguage,
    }),
    [
      collected,
      collectHeart,
      musicPlaying,
      musicAvailable,
      toggleMusic,
      startMusic,
      registerAudio,
      language,
      toggleLanguage,
    ],
  )

  return <StoryContext.Provider value={value}>{children}</StoryContext.Provider>
}

export function useStory() {
  const ctx = useContext(StoryContext)
  if (!ctx) throw new Error('useStory must be used within StoryProvider')
  return ctx
}
