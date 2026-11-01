# RULES.md

Strict execution rules, house style standards, and delivery gates for this project.
Every agent, tool, and contributor must follow these rules without exception.

---

## 1. Visual & Color Rules (Anti-Slop Standards)

1. **No Generic Blue-Purple AI Gradients**:
   - FORBIDDEN: Default blue-to-purple, purple-to-pink, cyan glows, or blurred radial neon orbs behind cards.
   - MANDATORY: Deep, refined dark palette (`#0B0C0E`, `#121316`, `#18191E`, `#1F2128`) with purposeful monochromatic/slate accents and controlled high-contrast white text (`#FFFFFF`, `#9496A1`).
2. **One Deliberate Accent**:
   - The accent color (e.g. electric crisp white / subtle luminous pearl `#E2E8F0` or deliberate contrast accent) appears only on the primary CTA and active tab indicator—never painted across every border, badge, and icon.
3. **No Decorative Clutter & Badges**:
   - FORBIDDEN: Eyebrow pill badges directly above the H1 containing redundant text ("⚡ Web Developer", "Portfolio 2026").
   - FORBIDDEN: Pulsing glowing green or purple status dots that mark no genuine real-time system state.
   - FORBIDDEN: Hairline border grids, faux graph paper backgrounds, and tech-bro crosshair decorations.
4. **Restraint on Glassmorphism & Elevation**:
   - Surface separation must rely primarily on subtle tone stepping (e.g. `bg-[#121316]` against ground `bg-[#0B0C0E]`), not intense 20px blur filters on every card.
   - Glassmorphism capped at 1 surface only (e.g. fixed sticky navigation header).
   - Shadows are flat or minimal; no blurry cloud shadows floating under static cards.

---

## 2. Layout & Typography Rules

1. **Headline Discipline (2-Line Limit)**:
   - Every headline (`h1` - `h3`) must fit in 2 lines or fewer across all breakpoints (desktop, tablet, mobile).
   - Confident tracking (`letter-spacing: -0.02em` to `-0.03em`) and tight leading (`0.95` - `1.1`).
2. **Section Variety (No Bento/Card Clone Monotony)**:
   - Adjacent sections must not share identical layouts.
   - Avoid monotonous 3-column equal card grids everywhere.
   - Hero: Editorial statement with photo offset + live metric chips.
   - Works: Alternating horizontal showcase cards inspired by Qumax (large preview, category pill, view button).
   - Services/Skills: Clean tiered list with accordion/reveal or categorized technical matrices.
   - Experience/Timeline: Structured chronological timeline with company, role, dates, and achievements.
3. **Equal Outer Margins & True Alignment**:
   - Equal left and right gutter padding at all widths (`px-6 md:px-12 lg:px-20`).
   - Content max-width constrained to `1280px` or `1440px`.
   - No section pushed awkwardly to one edge leaving half of the viewport empty without purpose.
4. **Spacing Rhythm**:
   - Desktop section spacing: `120px` to `180px`.
   - Mobile section spacing: `64px` to `96px`.
   - No dead blank stretches larger than half a viewport height.

---

## 3. Motion & Animation Standards

1. **Motion with Intent (Zero Perpetual Loops)**:
   - FORBIDDEN: Endless bouncing icons, spinning continuous badges, or floating cards.
   - Motion is triggered by user scroll or direct interaction (hover, click, focus).
2. **Entrance Orchestration**:
   - Staggered entrances for section headers, subtext, and content cards (stagger: `0.06s` to `0.09s`).
   - Clean translateY upward reveals (`16px` to `24px`) with opacity fade.
   - Easing curve: Natural spring or smooth bezier (`cubic-bezier(0.16, 1, 0.3, 1)`).
3. **Micro-Interactions**:
   - Magnetic or smooth translation hover effects on buttons and work items.
   - Secondary button slide-text hover effect inspired by Qumax (`front` and `back` text swap).
4. **Accessibility First (`prefers-reduced-motion`)**:
   - Always wrap motion components or CSS with `motion-reduce:transform-none` and `motion-reduce:opacity-100`.

---

## 4. Content & Data Authenticity

1. **Strictly Real Profile Information**:
   - Name: **Hirzi Rofif Irsaydhi**
   - Title: **Web Developer & Frontend Engineer**
   - Education: **D4 Teknologi Rekayasa Perangkat Lunak (TRPL), Politeknik Negeri Banyuwangi** & **SMK Muhammadiyah 2 Genteng (Teknik Elektronika Industri)**
   - Professional Experience: **Frontend Developer Intern at PT Hummatech** (developed school profile systems, dynamic MVC architecture, interactive UI in Laravel & Next.js).
   - Certifications: **Samsung Tech Institute / GSI** (Electronics Repair Level 1 & 2), **PT Hummatech Apprenticeship** (Frontend Division).
   - Real GitHub Repositories:
     - `PORTOFOLIO` (TypeScript / Next.js)
     - `JSF` (JavaScript / Web project)
     - `nursing_fatimah` (Hospital / Healthcare web application)
     - `Landing_Page` (TypeScript landing page)
     - `OOP` (Dart Object-Oriented Programming)
2. **Zero Fabricated Social Proof**:
   - No fake testimonials from Silicon Valley CEOs. If testimonials or reviews are displayed, label them as peer reviews, client feedback, or mentor evaluations from actual internships/academic projects, or replace testimonials with **Core Competencies & Engineering Philosophy**.
3. **Honest CTAs & Contact Links**:
   - Direct email link (`mailto:`) with pre-filled subject.
   - Direct GitHub link (`https://github.com/bheeluckzz`).
   - Direct CV download link to Hirzi's PDF.

---

## 5. Technical & Performance Gate

- **Performance**: High Lighthouse score (>= 90 on Mobile, >= 95 on Desktop).
- **Semantics**: Clean semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **Assets**: Images properly compressed, width/height dimensions explicitly defined to eliminate Layout Shift (CLS = 0).
- **Responsiveness**: Pixel-perfect testing on 390px (Mobile), 768px (Tablet), 1024px (Laptop), 1440px+ (Desktop).
