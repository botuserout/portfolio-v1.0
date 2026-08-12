// ─── ALL CONTENT CONSTANTS FOR RAKESH JENA'S PORTFOLIO ──────────────────────

export const IDENTITY = {
  name: "Rakesh Jena",
  handle: "Botuserout",
  title: "Creative Developer",
  tagline: "Computer Science Student · Creative Developer · Builder",
  location: "India",
  year: "2026",
  status: "Available for Selected Projects",
  email: "hello@rakeshjena.dev", // update with real email
  github: "https://github.com/Botuserout",
  linkedin: "https://linkedin.com/in/rakeshjena", // update with real URL
  instagram: "https://instagram.com/botuserout", // update with real URL
  resume: "/rakesh-jena-resume.pdf", // place resume in /public
} as const;

// ─── NAVIGATION ──────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Work",       href: "#work" },
  { label: "About",      href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact" },
] as const;

// ─── PROJECTS ────────────────────────────────────────────────────────────────
export type ProjectLayout =
  | "horizontal-scroll"    // 01 CivicPulse
  | "left-video-right-text" // 02 Traffic
  | "overlapping-type"     // 03 Kishan Saathi
  | "data-overlay"         // 04 EarthData AQI
  | "bento-split"          // 05 Freelancer
  | "draggable-carousel"   // 06 SkyMart
  | "cinematic-letterbox"  // 07 FilmyHeaven
  | "pure-typography";     // 08 AI Brand

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
  accentWord?: string; // word to highlight in accent color
  status: "live" | "in-progress" | "case-study";
  link?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "civicpulse",
    number: "01",
    name: "CivicPulse",
    subtitle: "Community Intelligence",
    year: "2026",
    category: ["Machine Learning", "Data", "Web Platform"],
    description:
      "An ML-powered system designed to identify, classify and prioritize community issues from citizen-reported data at scale.",
    tech: ["Python", "Machine Learning", "Next.js", "FastAPI", "PostgreSQL"],
    role: "Lead Developer",
    slug: "civicpulse",
    layout: "horizontal-scroll",
    accentWord: "community",
    status: "case-study",
  },
  {
    id: "traffic-congestion",
    number: "02",
    name: "Traffic Vision",
    subtitle: "Congestion Monitoring System",
    year: "2026",
    category: ["Computer Vision", "ML", "IoT"],
    description:
      "Real-time traffic congestion monitoring using computer vision and edge ML models to analyze live camera feeds.",
    tech: ["Python", "OpenCV", "YOLO", "FastAPI", "React"],
    role: "ML Engineer",
    slug: "traffic-congestion",
    layout: "left-video-right-text",
    accentWord: "real-time",
    status: "case-study",
  },
  {
    id: "kishan-saathi",
    number: "03",
    name: "Kishan Saathi",
    subtitle: "AgriSakhi — Farmer Intelligence",
    year: "2025",
    category: ["AI", "Agriculture", "Mobile"],
    description:
      "Bilingual AI assistant for Indian farmers — providing crop advice, weather insights, and market pricing through a conversational interface.",
    tech: ["Python", "LLM", "React Native", "FastAPI", "Twilio"],
    role: "Full Stack Developer",
    slug: "kishan-saathi",
    layout: "overlapping-type",
    accentWord: "bilingual",
    status: "case-study",
  },
  {
    id: "earthdata-aqi",
    number: "04",
    name: "EarthData AQI",
    subtitle: "Air Quality Intelligence",
    year: "2025",
    category: ["Data Visualization", "Environment", "Web"],
    description:
      "Interactive air quality monitoring dashboard pulling live data from global sensors with predictive pollution modeling.",
    tech: ["Next.js", "Python", "D3.js", "OpenAQ API", "PostgreSQL"],
    role: "Data Engineer + Frontend",
    slug: "earthdata-aqi",
    layout: "data-overlay",
    accentWord: "predictive",
    status: "case-study",
  },
  {
    id: "freelancer-client-manager",
    number: "05",
    name: "Freelancer Client Manager",
    subtitle: "Project Operations Platform",
    year: "2025",
    category: ["SaaS", "Productivity", "Web"],
    description:
      "End-to-end client management platform for freelancers — proposals, invoicing, time tracking, and client portals in one system.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
    role: "Solo Developer",
    slug: "freelancer-client-manager",
    layout: "bento-split",
    accentWord: "end-to-end",
    status: "in-progress",
  },
  {
    id: "skymart",
    number: "06",
    name: "SkyMart",
    subtitle: "E-Commerce Platform",
    year: "2024",
    category: ["E-Commerce", "Full Stack", "Web"],
    description:
      "Feature-complete e-commerce platform with real-time inventory, payment processing, and an admin analytics dashboard.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Stripe", "Redis"],
    role: "Full Stack Developer",
    slug: "skymart",
    layout: "draggable-carousel",
    accentWord: "real-time",
    status: "live",
  },
  {
    id: "filmyheaven",
    number: "07",
    name: "FilmyHeaven",
    subtitle: "Cinematic Streaming Interface",
    year: "2024",
    category: ["Streaming", "UI/UX", "Web"],
    description:
      "A cinematic movie discovery and streaming interface with rich metadata, trailers, and personalized recommendation engine.",
    tech: ["Next.js", "TMDB API", "TypeScript", "Framer Motion", "Tailwind"],
    role: "Frontend Developer",
    slug: "filmyheaven",
    layout: "cinematic-letterbox",
    accentWord: "cinematic",
    status: "live",
  },
  {
    id: "ai-brand-intelligence",
    number: "08",
    name: "AI Brand Intelligence",
    subtitle: "Brand Analysis Platform",
    year: "2026",
    category: ["AI", "Analytics", "SaaS"],
    description:
      "LLM-powered platform that analyzes brand sentiment, competitor positioning, and market perception across digital channels.",
    tech: ["Python", "LangChain", "GPT-4", "FastAPI", "Next.js", "Supabase"],
    role: "AI Engineer",
    slug: "ai-brand-intelligence",
    layout: "pure-typography",
    accentWord: "intelligence",
    status: "in-progress",
  },
];

