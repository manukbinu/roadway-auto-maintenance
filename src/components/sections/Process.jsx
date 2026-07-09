import { PROCESS_STEPS } from '../../data/content'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'

export default function Process() {
  return (
    <section id="process" className="relative z-10 py-28 md:py-36 px-6">
      <div data-camera="process" className="absolute top-24 h-px w-px" />
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="How It Works"
          title="Our Repair Process"
          subtitle="A transparent, six-step workflow that takes your vehicle from drop-off to showroom-ready."
        />

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-roadway-red/60 via-roadway-red/20 to-transparent md:-translate-x-1/2" />

          <div className="space-y-10 md:space-y-0">
            {PROCESS_STEPS.map((step, i) => {
              const isEven = i % 2 === 0
              return (
                <div
                  key={step.step}
                  className={`relative md:grid md:grid-cols-2 md:gap-10 md:py-8 ${
                    isEven ? '' : 'md:[&>div:first-child]:order-2'
                  }`}
                >
                  <Reveal direction={isEven ? 'left' : 'right'} className={`pl-16 md:pl-0 ${isEven ? 'md:text-right' : ''}`}>
                    <div className="glass-panel card-red-border inline-block p-6 md:max-w-sm">
                      <span className="font-display text-3xl text-roadway-red/50 font-black">{step.step}</span>
                      <h3 className="font-display text-lg uppercase tracking-wide text-white mt-2 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-white/55 text-sm font-body leading-relaxed">{step.desc}</p>
                    </div>
                  </Reveal>
                  <div className="hidden md:block" />

                  <div className="absolute left-6 md:left-1/2 top-8 h-3 w-3 -translate-x-1/2 rounded-full bg-roadway-red shadow-neon" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
