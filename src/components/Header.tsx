import { useState } from 'react'
import Icon from './Icon'
import { HOSPITAL_PHONE_TEL, navItems, services, type Language } from '../data/site'

export default function Header({ language, onToggleLanguage }: { language: Language; onToggleLanguage: () => void }) {
  const [open, setOpen] = useState(false)
  const path = window.location.pathname
  const isActive = (href: string) => href === '/' ? path === '/' : path.startsWith(href)

  return (
    <header className="sticky top-0 z-50 border-b border-hospital-line/90 bg-white/95 backdrop-blur-xl">
      <div className="border-b border-hospital-line bg-hospital-navy text-white">
        <div className="container-shell flex min-h-9 items-center justify-between gap-4 text-[12px] font-semibold sm:text-[13px]">
          <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400" />24×7 Emergency Care</div>
          <div className="hidden items-center gap-5 sm:flex">
            <a href="/contact" className="hover:text-hospital-tealSoft">Pandhurna Chowk, Warud</a>
            <a href={`tel:${HOSPITAL_PHONE_TEL}`} className="font-extrabold hover:text-hospital-tealSoft">+91 95270 59133</a>
          </div>
        </div>
      </div>
      <div className="container-shell flex min-h-[78px] items-center justify-between gap-4">
        <a href="/" className="flex min-w-0 items-center gap-3" aria-label="Shree Gajanan Hospital home">
          <img src="/images/gajanan-maharaj.webp" alt="" className="h-12 w-12 rounded-2xl border border-hospital-line object-cover shadow-sm" />
          <div className="min-w-0">
            <div className="truncate text-[16px] font-black leading-tight text-hospital-navy sm:text-[18px]">Shree Gajanan Hospital</div>
            <div className="truncate text-[10px] font-extrabold uppercase tracking-[.14em] text-hospital-teal sm:text-[11px]">Critical Care Center • Warud</div>
          </div>
        </a>

        <nav className="hidden min-w-0 items-center gap-0 lg:flex xl:gap-1" aria-label="Main navigation">
          {navItems.map((item) => item.href === '/services' ? (
            <div key={item.href} className="group relative">
              <a href={item.href} className={`nav-link ${isActive(item.href) ? 'nav-link-active' : ''}`}>
                {item.label[language]} <span className="ml-1 text-[10px]">▾</span>
              </a>
              <div className="invisible absolute left-1/2 top-full z-50 mt-2 w-[min(620px,90vw)] -translate-x-1/2 rounded-3xl border border-hospital-line bg-white p-4 opacity-0 shadow-soft transition group-hover:visible group-hover:opacity-100">
                <div className="grid grid-cols-2 gap-2">
                  {services.map((service) => (
                    <a key={service.slug} href={`/services/${service.slug}`} className="group/item rounded-2xl p-3 transition hover:bg-hospital-tealSoft">
                      <div className="text-xs font-extrabold uppercase tracking-wider text-hospital-teal">{service.category[language]}</div>
                      <div className="mt-1 font-bold text-hospital-navy group-hover/item:text-hospital-teal">{service.title[language]}</div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <a key={item.href} href={item.href} className={`nav-link ${isActive(item.href) ? 'nav-link-active' : ''}`}>{item.label[language]}</a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 xl:flex">
          <button onClick={onToggleLanguage} className="rounded-xl border border-hospital-line px-3 py-2 text-xs font-extrabold text-hospital-navy hover:bg-hospital-bg" aria-label="Switch language">
            {language === 'en' ? 'मराठी' : 'English'}
          </button>
          <a href="/appointment" className="btn-primary !min-h-10 !px-4 !py-2 text-sm">{language === 'en' ? 'Book Appointment' : 'अपॉइंटमेंट'}</a>
        </div>
        <button onClick={() => setOpen(!open)} className="rounded-xl border border-hospital-line p-2.5 text-hospital-navy lg:hidden" aria-label="Toggle menu">
          <Icon name={open ? 'close' : 'menu'} className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <div className="border-t border-hospital-line bg-white lg:hidden">
          <div className="container-shell max-h-[72vh] overflow-auto py-4">
            <div className="grid gap-1">
              {navItems.map((item) => <a key={item.href} href={item.href} className="rounded-xl px-3 py-3 font-bold text-hospital-navy hover:bg-hospital-tealSoft">{item.label[language]}</a>)}
              <div className="mt-2 border-t border-hospital-line pt-3">
                <div className="mb-2 px-3 text-xs font-black uppercase tracking-widest text-hospital-muted">{language === 'en' ? 'Service pages' : 'सेवा पृष्ठे'}</div>
                {services.map((service) => <a key={service.slug} href={`/services/${service.slug}`} className="block rounded-xl px-3 py-2.5 text-sm font-semibold text-hospital-ink hover:bg-hospital-bg">{service.title[language]}</a>)}
              </div>
              <div className="mt-3 flex gap-2">
                <button onClick={onToggleLanguage} className="btn-secondary flex-1 !min-h-10 !py-2 text-sm">{language === 'en' ? 'मराठी' : 'English'}</button>
                <a href="/appointment" className="btn-primary flex-1 !min-h-10 !py-2 text-sm">{language === 'en' ? 'Appointment' : 'अपॉइंटमेंट'}</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