// ─── SKILLS ──────────────────────────────────────────────────────────────────
export const SKILLS = {
  Development: [
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "FastAPI",
    "Node.js",
    "PostgreSQL",
    "MongoDB",
  ],
  Data: [
    "Machine Learning",
    "Pandas",
    "NumPy",
    "OpenCV",
    "LangChain",
    "Scikit-learn",
    "D3.js",
  ],
  Creative: [
    "GSAP",
    "Three.js",
    "Framer Motion",
    "Motion Design",
    "Interaction Design",
    "WebGL",
  ],
  Tools: [
    "Git",
    "Docker",
    "Vercel",
    "Figma",
    "Postman",
    "Linux",
  ],
} as const;

// ─── EXPERIENCE ───────────────────────────────────────────────────────────────
export interface Experience {
  year: string;
  role: string;
  company: string;
  description: string;
  tags: string[];
}

export const EXPERIENCE: Experience[] = [
  {
    year: "2026",
    role: "Lead Developer",
    company: "LegalSthal",
    description:
      "Building digital experiences and technology infrastructure for a legal-tech startup — architecting scalable backend systems and leading frontend development.",
    tags: ["Next.js", "Python", "System Architecture"],
  },
  {
    year: "2025",
    role: "ML Engineer Intern",
    company: "Placeholder Company", // update with real company
    description:
      "Developed and deployed machine learning pipelines for data classification and real-time inference at production scale.",
    tags: ["Python", "ML", "FastAPI"],
  },
  {
    year: "2024",
    role: "Freelance Developer",
    company: "Independent",
    description:
      "Delivered full-stack web applications and AI integrations for clients across e-commerce, media, and productivity sectors.",
    tags: ["Next.js", "Full Stack", "Client Projects"],
  },
];

// ─── SOCIAL LINKS ─────────────────────────────────────────────────────────────
export const SOCIAL_LINKS = [
  { label: "GitHub",    href: IDENTITY.github,    external: true },
  { label: "LinkedIn",  href: IDENTITY.linkedin,  external: true },
  { label: "Instagram", href: IDENTITY.instagram, external: true },
  { label: "Resume",    href: IDENTITY.resume,    external: false },
] as const;

// ─── MARQUEE ITEMS ────────────────────────────────────────────────────────────
export const MARQUEE_SKILLS = [
  "Creative Development",
  "Machine Learning",
  "Interactive Experiences",
  "Digital Products",
  "Computer Vision",
  "Motion Design",
  "Full Stack Engineering",
  "AI Systems",
] as const;

export const MARQUEE_FOOTER = "Let's Build Something Great";

// ─── SECTION IDS ──────────────────────────────────────────────────────────────
export const SECTION_IDS = {
  hero:         "hero",
  intro:        "intro",
  work:         "work",
  lab:          "lab",
  about:        "about",
  experience:   "experience",
  skills:       "skills",
  contact:      "contact",
  footer:       "footer",
  photography:  "photography",
} as const;
