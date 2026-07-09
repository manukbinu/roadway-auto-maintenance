import { useEffect } from 'react'
import { CAMERA_KEYFRAMES } from '../data/cameraKeyframes'
import { useScrollStore } from '../lib/scrollStore'

// Measures the scroll progress (0-1, matching the global ScrollTrigger) at
// which each `data-camera="<key>"` DOM anchor crosses the top of the document,
// so the 3D camera can be tied to real rendered section boundaries instead of
// guessed percentages.
export default function useCameraStops() {
  useEffect(() => {
    function measure() {
      const docHeight = document.documentElement.scrollHeight
      const viewportHeight = window.innerHeight
      const scrollable = Math.max(docHeight - viewportHeight, 1)

      const stops = CAMERA_KEYFRAMES.map((kf) => {
        const el = document.querySelector(`[data-camera="${kf.key}"]`)
        if (!el) return { ...kf, progress: 0 }
        const top = el.getBoundingClientRect().top + window.scrollY
        const progress = Math.min(Math.max(top / scrollable, 0), 1)
        return { ...kf, progress }
      }).sort((a, b) => a.progress - b.progress)

      useScrollStore.getState().setCameraStops(stops)
    }

    measure()
    const raf = requestAnimationFrame(measure)
    window.addEventListener('resize', measure)
    window.addEventListener('load', measure)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', measure)
      window.removeEventListener('load', measure)
    }
  }, [])
}
