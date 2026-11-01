# DESIGN.md

Design system specifications, tokens, and component architecture for **Hirzi Rofif Irsaydhi's Portfolio Website**.
Directly derived from the dark studio aesthetic of [Qumax](https://qumax.webflow.io/), filtered through `antislop-ui` and `design-taste-frontend`.

---

## 1. Visual Direction & Aesthetic Identity

- **Art Direction**: Editorial Dark Luxury / Minimalist High-End Digital Studio.
- **Atmosphere**: Deep slate-black canvas, crisp typography, generous whitespace, confident geometric card structures, subtle interactive feedback without neon gimmicks.
- **Governing Law**: Every visual element serves clarity and hierarchy. Zero decorative clutter, zero fake gradients, zero generic icons.

---

## 2. Design Tokens

### Color Palette

| Token | Hex Value | Purpose & Usage |
| :--- | :--- | :--- |
| `--bg-canvas` | `#0A0B0D` | Base page background (deep void charcoal). |
| `--bg-surface` | `#121316` | Card and container background. |
| `--bg-surface-elevated`| `#181A20` | Hover states, active dropdowns, modal layers. |
| `--bg-surface-subtle` | `#1F222B` | Pill tags, technical skill badges, pill wrappers. |
| `--border-subtle` | `#22252E` | Subtle borders dividing cards and sections. |
| `--border-hover` | `#333745` | Hover border accent. |
| `--text-primary` | `#FFFFFF` | Headlines, primary buttons, card titles (100% white). |
| `--text-secondary` | `#9496A1` | Subtitles, body paragraphs, meta descriptions. |
| `--text-muted` | `#5E616E` | Date timestamps, inactive nav links, secondary labels. |
| `--accent-action` | `#FFFFFF` | Primary call to action fill. |
| `--accent-indicator` | `#10B981` | Availability indicator (subtle Emerald status dot). |

### Typography Scale

- **Primary Font**: `Inter`, system-ui, -apple-system, sans-serif.
- **Code/Technical Font**: `JetBrains Mono`, `Fira Code`, monospace (for tech tags & stats only).

| Level | Size (Desktop) | Size (Mobile) | Line Height | Tracking | Weight |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display H1** | `56px` - `68px` | `34px` - `42px` | `1.05` | `-0.035em` | Bold (`700`) |
| **Section H2** | `36px` - `44px` | `26px` - `30px` | `1.15` | `-0.025em` | SemiBold (`600`) |
| **Card H3** | `22px` - `26px` | `18px` - `20px` | `1.25` | `-0.015em` | Medium (`500`) |
| **Body Large** | `17px` - `18px` | `16px` | `1.6` | `-0.01em` | Normal (`400`) |
| **Body Regular** | `15px` - `16px` | `14px` | `1.55` | `0` | Normal (`400`) |
| **Meta / Small** | `13px` - `14px` | `12px` - `13px` | `1.4` | `+0.01em` | Medium (`500`) |

### Spacing & Grid System

- **Container Max Width**: `1240px` (with `px-5 sm:px-8 md:px-12` responsive gutters).
- **Vertical Section Rhythm**:
  - Desktop: `120px` to `160px` margin between major sections.
  - Mobile: `64px` to `88px`.
- **Card Padding**:
  - Desktop: `32px` to `40px`.
  - Mobile: `20px` to `24px`.
- **Corner Radii (`border-radius`)**:
  - Cards & Containers: `16px` - `20px` (modern soft luxury, never exaggerated pills).
  - Badges & Tech Chips: `8px` - `10px`.
  - Buttons: `9999px` (Pill button for primary CTA) or `12px` (standard actions).

---

## 3. Component Architecture (Qumax Inspired)

### A. Navigation Bar (`Navbar`)
- **Structure**: Brand wordmark (`HIRZI / ROFIF`), center navigation anchors (`About`, `Works`, `Services`, `Experience`), right action CTA button (`Let's Talk`).
- **Interaction**: Floating sticky bar with subtle blur backdrop (`backdrop-blur-md bg-[#0A0B0D]/80`), 1px bottom border (`border-[#22252E]`).
- **Mobile**: Minimalist hamburger drawer sliding smoothly with full keyboard accessibility.

### B. Hero Section (`HomeHero`)
- **Structure**:
  - Left column: Bold editorial headline ("Crafting High-Performance Web Systems & Dynamic Interfaces"), sub-statement, primary and secondary CTA buttons ("View Selected Works", "Download CV").
  - Right column: Portrait card featuring Hirzi's photograph (`public/images/foto1.jpg`), framed in a rounded luxury border with an interactive badge: "D4 Software Engineering · Poliwangi" and "Available for New Opportunities".
  - Bottom strip: Highlighted metrics row: "2+ Years Crafting Code", "4 Mo. Industry Experience @ PT Hummatech", "8+ Projects Shipped".

### C. Selected Works / Projects (`WorksSection`)
- **Layout**: Inspired by Qumax Works showcase—alternating large preview cards with full project metadata.
- **Card Items**:
  1. **School Profile & Dynamic MVC Portal (PT Hummatech)**: Dynamic Laravel CMS, custom interactive JavaScript, MySQL, secure routing & role controllers.
  2. **Nursing Fatimah (Healthcare System)**: Clinical management and nursing workflow application.
  3. **High-Performance Landing Page System**: Modern TypeScript, fluid animations, responsive architecture.
  4. **Personal Portfolio**: Next.js 15, Tailwind CSS, Motion transitions, 98+ Lighthouse score.
- **Card Micro-interactions**: Hover zoom on project thumbnails (`scale-102`), arrow slide on project link, tech badges with subtle background tint.

### D. Services & Technical Capabilities (`ServicesSection`)
- **Structure**: Qumax-style numbered technical pillars:
  - `(01)` **Frontend Architecture**: Modern React / Next.js, responsive layouts, Tailwind CSS, component systems, web accessibility.
  - `(02)` **Backend & Dynamic Systems**: Laravel MVC architecture, RESTful API design, MySQL relational databases, authentication & authorization.
  - `(03)` **Interaction & Performance**: Motion animations, Core Web Vitals optimization, smooth scrolling, fast load times.
  - `(04)` **Hardware & Technical Foundation**: Electronics repair engineering (Samsung Tech Institute certified Level 1 & 2), troubleshooting and systemic problem solving.

### E. Professional Journey & Education (`ExperienceSection`)
- **Structure**: Chronological timeline card stack:
  - **Feb 2026 – Jun 2026**: Frontend Developer Intern at **PT HUMMATECH** (Banyuwangi).
  - **Aug 2023 – Present**: D4 Teknologi Rekayasa Perangkat Lunak at **Politeknik Negeri Banyuwangi (POLIWANGI)**.
  - **Aug 2020 – Jun 2023**: Teknik Elektronika Industri at **SMK Muhammadiyah 2 Genteng**.
  - **Certifications**: Samsung Tech Institute (Electronics Repair Level 1 & 2), PT Hummatech Frontend Apprenticeship.

### F. Engineering Philosophy (`PhilosophySection`)
- Replaces generic FAQ / fake reviews with real developer principles:
  - "Code built to last, not just to look pretty."
  - "Speed and responsiveness as a core feature, not an afterthought."
  - "Bridge between robust backend logic and intuitive frontend user experiences."

### G. Footer & Contact Action (`FooterSection`)
- **Headline**: "Have a project, collaboration, or opportunity in mind?"
- **Action**: Large prominent "Let's Talk" button opening email, direct link to GitHub (`github.com/bheeluckzz`), LinkedIn, and CV download.
- **Colophon**: Copyright & credits with clean copyright text.

---

## 4. Motion Guidelines & Interaction Budget

- **Scroll Reveal**: Elements enter viewport with `opacity: 0 -> 1` and `translateY: 20px -> 0px` over `0.5s` with `easeOutCubic`.
- **Button Hover**: Qumax-signature sliding text effect (text slides up and duplicate text slides in from bottom).
- **Reduced Motion**: All transforms and transitions bypassed when `prefers-reduced-motion: reduce` is active.
