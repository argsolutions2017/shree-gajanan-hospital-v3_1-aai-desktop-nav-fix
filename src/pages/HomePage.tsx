import AppointmentForm from '../components/AppointmentForm'
import DoctorCard from '../components/DoctorCard'
import Faq from '../components/Faq'
import Icon from '../components/Icon'
import ServiceCard from '../components/ServiceCard'
import WhatsAppAssistant from '../components/WhatsAppAssistant'
import { doctors, facilities, HOSPITAL_MAPS_URL, HOSPITAL_PHONE_TEL, homeFaqs, hospitalAddress, opdHours, services, type Language } from '../data/site'

export default function HomePage({ language }: { language: Language }) {
  return <>
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_84%_18%,rgba(15,118,110,.17),transparent_32%),linear-gradient(135deg,#f8fcfc_0%,#ffffff_54%,#fff3f7_100%)]">
      <div className="absolute -left-28 top-28 h-80 w-80 rounded-full border-[54px] border-hospital-teal/5" />
      <div className="container-shell relative grid items-center gap-10 py-14 lg:grid-cols-[1.06fr_.94fr] lg:py-20">
        <div>
          <div className="eyebrow"><span className="h-2 w-2 rounded-full bg-hospital-pink" />{language === 'en' ? 'Trusted care in Warud' : 'वरुडमधील विश्वासार्ह आरोग्यसेवा'}</div>
          <h1 className="max-w-3xl text-4xl font-black leading-[1.03] tracking-[-.045em] text-hospital-navy sm:text-5xl lg:text-[64px]">
            {language === 'en' ? <>Expert medical care, <span className="text-hospital-teal">close to home.</span></> : <>तज्ज्ञ वैद्यकीय सेवा, <span className="text-hospital-teal">आपल्या जवळ.</span></>}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-hospital-muted">{language === 'en' ? 'Medicine, diabetes, critical care, anaesthesia, pain care and selected diagnostic services led by experienced doctors in Warud.' : 'वरुड येथे मेडिसिन, मधुमेह, क्रिटिकल केअर, भूल, वेदना व्यवस्थापन व निवडक निदान सेवा.'}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="/appointment" className="btn-primary"><Icon name="calendar" className="mr-2 h-5 w-5" />{language === 'en' ? 'Request Appointment' : 'अपॉइंटमेंट विनंती'}</a>
            <a href={`tel:${HOSPITAL_PHONE_TEL}`} className="btn-secondary"><Icon name="phone" className="mr-2 h-5 w-5" />{language === 'en' ? 'Call Hospital' : 'हॉस्पिटलला फोन'}</a>
          </div>
          <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
            <div className="trust-chip"><Icon name="emergency" className="h-5 w-5 text-hospital-pink"/><span><strong>24×7</strong><small>{language === 'en' ? 'Emergency care' : 'अत्यावश्यक सेवा'}</small></span></div>
            <div className="trust-chip"><Icon name="clock" className="h-5 w-5 text-hospital-teal"/><span><strong>{language === 'en' ? 'OPD' : 'ओपीडी'}</strong><small>{opdHours[language]}</small></span></div>
            <div className="trust-chip"><Icon name="map" className="h-5 w-5 text-hospital-teal"/><span><strong>Warud</strong><small>{language === 'en' ? 'Amravati district' : 'अमरावती जिल्हा'}</small></span></div>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[560px]">
          <div className="absolute -inset-5 rounded-[36px] bg-gradient-to-br from-hospital-teal/12 to-hospital-pink/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-[32px] border border-white bg-white p-4 shadow-soft sm:p-5">
            <div className="rounded-[26px] bg-hospital-bg p-5 sm:p-7">
              <div className="flex items-start gap-4">
                <img src="/images/hospital-logo-brochure.webp" alt="Shree Gajanan Hospital & Critical Care Center logo" className="h-24 w-32 shrink-0 object-contain sm:h-28 sm:w-40" width="320" height="220" />
                <div className="pt-2"><div className="text-xs font-black uppercase tracking-[.16em] text-hospital-teal">Shree Gajanan Hospital</div><div className="mt-1 text-2xl font-black leading-tight text-hospital-navy">Critical Care Center</div><div className="mt-2 text-sm font-semibold text-hospital-muted">Pandhurna Chowk • Warud</div></div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {doctors.map((doctor) => <div key={doctor.name} className="overflow-hidden rounded-2xl border border-hospital-line bg-white"><img src={doctor.image} alt={doctor.name} className="h-36 w-full object-cover object-top" width="320" height="320"/><div className="p-3"><div className="text-sm font-black text-hospital-navy">{doctor.name.replace('Dr. ', 'Dr. ')}</div><div className="mt-1 text-[11px] font-bold leading-4 text-hospital-teal">{doctor.specialty[language]}</div></div></div>)}
              </div>
              <a href="/doctors" className="mt-4 flex items-center justify-center gap-2 rounded-2xl border border-hospital-line bg-white px-4 py-3 text-sm font-extrabold text-hospital-navy hover:border-hospital-teal/40 hover:text-hospital-teal">{language === 'en' ? 'Meet our doctors' : 'आमचे डॉक्टर'}<Icon name="arrow" className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section-pad bg-white">
      <div className="container-shell">
        <div className="grid gap-6 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
          <div><div className="eyebrow">{language === 'en' ? 'Our services' : 'आमच्या सेवा'}</div><h2 className="section-title">{language === 'en' ? 'Focused care across medicine, critical care and anaesthesia.' : 'मेडिसिन, क्रिटिकल केअर व भूल क्षेत्रातील केंद्रित सेवा.'}</h2></div>
          <p className="max-w-2xl leading-7 text-hospital-muted lg:justify-self-end">{language === 'en' ? 'Explore service-specific pages with clear information on common reasons to visit, available support and how to contact the hospital.' : 'भेटीची कारणे, उपलब्ध सहाय्य आणि हॉस्पिटलशी संपर्क कसा करावा यासाठी सेवा-विशिष्ट माहिती पहा.'}</p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{services.slice(0,6).map(service => <ServiceCard key={service.slug} service={service} language={language} />)}</div>
        <div className="mt-8 text-center"><a href="/services" className="btn-secondary">{language === 'en' ? 'View all services' : 'सर्व सेवा पहा'}<Icon name="arrow" className="ml-2 h-4 w-4"/></a></div>
      </div>
    </section>

    <section className="section-pad bg-hospital-bg">
      <div className="container-shell">
        <div className="text-center"><div className="eyebrow">{language === 'en' ? 'Our doctors' : 'आमचे डॉक्टर'}</div><h2 className="section-title mx-auto max-w-2xl">{language === 'en' ? 'Experienced care with a personal approach.' : 'अनुभवी तज्ज्ञांकडून वैयक्तिक काळजी.'}</h2></div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">{doctors.map(doctor => <DoctorCard key={doctor.name} doctor={doctor} language={language} compact />)}</div>
      </div>
    </section>

    <section className="section-pad bg-white">
      <div className="container-shell grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
        <div className="lg:sticky lg:top-32"><div className="eyebrow">{language === 'en' ? 'Facilities' : 'सुविधा'}</div><h2 className="section-title">{language === 'en' ? 'Critical-care and diagnostic support when it matters.' : 'गरजेच्या वेळी क्रिटिकल केअर व निदान सुविधा.'}</h2><p className="mt-5 max-w-xl leading-7 text-hospital-muted">{language === 'en' ? 'The hospital lists ICU, ventilator/BiPAP, cardiac monitoring and selected diagnostic facilities. Call ahead for test availability.' : 'हॉस्पिटलमध्ये ICU, व्हेंटिलेटर/BiPAP, कार्डियाक मॉनिटरिंग व निवडक निदान सुविधा नमूद आहेत. तपासणी उपलब्धतेसाठी फोन करा.'}</p><a href="/facilities" className="btn-secondary mt-6">{language === 'en' ? 'Explore facilities' : 'सुविधा पहा'}<Icon name="arrow" className="ml-2 h-4 w-4"/></a></div>
        <div className="grid gap-4 sm:grid-cols-2">{facilities.map(([badge, icon, text]) => <div key={badge} className="rounded-3xl border border-hospital-line bg-white p-5 shadow-card"><div className="flex items-center gap-4"><span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-hospital-tealSoft text-hospital-teal"><Icon name={icon as any} className="h-6 w-6"/></span><div><div className="text-xs font-black uppercase tracking-widest text-hospital-pink">{badge}</div><div className="mt-1 font-extrabold leading-6 text-hospital-navy">{text[language]}</div></div></div></div>)}</div>
      </div>
    </section>

    <section className="section-pad bg-hospital-navy text-white">
      <div className="container-shell grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
        <div><div className="text-xs font-black uppercase tracking-[.16em] text-hospital-tealSoft">WhatsApp</div><h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">{language === 'en' ? 'Faster appointment coordination.' : 'जलद अपॉइंटमेंट समन्वय.'}</h2><p className="mt-4 max-w-xl leading-7 text-white/70">{language === 'en' ? 'Choose an enquiry type or send a structured appointment request. Hospital staff confirm availability manually, while WhatsApp Business can acknowledge new messages automatically.' : 'विषय निवडा किंवा संरचित अपॉइंटमेंट विनंती पाठवा. उपलब्धता हॉस्पिटल स्टाफ निश्चित करेल; WhatsApp Business नवीन संदेशांना ऑटो-अॅक्नॉलेज करू शकते.'}</p></div>
        <WhatsAppAssistant language={language} embedded />
      </div>
    </section>

    <section className="section-pad bg-white">
      <div className="container-shell grid gap-10 lg:grid-cols-2">
        <div><div className="eyebrow">{language === 'en' ? 'Appointments' : 'अपॉइंटमेंट'}</div><h2 className="section-title">{language === 'en' ? 'Request a convenient visit time.' : 'सोयीची भेट वेळ मागवा.'}</h2><p className="mt-4 leading-7 text-hospital-muted">{language === 'en' ? 'The form does not store patient information in a hospital website database. Details are transferred to WhatsApp only after you choose to continue.' : 'हा फॉर्म रुग्ण माहिती वेबसाइट डेटाबेसमध्ये साठवत नाही. आपण पुढे जाण्याचे निवडल्यानंतरच माहिती WhatsApp वर पाठवली जाते.'}</p><div className="mt-6 rounded-3xl bg-hospital-pinkSoft p-5 text-sm leading-7 text-hospital-ink"><strong>{language === 'en' ? 'Emergency note:' : 'इमर्जन्सी सूचना:'}</strong> {language === 'en' ? 'For severe chest pain, sudden breathlessness, unconsciousness or rapidly worsening symptoms, call the hospital directly or seek the nearest emergency service.' : 'तीव्र छातीदुखी, अचानक धाप, बेशुद्धी किंवा प्रकृती झपाट्याने बिघडल्यास थेट हॉस्पिटलला फोन करा किंवा जवळच्या आपत्कालीन सेवेकडे जा.'}</div></div>
        <AppointmentForm language={language} />
      </div>
    </section>

    <section className="section-pad bg-hospital-bg">
      <div className="container-shell grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
        <div><div className="eyebrow">FAQ</div><h2 className="section-title">{language === 'en' ? 'Useful information before your visit.' : 'भेटीपूर्वी उपयुक्त माहिती.'}</h2></div>
        <Faq items={homeFaqs} language={language} />
      </div>
    </section>

    <section className="bg-white py-10">
      <div className="container-shell grid gap-4 rounded-[32px] border border-hospital-line bg-hospital-tealSoft p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
        <div><h2 className="text-2xl font-black text-hospital-navy">{language === 'en' ? 'Find us in Warud' : 'वरुडमध्ये आम्हाला भेटा'}</h2><p className="mt-2 leading-7 text-hospital-muted">{hospitalAddress[language]}</p></div>
        <a href={HOSPITAL_MAPS_URL} target="_blank" rel="noreferrer" className="btn-primary"><Icon name="map" className="mr-2 h-5 w-5"/>{language === 'en' ? 'Get Directions' : 'दिशा पहा'}</a>
      </div>
    </section>
  </>
}
