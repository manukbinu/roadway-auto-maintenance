import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { BUSINESS } from '../../data/business'
import Icon from '../ui/Icon'
import logo from '../../assets/logo.png'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const sectionRef = useRef(null)
  const introRef = useRef(null)
  const brandRef = useRef(null)
  const scrollHintRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.4,
        },
      })

      tl.to(introRef.current, { opacity: 0, y: -60, duration: 0.2, ease: 'none' }, 0)
      tl.fromTo(
        brandRef.current,
        { opacity: 0, y: 40, scale: 0.92 },
        { opacity: 1, y: 0, scale: 1, duration: 0.14, ease: 'none' },
        0.32
      )
      tl.to(scrollHintRef.current, { opacity: 0.6, duration: 0.06, ease: 'none' }, 0)
      tl.to(scrollHintRef.current, { opacity: 0, duration: 0.1, ease: 'none' }, 0.9)
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="hero" ref={sectionRef} className="relative h-[320vh]">
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
        {/* DOM anchors consumed by useCameraStops to sync the 3D camera path */}
        <div data-camera="hero-start" className="absolute top-0 h-px w-px" />
        <div data-camera="hero-mid" className="absolute top-[45%] h-px w-px" />
        <div data-camera="hero-end" className="absolute top-[92%] h-px w-px" />

        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center">
          <div ref={introRef} className="absolute top-[18%] flex flex-col items-center">
            <span className="section-kicker">Sharjah Industrial Area 4</span>
            <p className="max-w-md text-white/50 font-body text-sm tracking-wide">
              Watch the arrival — scroll to bring your service journey to life.
            </p>
          </div>

          <div ref={brandRef} className="flex flex-col items-center opacity-0">
            <span className="section-kicker">Premium Automotive Care</span>
            <h1 className="flex justify-center">
              <img
                src={logo}
                alt="Roadway Auto Maintenance"
                className="w-[280px] sm:w-[380px] md:w-[460px] lg:w-[520px] h-auto drop-shadow-[0_0_40px_rgba(225,6,0,0.35)]"
              />
            </h1>
            <p className="mt-6 max-w-xl text-white/60 font-body text-base md:text-lg">
              Muscle-car grade precision for every make and model. Engine to exhaust,
              we treat your vehicle like it&apos;s built for the track.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
              <a href="#contact" className="btn-primary group">
                Book Service
                <Icon name="arrowRight" className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href={BUSINESS.telHref} className="btn-outline">
                <Icon name="phone" className="mr-2 w-4 h-4" />
                {BUSINESS.phoneDisplay}
              </a>
            </div>
          </div>
        </div>

        <div
          ref={scrollHintRef}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/40">Scroll</span>
          <div className="animate-bounce">
            <Icon name="chevronDown" className="w-5 h-5 text-roadway-red" />
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-[5]" />
      </div>
    </section>
  )
}
