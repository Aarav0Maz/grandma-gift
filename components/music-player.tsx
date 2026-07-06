'use client'

import { useEffect } from 'react'
import { Radio, Play, Pause } from 'lucide-react'
import { useStory } from '@/components/story-provider'

export function MusicPlayer({ visible }: { visible: boolean }) {
  const { registerAudio, musicPlaying, musicAvailable, toggleMusic } = useStory()

  useEffect(() => {
    return () => registerAudio(null)
  }, [registerAudio])

  return (
    <>
      {/* Provide your own legally obtained song at /public/music/theme.mp3 */}
      <audio
        ref={registerAudio}
        src="/music/theme.mp3"
        loop
        preload="auto"
        aria-hidden="true"
      />
      {visible && musicAvailable && (
        <button
          type="button"
          onClick={toggleMusic}
          aria-label={musicPlaying ? 'Pause the music' : 'Play the music'}
          className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full border border-gold/50 bg-card/90 px-4 py-2 text-sm font-medium text-foreground shadow-lg backdrop-blur transition hover:bg-card hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        >
          <span className="relative flex size-6 items-center justify-center text-primary">
            <Radio
              size={22}
              className={musicPlaying ? 'animate-pulse' : ''}
            />
          </span>
          <span className="hidden sm:inline text-muted-foreground">
            {musicPlaying ? 'Now playing' : 'Play song'}
          </span>
          {musicPlaying ? (
            <Pause size={15} className="text-gold" />
          ) : (
            <Play size={15} className="text-gold" />
          )}
        </button>
      )}
    </>
  )
}
