import confetti from 'canvas-confetti'

/** A warm, celebratory confetti burst. */
export function burstConfetti() {
  const colors = ['#e2a33a', '#d97a6c', '#2f8f8a', '#f7e2b8', '#9c5b52']
  confetti({
    particleCount: 90,
    spread: 75,
    startVelocity: 45,
    origin: { y: 0.7 },
    colors,
    scalar: 1.05,
  })
  setTimeout(() => {
    confetti({
      particleCount: 60,
      angle: 60,
      spread: 60,
      origin: { x: 0, y: 0.8 },
      colors,
    })
    confetti({
      particleCount: 60,
      angle: 120,
      spread: 60,
      origin: { x: 1, y: 0.8 },
      colors,
    })
  }, 180)
}

/** A playful Holi-style burst of bright powder colours. */
export function burstColors() {
  const colors = ['#e04f7a', '#3aa0e2', '#e2a33a', '#4caf50', '#9b59b6', '#ff7043']
  const end = Date.now() + 900
  ;(function frame() {
    confetti({
      particleCount: 6,
      angle: 60,
      spread: 70,
      startVelocity: 40,
      origin: { x: 0, y: 0.65 },
      colors,
      scalar: 1.2,
    })
    confetti({
      particleCount: 6,
      angle: 120,
      spread: 70,
      startVelocity: 40,
      origin: { x: 1, y: 0.65 },
      colors,
      scalar: 1.2,
    })
    if (Date.now() < end) requestAnimationFrame(frame)
  })()
}

/** A gentle, continuous shower of celebratory confetti for the finale. */
export function celebrationShower(durationMs = 2600) {
  const colors = ['#e2a33a', '#d97a6c', '#2f8f8a', '#f7e2b8', '#e04f7a']
  const end = Date.now() + durationMs
  ;(function frame() {
    confetti({
      particleCount: 4,
      startVelocity: 0,
      ticks: 300,
      gravity: 0.5,
      origin: { x: Math.random(), y: -0.1 },
      colors,
      scalar: 1.1,
      drift: (Math.random() - 0.5) * 1.5,
    })
    if (Date.now() < end) requestAnimationFrame(frame)
  })()
}
