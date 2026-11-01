/**
 * PORTFOLIO DATA CONFIGURATION
 * 
 * Edit all content, images, links, projects, and texts here.
 * Everything is centralized so you can easily customize it without touching the component code.
 */

export interface NavLink {
  name: string;
  href: string;
}

export interface HighlightProjectItem {
  id: string;
  title: string;
  category: string;
  role: string;
  description: string;
  stack: string[];
  githubUrl: string;
  liveUrl?: string;
  gradient: string;
}

export interface SliderRepoItem {
  id: string;
  name: string;
  language: string;
  category: string;
  description: string;
  githubUrl: string;
  liveUrl?: string;
  stars?: number;
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  items: string[];
}

export interface CredentialItem {
  id: string;
  badge: string;
  period: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ArticleItem {
  date: string;
  readTime: string;
  category: string;
  title: string;
  slug: string;
}

export const PORTFOLIO_DATA = {
  // Personal & Header Profile
  personal: {
    name: "HIRZI",
    fullName: "Hirzi Rofif Irsaydhi",
    roleTitle: "Lead Web Developer & Software Engineer",
    location: "Banyuwangi, East Java, Indonesia",
    statusBadge: "Available for Software Engineering Roles",
    rating: "5.0 / 5",
    ratingSubtitle: "D4 TRPL Politeknik Negeri Banyuwangi",
    email: "hirzirofifirsyadhi@gmail.com",
    cvPdfPath: "/CV_Hirzi_Rofif_Irsaydhi.pdf",
    githubUrl: "https://github.com/bheeluckzz",
    bio: "Software engineering student at Politeknik Negeri Banyuwangi (D4 TRPL) and ex-Frontend Developer Intern at PT Hummatech. Specialized in structured Laravel MVC backends, resilient RESTful APIs, and reactive Next.js 16 interfaces.",
  },

  // Navbar Configuration
  navigation: {
    links: [
      { name: "Home", href: "#hero" },
      { name: "Works", href: "#works" },
      { name: "Repositories", href: "#repositories" },
      { name: "Services", href: "#services" },
      { name: "Experience", href: "#experience" },
      { name: "FAQs", href: "#faq" },
      { name: "Journal", href: "#journal" },
      { name: "Contact", href: "#contact" },
    ] as NavLink[],
    ctaButton: {
      text: "Let's Talk",
      href: "mailto:hirzirofifirsyadhi@gmail.com?subject=Project%20Collaboration",
    },
  },

  // Hero Section
  hero: {
    bgImage: "/images/hero-bg.png",
    altText: "Hirzi Rofif Irsaydhi - Hero Cosmic Background",
    
    // Top dual subtexts
    subtextLeft:
      "We create thoughtful digital experiences that meet today’s needs while staying flexible, scalable, and ready for what comes next.",
    subtextRight:
      "Driven by technical discipline, focused on clean architecture, and built for long-term impact.",

    // Stat card floating on right
    statCard: {
      value: "04 Mo.+",
      label: "PT Hummatech Internship",
      caption: "Driven by technical discipline, focused on clean architecture, and built for long-term impact.",
    },

    // Master Headlines
    headlineTop: "Designed for today.",
    headlineBottom: "Made for tomorrow.",
    leadDescription:
      "Thoughtfully crafted to deliver modern style, lasting quality, and reliable software engineering.",

    // Action buttons
    primaryCta: {
      text: "Explore Works",
      href: "#works",
    },
    secondaryCta: {
      text: "Curriculum Vitae",
      href: "/CV_Hirzi_Rofif_Irsaydhi.pdf",
    },
  },

  // Running Text / Marquee Ticker
  runningTicker: [
    "LARAVEL MVC ARCHITECTURE",
    "NEXT.JS 16 & REACT 19",
    "TAILWIND CSS v4",
    "TYPESCRIPT",
    "MYSQL RELATIONAL SCHEMA",
    "RESTFUL API INTEGRATION",
    "PT HUMMATECH INTERNSHIP",
    "POLITEKNIK NEGERI BANYUWANGI",
    "SAMSUNG TECH INSTITUTE CERTIFIED",
    "CORE WEB VITALS OPTIMIZATION",
  ],

  // Selected Works / Projects
  works: {
    tag: "(01) Selected Systems",
    heading: "Featured Works",
    description:
      "Core highlighted production repositories: PORTOFOLIO, IMM, WEDDING, and RSIF.",

    // The 4 main highlighted projects
    highlights: [
      {
        id: "portofolio",
        title: "PORTOFOLIO — Personal Developer Studio",
        category: "Jamstack & Studio Experience",
        role: "Lead Fullstack & UI Design",
        description:
          "High-end editorial portfolio inspired by Qumax dark studio aesthetic. Engineered with Next.js 16, React 19, Motion scroll choreography, and strict WCAG accessibility.",
        stack: ["Next.js 16", "React 19", "Tailwind v4", "Motion", "TypeScript"],
        githubUrl: "https://github.com/bheeluckzz/PORTOFOLIO",
        liveUrl: "https://portofolio-gilt-tau-30.vercel.app",
        gradient: "from-[#111317] via-[#1A1D24] to-[#282C37]",
      },
      {
        id: "imm",
        title: "IMM — Ikatan Mahasiswa Muhammadiyah",
        category: "Organization & Membership Platform",
        role: "Fullstack Web Architect",
        description:
          "Official digital web platform and membership management portal for Ikatan Mahasiswa Muhammadiyah. Equipped with administrative dashboards, event publishing, member database, and dynamic content management.",
        stack: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "JavaScript"],
        githubUrl: "https://github.com/bheeluckzz/imm",
        gradient: "from-[#151B28] via-[#1E293B] to-[#0F172A]",
      },
      {
        id: "wedding",
        title: "WEDDING — Interactive Digital Invitation",
        category: "Event Experience & Digital RSVP",
        role: "Creative Frontend Developer",
        description:
          "Interactive modern digital wedding invitation platform featuring dynamic personalized guest naming, background audio integration, realtime RSVP confirmation, and digital wishing well.",
        stack: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Audio API"],
        githubUrl: "https://github.com/bheeluckzz/wedding",
        gradient: "from-[#2A1820] via-[#381D29] to-[#1E1118]",
      },
      {
        id: "rsif",
        title: "RSIF — Rumah Sakit Islam Fatimah Clinical System",
        category: "Healthcare & Patient Administration",
        role: "Backend & Systems Architecture",
        description:
          "Hospital and clinical patient administration software engineered for RSI Fatimah (nursing_fatimah). Streamlines patient medical record tracking, nurse assignment workflows, and secure medical reporting.",
        stack: ["Laravel", "PHP", "MySQL", "JavaScript", "REST APIs"],
        githubUrl: "https://github.com/bheeluckzz/nursing_fatimah",
        gradient: "from-[#0F2027] via-[#203A43] to-[#2C5364]",
      },
    ] as HighlightProjectItem[],

    // Slide Carousel for other repositories
    sliderSection: {
      tag: "(01.1) All Repositories",
      heading: "Explore More Repositories",
      description:
        "Horizontal scrollable slider showcasing open-source projects, tools, frameworks, and architecture explorations.",
      repos: [
        {
          id: "landing-page",
          name: "Landing_Page",
          language: "TypeScript",
          category: "Frontend Architecture",
          description:
            "Modern, responsive web landing page built with clean TypeScript paradigms. Optimized for fast First Contentful Paint and zero CLS.",
          githubUrl: "https://github.com/bheeluckzz/Landing_Page",
        },
        {
          id: "jsf",
          name: "JSF",
          language: "JavaScript",
          category: "Frontend Foundation",
          description:
            "Modular JavaScript web structure focusing on efficient DOM reconciliation, responsive state management, and lightweight asset bundles.",
          githubUrl: "https://github.com/bheeluckzz/JSF",
        },
        {
          id: "school-profile",
          name: "School Profile & Portal",
          language: "PHP / Laravel",
          category: "Enterprise Web Portal",
          description:
            "Dynamic school profile web platform built during internship at PT Hummatech. Implemented dynamic MVC architecture and custom components.",
          githubUrl: "https://github.com/bheeluckzz",
        },
        {
          id: "oop",
          name: "OOP",
          language: "Dart",
          category: "Algorithms & Paradigms",
          description:
            "Object-oriented programming implementations, data structures, algorithmic problems, and design patterns in Dart.",
          githubUrl: "https://github.com/bheeluckzz/OOP",
        },
        {
          id: "online-web",
          name: "onlineWEB",
          language: "HTML / CSS",
          category: "Web Interfaces",
          description:
            "Online web interface experiments, interactive responsive views, and layout structures.",
          githubUrl: "https://github.com/bheeluckzz/onlineWEB",
        },
        {
          id: "bootstrap",
          name: "BOOTSTRAP",
          language: "HTML / CSS",
          category: "Component Systems",
          description:
            "Component layouts and responsive grid system implementations using Bootstrap framework standards.",
          githubUrl: "https://github.com/bheeluckzz/BOOTSTRAP",
        },
        {
          id: "html",
          name: "HTML",
          language: "HTML5 / CSS3",
          category: "Web Fundamentals",
          description:
            "Semantic HTML5 architecture, semantic tags, accessibility, and modern CSS3 styling exercises.",
          githubUrl: "https://github.com/bheeluckzz/HTML",
        },
      ] as SliderRepoItem[],
    },
  },

