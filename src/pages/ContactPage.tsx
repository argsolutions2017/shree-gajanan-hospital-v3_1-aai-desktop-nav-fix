import Icon from '../components/Icon'
import PageHero from '../components/PageHero'
import {
  HOSPITAL_MAPS_URL,
  HOSPITAL_PHONE_DISPLAY,
  HOSPITAL_PHONE_TEL,
  hospitalAddress,
  opdHours,
  type Language,
  whatsappUrl,
} from '../data/site'

export default function ContactPage({ language }: { language: Language }) {
  const cards = [
    ['phone', language === 'en' ? 'Call Hospital' : 'हॉस्पिटलला फोन', HOSPITAL_PHONE_DISPLAY, `tel:${HOSPITAL_PHONE_TEL}`],
    ['message', 'WhatsApp', language === 'en' ? 'Appointment & general enquiry' : 'अपॉइंटमेंट व सामान्य चौकशी', whatsappUrl('GAJANAN HOSPITAL WEBSITE • CONTACT\n\nHello, I need assistance.')],
    ['clock', language === 'en' ? 'OPD Hours' : 'ओपीडी वेळा', opdHours[language], ''],
    ['map', language === 'en' ? 'Directions' : 'दिशा', language === 'en' ? 'Pandhurna Chowk, Warud' : 'पांढुर्णा चौक, वरुड', HOSPITAL_MAPS_URL],
  ] as const

  return (
    <>
      <PageHero
        eyebrow={language === 'en' ? 'Contact & directions' : 'संपर्क व दिशा'}
        title={language === 'en' ? 'Reach Shree Gajanan Hospital in Warud.' : 'वरुड येथील श्री गजानन हॉस्पिटलशी संपर्क साधा.'}
        description={hospitalAddress[language]}
      />

      <section className="section-pad bg-white">
        <div className="container-shell">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map(([icon, title, text, href]) => {
              const content = (
                <>
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-hospital-tealSoft text-hospital-teal">
                    <Icon name={icon as any} className="h-6 w-6" />
                  </span>
                  <h2 className="mt-5 text-lg font-black text-hospital-navy">{title}</h2>
                  <p className="mt-2 text-sm leading-6 text-hospital-muted">{text}</p>
                </>
              )

              if (!href) return <div key={title} className="card p-6">{content}</div>

              return (
                <a
                  key={title}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  className="card p-6 transition hover:-translate-y-1 hover:border-hospital-teal/40"
                >
                  {content}
                </a>
              )
            })}
          </div>

          <div className="mt-10 rounded-[32px] border border-hospital-line bg-hospital-bg p-7 md:flex md:items-center md:justify-between md:gap-8">
            <div>
              <div className="text-xs font-black uppercase tracking-widest text-hospital-pink">24×7 Emergency Care</div>
              <h2 className="mt-2 text-2xl font-black text-hospital-navy">
                {language === 'en' ? 'For urgent symptoms, call directly.' : 'तातडीच्या लक्षणांसाठी थेट फोन करा.'}
              </h2>
              <p className="mt-2 text-hospital-muted">
                {language === 'en' ? 'Do not wait for a WhatsApp response in an emergency.' : 'इमर्जन्सीमध्ये WhatsApp उत्तराची वाट पाहू नका.'}
              </p>
            </div>
            <a href={`tel:${HOSPITAL_PHONE_TEL}`} className="btn-primary mt-5 shrink-0 md:mt-0">
              <Icon name="phone" className="mr-2 h-5 w-5" />
              {HOSPITAL_PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
