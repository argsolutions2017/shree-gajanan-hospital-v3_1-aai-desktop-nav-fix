import Icon from './Icon'
import type { Language } from '../data/site'
import { doctors } from '../data/site'

export default function DoctorCard({ doctor, language, compact = false }: { doctor: typeof doctors[number]; language: Language; compact?: boolean }) {
  return (
    <article className="card overflow-hidden">
      <div className={`grid ${compact ? '' : 'md:grid-cols-[.82fr_1.18fr]'}`}>
        <div className="relative min-h-[310px] overflow-hidden bg-hospital-bg">
          <img src={doctor.image} alt={doctor.name} className="absolute inset-0 h-full w-full object-cover object-top" loading="lazy" width="680" height="760" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-hospital-navy/65 to-transparent" />
        </div>
        <div className="p-6 md:p-7">
          <div className="text-xs font-black uppercase tracking-[.16em] text-hospital-pink">{doctor.specialty[language]}</div>
          <h3 className="mt-2 text-2xl font-black text-hospital-navy">{doctor.name}</h3>
          <p className="mt-2 text-sm font-semibold leading-6 text-hospital-ink">{doctor.qualifications}</p>
          {!compact && <p className="mt-4 leading-7 text-hospital-muted">{doctor.summary[language]}</p>}
          <div className="mt-5 grid gap-2.5">
            {doctor.highlights.map((item) => (
              <div key={item.en} className="flex gap-2.5 text-sm leading-6 text-hospital-muted"><span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-hospital-tealSoft text-hospital-teal"><Icon name="check" className="h-3.5 w-3.5" /></span>{item[language]}</div>
            ))}
          </div>
          <a href="/appointment" className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-hospital-teal">{language === 'en' ? 'Request appointment' : 'अपॉइंटमेंट विनंती'} <Icon name="arrow" className="h-4 w-4" /></a>
        </div>
      </div>
    </article>
  )
}
