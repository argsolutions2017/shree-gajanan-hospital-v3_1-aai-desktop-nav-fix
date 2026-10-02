export type Language = 'en' | 'mr'
export type Localized = { en: string; mr: string }

export const SITE_URL = 'https://gajananhospitalwarud.com'
export const SITE_NAME = 'Shree Gajanan Hospital & Critical Care Center'
export const SHORT_NAME = 'Gajanan Hospital Warud'
export const HOSPITAL_PHONE_DISPLAY = '+91 95270 59133'
export const HOSPITAL_PHONE_TEL = '+919527059133'
export const WHATSAPP_NUMBER = '919527059133'
export const HOSPITAL_MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Shree+Gajanan+Hospital+%26+critical+care+centre%2C+Warud&query_place_id=ChIJCVqqNufL1TsREIRbCayCYWY'

export const hospitalAddress: Localized = {
  en: 'C/o Arihant Hospital, Dr. Rupali Jain Clinic, Pandhurna Chowk, Warud, Dist. Amravati, Maharashtra 444906',
  mr: 'अरिहंत हॉस्पिटल, डॉ. रुपाली जैन यांच्या दवाखान्यात, पांढुर्णा चौक, वरुड, जि. अमरावती, महाराष्ट्र 444906',
}

export const opdHours: Localized = {
  en: '11:00 AM–4:00 PM & 6:00 PM–9:00 PM',
  mr: 'सकाळी ११ ते ४ व सायं. ६ ते ९',
}

export const doctors = [
  {
    slug: 'dr-kunal-arunrao-bijwe',
    name: 'Dr. Kunal Arunrao Bijwe',
    image: '/images/dr-kunal-bijwe.webp',
    specialty: { en: 'Medicine & Critical Care', mr: 'मेडिसिन व क्रिटिकल केअर' },
    qualifications: 'M.B.B.S., M.D. (Medicine), Nag. • IDCCM (Mumbai) • Fellowship in Diabetes (UK) • CCID (Infectious Disease)',
    registration: '2015/05/2847',
    summary: {
      en: 'Physician focused on general medicine, diabetes, hypertension, infections and critical-care evaluation.',
      mr: 'सामान्य वैद्यक, मधुमेह, रक्तदाब, संसर्ग व क्रिटिकल केअर तपासणीवर लक्ष केंद्रित करणारे फिजिशियन.',
    },
    highlights: [
      { en: 'General medicine & chronic disease management', mr: 'सामान्य वैद्यक व दीर्घकालीन आजार' },
      { en: 'Diabetes, hypertension & cardiac risk care', mr: 'मधुमेह, रक्तदाब व हृदयरोग जोखीम व्यवस्थापन' },
      { en: 'Critical care and infectious disease management', mr: 'अतिदक्षता व संसर्गजन्य आजार व्यवस्थापन' },
    ],
  },
  {
    slug: 'dr-ashwini-kunal-bijwe',
    name: 'Dr. Ashwini Kunal Bijwe',
    image: '/images/dr-ashwini-bijwe.webp',
    specialty: { en: 'Anaesthesia • Critical Care • Pain', mr: 'भूल • क्रिटिकल केअर • वेदना' },
    qualifications: 'M.B.B.S., M.D. (Anaesthesia) • Critical Care & Pain • Tata Memorial Hospital, Mumbai',
    registration: '2017/09/4378',
    summary: {
      en: 'Anaesthesiologist providing pre-anaesthesia evaluation, perioperative support, critical care and pain-care services.',
      mr: 'ऑपरेशनपूर्व भूल तपासणी, पेरिऑपरेटिव्ह सपोर्ट, क्रिटिकल केअर व वेदना व्यवस्थापन सेवा देणाऱ्या भूलतज्ज्ञ.',
    },
    highlights: [
      { en: 'Pre-anaesthesia evaluation and fitness', mr: 'ऑपरेशनपूर्व तपासणी व फिटनेस' },
      { en: 'Critical care support', mr: 'क्रिटिकल केअर सपोर्ट' },
      { en: 'Pain and perioperative care', mr: 'वेदना व पेरिऑपरेटिव्ह केअर' },
    ],
  },
] as const

export type Service = {
  slug: string
  icon: 'stethoscope' | 'droplet' | 'heart' | 'shield' | 'activity' | 'syringe' | 'scan'
  category: Localized
  title: Localized
  short: Localized
  intro: Localized
  bullets: Localized[]
  whenToSeek: Localized[]
  faq: { q: Localized; a: Localized }[]
  keywords: string
}

