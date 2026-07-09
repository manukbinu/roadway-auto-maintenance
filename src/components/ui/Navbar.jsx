import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { BUSINESS } from '../../data/business'
import Icon from './Icon'
import logo from '../../assets/logo.png'

const LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-choose' },
  { label: 'Process', href: '#process' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/80 backdrop-blur-md border-b border-roadway-red/20 py-3' : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#hero" className="flex items-center">
          <img src={logo} alt="Roadway Auto Maintenance" className="h-9 md:h-10 w-auto" />
        </a>

        <ul className="hidden lg:flex items-center gap-8 font-body text-sm uppercase tracking-widest">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-white/70 hover:text-roadway-red transition-colors duration-300">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <a href={BUSINESS.telHref} className="text-sm font-body text-white/80 hover:text-roadway-red transition-colors">
            {BUSINESS.phoneDisplay}
          </a>
          <a href="#contact" className="btn-primary !px-6 !py-3 text-xs">
            Book Service
          </a>
        </div>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`h-[2px] w-full bg-roadway-red transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`h-[2px] w-full bg-roadway-red transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`h-[2px] w-full bg-roadway-red transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </div>
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="lg:hidden mt-4 border-t border-roadway-red/20 bg-black/95"
        >
          <ul className="flex flex-col gap-1 px-6 py-4 font-body uppercase tracking-widest text-sm">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-white/80 hover:text-roadway-red transition-colors border-b border-white/5"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-4 flex items-center gap-4">
              <a href={BUSINESS.telHref} className="flex items-center gap-2 text-white/80">
                <Icon name="phone" className="w-4 h-4 text-roadway-red" />
                {BUSINESS.phoneDisplay}
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  )
}