  // Services & Capabilities Section
  services: {
    tag: "(02) Capabilities",
    heading:
      "Services — Solutions That Connect. Bringing brand, design, and performance together with purpose.",
    manifestoQuote:
      "“We didn’t start writing software to follow trends, we started it to build systems that last.”",
    pillars: [
      {
        number: "(01)",
        title: "Brand & Architecture",
        description:
          "Developing resilient backend services, structured database layers, and secure RESTful endpoints.",
        items: [
          "Laravel Framework & MVC Pattern",
          "RESTful API Architecture & Sync",
          "MySQL Relational Database Schema",
          "Controller, Route & Middleware Logic",
          "Secure Data Validation & Sanitization",
          "Dynamic Content Management (CMS)",
          "Role-Based Access Control (RBAC)",
        ],
      },
      {
        number: "(02)",
        title: "Advanced Tech",
        description:
          "Crafting reactive web interfaces with modular components, clean state trees, and visual fidelity.",
        items: [
          "Modern React & Next.js 16 Builds",
          "Tailwind CSS v4 Design Tokens",
          "Mobile-First Responsive Layouts",
          "Custom Motion Micro-Interactions",
          "TypeScript Type Safety",
          "Accessibility & Keyboard Navigation",
          "Modular Component Architecture",
        ],
      },
      {
        number: "(03)",
        title: "Performance & Vitals",
        description:
          "Ensuring web applications load instantaneously with smooth user transitions and zero layout shift.",
        items: [
          "Sub-Second Page Load Optimization",
          "Core Web Vitals Focus (LCP, CLS, INP)",
          "Optimized Next.js Image Pipelines",
          "Prefers-Reduced-Motion Compliance",
          "Semantic HTML5 & On-Page SEO",
          "Lightweight Asset Bundling",
          "Cache & Prerender Strategies",
        ],
      },
      {
        number: "(04)",
        title: "Systems & Diagnostics",
        description:
          "Hardware engineering foundation delivering systematic troubleshooting and hardware-level discipline.",
        items: [
          "Samsung Tech Institute Certification",
          "Level 1 & Level 2 Certified Diagnostics",
          "Hardware Debugging Protocol",
          "Industrial Electronics Foundation (SMK)",
          "Circuit Logic & Signal Tracing",
          "Root Cause Analysis Protocol",
          "Operational Precision",
        ],
      },
    ] as ServiceItem[],
  },

