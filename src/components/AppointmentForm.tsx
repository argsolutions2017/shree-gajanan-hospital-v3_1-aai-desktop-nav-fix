import { FormEvent, useState } from 'react'
import Icon from './Icon'
import { doctors, type Language, whatsappUrl } from '../data/site'

export default function AppointmentForm({ language }: { language: Language }) {
  const [consent, setConsent] = useState(false)
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const message = [
      'GAJANAN HOSPITAL WEBSITE • APPOINTMENT',
      '',
      `Patient Name: ${data.get('name') || '-'}`,
      `Mobile: ${data.get('mobile') || '-'}`,
      `Preferred Doctor: ${data.get('doctor') || '-'}`,
      `Preferred Date: ${data.get('date') || '-'}`,
      `Preferred Time: ${data.get('time') || '-'}`,
      `Visit Type: ${data.get('reason') || 'General consultation'}`,
      '',
      'Please confirm the available appointment time.',
      'Website: https://gajananhospitalwarud.com',
    ].join('\n')
    window.open(whatsappUrl(message), '_blank', 'noopener,noreferrer')
  }

  return <form onSubmit={submit} className="card p-6 md:p-8">
    <div className="grid gap-5 sm:grid-cols-2">
      <label className="sm:col-span-2"><span className="label">{language === 'en' ? 'Patient name' : 'रुग्णाचे नाव'}</span><input className="field" name="name" required autoComplete="name" /></label>
      <label><span className="label">{language === 'en' ? 'Mobile number' : 'मोबाईल नंबर'}</span><input className="field" name="mobile" required inputMode="tel" autoComplete="tel" pattern="[0-9+ -]{8,15}" /></label>
      <label><span className="label">{language === 'en' ? 'Preferred doctor' : 'डॉक्टर निवडा'}</span><select className="field" name="doctor" required defaultValue=""><option value="" disabled>{language === 'en' ? 'Select doctor' : 'डॉक्टर निवडा'}</option>{doctors.map(d => <option key={d.name}>{d.name}</option>)}</select></label>
      <label><span className="label">{language === 'en' ? 'Preferred date' : 'तारीख'}</span><input className="field" type="date" name="date" required min={new Date().toISOString().slice(0,10)} /></label>
      <label><span className="label">{language === 'en' ? 'Preferred time' : 'वेळ'}</span><select className="field" name="time" defaultValue=""><option value="">{language === 'en' ? 'Any available time' : 'उपलब्ध कोणतीही वेळ'}</option><option>11:00 AM–1:00 PM</option><option>1:00 PM–4:00 PM</option><option>6:00 PM–9:00 PM</option></select></label>
      <label className="sm:col-span-2"><span className="label">{language === 'en' ? 'Visit type (optional)' : 'भेटीचे कारण (ऐच्छिक)'}</span><select className="field" name="reason" defaultValue="General consultation"><option>General consultation</option><option>Follow-up visit</option><option>Diabetes / BP review</option><option>Fever / infection</option><option>Pre-anaesthesia consultation</option><option>Pain consultation</option><option>Diagnostics enquiry</option><option>Other</option></select></label>
    </div>
    <label className="mt-5 flex items-start gap-3 rounded-2xl bg-hospital-bg p-4 text-sm leading-6 text-hospital-muted"><input type="checkbox" checked={consent} onChange={e => setConsent(e.target.checked)} className="mt-1 h-4 w-4 accent-hospital-teal" required /><span>{language === 'en' ? 'I agree to transfer these appointment details to WhatsApp for coordination with the hospital. I will not include detailed medical records in this form.' : 'अपॉइंटमेंट समन्वयासाठी ही माहिती WhatsApp वर पाठवण्यास मी सहमत आहे. या फॉर्ममध्ये तपशीलवार वैद्यकीय नोंदी देणार नाही.'}</span></label>
    <button disabled={!consent} className="btn-primary mt-5 w-full disabled:cursor-not-allowed disabled:opacity-50"><Icon name="message" className="mr-2 h-5 w-5" />{language === 'en' ? 'Continue to WhatsApp' : 'WhatsApp वर पुढे जा'}</button>
    <p className="mt-3 text-center text-xs leading-5 text-hospital-muted">{language === 'en' ? 'Submitting does not confirm an appointment. The hospital team will confirm availability.' : 'फॉर्म पाठवल्याने अपॉइंटमेंट निश्चित होत नाही. उपलब्धता हॉस्पिटल टीम कळवेल.'}</p>
  </form>
}
