import Icon from './Icon'
import { HOSPITAL_MAPS_URL, HOSPITAL_PHONE_DISPLAY, HOSPITAL_PHONE_TEL, hospitalAddress, navItems, services, type Language } from '../data/site'

export default function Footer({ language }: { language: Language }) {
  return <footer className="bg-hospital-navy text-white">
    <div className="container-shell grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
      <div>
        <div className="flex items-center gap-3"><img src="/images/gajanan-maharaj.webp" alt="" className="h-12 w-12 rounded-2xl object-cover"/><div><div className="font-black">Shree Gajanan Hospital</div><div className="text-xs font-bold uppercase tracking-widest text-hospital-tealSoft">Critical Care Center</div></div></div>
        <p className="mt-4 text-sm leading-7 text-white/70">{language === 'en' ? 'Medicine, critical care, anaesthesia, pain care and selected diagnostics in Warud.' : 'वरुड येथे मेडिसिन, क्रिटिकल केअर, भूल, वेदना उपचार व निवडक निदान सुविधा.'}</p>
      </div>
      <div><h3 className="footer-title">{language === 'en' ? 'Quick links' : 'महत्त्वाचे दुवे'}</h3><div className="mt-4 grid gap-2">{navItems.slice(1).map(i => <a key={i.href} href={i.href} className="footer-link">{i.label[language]}</a>)}</div></div>
      <div><h3 className="footer-title">{language === 'en' ? 'Key services' : 'मुख्य सेवा'}</h3><div className="mt-4 grid gap-2">{services.slice(0,5).map(s => <a key={s.slug} href={`/services/${s.slug}`} className="footer-link">{s.title[language]}</a>)}</div></div>
      <div><h3 className="footer-title">{language === 'en' ? 'Contact' : 'संपर्क'}</h3><div className="mt-4 grid gap-4 text-sm leading-6 text-white/75"><a href={`tel:${HOSPITAL_PHONE_TEL}`} className="flex gap-2 hover:text-white"><Icon name="phone" className="mt-1 h-4 w-4 shrink-0"/>{HOSPITAL_PHONE_DISPLAY}</a><a href={HOSPITAL_MAPS_URL} target="_blank" rel="noreferrer" className="flex gap-2 hover:text-white"><Icon name="map" className="mt-1 h-4 w-4 shrink-0"/>{hospitalAddress[language]}</a></div></div>
    </div>
    <div className="border-t border-white/10"><div className="container-shell flex flex-col gap-2 py-5 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} Shree Gajanan Hospital & Critical Care Center.</span><div className="flex gap-4"><a href="/privacy" className="hover:text-white">Privacy</a><span>Emergency: call hospital directly</span></div></div></div>
  </footer>
}
