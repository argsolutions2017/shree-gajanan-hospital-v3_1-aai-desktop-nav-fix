import PageHero from '../components/PageHero'
import ServiceCard from '../components/ServiceCard'
import { services, type Language } from '../data/site'

export default function ServicesPage({ language }: { language: Language }) {
  return <><PageHero eyebrow={language === 'en' ? 'Clinical services' : 'वैद्यकीय सेवा'} title={language === 'en' ? 'Service-oriented care with clear information for patients.' : 'रुग्णांसाठी स्पष्ट माहितीसह सेवा-केंद्रित आरोग्यसेवा.'} description={language === 'en' ? 'Explore individual service pages for common reasons to visit, available facilities, warning signs and appointment options.' : 'भेटीची कारणे, उपलब्ध सुविधा, गंभीर लक्षणे आणि अपॉइंटमेंट पर्यायांसाठी स्वतंत्र सेवा पृष्ठे पहा.'}/><section className="section-pad bg-white"><div className="container-shell grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{services.map(service => <ServiceCard key={service.slug} service={service} language={language}/>)}</div></section></>
}
