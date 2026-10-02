import { useEffect, useRef, useState } from 'react'
import Icon from './Icon'
import { HOSPITAL_MAPS_URL, HOSPITAL_PHONE_DISPLAY, type Language, whatsappUrl } from '../data/site'

const intents = [
  { key: 'APPOINTMENT', icon: 'calendar' as const, en: 'Book appointment', mr: 'अपॉइंटमेंट' },
  { key: 'TIMINGS', icon: 'clock' as const, en: 'Doctor timings', mr: 'डॉक्टर वेळा' },
  { key: 'SERVICES', icon: 'stethoscope' as const, en: 'Ask about services', mr: 'सेवांबद्दल विचारा' },
  { key: 'LOCATION', icon: 'map' as const, en: 'Hospital location', mr: 'हॉस्पिटल लोकेशन' },
]

export default function WhatsAppAssistant({ language, embedded = false }: { language: Language; embedded?: boolean }) {
  const [open, setOpen] = useState(embedded)
  const panelRef = useRef<HTMLDivElement | null>(null)
  const makeMessage = (key: string, label: string) => `GAJANAN HOSPITAL WEBSITE • ${key}

Hello, I need help with: ${label}.

Please assist me.
Website: https://gajananhospitalwarud.com`

  useEffect(() => {
    if (embedded || !open) return

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      if (!panelRef.current) return
      const target = event.target as Node | null
      if (target && !panelRef.current.contains(target)) setOpen(false)
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('touchstart', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('touchstart', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [embedded, open])

  const panel = <div ref={panelRef} className={`${embedded ? 'card' : 'fixed bottom-24 right-5 z-50 w-[min(92vw,360px)] max-h-[min(72vh,560px)] overflow-y-auto shadow-soft'} overflow-hidden rounded-3xl border border-hospital-line bg-white`}>
    <div className="bg-hospital-navy p-5 text-white">
      <div className="flex items-start justify-between gap-4">
        <div><div className="text-xs font-extrabold uppercase tracking-[.16em] text-hospital-tealSoft">WhatsApp Quick Help</div><div className="mt-1 text-xl font-black">{language === 'en' ? 'How can we help?' : 'आम्ही कशी मदत करू?'}</div></div>
        {!embedded && <button onClick={() => setOpen(false)} className="rounded-full p-1 text-white/80 hover:bg-white/10" aria-label="Close"><Icon name="close" className="h-5 w-5" /></button>}
      </div>
      <p className="mt-2 text-sm leading-6 text-white/75">{language === 'en' ? 'Choose a topic. We prepare a structured WhatsApp message for the hospital team.' : 'विषय निवडा. हॉस्पिटल टीमसाठी WhatsApp संदेश तयार होईल.'}</p>
    </div>
    <div className="grid gap-2 p-4">
      {intents.map((intent) => <a key={intent.key} href={whatsappUrl(makeMessage(intent.key, intent.en))} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-hospital-line p-3.5 font-bold text-hospital-navy transition hover:border-hospital-teal/40 hover:bg-hospital-tealSoft"><span className="grid h-10 w-10 place-items-center rounded-xl bg-hospital-tealSoft text-hospital-teal"><Icon name={intent.icon} className="h-5 w-5" /></span>{language === 'en' ? intent.en : intent.mr}<Icon name="arrow" className="ml-auto h-4 w-4 text-hospital-teal" /></a>)}
      <div className="mt-1 rounded-2xl bg-red-50 p-3.5 text-sm leading-6 text-red-800"><strong>{language === 'en' ? 'Emergency?' : 'इमर्जन्सी?'}</strong> {language === 'en' ? `Do not wait for WhatsApp. Call ${HOSPITAL_PHONE_DISPLAY} directly.` : `WhatsApp उत्तराची वाट पाहू नका. ${HOSPITAL_PHONE_DISPLAY} वर थेट फोन करा.`}</div>
      <a href={HOSPITAL_MAPS_URL} target="_blank" rel="noreferrer" className="text-center text-xs font-bold text-hospital-muted hover:text-hospital-teal">{language === 'en' ? 'Open Google Maps' : 'Google Maps उघडा'}</a>
    </div>
  </div>

  if (embedded) return panel
  return <>{open && <button type="button" aria-label="Close WhatsApp quick help" className="fixed inset-0 z-40 cursor-default bg-transparent" onClick={() => setOpen(false)} />} {open && panel}<button onClick={() => setOpen(!open)} className="fixed bottom-24 right-5 z-[60] hidden h-14 items-center gap-2 rounded-full bg-[#25D366] px-5 font-black text-white shadow-soft transition hover:-translate-y-1 md:flex" aria-label="Open WhatsApp quick help"><Icon name="message" className="h-5 w-5" /> WhatsApp</button></>
}
