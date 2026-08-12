// ─── RAKESH JENA — PORTFOLIO DATA & RESUME CONSTANTS ───────────────────────

export const IDENTITY = {
  name: "Botuserout",
  handle: "botuserout",
  title: "Software Engineer & Creative Developer",
  tagline: "Computer Science Student · Full-Stack & AI Systems Builder",
  location: "Ahmedabad, Gujarat, India",
  phone: "+91 9664969994",
  email: "jenarakeshku@gmail.com",
  year: "2026",
  status: "Available for Selected Roles & Projects",
  github: "https://github.com/botuserout",
  linkedin: "https://linkedin.com/in/rakeshjena", // update with exact profile slug if needed
  instagram: "https://instagram.com/botuserout",
  resume: "/rakesh-jena-resume.pdf",
  summary:
    "Fresh Computer Science graduate (B.Tech, 2027) with hands-on full-stack experience across web, desktop-adjacent, and AI-driven systems. Delivered 6+ production-grade applications spanning Spring Boot, Flask, Node.js, React, Firebase, and SQL Server. Google Cloud certified with strong fundamentals in data structures, OOP, and product-oriented engineering.",
} as const;

// ─── NAVIGATION ──────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Work",       href: "#work" },
  { label: "Photography",href: "/photography" },
  { label: "About",      href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact" },
] as const;

// ─── PROJECTS ────────────────────────────────────────────────────────────────
export type ProjectLayout =
  | "horizontal-scroll"    // 01 AI Finance Fraud
  | "left-video-right-text" // 02 Legal Sthal
  | "overlapping-type"     // 03 AgroMarketplace
  | "data-overlay"         // 04 Predictive Maintenance
  | "bento-split"          // 05 Clinic Management
  | "draggable-carousel"   // 06 Ledgerly
  | "cinematic-letterbox"  // 07 Weather Detection
  | "pure-typography";     // 08 CivicPulse