  // Intro Stance & Experience / Credentials
  experience: {
    stanceTag: "(03) Engineering Stance",
    stanceText:
      "Connecting system architecture, modern frontends, and diagnostic engineering discipline to bring durable software to life.",

    tag: "(04) Experience & Credentials",
    heading:
      "Clients & Credentials — Proven engineering in production environments.",
    description:
      "Real-world delivery records, academic engineering discipline, and certified diagnostic competency.",
    credentials: [
      {
        id: "hummatech",
        badge: "INTERNSHIP DELIVERABLE",
        period: "Feb 2026 — Jun 2026",
        quote:
          "Hirzi demonstrated high technical diligence during his internship at PT Hummatech, independently architecting dynamic school portals using Laravel MVC and implementing responsive, performant user interfaces.",
        author: "Software Engineering Division",
        role: "Frontend & Fullstack Mentorship",
        organization: "PT HUMMATECH (Malang / Banyuwangi)",
      },
      {
        id: "poliwangi",
        badge: "ACADEMIC EXCELLENCE",
        period: "2023 — Present",
        quote:
          "Consistent focus on algorithmic problem solving, clean database schemas, and structured web development paradigms within the D4 Software Engineering Technology (TRPL) curriculum.",
        author: "Department of Software Engineering",
        role: "D4 TRPL Undergraduate Program",
        organization: "POLITEKNIK NEGERI BANYUWANGI",
      },
      {
        id: "samsung",
        badge: "INDUSTRY CERTIFICATION",
        period: "Certified 2023",
        quote:
          "Certified Level 1 & Level 2 Technician qualification in micro-electronics and hardware diagnostics. Demonstrates rigorous problem diagnosis, signal tracing, and systematic repair execution.",
        author: "Samsung Tech Institute / GSI",
        role: "Hardware & Diagnostic Certification",
        organization: "SAMSUNG ELECTRONICS INDONESIA",
      },
    ] as CredentialItem[],
  },

