import { motion } from 'framer-motion'
import { SERVICES } from '../../data/services'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import Icon from '../ui/Icon'

export default function Services() {
  return (
    <section id="services" className="relative z-10 py-28 md:py-36 px-6">
      <div data-camera="services" className="absolute top-24 h-px w-px" />
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          kicker="What We Do"
          title="Full-Spectrum Auto Services"
          subtitle="From engine internals to electrical diagnostics — every service delivered with dealership-grade precision, in-house."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => (
            <Reveal key={service.id} direction="up" delay={(i % 3) * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative h-full glass-panel card-red-border overflow-hidden"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                    initial={{ scale: 1.05 }}
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />
                  <div className="absolute inset-0 bg-roadway-red/0 transition-colors duration-500 group-hover:bg-roadway-red/10" />

                  <div className="absolute bottom-3 left-3 flex h-12 w-12 items-center justify-center border border-roadway-red/50 bg-black/70 backdrop-blur-sm text-roadway-red transition-all duration-500 group-hover:bg-roadway-red group-hover:text-white group-hover:shadow-neon">
                    <Icon name={service.icon} className="w-6 h-6" />
                  </div>
                </div>

                <div className="relative z-10 p-7">
                  <h3 className="font-display text-lg uppercase tracking-wide text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white/55 text-sm leading-relaxed font-body">{service.desc}</p>
                </div>

                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-roadway-red transition-all duration-500 group-hover:w-full" />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
