import { useEffect } from 'react'
import type { CSSProperties } from 'react'

import Brand from '../components/Brand'
import '../styles/splash.css'

type SplashProps = {
  onDone: () => void
  duration?: number
}

function Splash({ onDone, duration = 2200 }: SplashProps) {
  useEffect(() => {
    const timer = setTimeout(onDone, duration)
    return () => clearTimeout(timer)
  }, [onDone, duration])

  return (
    <main
      className="splash"
      aria-label="Welcome"
      onClick={onDone}
      style={{ '--duration': `${duration}ms` } as CSSProperties}
    >
      <div className="splash__glow" aria-hidden="true" />

      <Brand size="large" />

      <p className="splash__tagline">
        Think Smart. <span>Go Bananas!</span>
      </p>

      <div className="splash__loader" aria-hidden="true">
        <div className="splash__loader-fill" />
      </div>
    </main>
  )
}

export default Splash