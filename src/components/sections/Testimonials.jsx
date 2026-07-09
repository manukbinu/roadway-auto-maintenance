import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { TESTIMONIALS } from '../../data/content'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import Icon from '../ui/Icon'

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  const next = useCallback(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), [])
  const prev = () => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)

  useEffect(() => {
    const id = setInterval(next, 6000)
    return () => clearInterval(id)
  }, [next])

  const t = TESTIMONIALS[index]

  return (
    <section id="testimonials" className="relative z-10 py-28 md:py-36 px-6">
      <div data-camera="testimonials" className="absolute top-24 h-px w-px" />
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          kicker="Driver Stories"
          title="Trusted By Enthusiasts &amp; Everyday Drivers"
          subtitle="Real feedback from the drivers who trust Roadway with their cars."
        />

        <Reveal direction="scale">
          <div className="glass-panel card-red-border relative p-8 md:p-14 text-center min-h-[280px] flex flex-col items-center justify-center">
            <Icon name="quote" className="w-10 h-10 text-roadway-red/40 mb-6" />

            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-lg md:text-2xl font-body text-white/85 leading-relaxed max-w-2xl">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-7 flex items-center justify-center gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Icon key={i} name="star" className="w-4 h-4 text-roadway-red" strokeWidth={0} />
                  ))}
                </div>
                <p className="mt-4 font-display text-sm uppercase tracking-widest text-white">{t.name}</p>
                <p className="text-white/40 text-xs font-body">{t.car}</p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 flex items-center gap-6">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="flex h-10 w-10 items-center justify-center border border-roadway-red/40 text-roadway-red hover:bg-roadway-red hover:text-white transition-colors duration-300"
              >
                <Icon name="arrowRight" className="w-4 h-4 rotate-180" />
              </button>

              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === index ? 'w-6 bg-roadway-red' : 'w-1.5 bg-white/20'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                aria-label="Next testimonial"
                className="flex h-10 w-10 items-center justify-center border border-roadway-red/40 text-roadway-red hover:bg-roadway-red hover:text-white transition-colors duration-300"
              >
                <Icon name="arrowRight" className="w-4 h-4" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
