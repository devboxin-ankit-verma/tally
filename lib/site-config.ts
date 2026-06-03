/** Site-wide contact and brand configuration — TallyBridge */
export const siteConfig = {
  name: 'TallyBridge',
  subtitle: 'by Developerbox Ai Factory',
  tagline:
    'Access your business data on mobile and web. Connect Tally with your phone for fast, secure sync on iOS and Android.',
  brandColor: '#6cd000',
  brandColorDark: '#5bb300',
  /** Public site URL for metadata & OG */
  siteUrl: 'https://developerbox.co.in',
  developerbox: {
    name: 'Developerbox Ai Factory',
    url: 'https://developerbox.co.in',
  },
  contact: {
    email: 'info@developerbox.in',
    phone: '+91 91113 33253',
    phoneDisplay: '+91 91113 33253',
    address:
      '4th Floor SK Height, Near Shree Narayana Hospital, Devendra Nagar, Raipur, Chhattisgarh 492001',
    addressLines: [
      '4th Floor SK Height,',
      'Near Shree Narayana Hospital,',
      'Devendra Nagar,',
      'Raipur, Chhattisgarh 492001',
    ],
    workingHours: '10:00 AM – 10:00 PM',
    /** WhatsApp without + prefix for wa.me */
    whatsapp: '919111333253',
  },
  social: {
    facebook: 'https://www.facebook.com/devboxin',
    instagram: 'https://www.instagram.com/devboxin',
  },
  apps: {
    googlePlay: 'https://play.google.com/store/apps',
    macAppStore: 'https://apps.apple.com/app',
  },
} as const
