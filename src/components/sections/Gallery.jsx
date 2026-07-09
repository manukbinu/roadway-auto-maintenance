import { motion } from 'framer-motion'
import { GALLERY } from '../../data/content'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'

export default function Gallery() {
  return (
    <section id="gallery" className="relative z-10 py-28 md:py-36 px-6">
      <div data-camera="gallery" className="absolute top-24 h-px w-px" />
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          kicker="Inside The Garage"
          title="Craftsmanship In Every Bay"
          subtitle="A glimpse into the precision, tools, and finish quality behind every Roadway service."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {GALLERY.map((item, i) => (
            <Reveal key={item.id} direction="scale" delay={(i % 3) * 0.1}>
              <motion.div
                whileHover="hover"
                className="group relative aspect-[4/3] overflow-hidden border border-roadway-red/20"
              >
                <motion.img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  variants={{ hover: { scale: 1.12 } }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-black/10" />
                <div className="absolute inset-0 bg-roadway-red/0 transition-colors duration-500 group-hover:bg-roadway-red/10" />

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="section-kicker !mb-1 !text-[10px]">{item.tag}</span>
                  <h3 className="font-display text-base uppercase tracking-wide text-white">{item.title}</h3>
                </div>

                <div className="absolute inset-0 border border-roadway-red/0 group-hover:border-roadway-red/60 transition-colors duration-500" />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