export interface Project {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  year: string;
  category: string[];
  description: string;
  tech: string[];
  role: string;
  slug: string;
  layout: ProjectLayout;
  accentWord?: string;
  status: "live" | "in-progress" | "case-study";
  link?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "ai-finance-fraud",
    number: "01",
    name: "AI Finance Fraud Detection",
    subtitle: "NiramUNthon 6.0 Hackathon Platform",
    year: "2026",
    category: ["AI / ML", "FinTech", "Web"],
    description:
      "Real-time fraud detection platform with 3 coordinated AI agents: Anomaly Detection (Isolation Forest), Pattern Recognition, and OTP-based Identity Verification.",
    tech: ["Python", "Flask", "Isolation Forest", "SQL Server", "HTML/CSS/JS", "Vercel"],
    role: "AI / ML Developer",
    slug: "ai-finance-fraud",
    layout: "horizontal-scroll",
    accentWord: "fraud detection",
    status: "case-study",
    link: "https://github.com/botuserout",
  },
  {
    id: "legal-sthal",
    number: "02",
    name: "Legal Sthal SaaS Platform",
    subtitle: "Full-Stack Legal, Tax & Compliance System",
    year: "2025",
    category: ["Full Stack", "SaaS", "AI Integration"],
    description:
      "Full-stack Legal, Tax & Compliance platform for startups with dynamic Tax/GST/EMI calculators, entity recommendation engine, AI assistant, and Zoho CRM/WhatsApp API integrations.",
    tech: ["JavaScript (ES6+)", "HTML5/CSS3", "Netlify Functions", "Zoho CRM API", "WhatsApp API", "JSON KB"],
    role: "Freelance Full-Stack Developer",
    slug: "legal-sthal",
    layout: "left-video-right-text",
    accentWord: "full-stack",
    status: "live",
  },
  {
    id: "agromarketplace",
    number: "03",
    name: "AgroMarketplace",
    subtitle: "Broker-Free Agricultural Platform",
    year: "2025",
    category: ["Agriculture", "Full Stack", "Web"],
    description:
      "Broker-free agricultural marketplace connecting farmers directly with buyers via dedicated buyer/seller portals, product listings, and real-time Firebase authentication.",
    tech: ["HTML5", "CSS3", "JavaScript", "Firebase Auth", "Firestore"],
    role: "Full Stack Developer",
    slug: "agromarketplace",
    layout: "overlapping-type",
    accentWord: "broker-free",
    status: "live",
    link: "https://github.com/botuserout",
  },
  {
    id: "predictive-maintenance",
    number: "04",
    name: "Predictive Maintenance System",
    subtitle: "3D Equipment Monitoring & Forecasting",
    year: "2025",
    category: ["3D / WebGL", "Python ML", "IoT"],
    description:
      "Real-time predictive maintenance system with 3D equipment monitoring, ML outlier detection, and proactive failure forecasting using Plotly and Google Sheets API.",
    tech: ["Python", "Flask", "Three.js", "Isolation Forest", "Google Sheets API", "Plotly"],
    role: "Lead Developer",
    slug: "predictive-maintenance",
    layout: "data-overlay",
    accentWord: "3D monitoring",
    status: "case-study",
  },
  {
    id: "clinic-management",
    number: "05",
    name: "Clinic Management System",
    subtitle: "Healthcare Operations Platform",
    year: "2024",
    category: ["Healthcare", "Web App", "Firebase"],
    description:
      "Dynamic platform for patient records and appointment tracking with role-based access control and real-time Firebase sync — cutting scheduling time by 40%.",
    tech: ["HTML5", "CSS3", "JavaScript", "Firebase", "Realtime DB"],
    role: "Frontend Developer (Unified Mentors)",
    slug: "clinic-management",
    layout: "bento-split",
    accentWord: "healthcare",
    status: "live",
    link: "https://github.com/botuserout",
  },
  {
    id: "ledgerly",
    number: "06",
    name: "Ledgerly",
    subtitle: "Open Source Personal Finance App",
    year: "2026",
    category: ["Open Source", "Finance", "Full Stack"],
    description:
      "Personal finance and expense-tracking app for students and small businesses, featuring multi-wallet support, India-specific GST calculations, and rule-based auto-categorization.",
    tech: ["Node.js", "Express", "Prisma", "PostgreSQL", "TypeScript"],
    role: "Open Source Author",
    slug: "ledgerly",
    layout: "draggable-carousel",
    accentWord: "open-source",
    status: "in-progress",
  },
  {
    id: "weather-detection",
    number: "07",
    name: "Weather Detection Web App",
    subtitle: "Live Location Weather Platform",
    year: "2025",
    category: ["Web App", "API Integration", "Utility"],
    description:
      "Real-time weather detection app built during internship at Prodigy Infotech, using Geolocation API and OpenWeatherMap API serving 100+ daily users.",
    tech: ["JavaScript", "HTML5/CSS3", "Geolocation API", "OpenWeatherMap API", "Local Storage"],
    role: "Software Development Intern (Prodigy)",
    slug: "weather-detection",
    layout: "cinematic-letterbox",
    accentWord: "geolocation",
    status: "live",
  },
  {
    id: "civicpulse",
    number: "08",
    name: "CivicPulse",
    subtitle: "Community Intelligence Platform",
    year: "2026",
    category: ["Machine Learning", "Data", "Web"],
    description:
      "ML-powered system designed to identify, classify, and prioritize community issues from citizen-reported data at scale.",
    tech: ["Python", "FastAPI", "Next.js", "PostgreSQL", "Machine Learning"],
    role: "Lead Developer",
    slug: "civicpulse",
    layout: "pure-typography",
    accentWord: "community",
    status: "case-study",
  },
];

// ─── RESUME TECHNICAL SKILLS ──────────────────────────────────────────────────
export const SKILLS = {
  Languages: [
    "Java",
    "Python",
    "JavaScript (ES6+)",
    "C",
    "C++",
    "SQL",
    "TypeScript",
  ],
  Frontend: [
    "React",
    "Angular Fundamentals",
    "HTML5 & CSS3",
    "Tailwind CSS",
    "Responsive Design",
  ],
  Backend: [
    "Spring Boot",
    "Flask",
    "Node.js",
    "Express",
    "REST API Integration",
  ],
  "AI & ML": [
    "Isolation Forest",
    "Anomaly Detection",
    "Pattern Recognition",
    "Applied Machine Learning",
  ],
  "Cloud & Data": [
    "Google Cloud Platform",
    "Firebase",
    "SQL Server",
    "PostgreSQL",
    "Microsoft Power BI",
  ],
  "Tools & Integrations": [
    "Git & GitHub",
    "Netlify Functions",
    "Zoho CRM API",
    "WhatsApp API",
    "n8n Automation",
  ],
} as const;

