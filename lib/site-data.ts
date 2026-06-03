/** Primary navigation — shared by navbar */
export const navLinks = [
  { href: '/#features', label: 'Features' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/about', label: 'About' },
  { href: '/#contact', label: 'Contact' },
] as const

/** Footer Important Links column */
export const footerImportantLinks = [
  { href: '/about', label: 'About' },
  { href: '/#features', label: 'Features' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/#contact', label: 'Contact' },
  { href: '/terms', label: 'Terms' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
] as const

/** @deprecated Use footerImportantLinks */
export const footerQuickLinks = footerImportantLinks

/** Marketing page content — preserved from original page.tsx */
export const heroContent = {
  title: 'Tally on Phone',
  titleHighlight: 'on Phone',
  description:
    'Access your business data seamlessly with TallyBridge. Connect Tally and experience fast data sync on iOS and Android. Enjoy a fast and secure experience.',
  primaryCta: 'Get Started',
  secondaryCta: 'Book Free Demo',
  demoCta: 'Download For Free',
  androidCta: 'Download for Android',
  macCta: 'Download for Mac',
  image: {
    src: '/images/hero-tallybridge.png',
    alt: 'TallyBridge — Tally on Phone across mobile and desktop with secure cloud sync',
    width: 1200,
    height: 800,
  },
  trustIndicators: [
    'Trusted by Businesses',
    'Secure Data',
    'GST Ready',
    'Cloud Backup',
    'WhatsApp Integration',
  ],
  platforms: ['Android', 'iOS', 'Web', 'Desktop'],
} as const

export const trustBarItems = [
  'Trusted by Businesses',
  'Secure Data',
  'GST Ready',
  'Cloud Backup',
  'WhatsApp Integration',
] as const

/** Alternating feature showcase — content preserved from original features */
export const featureShowcase = [
  {
    label: 'Payment Recovery',
    title: 'Send Payment Reminder',
    description:
      'Automate payment reminders via SMS and email to prompt timely payments and improve cash flow.',
    benefits: [
      'SMS & email payment reminders',
      'Recover dues faster',
      'Improve cash flow',
      'Works with Tally data',
    ],
    cta: 'Get Started',
    image: '/images/feature-payment-reminder.png',
    alt: 'Send payment reminders via SMS and email from TallyBridge mobile',
  },
  {
    label: 'GST Compliance',
    title: 'Generate e-Way Bills & Invoices',
    description:
      'Easily generate e-Way bills and invoices on the go with our streamlined mobile interface.',
    benefits: [
      'Create e-Way bills on the go',
      'GST-ready invoices',
      'Share on WhatsApp',
      'Mobile-first workflow',
    ],
    cta: 'Get Started',
    image: '/images/feature-eway-gst.png',
    alt: 'Generate GST e-Way bills and invoices on mobile with TallyBridge',
  },
  {
    label: 'Data Security',
    title: 'Data Backup and Restore',
    description:
      'Secure cloud backup for your financial data with easy restore capabilities.',
    benefits: [
      'Secure cloud backup',
      'One-tap restore',
      'Protect financial data',
      'Peace of mind',
    ],
    cta: 'Get Started',
    image: '/images/feature-data-backup.png',
    alt: 'Secure cloud backup and restore for Tally financial data',
  },
  {
    label: 'Transactions',
    title: 'Create Transactions',
    description:
      'Quickly create quotations, sales, receipts, payments, and purchase orders.',
    benefits: [
      'Quotations & sales orders',
      'Receipts & payments',
      'Purchase orders',
      'Fast mobile entry',
    ],
    cta: 'Get Started',
    image: '/images/feature-create-entries.png',
    alt: 'Create quotations, sales, receipts, and purchase orders on the go',
  },
  {
    label: 'Customer Insights',
    title: 'Track Inactive Customers',
    description:
      'Identify and manage inactive customers with detailed analytics and reports.',
    benefits: [
      'Inactive customer reports',
      'Item-wise analytics',
      'Actionable insights',
      'Grow repeat business',
    ],
    cta: 'Get Started',
    image: '/images/feature-inactive-customers.png',
    alt: 'Track inactive customers and item-wise analytics with actionable insights',
  },
  {
    label: 'Analytics',
    title: 'Premium Analytics',
    description:
      'Get comprehensive insights into your business performance with advanced dashboards.',
    benefits: [
      'Advanced dashboards',
      'Daily books & reports',
      'Balance sheet views',
      'Expense tracking',
    ],
    cta: 'Get Started',
    image: '/images/feature-premium-analytics.png',
    alt: 'Premium analytics — cloud dashboards synced across desktop and mobile',
  },
] as const

/** Legacy grid features — same content for compatibility */
export const features = featureShowcase.map((f) => ({
  image: f.image,
  alt: f.alt,
  title: f.title,
  description: f.description,
}))

export const benefitsGrid = [
  {
    icon: 'smartphone',
    title: 'Tally on Mobile',
    description: 'Access your complete Tally data on iOS and Android, anytime.',
  },
  {
    icon: 'shield',
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security with encrypted sync and backup.',
  },
  {
    icon: 'zap',
    title: 'Real-time Sync',
    description: 'Fast data sync between Tally and your phone in seconds.',
  },
  {
    icon: 'file-text',
    title: 'GST Ready',
    description: 'Generate GST bills, e-Way bills, and invoices on the go.',
  },
  {
    icon: 'message-circle',
    title: 'WhatsApp Share',
    description: 'Share bills and reports directly with customers on WhatsApp.',
  },
  {
    icon: 'cloud',
    title: 'Cloud Backup',
    description: 'Automatic cloud backup with easy restore when you need it.',
  },
] as const

export const whyTallyBridge = [
  {
    icon: 'briefcase',
    title: 'Business Automation',
    description: 'Automate reminders, billing, and reports to save hours every week.',
  },
  {
    icon: 'message-circle',
    title: 'WhatsApp Integration',
    description: 'Share invoices and payment links where your customers already are.',
  },
  {
    icon: 'cloud',
    title: 'Cloud Access',
    description: 'View books and dashboards from anywhere with secure cloud sync.',
  },
  {
    icon: 'globe',
    title: 'Remote Access',
    description: 'Manage Tally data on the go — no need to be at your office PC.',
  },
  {
    icon: 'bar-chart',
    title: 'Reports & Analytics',
    description: 'Daily books, inactive customers, and performance insights in one place.',
  },
  {
    icon: 'package',
    title: 'Inventory Visibility',
    description: 'Track items and stock movement alongside your accounting data.',
  },
  {
    icon: 'receipt',
    title: 'GST Compliance',
    description: 'Stay compliant with GST billing and e-Way bill generation built in.',
  },
  {
    icon: 'trending-up',
    title: 'Grow Your Business',
    description: 'Make faster decisions with real-time data at your fingertips.',
  },
] as const

/** Pricing — logic unchanged; display names for SaaS layout */
export const pricingPlans = [
  {
    name: 'Basic',
    displayName: 'Growth',
    price: '₹3,000',
    period: 'per year',
    highlighted: false,
    features: [
      'Mobile App Access',
      'Track Sales & Receipt',
      'Basic Analytics',
      'Email Support',
    ],
  },
  {
    name: 'Professional',
    displayName: 'Pro',
    price: '₹5,000',
    period: 'per year',
    highlighted: true,
    badge: 'Most Popular',
    features: [
      'Create GST Bills',
      'Unlimited Invoices',
      'Advanced Reports',
      'Priority Support',
    ],
  },
  {
    name: 'Premium',
    displayName: 'Enterprise',
    price: '₹7,000',
    period: 'per year',
    highlighted: false,
    features: [
      'All Pro Features',
      'Data Backup & Cloud Sync',
      'API Access',
      '24/7 Dedicated Support',
    ],
  },
] as const

export const testimonials = [
  {
    quote:
      'Excellent shortcut to manage your business connected with Tally through TallyBridge. The support team experience is amazing — we are fully satisfied with the app.',
    author: 'Avinish Kumar',
    role: 'Business Owner',
    rating: 5,
  },
  {
    quote:
      'Great tool for managing business data on the go. Quick integration with Tally and seamless synchronization.',
    author: 'Raj Patel',
    role: 'Managing Director',
    rating: 5,
  },
  {
    quote:
      'Payment reminders and GST billing from my phone have saved our team hours every week. TallyBridge feels built for real businesses.',
    author: 'Priya Sharma',
    role: 'Finance Head',
    rating: 5,
  },
  {
    quote:
      'We share invoices on WhatsApp directly from Tally data. Customers pay faster and our cash flow has improved noticeably.',
    author: 'Mohit Agarwal',
    role: 'Retail Owner',
    rating: 5,
  },
  {
    quote:
      'Secure cloud backup gives us peace of mind. Setup was straightforward and the dashboard is clean and easy to read.',
    author: 'Sneha Reddy',
    role: 'Operations Manager',
    rating: 5,
  },
  {
    quote:
      'Inactive customer reports helped us re-engage accounts we had overlooked. A practical product with responsive support.',
    author: 'Karan Mehta',
    role: 'Sales Director',
    rating: 5,
  },
  {
    quote:
      'Our accountants love the real-time sync. Books are always current whether we are in the office or travelling.',
    author: 'Anita Desai',
    role: 'CA Firm Partner',
    rating: 5,
  },
  {
    quote:
      'Premium analytics on mobile is a game-changer for owners who need quick decisions without opening Tally on desktop.',
    author: 'Vikram Singh',
    role: 'Distributor',
    rating: 5,
  },
] as const

export const faqItems = [
  {
    q: 'What is TallyBridge?',
    a: 'TallyBridge is a mobile and web solution by Developerbox Ai Factory that connects your Tally accounting software with your phone. View ledgers, send reminders, generate GST documents, and track performance in real time — without being at your office PC.',
  },
  {
    q: 'Is there an option to upgrade my current plan?',
    a: 'Yes. You can upgrade from Growth to Pro or Enterprise at any time. Our team will apply a fair adjustment based on your remaining subscription period so you only pay the difference for the upgrade.',
  },
  {
    q: 'How can I renew my subscription after it expires?',
    a: 'Renew from the TallyBridge app under Account → Subscription, or contact us at info@developerbox.in. We will help you restore access quickly and keep your data and settings intact.',
  },
  {
    q: 'What payment methods are available?',
    a: 'We accept UPI, credit and debit cards, net banking, and popular digital wallets. For annual plans, invoices are shared by email after payment confirmation.',
  },
] as const

/** @deprecated Footer uses navLinks — kept for compatibility */
export const footerLinks = {
  about: [
    { label: 'Who We Are', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Blog', href: '#' },
  ],
  product: [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Download', href: '#' },
  ],
  support: [
    { label: 'Help Center', href: '#' },
    { label: 'Contact Us', href: '#contact' },
    { label: 'Documentation', href: '#' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms', href: '/terms' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact Us', href: '/#contact' },
  ],
} as const
