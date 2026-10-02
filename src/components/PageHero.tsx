import type { ReactNode } from 'react'

export default function PageHero({ eyebrow, title, description, children }: { eyebrow: string; title: string; description: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-hospital-line bg-[radial-gradient(circle_at_85%_20%,rgba(15,118,110,.13),transparent_34%),linear-gradient(135deg,#f7fbfb_0%,#ffffff_62%,#fff4f8_100%)]">
      <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full border-[42px] border-hospital-teal/5" />
      <div className="container-shell relative py-14 md:py-18 lg:py-20">
        <div className="max-w-3xl">
          <div className="eyebrow">{eyebrow}</div>
          <h1 className="text-4xl font-black leading-[1.08] tracking-[-.035em] text-hospital-navy md:text-5xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-hospital-muted">{description}</p>
          {children && <div className="mt-7 flex flex-wrap gap-3">{children}</div>}
        </div>
      </div>
    </section>
  )
}
