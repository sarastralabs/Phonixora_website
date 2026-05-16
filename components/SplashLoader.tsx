'use client'

import { useCallback, useEffect, useState } from 'react'

const SPLASH_KEY = 'phonixora-splash-seen'
const SPLASH_MS = 2000
const EXIT_MS = 450

type SplashLoaderProps = {
  children: React.ReactNode
}

export default function SplashLoader({ children }: SplashLoaderProps) {
  const [showSplash, setShowSplash] = useState<boolean | null>(null)
  const [isExiting, setIsExiting] = useState(false)

  const dismissSplash = useCallback(() => {
    setIsExiting(true)
    window.setTimeout(() => {
      try {
        sessionStorage.setItem(SPLASH_KEY, 'true')
      } catch {
        /* private browsing */
      }
      setShowSplash(false)
      setIsExiting(false)
    }, EXIT_MS)
  }, [])

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    try {
      if (sessionStorage.getItem(SPLASH_KEY) === 'true') {
        setShowSplash(false)
        return
      }
    } catch {
      setShowSplash(false)
      return
    }

    if (reducedMotion) {
      try {
        sessionStorage.setItem(SPLASH_KEY, 'true')
      } catch {
        /* private browsing */
      }
      setShowSplash(false)
      return
    }

    setShowSplash(true)
    const timer = window.setTimeout(dismissSplash, SPLASH_MS)
    return () => window.clearTimeout(timer)
  }, [dismissSplash])

  const overlayVisible = showSplash === null || showSplash === true
  const contentHidden = showSplash !== false

  return (
    <>
      {overlayVisible && (
        <div
          className={`splash-overlay${isExiting ? ' splash-overlay--exit' : ''}${showSplash === null ? ' splash-overlay--boot' : ''}`}
          role="status"
          aria-live="polite"
          aria-label="Loading Phonixora"
        >
          <button
            type="button"
            className="splash-skip"
            onClick={dismissSplash}
            aria-label="Skip intro"
          >
            Skip
          </button>

          <div className="splash-inner">
            <div className="splash-logo-wrap">
              <img src="/logo.png" alt="" className="splash-logo" width={88} height={88} />
              <div className="splash-glow" aria-hidden />
            </div>
            <h1 className="splash-brand">Phonixora</h1>
            <p className="splash-tagline">Sustainable bio-polymers</p>
            <div className="splash-progress-track" aria-hidden>
              <div className="splash-progress-bar" />
            </div>
          </div>
        </div>
      )}

      <div className={contentHidden ? 'site-content site-content--hidden' : 'site-content'}>
        {children}
      </div>
    </>
  )
}
