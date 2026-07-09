import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useScrollStore } from '../lib/scrollStore'

gsap.registerPlugin(ScrollTrigger)

export default function useGlobalScrollProgress() {
  useEffect(() => {
    const setProgress = useScrollStore.getState().setProgress

    const trigger = ScrollTrigger.create({
      trigger: document.documentElement,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      onUpdate: (self) => {
        setProgress(self.progress)
      },
    })

    return () => trigger.kill()
  }, [])
}