export const services: Service[] = [
  {
    slug: 'general-medicine', icon: 'stethoscope', category: { en: 'Medicine', mr: 'मेडिसिन' },
    title: { en: 'General Medicine & Chronic Care', mr: 'सामान्य वैद्यक व दीर्घकालीन आजार' },
    short: { en: 'Evaluation and ongoing management for common adult illnesses and chronic health conditions.', mr: 'प्रौढांमधील सामान्य आजार व दीर्घकालीन आरोग्य समस्यांचे मूल्यमापन व उपचार.' },
    intro: { en: 'Consultation for common adult medical problems with a focus on careful evaluation, appropriate testing, treatment planning and follow-up.', mr: 'प्रौढांमधील सामान्य वैद्यकीय समस्यांसाठी तपासणी, आवश्यक चाचण्या, उपचार नियोजन व फॉलो-अप.' },
    bullets: [
      { en: 'Fever, weakness, body ache and common medical complaints', mr: 'ताप, अशक्तपणा, अंगदुखी व सामान्य तक्रारी' },
      { en: 'Long-term condition follow-up and medication review', mr: 'दीर्घकालीन आजारांचा फॉलो-अप व औषध पुनरावलोकन' },
      { en: 'General health evaluation and preventive guidance', mr: 'सामान्य आरोग्य तपासणी व प्रतिबंधात्मक मार्गदर्शन' },
    ],
    whenToSeek: [
      { en: 'Persistent fever, unusual weakness or symptoms that are not improving', mr: 'सतत ताप, असामान्य अशक्तपणा किंवा कमी न होणारी लक्षणे' },
      { en: 'Need for review of chronic medications or test reports', mr: 'दीर्घकालीन औषधे किंवा तपासणी अहवालांचे पुनरावलोकन' },
    ],
    faq: [
      { q: { en: 'Do I need an appointment?', mr: 'अपॉइंटमेंट आवश्यक आहे का?' }, a: { en: 'Walk-in availability can vary. A WhatsApp appointment request helps the hospital team plan your visit.', mr: 'वॉक-इन उपलब्धता बदलू शकते. WhatsApp वर अपॉइंटमेंट विनंती केल्यास भेट नियोजन सुलभ होते.' } },
    ], keywords: 'general physician Warud, medicine doctor Warud, general medicine Amravati'
  },
  {
    slug: 'diabetes-hypertension', icon: 'droplet', category: { en: 'Medicine', mr: 'मेडिसिन' },
    title: { en: 'Diabetes & Hypertension Care', mr: 'मधुमेह व रक्तदाब उपचार' },
    short: { en: 'Monitoring, treatment review and lifestyle guidance for diabetes and high blood pressure.', mr: 'मधुमेह व उच्च रक्तदाबासाठी तपासणी, उपचार पुनरावलोकन व जीवनशैली मार्गदर्शन.' },
    intro: { en: 'Structured follow-up for diabetes and hypertension, including review of symptoms, readings, medicines and relevant investigations.', mr: 'मधुमेह व रक्तदाबासाठी लक्षणे, रीडिंग्स, औषधे व आवश्यक तपासण्यांचा नियमित फॉलो-अप.' },
    bullets: [
      { en: 'Blood sugar and blood pressure review', mr: 'रक्तातील साखर व रक्तदाब तपासणी' },
      { en: 'Medication and follow-up planning', mr: 'औषधे व फॉलो-अप नियोजन' },
      { en: 'Risk-factor and lifestyle counselling', mr: 'जोखीम घटक व जीवनशैली मार्गदर्शन' },
    ],
    whenToSeek: [
      { en: 'Repeated high sugar or blood-pressure readings', mr: 'वारंवार वाढलेली साखर किंवा रक्तदाब' },
      { en: 'Dizziness, swelling, unusual fatigue or medication concerns', mr: 'चक्कर, सूज, जास्त थकवा किंवा औषधांबद्दल शंका' },
    ],
    faq: [{ q: { en: 'Should I bring previous reports?', mr: 'जुने रिपोर्ट आणावेत का?' }, a: { en: 'Yes. Bring recent blood tests, prescriptions and home sugar/BP readings if available.', mr: 'हो. उपलब्ध असल्यास अलीकडील रक्त तपासण्या, प्रिस्क्रिप्शन व घरचे साखर/BP रीडिंग्स आणा.' } }],
    keywords: 'diabetes doctor Warud, BP doctor Warud, hypertension treatment Warud'
  },
  {
    slug: 'heart-respiratory-care', icon: 'heart', category: { en: 'Medicine', mr: 'मेडिसिन' },
    title: { en: 'Heart, Chest & Respiratory Care', mr: 'हृदय, छाती व श्वसन विकार' },
    short: { en: 'Evaluation of heart-risk symptoms, blood pressure, asthma, TB and respiratory complaints.', mr: 'हृदयविकार जोखीम लक्षणे, रक्तदाब, दमा, टीबी व श्वसन तक्रारींचे मूल्यमापन.' },
    intro: { en: 'Medical assessment for chest symptoms, breathlessness and respiratory complaints, supported by available cardiac and pulmonary diagnostics.', mr: 'छातीतील तक्रारी, धाप व श्वसन समस्यांचे वैद्यकीय मूल्यमापन आणि उपलब्ध कार्डियाक/पल्मोनरी तपासण्या.' },
    bullets: [
      { en: 'Chest symptom and breathlessness evaluation', mr: 'छातीची लक्षणे व धाप यांचे मूल्यमापन' },
      { en: 'Asthma, TB and respiratory complaint care', mr: 'दमा, टीबी व श्वसन तक्रारींची काळजी' },
      { en: 'ECG, 2D Echo, Color Doppler, TMT and PFT support as available', mr: 'उपलब्धतेनुसार ECG, 2D Echo, Color Doppler, TMT व PFT' },
    ],
    whenToSeek: [
      { en: 'New chest discomfort, palpitations or worsening breathlessness', mr: 'नवीन छातीतील त्रास, धडधड किंवा वाढती धाप' },
      { en: 'For severe chest pain or sudden breathing difficulty, call the hospital urgently.', mr: 'तीव्र छातीत दुखणे किंवा अचानक श्वास घेण्यास त्रास असल्यास हॉस्पिटलला तातडीने फोन करा.' },
    ],
    faq: [{ q: { en: 'Are heart tests available?', mr: 'हृदय तपासण्या उपलब्ध आहेत का?' }, a: { en: 'The hospital lists ECG, cardiac monitoring, 2D Echo/Color Doppler and TMT facilities. Please call to confirm availability for your visit.', mr: 'हॉस्पिटलमध्ये ECG, कार्डियाक मॉनिटरिंग, 2D Echo/Color Doppler व TMT सुविधा नमूद आहेत. भेटीपूर्वी उपलब्धता फोनवर तपासा.' } }],
    keywords: 'chest physician Warud, ECG Warud, 2D echo Warud, asthma treatment Warud'
  },
  {
    slug: 'fever-infectious-disease', icon: 'shield', category: { en: 'Medicine', mr: 'मेडिसिन' },
    title: { en: 'Fever & Infectious Disease Care', mr: 'ताप व संसर्गजन्य आजार' },
    short: { en: 'Assessment and treatment support for dengue, malaria, fever and other infectious illnesses.', mr: 'डेंग्यू, मलेरिया, ताप व इतर संसर्गजन्य आजारांसाठी तपासणी व उपचार.' },
    intro: { en: 'Timely evaluation of fever and infection symptoms with clinical assessment and investigations when medically indicated.', mr: 'ताप व संसर्गाच्या लक्षणांचे वेळेवर क्लिनिकल मूल्यमापन व गरजेनुसार तपासण्या.' },
    bullets: [
      { en: 'Fever evaluation and follow-up', mr: 'ताप तपासणी व फॉलो-अप' },
      { en: 'Dengue, malaria and infection-related care', mr: 'डेंग्यू, मलेरिया व संसर्गाशी संबंधित उपचार' },
      { en: 'Assessment for dehydration, weakness and warning signs', mr: 'डिहायड्रेशन, अशक्तपणा व गंभीर लक्षणांचे मूल्यमापन' },
    ],
    whenToSeek: [
      { en: 'High or persistent fever, repeated vomiting, marked weakness or reduced urine', mr: 'जास्त/सतत ताप, वारंवार उलटी, खूप अशक्तपणा किंवा लघवी कमी होणे' },
      { en: 'Urgent assessment if confusion, severe breathing difficulty, fainting or rapid deterioration occurs', mr: 'गोंधळ, तीव्र धाप, बेशुद्धी किंवा झपाट्याने प्रकृती बिघडल्यास तातडीची तपासणी' },
    ],
    faq: [{ q: { en: 'Can I send reports on WhatsApp?', mr: 'रिपोर्ट WhatsApp वर पाठवू शकतो का?' }, a: { en: 'For appointment coordination, use WhatsApp. For detailed medical reports, follow the doctor/hospital team’s instructions to protect your privacy.', mr: 'अपॉइंटमेंट समन्वयासाठी WhatsApp वापरा. तपशीलवार वैद्यकीय रिपोर्टसाठी गोपनीयतेच्या दृष्टीने डॉक्टर/हॉस्पिटलच्या सूचनांचे पालन करा.' } }],
    keywords: 'fever doctor Warud, dengue treatment Warud, malaria doctor Warud, infectious disease Warud'
  },
  {
    slug: 'emergency-critical-care', icon: 'activity', category: { en: 'Critical Care', mr: 'क्रिटिकल केअर' },
    title: { en: 'Emergency & Critical Care', mr: 'अत्यावश्यक व अतिदक्षता सेवा' },
    short: { en: '24×7 emergency-care availability with ICU, ventilator, BiPAP and monitoring support.', mr: 'ICU, व्हेंटिलेटर, BiPAP व मॉनिटरिंग सपोर्टसह 24×7 अत्यावश्यक सेवा उपलब्धता.' },
    intro: { en: 'Hospital-based assessment and stabilization support for acutely ill patients, backed by critical-care monitoring and respiratory support facilities.', mr: 'गंभीर रुग्णांसाठी हॉस्पिटल-आधारित तपासणी व स्थिरीकरण, क्रिटिकल केअर मॉनिटरिंग आणि श्वसन सपोर्ट सुविधा.' },
    bullets: [
      { en: 'Well-equipped ICU', mr: 'सुसज्ज ICU' },
      { en: 'Ventilator and BiPAP support', mr: 'व्हेंटिलेटर व BiPAP सपोर्ट' },
      { en: 'Cardiac monitor and defibrillator', mr: 'कार्डियाक मॉनिटर व डिफिब्रिलेटर' },
    ],
    whenToSeek: [
      { en: 'Severe chest pain, sudden breathlessness, fainting or altered consciousness', mr: 'तीव्र छातीत दुखणे, अचानक धाप, बेशुद्धी किंवा शुद्धीत बदल' },
      { en: 'Sudden weakness/paralysis, seizures or rapidly worsening illness', mr: 'अचानक कमजोरी/लकवा, झटके किंवा झपाट्याने बिघडणारी प्रकृती' },
    ],
    faq: [{ q: { en: 'Should I use WhatsApp in an emergency?', mr: 'इमर्जन्सीमध्ये WhatsApp वापरावे का?' }, a: { en: 'No. Call the hospital directly at +91 95270 59133 or seek the nearest emergency service immediately.', mr: 'नाही. +91 95270 59133 वर थेट फोन करा किंवा जवळच्या आपत्कालीन सेवेकडे तातडीने जा.' } }],
    keywords: 'critical care Warud, ICU Warud, emergency hospital Warud, ventilator Warud'
  },
  {
    slug: 'anaesthesia-pain-care', icon: 'syringe', category: { en: 'Anaesthesia & Pain', mr: 'भूल व वेदना' },
    title: { en: 'Anaesthesia, Perioperative & Pain Care', mr: 'भूल, पेरिऑपरेटिव्ह व वेदना उपचार' },
    short: { en: 'Pre-anaesthesia evaluation, surgical fitness, perioperative support and pain-care consultation.', mr: 'ऑपरेशनपूर्व भूल तपासणी, सर्जिकल फिटनेस, पेरिऑपरेटिव्ह सपोर्ट व वेदना सल्ला.' },
    intro: { en: 'Anaesthesia assessment before procedures, perioperative planning and pain-focused consultation based on individual clinical needs.', mr: 'प्रक्रियापूर्व भूल तपासणी, पेरिऑपरेटिव्ह नियोजन व वैयक्तिक गरजेनुसार वेदना-केंद्रित सल्ला.' },
    bullets: [
      { en: 'Pre-anaesthesia check-up and fitness review', mr: 'ऑपरेशनपूर्व भूल तपासणी व फिटनेस पुनरावलोकन' },
      { en: 'Perioperative medical support', mr: 'पेरिऑपरेटिव्ह वैद्यकीय सपोर्ट' },
      { en: 'Pain-management consultation', mr: 'वेदना व्यवस्थापन सल्ला' },
    ],
    whenToSeek: [
      { en: 'Before planned surgery when anaesthesia fitness is requested', mr: 'नियोजित ऑपरेशनपूर्व भूल फिटनेस आवश्यक असल्यास' },
      { en: 'Persistent pain requiring specialist assessment', mr: 'विशेषज्ञ तपासणी आवश्यक असलेली सतत वेदना' },
    ],
    faq: [{ q: { en: 'What should I bring for a pre-anaesthesia visit?', mr: 'भूल तपासणीसाठी काय आणावे?' }, a: { en: 'Bring the surgeon’s advice, current medicines, previous reports, allergy information and relevant medical records.', mr: 'सर्जनचा सल्ला, चालू औषधे, जुने रिपोर्ट, अॅलर्जीची माहिती व संबंधित वैद्यकीय नोंदी आणा.' } }],
    keywords: 'anaesthesiologist Warud, pain clinic Warud, pre anaesthesia checkup Warud'
  },
  {
    slug: 'diagnostics-health-check', icon: 'scan', category: { en: 'Diagnostics', mr: 'तपासण्या' },
    title: { en: 'Diagnostics & Health Check', mr: 'निदान सुविधा व आरोग्य तपासणी' },
    short: { en: 'ECG, PFT, 2D Echo/Color Doppler, TMT and general health-check support as listed by the hospital.', mr: 'हॉस्पिटलमध्ये नमूद ECG, PFT, 2D Echo/Color Doppler, TMT व सामान्य आरोग्य तपासणी सुविधा.' },
    intro: { en: 'Selected diagnostic facilities support physician assessment and follow-up. Availability may depend on schedule and clinical requirement.', mr: 'निवडक निदान सुविधा डॉक्टरांच्या तपासणी व फॉलो-अपला सहाय्य करतात. उपलब्धता वेळापत्रक व वैद्यकीय गरजेनुसार बदलू शकते.' },
    bullets: [
      { en: 'ECG and cardiac monitoring', mr: 'ECG व कार्डियाक मॉनिटरिंग' },
      { en: '2D Echo & Color Doppler', mr: '2D Echo व Color Doppler' },
      { en: 'TMT and computerized pulmonary function testing', mr: 'TMT व कॉम्प्युटराइज्ड PFT' },
    ],
    whenToSeek: [
      { en: 'When advised by the treating doctor', mr: 'उपचार करणाऱ्या डॉक्टरांनी सल्ला दिल्यास' },
      { en: 'Call ahead to confirm test availability and preparation instructions', mr: 'तपासणीची उपलब्धता व तयारीसाठी आधी फोन करा' },
    ],
    faq: [{ q: { en: 'Can I book a test online?', mr: 'तपासणी ऑनलाइन बुक करता येते का?' }, a: { en: 'Use WhatsApp or call the hospital to confirm the test, timing and any preparation needed.', mr: 'तपासणी, वेळ व आवश्यक तयारी निश्चित करण्यासाठी WhatsApp किंवा फोन वापरा.' } }],
    keywords: 'diagnostic centre Warud, TMT Warud, PFT Warud, ECG Warud, 2D echo Warud'
  },
]

