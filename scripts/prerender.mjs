import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { dirname, join } from 'node:path'

const dist = new URL('../dist/', import.meta.url)
const baseHtml = await readFile(new URL('index.html', dist), 'utf8')
const siteUrl = 'https://gajananhospitalwarud.com'

const pages = [
  ['about', 'About Shree Gajanan Hospital | Warud', 'Learn about Shree Gajanan Hospital & Critical Care Center in Warud, its approach, medical services and critical-care support.'],
  ['doctors', 'Doctors at Shree Gajanan Hospital | Warud', 'Meet Dr. Kunal Arunrao Bijwe, Medicine & Critical Care, and Dr. Ashwini Kunal Bijwe, Anaesthesia, Critical Care & Pain, in Warud.'],
  ['services', 'Medical Services in Warud | Shree Gajanan Hospital', 'Explore general medicine, diabetes and BP care, heart and respiratory care, infectious disease, critical care, anaesthesia, pain and diagnostics in Warud.'],
  ['facilities', 'ICU & Diagnostic Facilities in Warud | Gajanan Hospital', 'Hospital facilities include ICU, ventilator, BiPAP, ECG, cardiac monitoring, 2D Echo, Color Doppler, TMT and PFT as available.'],
  ['health-tips', 'Health Tips | Shree Gajanan Hospital Warud', 'General patient education on diabetes care, heart-attack warning signs and urgent breathing symptoms from Shree Gajanan Hospital, Warud.'],
  ['appointment', 'Book Appointment | Shree Gajanan Hospital Warud', 'Request an appointment with Shree Gajanan Hospital in Warud using a structured WhatsApp appointment form.'],
  ['contact', 'Contact Shree Gajanan Hospital | Warud', 'Call, WhatsApp or get directions to Shree Gajanan Hospital & Critical Care Center, Pandhurna Chowk, Warud, Amravati.'],
  ['privacy', 'Privacy Notice | Shree Gajanan Hospital', 'Privacy notice for appointment enquiries submitted through the Shree Gajanan Hospital website and WhatsApp.'],
  ['services/general-medicine', 'General Medicine in Warud | Shree Gajanan Hospital', 'General medicine and chronic-care consultation in Warud for common adult illnesses, follow-up and ongoing medical management.'],
  ['services/diabetes-hypertension', 'Diabetes & Hypertension Care in Warud | Gajanan Hospital', 'Diabetes and high blood pressure monitoring, treatment review and follow-up at Shree Gajanan Hospital in Warud.'],
  ['services/heart-respiratory-care', 'Heart, Chest & Respiratory Care in Warud | Gajanan Hospital', 'Evaluation of chest symptoms, breathlessness, heart risk, asthma and respiratory complaints with available cardiac and pulmonary diagnostics in Warud.'],
  ['services/fever-infectious-disease', 'Fever & Infectious Disease Care in Warud | Gajanan Hospital', 'Medical assessment and treatment support for fever, dengue, malaria and other infectious illnesses in Warud.'],
  ['services/emergency-critical-care', 'Emergency & Critical Care in Warud | Gajanan Hospital', '24×7 emergency-care availability with ICU, ventilator, BiPAP and cardiac monitoring support at Shree Gajanan Hospital, Warud.'],
  ['services/anaesthesia-pain-care', 'Anaesthesia & Pain Care in Warud | Gajanan Hospital', 'Pre-anaesthesia evaluation, perioperative support and pain-care consultation at Shree Gajanan Hospital in Warud.'],
  ['services/diagnostics-health-check', 'Diagnostics & Health Check in Warud | Gajanan Hospital', 'ECG, PFT, 2D Echo, Color Doppler, TMT and health-check support as available at Shree Gajanan Hospital in Warud.'],
]

const escapeHtml = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')

function pageHtml(path, title, description) {
  const canonical = `${siteUrl}/${path}`
  const schema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': path.startsWith('services/') ? 'MedicalWebPage' : 'WebPage',
    name: title,
    description,
    url: canonical,
    isPartOf: { '@type': 'WebSite', name: 'Shree Gajanan Hospital & Critical Care Center', url: siteUrl },
  })

  return baseHtml
    .replace(/<title>.*?<\/title>/s, `<title>${escapeHtml(title)}</title>`)
    .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${escapeHtml(description)}" />`)
    .replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${canonical}" />`)
    .replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${escapeHtml(title)}" />`)
    .replace(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${escapeHtml(description)}" />`)
    .replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${canonical}" />`)
    .replace(/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${escapeHtml(title)}" />`)
    .replace(/<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${escapeHtml(description)}" />`)
    .replace(/<script id="page-jsonld" type="application\/ld\+json">.*?<\/script>/s, `<script id="page-jsonld" type="application/ld+json">${schema}</script>`)
}

for (const [path, title, description] of pages) {
  const target = join(dist.pathname, `${path}.html`)
  await mkdir(dirname(target), { recursive: true })
  await writeFile(target, pageHtml(path, title, description), 'utf8')
}

console.log(`Prerendered ${pages.length} SEO route shells.`)