// ─── RESUME EXPERIENCE ────────────────────────────────────────────────────────
export interface Experience {
  year: string;
  role: string;
  company: string;
  description: string;
  bullets?: string[];
  tags: string[];
}

export const EXPERIENCE: Experience[] = [
  {
    year: "2025",
    role: "Freelance Full-Stack Developer",
    company: "Legal Sthal (Contract)",
    description:
      "Designed and built a full-stack Legal, Tax & Compliance Technology Platform from scratch for startups and enterprises, covering product architecture, UI/UX, Netlify serverless functions, Zoho CRM API, and WhatsApp API lead routing.",
    bullets: [
      "Built Income Tax, GST, Loan EMI Calculators and Smart Entity Recommendation Engine.",
      "Integrated AI assistant backed by custom JSON knowledge base.",
      "Implemented Netlify serverless functions & direct CRM routing via Zoho CRM & WhatsApp API.",
    ],
    tags: ["JavaScript ES6+", "Netlify Functions", "Zoho CRM API", "WhatsApp API"],
  },
  {
    year: "Jun 2025",
    role: "Software Development Intern",
    company: "Prodigy Infotech (Remote)",
    description:
      "Built a Weather Detection Web App using Geolocation API and OpenWeatherMap API, serving 100+ daily users with dynamic UI updates and structured error handling.",
    bullets: [
      "Persisted user preferences via LocalStorage with structured error handling.",
      "Delivered weekly code reviews and performance reports to engineering team.",
    ],
    tags: ["JavaScript", "Geolocation API", "OpenWeatherMap", "Local Storage"],
  },
  {
    year: "Jun 2024 – Jul 2024",
    role: "Frontend Developer",
    company: "Unified Mentors (Gurgaon)",
    description:
      "Developed and deployed a Clinic Management System using HTML/CSS/JavaScript and Firebase, cutting appointment scheduling time by 40% with role-based access control.",
    bullets: [
      "Reduced appointment scheduling time by 40% through streamlined UI.",
      "Collaborated on 3+ healthcare projects covering UI optimization and database management.",
    ],
    tags: ["HTML/CSS/JS", "Firebase", "Healthcare SaaS"],
  },
  {
    year: "2024 – 2025",
    role: "Core Team Member",
    company: "Google Cloud Facilitator Program",
    description:
      "Collaborated with a 7-member team to organize and run cloud events for 1,500+ participants, ensuring smooth operations and high student engagement.",
    bullets: [
      "Facilitated hands-on Google Cloud Arcade labs and technical workshops.",
    ],
    tags: ["Google Cloud", "Community Leadership", "Event Ops"],
  },
];

// ─── CERTIFICATIONS ───────────────────────────────────────────────────────────
export const CERTIFICATIONS = [
  {
    title: "Data Analyst",
    issuer: "Accenture",
    date: "May 2025",
  },
  {
    title: "Google Cloud Arcade",
    issuer: "Google Cloud",
    date: "Mar 2025",
  },
  {
    title: "n8n Foundation",
    issuer: "n8n Academy",
    date: "Aug 2026",
  },
  {
    title: "Job Ready Program (Cohort 3)",
    issuer: "Shreyians Coding School",
    date: "Expected Oct 2026",
  },
] as const;

// ─── SOCIAL LINKS ─────────────────────────────────────────────────────────────
export const SOCIAL_LINKS = [
  { label: "GitHub",    href: IDENTITY.github,    external: true },
  { label: "LinkedIn",  href: IDENTITY.linkedin,  external: true },
  { label: "Email",     href: `mailto:${IDENTITY.email}`, external: false },
  { label: "Resume",    href: IDENTITY.resume,    external: false },
] as const;

// ─── MARQUEE ITEMS ────────────────────────────────────────────────────────────
export const MARQUEE_SKILLS = [
  "Java & Spring Boot",
  "Python & Flask",
  "React & Next.js",
  "Isolation Forest ML",
  "Google Cloud Platform",
  "Firebase & SQL Server",
  "Serverless Functions",
  "REST API Engineering",
] as const;

export const MARQUEE_FOOTER = "Let's Build Impactful Software Together";

// ─── SECTION IDS ──────────────────────────────────────────────────────────────
export const SECTION_IDS = {
  hero:         "hero",
  intro:        "intro",
  work:         "work",
  photography:  "photography",
  lab:          "lab",
  about:        "about",
  experience:   "experience",
  skills:       "skills",
  contact:      "contact",
  footer:       "footer",
} as const;