export const facilities = [
  ['ICU', 'activity', { en: 'Well-equipped Intensive Care Unit', mr: 'सुसज्ज अतिदक्षता विभाग' }],
  ['V', 'lungs', { en: 'Ventilator & BiPAP', mr: 'व्हेंटिलेटर व BiPAP' }],
  ['ECG', 'heart', { en: 'ECG, cardiac monitor & defibrillator', mr: 'ECG, कार्डियाक मॉनिटर व डिफिब्रिलेटर' }],
  ['PFT', 'lungs', { en: 'Computerized pulmonary function testing', mr: 'कॉम्प्युटराइज्ड पल्मोनरी फंक्शन टेस्ट' }],
  ['2D', 'scan', { en: '2D Echo & Color Doppler', mr: '2D Echo व Color Doppler' }],
  ['TMT', 'activity', { en: 'Computerized treadmill testing', mr: 'कॉम्प्युटराइज्ड ट्रेडमिल टेस्ट' }],
  ['N', 'spark', { en: 'Ultrasonic nebulizer', mr: 'अल्ट्रासोनिक नेब्युलायझर' }],
  ['24×7', 'shield', { en: 'Emergency care availability', mr: '24×7 अत्यावश्यक सेवा' }],
] as const

export const healthTips = [
  {
    slug: 'diabetes-daily-care', title: { en: 'Diabetes: daily care basics', mr: 'मधुमेह: दैनंदिन काळजी' },
    text: { en: 'Take prescribed medicines regularly, monitor sugar as advised, keep follow-up visits and discuss diet and exercise with your doctor.', mr: 'औषधे नियमित घ्या, सल्ल्यानुसार साखर तपासा, फॉलो-अप ठेवा व आहार-व्यायामाबद्दल डॉक्टरांशी चर्चा करा.' }
  },
  {
    slug: 'heart-attack-warning-signs', title: { en: 'Heart-attack warning signs', mr: 'हृदयविकाराच्या झटक्याची लक्षणे' },
    text: { en: 'Chest pressure or pain, sweating, breathlessness, nausea, dizziness or pain spreading to the arm or jaw can require urgent medical attention.', mr: 'छातीत दडपण किंवा वेदना, घाम, धाप, मळमळ, चक्कर किंवा हात/जबड्याकडे जाणारी वेदना असल्यास तातडीने वैद्यकीय मदत घ्या.' }
  },
  {
    slug: 'breathing-difficulty', title: { en: 'When breathing difficulty is urgent', mr: 'श्वास घेण्यास त्रास: कधी तातडीची मदत घ्यावी' },
    text: { en: 'Severe breathlessness, inability to speak normally, bluish lips, fainting or rapidly worsening symptoms need urgent evaluation.', mr: 'तीव्र धाप, नीट बोलता न येणे, ओठ निळे पडणे, बेशुद्धी किंवा लक्षणे झपाट्याने वाढत असल्यास तातडीने तपासणी आवश्यक आहे.' }
  },
]

