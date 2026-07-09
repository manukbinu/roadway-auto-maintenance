import Reveal from './Reveal'

export default function SectionHeading({ kicker, title, subtitle, align = 'center' }) {
  const alignClass = align === 'left' ? 'items-start text-left' : 'items-center text-center'

  return (
    <div className={`flex flex-col ${alignClass} mb-14 md:mb-20`}>
      {kicker && (
        <Reveal direction="fade">
          <span className="section-kicker">{kicker}</span>
        </Reveal>
      )}
      <Reveal direction="up" delay={0.1}>
        <h2 className="section-heading">{title}</h2>
      </Reveal>
      {subtitle && (
        <Reveal direction="up" delay={0.2}>
          <p className="mt-5 max-w-2xl text-white/60 text-base md:text-lg font-body">
            {subtitle}
          </p>
        </Reveal>
      )}
      <div className="mt-6 h-[2px] w-20 bg-roadway-red shadow-neon-sm" />
    </div>
  )
}
