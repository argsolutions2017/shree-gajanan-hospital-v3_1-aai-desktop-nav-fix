import Icon from './Icon'
import { HOSPITAL_PHONE_TEL, type Language, whatsappUrl } from '../data/site'

export default function MobileActionBar({ language }: { language: Language }) {
  return <div className="fixed inset-x-0 bottom-0 z-50 border-t border-hospital-line bg-white/95 p-2 backdrop-blur md:hidden">
    <div className="mx-auto grid max-w-lg grid-cols-3 gap-2">
      <a href={`tel:${HOSPITAL_PHONE_TEL}`} className="mobile-action bg-hospital-navy text-white"><Icon name="phone" className="h-4 w-4" />{language === 'en' ? 'Call' : 'फोन'}</a>
      <a href="/appointment" className="mobile-action border border-hospital-teal/20 bg-hospital-tealSoft text-hospital-teal"><Icon name="calendar" className="h-4 w-4" />{language === 'en' ? 'Book' : 'अपॉइंटमेंट'}</a>
      <a href={whatsappUrl('GAJANAN HOSPITAL WEBSITE • QUICK HELP\n\nHello, I need assistance.')} target="_blank" rel="noreferrer" className="mobile-action bg-[#25D366] text-white"><Icon name="message" className="h-4 w-4" />WhatsApp</a>
    </div>
  </div>
}
