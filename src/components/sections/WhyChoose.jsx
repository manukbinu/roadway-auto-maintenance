import { WHY_CHOOSE } from '../../data/content'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import AnimatedCounter from '../ui/AnimatedCounter'
import Icon from '../ui/Icon'

export default function WhyChoose() {
  return (
    <section id="why-choose" className="relative z-10 py-28 md:py-36 px-6">
      <div data-camera="why" className="absolute top-24 h-px w-px" />
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          kicker="Why Roadway"
          title="Built On Trust, Tuned For Performance"
          subtitle="A garage run like a workshop for enthusiasts — precision, honesty, and results you can feel behind the wheel."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {WHY_CHOOSE.map((item, i) => (
            <Reveal key={item.title} direction={i % 2 === 0 ? 'left' : 'right'} delay={i * 0.08}>
              <div className="glass-panel card-red-border p-7 flex gap-5">
                <div className="shrink-0 flex h-12 w-12 items-center justify-center border border-roadway-red/40 text-roadway-red">
                  <Icon name="check" className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-base uppercase tracking-wide text-white mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-white/55 text-sm font-body leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 border-t border-roadway-red/20 pt-14">
          {WHY_CHOOSE.map((item) => (
            <Reveal key={item.label} direction="up" className="text-center">
              <AnimatedCounter
                value={item.stat}
                suffix={item.suffix}
                className="font-display text-4xl md:text-5xl font-black text-roadway-red text-neon"
              />
              <p className="mt-2 text-xs md:text-sm uppercase tracking-widest text-white/50 font-body">
                {item.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
