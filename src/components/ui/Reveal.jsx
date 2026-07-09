import { motion } from 'framer-motion'

const VARIANTS = {
  up: { hidden: { opacity: 0, y: 60 }, show: { opacity: 1, y: 0 } },
  down: { hidden: { opacity: 0, y: -60 }, show: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -60 }, show: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 60 }, show: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.85 }, show: { opacity: 1, scale: 1 } },
  fade: { hidden: { opacity: 0 }, show: { opacity: 1 } },
}

export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.8,
  className = '',
  once = true,
  amount = 0.25,
  as: Component = motion.div,
}) {
  const variants = VARIANTS[direction] ?? VARIANTS.up

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={variants}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Component>
  )
}
