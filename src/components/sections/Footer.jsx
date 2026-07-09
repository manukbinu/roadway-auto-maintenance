import { BUSINESS } from '../../data/business'
import { SERVICES } from '../../data/services'
import Icon from '../ui/Icon'
import logo from '../../assets/logo.png'

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-roadway-red/20 bg-black/90 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <img src={logo} alt="Roadway Auto Maintenance" className="h-10 w-auto mb-4" />
          <p className="text-white/50 text-sm leading-relaxed">
            Premium automotive repair &amp; maintenance in Sharjah. Precision work,
            genuine parts, muscle-car grade craftsmanship.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-roadway-red mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-white/50">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.id}>{s.title}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-roadway-red mb-4">Navigate</h4>
          <ul className="space-y-2 text-sm text-white/50">
            <li><a href="#services" className="hover:text-roadway-red transition-colors">Services</a></li>
            <li><a href="#why-choose" className="hover:text-roadway-red transition-colors">Why Choose Us</a></li>
            <li><a href="#gallery" className="hover:text-roadway-red transition-colors">Gallery</a></li>
            <li><a href="#testimonials" className="hover:text-roadway-red transition-colors">Reviews</a></li>
            <li><a href="#faq" className="hover:text-roadway-red transition-colors">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-roadway-red mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-white/50">
            <li className="flex items-start gap-2">
              <Icon name="pin" className="w-4 h-4 text-roadway-red shrink-0 mt-0.5" />
              {BUSINESS.address}
            </li>
            <li className="flex items-center gap-2">
              <Icon name="phone" className="w-4 h-4 text-roadway-red shrink-0" />
              <a href={BUSINESS.telHref} className="hover:text-roadway-red transition-colors">{BUSINESS.phoneDisplay}</a>
            </li>
            <li className="flex items-center gap-2">
              <Icon name="mail" className="w-4 h-4 text-roadway-red shrink-0" />
              <a href={BUSINESS.mailHref} className="hover:text-roadway-red transition-colors break-all">{BUSINESS.email}</a>
            </li>
            <li className="flex items-center gap-2">
              <Icon name="clock" className="w-4 h-4 text-roadway-red shrink-0" />
              {BUSINESS.hours}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/30 font-body tracking-widest uppercase">
        &copy; {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
      </div>
    </footer>
  )
}
