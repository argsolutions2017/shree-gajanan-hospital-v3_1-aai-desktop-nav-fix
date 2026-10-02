import { useEffect, useMemo, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import MobileActionBar from './components/MobileActionBar'
import WhatsAppAssistant from './components/WhatsAppAssistant'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import DoctorsPage from './pages/DoctorsPage'
import ServicesPage from './pages/ServicesPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import FacilitiesPage from './pages/FacilitiesPage'
import HealthTipsPage from './pages/HealthTipsPage'
import AppointmentPage from './pages/AppointmentPage'
import ContactPage from './pages/ContactPage'
import PrivacyPage from './pages/PrivacyPage'
import NotFoundPage from './pages/NotFoundPage'
import { SITE_NAME, SITE_URL, hospitalAddress, services, type Language } from './data/site'

type Seo = { title: string; description: string; canonical: string; type?: 'website' | 'article' }

function updateMeta(seo: Seo, pageSchema?: Record<string, unknown>) {
  document.title = seo.title
  document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute('content', seo.description)
  document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute('href', seo.canonical)
  document.querySelector<HTMLMetaElement>('meta[property="og:title"]')?.setAttribute('content', seo.title)
  document.querySelector<HTMLMetaElement>('meta[property="og:description"]')?.setAttribute('content', seo.description)
  document.querySelector<HTMLMetaElement>('meta[property="og:url"]')?.setAttribute('content', seo.canonical)
  document.querySelector<HTMLMetaElement>('meta[property="og:type"]')?.setAttribute('content', seo.type ?? 'website')
  document.querySelector<HTMLMetaElement>('meta[name="twitter:title"]')?.setAttribute('content', seo.title)
  document.querySelector<HTMLMetaElement>('meta[name="twitter:description"]')?.setAttribute('content', seo.description)

  const node = document.getElementById('page-jsonld') as HTMLScriptElement | null
  if (node) {
    node.textContent = JSON.stringify(pageSchema ?? {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: seo.title,
      description: seo.description,
      url: seo.canonical,
      isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_URL },
    })
  }
}

export default function App() {
  const [language, setLanguage] = useState<Language>(() => localStorage.getItem('clinic-lang') === 'mr' ? 'mr' : 'en')
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  const serviceSlug = path.startsWith('/services/') ? path.split('/')[2] : undefined
  const service = serviceSlug ? services.find((item) => item.slug === serviceSlug) : undefined

  const seo = useMemo<Seo>(() => {
    if (service) return {
      title: `${service.title.en} in Warud | Shree Gajanan Hospital`,
      description: `${service.short.en} Shree Gajanan Hospital & Critical Care Center, Warud. Call or request an appointment on WhatsApp.`,
      canonical: `${SITE_URL}/services/${service.slug}`,
    }
    const map: Record<string, Seo> = {
      '/': { title: 'Shree Gajanan Hospital & Critical Care Center | Warud', description: 'Medicine, diabetes, critical care, anaesthesia, pain care, ICU support and selected diagnostics in Warud, Amravati. Request appointments by WhatsApp.', canonical: `${SITE_URL}/` },
      '/about': { title: 'About Shree Gajanan Hospital | Warud', description: 'Learn about Shree Gajanan Hospital & Critical Care Center in Warud, its approach, medical services and critical-care support.', canonical: `${SITE_URL}/about` },
      '/doctors': { title: 'Doctors at Shree Gajanan Hospital | Warud', description: 'Meet Dr. Kunal Arunrao Bijwe, Medicine & Critical Care, and Dr. Ashwini Kunal Bijwe, Anaesthesia, Critical Care & Pain, in Warud.', canonical: `${SITE_URL}/doctors` },
      '/services': { title: 'Medical Services in Warud | Shree Gajanan Hospital', description: 'Explore general medicine, diabetes and BP care, heart and respiratory care, infectious disease, critical care, anaesthesia, pain and diagnostics in Warud.', canonical: `${SITE_URL}/services` },
      '/facilities': { title: 'ICU & Diagnostic Facilities in Warud | Gajanan Hospital', description: 'Hospital facilities include ICU, ventilator, BiPAP, ECG, cardiac monitoring, 2D Echo, Color Doppler, TMT and PFT as available.', canonical: `${SITE_URL}/facilities` },
      '/health-tips': { title: 'Health Tips | Shree Gajanan Hospital Warud', description: 'General patient education on diabetes care, heart-attack warning signs and urgent breathing symptoms from Shree Gajanan Hospital, Warud.', canonical: `${SITE_URL}/health-tips` },
      '/appointment': { title: 'Book Appointment | Shree Gajanan Hospital Warud', description: 'Request an appointment with Shree Gajanan Hospital in Warud using a structured WhatsApp appointment form.', canonical: `${SITE_URL}/appointment` },
      '/contact': { title: 'Contact Shree Gajanan Hospital | Warud', description: `Call, WhatsApp or get directions to Shree Gajanan Hospital & Critical Care Center, ${hospitalAddress.en}.`, canonical: `${SITE_URL}/contact` },
      '/privacy': { title: 'Privacy Notice | Shree Gajanan Hospital', description: 'Privacy notice for appointment enquiries submitted through the Shree Gajanan Hospital website and WhatsApp.', canonical: `${SITE_URL}/privacy` },
    }
    return map[path] ?? { title: 'Page not found | Shree Gajanan Hospital', description: 'The requested page could not be found.', canonical: `${SITE_URL}${path}` }
  }, [path, service])

  useEffect(() => {
    document.documentElement.lang = language === 'mr' ? 'mr' : 'en'
    localStorage.setItem('clinic-lang', language)
  }, [language])

  useEffect(() => {
    if (service) {
      updateMeta(seo, {
        '@context': 'https://schema.org',
        '@type': 'MedicalWebPage',
        name: seo.title,
        description: seo.description,
        url: seo.canonical,
        about: { '@type': 'MedicalTherapy', name: service.title.en },
        provider: { '@type': 'MedicalClinic', name: SITE_NAME, url: SITE_URL },
      })
    } else updateMeta(seo)
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [seo, service])

  let page
  if (path === '/') page = <HomePage language={language} />
  else if (path === '/about') page = <AboutPage language={language} />
  else if (path === '/doctors') page = <DoctorsPage language={language} />
  else if (path === '/services') page = <ServicesPage language={language} />
  else if (service) page = <ServiceDetailPage service={service} language={language} />
  else if (path === '/facilities') page = <FacilitiesPage language={language} />
  else if (path === '/health-tips') page = <HealthTipsPage language={language} />
  else if (path === '/appointment') page = <AppointmentPage language={language} />
  else if (path === '/contact') page = <ContactPage language={language} />
  else if (path === '/privacy') page = <PrivacyPage language={language} />
  else page = <NotFoundPage language={language} />

  return <>
    <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:font-bold focus:text-hospital-navy">Skip to content</a>
    <Header language={language} onToggleLanguage={() => setLanguage((current) => current === 'en' ? 'mr' : 'en')} />
    <main id="main-content">{page}</main>
    <Footer language={language} />
    <WhatsAppAssistant language={language} />
    <MobileActionBar language={language} />
  </>
}
