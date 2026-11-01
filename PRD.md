# PRD.md — Product Requirements Document

## Project: Hirzi Rofif Irsaydhi — Professional Portfolio Website

---

## 1. Executive Summary & Objective

- **Subject**: Hirzi Rofif Irsaydhi — Web Developer & Software Engineering Student (D4 TRPL, Politeknik Negeri Banyuwangi; Ex-Frontend Developer Intern at PT Hummatech).
- **Goal**: Build a world-class, high-impact personal developer portfolio website inspired by the dark aesthetic, layout geometry, and fluid interactions of [Qumax](https://qumax.webflow.io/).
- **Primary Audience**: Tech recruiters, engineering managers, prospective freelance clients, and open-source collaborators.
- **Key Proposition**: Showcases Hirzi as a versatile developer capable of bridging dynamic Laravel backend systems with modern, responsive React/Next.js frontend experiences, backed by real industry internship experience and engineering discipline.

---

## 2. Core Profile & Assets Inventory

| Data Point | Real Profile Details |
| :--- | :--- |
| **Full Name** | Hirzi Rofif Irsaydhi |
| **Current Education** | D4 Teknologi Rekayasa Perangkat Lunak (TRPL), Politeknik Negeri Banyuwangi (2023 – Present) |
| **Prior Education** | SMK Muhammadiyah 2 Genteng — Teknik Elektronika Industri (2020 – 2023) |
| **Industry Internship** | PT HUMMATECH (Feb 2026 – Jun 2026) — Frontend Developer (Laravel MVC, dynamic UI, MySQL) |
| **Certifications** | Samsung Tech Institute / GSI (Electronics Repair Level 1 & 2 Technician, 2023); PT Hummatech Apprenticeship Certificate |
| **Core Technical Skills** | HTML, CSS, Tailwind CSS, JavaScript, TypeScript, React.js, Next.js, PHP, Laravel, MySQL, RESTful APIs |
| **GitHub Profile** | `https://github.com/bheeluckzz` |
| **Featured Repositories** | `PORTOFOLIO`, `JSF`, `nursing_fatimah`, `Landing_Page`, `OOP` |
| **Profile Photograph** | `public/images/foto1.jpg` (Formal high-res portrait) |
| **Curriculum Vitae** | `C:\Users\Hirzi\Downloads\CV_Hirzi_Rofif_Irsaydhi.pdf` |

---

## 3. Functional Requirements

### FR-01: Header & Sticky Navigation
- Persistent or smart auto-hide sticky header with blurred background (`backdrop-blur-md`).
- Brand mark: "HIRZI / ROFIF" (or "HIRZI.DEV").
- Smooth scroll navigation links: `About`, `Projects`, `Capabilities`, `Journey`, `Contact`.
- Primary CTA button: "Let's Talk" with dual-layer text hover animation.
- Mobile responsive drawer with accessible navigation links and social triggers.

### FR-02: Hero Section (The Hook)
- High-contrast, two-line maximum statement headline:
  *"Crafting Resilient Web Systems & Intuitive Digital Interfaces."*
- Supporting paragraph summarizing engineering focus and academic background.
- Direct CTAs:
  - "Explore Projects" (smooth scrolls to Works).
  - "Download CV" (direct download/view of CV PDF).
- Right-column visual: Portrait photograph (`foto1.jpg`) in luxury rounded card with subtle metadata tag ("Available for Projects · Banyuwangi, ID").
- Key metrics banner:
  - **4 Mo.** — Industry Internship at PT Hummatech
  - **8+** — Repositories & Real Web Systems Shipped
  - **D4 TRPL** — Poliwangi Software Engineering

### FR-03: Featured Works Showcase (Qumax Works Template)
- Curated project cards with image preview, live demo link, and GitHub repository source:
  1. **School Profile & Dynamic Portal (PT Hummatech Internship)**:
     - Architecture: Laravel MVC, PHP, MySQL, Interactive JavaScript, Tailwind CSS.
     - Scope: Dynamic CMS pages, custom routing, role controllers, database normalization.
  2. **Nursing Fatimah (Healthcare Application)**:
     - Scope: Hospital/nursing record workflow, clinical management interface.
     - Tech: PHP/Laravel, MySQL, JavaScript.
  3. **High-Performance Landing Page Experience**:
     - Architecture: TypeScript, Responsive CSS, Fluid Animations.
     - GitHub: `bheeluckzz/Landing_Page`.
  4. **Personal Portfolio Platform**:
     - Tech: Next.js 15, Tailwind CSS, Motion, TypeScript.
     - GitHub: `bheeluckzz/PORTOFOLIO`.
  5. **JSF Architectural Framework Project**:
     - Tech: JavaScript, Modular frontend components.

### FR-04: Capabilities & Technical Pillars (Qumax Services Template)
- Numbered interactive service pillars:
  - `(01) Frontend Development`: React, Next.js, Tailwind CSS, component architecture, responsive layouts, accessibility.
  - `(02) Backend & Database Systems`: Laravel, PHP, RESTful APIs, MySQL, database optimization, authentication.
  - `(03) Performance & Micro-Interactions`: Smooth scroll dynamics, Motion animations, Core Web Vitals optimization, zero layout shifts.
  - `(04) Systems & Electronics Foundation`: Technical troubleshooting, Samsung Tech Institute hardware competency, structured debugging.

### FR-05: Career & Education Timeline
- Interactive vertical timeline showing:
  - **2026 (Feb – Jun)**: Frontend Developer Intern at PT HUMMATECH (Banyuwangi).
  - **2023 – Present**: D4 Software Engineering (TRPL) at Politeknik Negeri Banyuwangi.
  - **2023**: Certified Electronics Repair Technician (Samsung Tech Institute / GSI).
  - **2020 – 2023**: Industrial Electronics Engineering at SMK Muhammadiyah 2 Genteng.

### FR-06: Engineering Philosophy & Technical FAQ
- Addresses recruiter & client expectations:
  - *What is your core development stack?* (Laravel, Next.js, Tailwind CSS, TypeScript).
  - *How do you approach code quality?* (Component modularity, clean MVC separation, semantic markup).
  - *Are you available for internships, freelance, or full-time roles?* (Yes, actively open to software engineering opportunities).

### FR-07: Contact & Interactive Footer
- Prominent editorial section: *"Have an ambitious project or engineering opportunity?"*
- Interactive email action (`mailto:`) with pre-configured subject and body.
- Direct links to GitHub (`https://github.com/bheeluckzz`), LinkedIn, and CV download.
- Copyright & developer credit line.

---

## 4. Non-Functional Requirements & Performance Standards

1. **Performance**:
   - Lighthouse Performance Score >= 95 on Desktop, >= 90 on Mobile.
   - Cumulative Layout Shift (CLS) = 0.
   - Largest Contentful Paint (LCP) < 1.5s.
2. **Accessibility (a11y)**:
   - WCAG 2.1 AA compliant.
   - All interactive elements accessible via Tab / Enter / Escape keys.
   - Minimum color contrast ratio 4.5:1 for body copy.
3. **Responsive Breakpoints**:
   - Mobile: 360px – 640px.
   - Tablet: 641px – 1024px.
   - Desktop: 1025px – 1440px+.
4. **Code Quality & Anti-Slop**:
   - Zero placeholder "Lorem Ipsum" copy.
   - Strict adherence to `RULES.md` and `DESIGN.md`.

---

## 5. Technology Stack & Tooling

- **Framework**: Next.js 15 / React 19 (App Router) with TypeScript.
- **Styling**: Tailwind CSS v3/v4 with custom design tokens defined in `tailwind.config.ts`.
- **Animation & Motion**: Motion (`motion/react`) for smooth scroll reveals and micro-interactions.
- **Icons**: Lucide React + custom inline SVGs (for Qumax button sliders).
- **Deployment Target**: Vercel / GitHub Pages / Static Export.
