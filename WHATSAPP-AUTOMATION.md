# WhatsApp Automation Setup — Shree Gajanan Hospital

## What V3 already does
The website generates structured WhatsApp messages with intent labels such as:
- `APPOINTMENT`
- `TIMINGS`
- `SERVICES`
- `LOCATION`
- `QUICK HELP`

This makes enquiries easier for hospital staff to identify and can later be connected to the official WhatsApp Business Platform.

## Free setup now: WhatsApp Business app
Use the hospital number **+91 95270 59133** in WhatsApp Business.

### Greeting Message
Enable **Business tools → Greeting message** and use:

> Welcome to Shree Gajanan Hospital & Critical Care Center, Warud. Thank you for contacting us. We have received your message. For an appointment, our team will review your request and confirm the available time shortly. A WhatsApp request is not an appointment confirmation. For urgent or emergency symptoms, please call +91 95270 59133 directly rather than waiting for a WhatsApp response.
>
> श्री गजानन हॉस्पिटलशी संपर्क केल्याबद्दल धन्यवाद. आपला संदेश आम्हाला प्राप्त झाला आहे. अपॉइंटमेंटची वेळ आमची टीम उपलब्धतेनुसार निश्चित करून कळवेल. इमर्जन्सीमध्ये WhatsApp उत्तराची वाट न पाहता +91 95270 59133 वर फोन करा.

### Away Message
Enable an Away Message outside reception/response hours:

> Thank you for contacting Shree Gajanan Hospital. Our appointment desk is currently unavailable. We will respond when the desk reopens. For urgent medical assistance, please call +91 95270 59133 directly.

## Full automation later: official WhatsApp Business Platform
For menu-based automatic replies, appointment slot lookup, reminders and human handoff, use the official Meta WhatsApp Business Platform / Cloud API. That requires:
- Meta Business account
- WhatsApp Business Account
- verified/registered phone number
- Phone Number ID
- access token stored as a Cloudflare secret (never in frontend code)
- webhook endpoint
- approved templates for business-initiated messages where required

Suggested future flow:
1. Patient sends `APPOINTMENT`
2. Bot asks doctor
3. Bot asks preferred date/time
4. Backend checks appointment availability
5. Bot confirms request or hands off to receptionist
6. Receptionist confirms final appointment

Do not automatically claim an appointment is confirmed unless a real scheduling system has reserved the slot.