  // FAQs
  faqs: {
    tag: "(05) Common Queries",
    heading: "FAQs",
    description:
      "Got questions? Check out the frequently asked questions below for answers to common inquiries about my engineering process, technical stack, and how we can collaborate effectively.",
    items: [
      {
        question: "What is your primary software engineering stack?",
        answer:
          "My core backend stack is Laravel (PHP) with MySQL for relational databases and RESTful API architecture. On the frontend, I specialize in React, Next.js 16, TypeScript, and Tailwind CSS v4, prioritizing fast render times and strict accessibility.",
      },
      {
        question: "How does your electronics background influence your web development?",
        answer:
          "Vocational training in Industrial Electronics and Level 1 & 2 Technician certification from Samsung Tech Institute instilled a disciplined approach to diagnostics. When debugging software, I isolate variables and trace signals systematically back to the root cause rather than relying on guesswork.",
      },
      {
        question: "What were your concrete contributions during your PT Hummatech internship?",
        answer:
          "I developed school profile web platforms using Laravel MVC. My deliverables included writing dynamic frontends with interactive JavaScript components, configuring routing logic, handling MySQL database interactions, and implementing responsive layouts for production deployment.",
      },
      {
        question: "Can you collaborate within existing teams or repositories?",
        answer:
          "Yes. I am experienced with Git version control, GitHub collaboration, branch hygiene, pull request reviews, and following established architectural conventions.",
      },
      {
        question: "What opportunities are you currently available for?",
        answer:
          "I am actively considering Junior Software Engineer, Frontend Developer, or Fullstack Developer opportunities (full-time, contract, or internships), as well as selective freelance client projects.",
      },
    ] as FAQItem[],
  },

  // Journal / Articles
  journal: {
    tag: "(06) Editorial & Insights",
    heading: "Articles",
    description:
      "Documenting architectural decisions, hardware diagnostics, and fullstack performance notes.",
    articles: [
      {
        date: "November 2026",
        readTime: "4 min read",
        category: "Backend Architecture",
        title: "Architecting Dynamic Portals with Laravel MVC & Relational Database Schemas",
        slug: "https://github.com/bheeluckzz",
      },
      {
        date: "October 2026",
        readTime: "5 min read",
        category: "Engineering Mindset",
        title: "From Hardware Diagnostics to Software Engineering: Why Electronics Discipline Matters",
        slug: "https://github.com/bheeluckzz",
      },
      {
        date: "September 2026",
        readTime: "3 min read",
        category: "Frontend Performance",
        title: "Optimizing Core Web Vitals and Interaction Performance with Next.js & Tailwind CSS",
        slug: "https://github.com/bheeluckzz",
      },
    ] as ArticleItem[],
  },

  // Footer & Call to Action
  footer: {
    ctaTag: "(07) Contact & Connect",
    ctaHeading: "Have a project or opportunity in mind?",
    ctaDescription:
      "Whether you need a dynamic Laravel backend, a modern Next.js interface, or want to discuss software engineering roles—let's talk.",
    ctaButtonText: "Let's Talk",
    ctaEmail: "mailto:hirzirofifirsyadhi@gmail.com?subject=Project%20Collaboration",
    copyrightText: "© 2026 Hirzi Rofif Irsaydhi. All rights reserved.",
  },
};
