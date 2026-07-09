import { useState } from 'react'
import { motion } from 'framer-motion'
import { BUSINESS } from '../../data/business'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import Icon from '../ui/Icon'

const INFO_CARDS = [
  { icon: 'pin', label: 'Address', value: 'address' },
  { icon: 'phone', label: 'Phone', value: 'phoneDisplay', href: 'telHref' },
  { icon: 'mail', label: 'Email', value: 'email', href: 'mailHref' },
  { icon: 'clock', label: 'Working Hours', value: 'hours' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = `Service Booking Request%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AService: ${form.service}%0AMessage: ${form.message}`
    window.open(`${BUSINESS.whatsapp}?text=${text}`, '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  return (
    <section id="contact" className="relative z-10 py-28 md:py-36 px-6">
      <div data-camera="contact" className="absolute top-24 h-px w-px" />
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          kicker="Get In Touch"
          title="Book Your Service Today"
          subtitle="Reach out via call, WhatsApp, or the form below — we'll get your vehicle scheduled fast."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-5">
            {INFO_CARDS.map((card) => {
              const value = BUSINESS[card.value]
              const content = (
                <div className="glass-panel card-red-border p-6 flex items-start gap-4">
                  <div className="shrink-0 flex h-11 w-11 items-center justify-center border border-roadway-red/40 text-roadway-red">
                    <Icon name={card.icon} className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/40 font-body mb-1">{card.label}</p>
                    <p className="text-white font-body">{value}</p>
                  </div>
                </div>
              )
              return (
                <Reveal key={card.label} direction="left">
                  {card.href ? (
                    <a href={BUSINESS[card.href]} className="block hover:opacity-90 transition-opacity">
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </Reveal>
              )
            })}

            <Reveal direction="left">
              <a
                href={BUSINESS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full !bg-[#1fae56]"
              >
                <Icon name="whatsapp" className="mr-2 w-5 h-5" />
                Chat On WhatsApp
              </a>
            </Reveal>

            <Reveal direction="left">
              <div className="overflow-hidden border border-roadway-red/20 h-52">
                <iframe
                  title="Roadway Auto Maintenance Location"
                  src={BUSINESS.mapEmbed}
                  className="h-full w-full grayscale invert-[0.9] contrast-[1.2]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>

          <Reveal direction="right" className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass-panel card-red-border p-8 md:p-10 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-white/40 font-body mb-2">
                    Full Name
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-black/40 border border-white/10 focus:border-roadway-red outline-none px-4 py-3 text-white font-body transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-white/40 font-body mb-2">
                    Phone Number
                  </label>
                  <input
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-black/40 border border-white/10 focus:border-roadway-red outline-none px-4 py-3 text-white font-body transition-colors"
                    placeholder="+971 5X XXX XXXX"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-white/40 font-body mb-2">
                  Service Needed
                </label>
                <input
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full bg-black/40 border border-white/10 focus:border-roadway-red outline-none px-4 py-3 text-white font-body transition-colors"
                  placeholder="e.g. Brake Repair, Oil Change"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-white/40 font-body mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-black/40 border border-white/10 focus:border-roadway-red outline-none px-4 py-3 text-white font-body transition-colors resize-none"
                  placeholder="Tell us about your vehicle and the issue..."
                />
              </div>

              <motion.button
                type="submit"
                whileTap={{ scale: 0.97 }}
                className="btn-primary w-full"
              >
                Send Booking Request
              </motion.button>

              {sent && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-sm text-roadway-red font-body"
                >
                  Opening WhatsApp to confirm your request...
                </motion.p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