export const homeFaqs = [
  { q: { en: 'How do I request an appointment?', mr: 'अपॉइंटमेंट कशी घ्यावी?' }, a: { en: 'Use the appointment form or WhatsApp button. Your message is prepared for WhatsApp and the hospital team confirms the available time.', mr: 'अपॉइंटमेंट फॉर्म किंवा WhatsApp बटण वापरा. संदेश WhatsApp साठी तयार होईल आणि हॉस्पिटल टीम उपलब्ध वेळ निश्चित करेल.' } },
  { q: { en: 'Is emergency care available 24×7?', mr: '24×7 इमर्जन्सी सेवा उपलब्ध आहे का?' }, a: { en: 'The hospital lists 24×7 emergency-care availability. For an emergency, call the hospital directly instead of waiting for a WhatsApp reply.', mr: 'हॉस्पिटलमध्ये 24×7 अत्यावश्यक सेवा नमूद आहे. इमर्जन्सीमध्ये WhatsApp उत्तराची वाट न पाहता थेट हॉस्पिटलला फोन करा.' } },
  { q: { en: 'Where is the hospital located?', mr: 'हॉस्पिटल कुठे आहे?' }, a: { en: hospitalAddress.en, mr: hospitalAddress.mr } },
  { q: { en: 'Can I use WhatsApp for detailed medical reports?', mr: 'तपशीलवार रिपोर्ट WhatsApp वर पाठवावे का?' }, a: { en: 'Use WhatsApp mainly for appointment coordination. For sensitive medical records, follow the doctor or hospital team’s instructions.', mr: 'WhatsApp मुख्यतः अपॉइंटमेंट समन्वयासाठी वापरा. संवेदनशील वैद्यकीय नोंदींसाठी डॉक्टर किंवा हॉस्पिटल टीमच्या सूचनांचे पालन करा.' } },
]

export const navItems = [
  { href: '/', label: { en: 'Home', mr: 'मुख्यपृष्ठ' } },
  { href: '/about', label: { en: 'About', mr: 'आमच्याबद्दल' } },
  { href: '/doctors', label: { en: 'Doctors', mr: 'डॉक्टर्स' } },
  { href: '/services', label: { en: 'Services', mr: 'सेवा' } },
  { href: '/facilities', label: { en: 'Facilities', mr: 'सुविधा' } },
  { href: '/health-tips', label: { en: 'Health Tips', mr: 'आरोग्य टिप्स' } },
  { href: '/contact', label: { en: 'Contact', mr: 'संपर्क' } },
]

export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
