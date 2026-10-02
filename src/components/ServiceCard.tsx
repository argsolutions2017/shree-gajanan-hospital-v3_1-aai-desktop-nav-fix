import Icon from './Icon'
import type { Language, Service } from '../data/site'

export default function ServiceCard({ service, language }: { service: Service; language: Language }) {
  return (
    <a href={`/services/${service.slug}`} className="group card flex h-full flex-col p-6 transition duration-300 hover:-translate-y-1 hover:border-hospital-teal/40 hover:shadow-soft">
      <div className="flex items-start justify-between gap-4">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-hospital-tealSoft text-hospital-teal transition group-hover:bg-hospital-teal group-hover:text-white">
          <Icon name={service.icon} className="h-6 w-6" />
        </div>
        <span className="rounded-full bg-hospital-bg px-3 py-1 text-[10px] font-black uppercase tracking-widest text-hospital-muted">{service.category[language]}</span>
      </div>
      <h3 className="mt-5 text-xl font-black leading-tight text-hospital-navy">{service.title[language]}</h3>
      <p className="mt-3 flex-1 leading-7 text-hospital-muted">{service.short[language]}</p>
      <div className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-hospital-teal">{language === 'en' ? 'View service' : 'सेवा पहा'} <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" /></div>
    </a>
  )
}
