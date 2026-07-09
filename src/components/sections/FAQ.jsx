import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FAQS } from '../../data/content'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import Icon from '../ui/Icon'

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="glass-panel card-red-border">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-display text-sm md:text-base uppercase tracking-wide text-white">
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 text-roadway-red"
        >
          <Icon name="chevronDown" className="w-5 h-5" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-white/55 text-sm font-body leading-relaxed">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="relative z-10 py-28 md:py-36 px-6">
      <div data-camera="faq" className="absolute top-24 h-px w-px" />
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          kicker="Got Questions"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know before booking your service with Roadway."
        />

        <div className="space-y-4">
          {FAQS.map((item, i) => (
            <Reveal key={item.q} direction="up" delay={i * 0.05}>
              <FAQItem
                item={item}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
