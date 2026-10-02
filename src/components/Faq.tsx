import { useState } from 'react'
import type { Language, Localized } from '../data/site'

export default function Faq({ items, language }: { items: { q: Localized; a: Localized }[]; language: Language }) {
  const [open, setOpen] = useState(0)
  return <div className="divide-y divide-hospital-line overflow-hidden rounded-3xl border border-hospital-line bg-white shadow-card">
    {items.map((item, index) => (
      <div key={item.q.en}>
        <button onClick={() => setOpen(open === index ? -1 : index)} className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-extrabold text-hospital-navy md:px-6" aria-expanded={open === index}>
          <span>{item.q[language]}</span><span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full bg-hospital-tealSoft text-hospital-teal transition ${open === index ? 'rotate-45' : ''}`}>+</span>
        </button>
        {open === index && <div className="px-5 pb-5 leading-7 text-hospital-muted md:px-6">{item.a[language]}</div>}
      </div>
    ))}
  </div>
}
