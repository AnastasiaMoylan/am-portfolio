# Figma Make Prompts — Portfolio Website
Anastasia Novelly Moylan — Lead Product Designer portfolio

## How to use this file
1. Paste **Prompt 1** into a brand-new Figma Make file. Let it finish, then check the preview at mobile *and* desktop widths before doing anything else.
2. Paste each follow-up prompt **one at a time, in the same file/thread**, in order. Review after each one. Don't paste two prompts back to back without checking the result — that's how Figma Make drifts from the spec.
3. If something just needs a nudge (move this down 20px, delete that card, change this word), use **Point-and-Edit mode** instead of a new prompt. It's faster, cheaper, and won't risk Figma Make re-touching things you already approved.
4. Every prompt below names the exact page/component it targets. Keep that habit in any prompt of your own — "fix it" or "make it better" burns credits because Figma Make has to guess what you mean.

## Known Figma Make gotchas this sequence is designed around
- **Everything collapsing into one `App.tsx`.** Prompt 1 explicitly requires a real file/folder structure. If Make ignores it, your next prompt should be *only*: "Refactor this into separate files under /components and /pages, one component per file — don't change any design or content." Keeping that prompt narrow stops Make from reinterpreting anything else.
- **Client-side routing gets flaky in the embedded preview.** React Router works in Make, but test every route in the preview before exporting, and confirm a `404.html` redirect strategy if you deploy to static hosting like GitHub Pages (Prompt 1 asks for both).
- **Font substitution.** Figma Make can't use licensed fonts. Inter is free (Google Fonts) and is specified explicitly below — don't let Make quietly swap in a default system font.
- **Invented placeholder imagery.** Left alone, Make will generate stock photos or fake "product screenshots" to fill empty space. Every prompt below explicitly asks for labeled placeholder blocks instead, since your real case-study visuals are confidential and need to be swapped in by hand.
- **Invented copy and metrics.** Make is a language model — a content gap becomes a guess. All real copy is included below so there's nothing left to invent; anywhere content doesn't exist yet, the prompt says to leave a visible `[TODO]` rather than write a new claim.
- **Vertical alignment/spacing requests that don't land.** If a follow-up spacing fix doesn't work, rephrase from "align these" to something literal like "add 16px of space between these two elements" — Make responds better to concrete pixel instructions than to layout vocabulary.
- **Occasional platform errors/stuck states.** If Make throws a persistent error across prompts, duplicate the file and retry the last prompt in the copy. Also check Settings → Experimental models and switch off any non-default model (e.g. an experimental Gemini toggle) if one is enabled — that's a known source of odd failures.

---

## PROMPT 1 — Foundation, design system, and home page

Build the foundation and home page for a personal portfolio website for **Anastasia Novelly Moylan**, a Lead Experience/Product Designer with 10+ years in complex B2B SaaS, AI interaction design, and design systems. This portfolio needs to help her land senior product design roles — it should read as calm, high-contrast, and evidence-driven, not flashy.

**Tech stack:** React + TypeScript, Vite, React Router (browser/history routing), Tailwind CSS. Typeface: **Inter** (Google Fonts) only — do not substitute a different font.

**File structure — this matters, don't skip it.** Do not put all the code in one `App.tsx`. Create a real component structure:
- `/src/app/App.tsx` (shell only) and `/src/app/router.tsx` (route table)
- `/src/components/layout/` → `AppShell.tsx`, `Header.tsx`, `MobileNav.tsx`, `Footer.tsx`
- `/src/components/ui/` → `Button.tsx`, `Badge.tsx`, `SectionHeading.tsx`
- `/src/components/home/` → `Hero.tsx`, `ToolBadgeStrip.tsx`, `CapabilityGrid.tsx`, `ProcessPreview.tsx`
- `/src/pages/` → `HomePage.tsx` fully built, plus placeholder pages `WorkPage.tsx`, `PhilosophyPage.tsx`, `AboutPage.tsx`, `ContactPage.tsx`, `ResumePage.tsx`, `NotFoundPage.tsx` that just render a "Coming soon" heading — I'll build those in later prompts
- `/src/styles/globals.css` for design tokens as CSS variables

**Design tokens (dark theme):**
- `background` #121212, `surface` #1A1A1A, `surface-raised` #242424
- `text` #FAFAFA, `text-muted` #B8B8B8, `border` #3A3A3A
- `accent` (primary CTA) #2F5FDB, `accent-hover` #244BB0, `accent-text` (links) #9DBAFF
- `focus` ring #FFBF69 — amber, used **only** for focus states, never for the primary CTA
- `danger` #FF8A8A (errors only)
- Radius: sm 8px, md 14px, lg 20px
Set these as CSS variables in `globals.css`, then map them into `tailwind.config.ts` as named theme colors (`canvas`, `surface`, `raised`, `ink`, `muted`, `line`, `accent`, `accent-hover`, `accent-text`, `focus`) so every component styles with token names, never raw hex.

**Typography:** Inter Variable with system sans-serif fallback. Body 16–18px, 1.6 line height, ~46rem max reading width for long-form text. Hero headline: responsive `clamp(2.5rem, 7vw, 6.5rem)`. Section headings: `clamp(2rem, 4vw, 3.75rem)`. Only 4 weights: 400/500/600/700. No all-caps body copy; small uppercase "eyebrow" labels with slightly increased letter-spacing are fine.

**Global navigation** (sticky header, desktop nav at `lg` and up, accessible hamburger menu below it):
- Anastasia Novelly Moylan → `/` (real text link, not a logo image)
- Work → `/work`
- Philosophy → `/philosophy`
- About → `/about`
- Let's Collaborate → `/contact` (styled as the primary filled button, not a plain nav link)
Mark the active route with `aria-current="page"`. Mobile menu trigger needs `aria-expanded`/`aria-controls`, moves focus into the menu on open, closes on Escape or route change, returns focus to the trigger on close, and uses minimum 44px touch targets.

**Footer:** email link (`anastasianmoylan.design@gmail.com`), LinkedIn link, Resume link, copyright line, back-to-top link.

**Home page, section order:**
1. Visible-on-focus skip link targeting `<main>`
2. Header
3. **Hero** — Eyebrow: "Lead Experience Designer · AI and systems design." Headline: "Designing systems, mentoring talent, and bridging the gap between product strategy and human experience." Sub-headline: "For 10+ years, I've turned complex enterprise workflows into clear, trustworthy products—leading teams and partnering with engineering from early strategy through implementation." Primary CTA button "View Case Studies" → `/work`. Secondary bordered CTA "Read My Philosophy" → `/philosophy`. Optional proof line under the CTAs: "B2B SaaS · Enterprise AI · Finance transformation · Design systems · React/Tailwind prototyping." Mobile: single column, full-width stacked CTAs. Desktop: optional 7/5 two-column grid (copy left, supporting visual right). No fixed height — content sets the height with generous padding.
4. **Tool badge strip**, labeled "Tools I work with" (quiet proof strip, not logos-as-endorsements): Figma, React, Tailwind CSS, GitHub, Webflow.
5. **Selected work** — 2-column editorial grid on desktop, 1 column on mobile, 4 project cards. Each card: outcome-led title, one-sentence problem, her role, a text status badge (never color alone), 2–3 capability tags, one outcome line, and a "Read case study" link with an accessible label like "Read case study: [title]." Make the title the real link target rather than wrapping the whole card in `<a>`, since the card also has other content. Use a neutral placeholder block labeled "Case study visual — placeholder" with descriptive alt text instead of generating a fake screenshot. Cards, in order:
   1. **Designing a Governed AI Workspace for Enterprise Finance** — AI uncertainty, governance, roles, reversibility, complex finance workflows.
   2. **Replacing Manual Billing-Package Assembly With an Auditable Workflow** — end-to-end flow literacy, error recovery, states, ownership, implementation partnership.
   3. **Making Enterprise AI Answers Verifiable Across Complex Documents** — citations, source context, document selection, comparison, trustworthy AI.
   4. **Reducing Churn With a Connected Customer Journey Platform** — predictive insights, segmentation, human-reviewed AI messaging, action-oriented B2B workflows.
6. **What I bring** — three capability blocks, one or two sentences each: (1) *System-level product ownership* — strategy, information architecture, roles, states, edge cases, recovery, roadmaps. (2) *AI interaction design with guardrails* — uncertainty, latency, evidence, human review, reversibility, auditability. (3) *Design through implementation* — design systems, React/Tailwind prototypes, engineering pairing, QA, regression review.
7. **Process preview** — compact 5-step sequence: Context → Evidence → Decisions → Execution → Outcomes. Vertical on mobile, may wrap horizontally on desktop. Each step links to `/philosophy` for now.
8. **Philosophy teaser** — pull-quote: "Good product design makes the system understandable—not only when everything works, but when data is late, AI is uncertain, permissions change, or a user needs to recover." Links to `/philosophy`.
9. **Contact CTA band** — "Let's collaborate on a complex product problem." Button to `/contact`.
10. Footer

**Accessibility (non-negotiable):** WCAG 2.2 AA contrast, one `<h1>` per page, semantic `<nav>`/`<main>`/`<section>`/`<footer>` landmarks, visible focus states on every interactive element (never color alone), full keyboard operability, `prefers-reduced-motion` support (disable transforms/entry animation), no clipping or horizontal scroll at 200% browser zoom.

**Responsive behavior:** Mobile-first from 320px up. Breakpoints roughly `sm` 640 / `md` 768 / `lg` 1024 / `xl` 1280 / `2xl` 1536. Global content max-width ~1152px, centered, responsive horizontal padding (20px mobile → 48px desktop). Never use fixed pixel heights on text-containing elements — let content wrap naturally.

**Do not:**
- Invent case-study screenshots, client logos, or quantitative metrics I didn't give you — use the labeled placeholders instead.
- Collapse everything into one `App.tsx` — use the file structure above.
- Substitute a font other than Inter.
- Encode status or filter state with color alone.

Show me the home page in the preview at mobile and desktop widths before we move to the next page.

---

## PROMPT 2 — Work index page (`/work`)

Build out `WorkPage.tsx` at the `/work` route, reusing the design tokens, `Header`, and `Footer` from the last prompt — don't touch the home page or the design system.

Structure: intro/scope statement at the top ("Selected product work across enterprise AI, complex B2B workflows, and design systems."), then filter buttons (real `<button>` elements with `aria-pressed` for selected state, not styled `<div>`s), then a responsive project grid, then a short confidentiality/status note, then a contact CTA reusing the same band from the home page.

Filter options: All, AI and Trust, Complex Workflows, B2B SaaS, Design Systems, Research, Data and Finance, Customer Experience. Selecting a filter updates the visible grid without moving focus or losing the page heading.

Grid: 1 column mobile, 2 columns tablet, 3 columns wide desktop. Reuse the same `WorkCard` pattern from the home page — same 4 case studies from Prompt 1, sorted by a numeric `featuredOrder` rather than date. Don't truncate titles or summaries with CSS line-clamping; let card height be content-driven.

Create the reusable card component as `/src/components/work/WorkCard.tsx` and the filter bar as `/src/components/work/WorkFilters.tsx` if they don't already exist from Prompt 1 — refactor the home page to import the shared component rather than duplicating the markup.

---

## PROMPT 3 — Case study template and first case study (`/work/:slug`)

Build the case-study detail template at `/work/:slug` as `CaseStudyPage.tsx`, and populate it with the first case study: **"Designing a Governed AI Workspace for Enterprise Finance."**

Required section order: (1) Title and outcome, (2) Project snapshot, (3) Context and stakes, (4) My ownership, (5) Evidence, (6) Key decisions, (7) Execution and implementation, (8) States, edge cases, and recovery, (9) Outcome and impact, (10) What I learned, (11) Next case study link, (12) Contact CTA.

Project snapshot fields: Role — Lead UX / Product Designer. Employer — Amdocs Studios. Client — Confidential enterprise telecommunications organization. Timeframe — 2025–2026. Status — Proof of concept (ongoing platform vision). Tools — Figma, React, Tailwind CSS, Vite.

Content for this case study (use this real content, don't invent additional claims):
- Led the product model for a governed enterprise-finance workspace connecting Workflow Builder, Sandbox, promotion gates, Production, and monitoring for accountants, analysts, managers/controllers, finance leaders, admins, and viewers.
- Separated experimentation from production so users could test Python analysis, transformations, datasets, and AI-assisted plans without bypassing financial controls; made environment, data access, permissions, and promotion requirements visible throughout the flow.
- Designed AI uncertainty and failure as first-class interaction states: partial or low-confidence output, failed data/Python operations, missing permissions, blocked promotion, exception handling, preserved work, retry and escalation, plus pause/resume/rollback concepts for consequential workflows.
- Made AI activity inspectable through previews, editable plans, generated-code visibility, evidence, logs, lineage, versions, human approvals, and audit history; preserved human responsibility for accruals, journal entries, close work, and other high-consequence actions.
- Created PRDs, flows, role models, screeners, recruitment materials, training plans, and moderated research for a working POC.

Build `DecisionCard.tsx` (evidence / choice / rationale / tradeoff / validation), `ProjectSnapshot.tsx`, `OutcomeList.tsx` (separates measured, qualitative, and delivery outcomes), and `StatusBadge.tsx` (text label first, color as secondary reinforcement only) as reusable components under `/src/components/work/`. Where I haven't given you a specific decision, evidence point, or outcome, leave a visible `[TODO: add decision detail]` placeholder rather than writing one — don't fabricate specifics for a real work case study.

Use a placeholder block for every visual ("Diagram/screenshot — placeholder") with a caption describing what it *would* show and why, since these are confidential interface visuals I'll add later.

---

## PROMPT 4 — Philosophy page (`/philosophy`)

Build `PhilosophyPage.tsx`. Opening line: "Good product design makes the system understandable—not only when everything works, but when data is late, AI is uncertain, permissions change, or a user needs to recover."

Seven principle sections, each with a one-paragraph explanation (write these in a grounded, first-person, non-buzzword voice consistent with the rest of the site):
1. Design flows, not screens
2. Treat implementation as part of design
3. Use systems before creating new patterns
4. Make AI uncertainty visible and action reversible
5. Use critique to improve the decision, not defend the artifact
6. Mentor through context, constraints, and feedback
7. Change direction when the evidence improves

Reuse `SectionHeading` and existing layout patterns. Don't attach a project example or a link to a specific case-study section unless it's already built — leave those as `[TODO: link to relevant case study]` for now.

---

## PROMPT 5 — About page (`/about`)

Build `AboutPage.tsx` with these content blocks: short biography, career timeline, leadership/mentorship approach, domains and product types, tools and implementation fluency, education, resume link, contact CTA.

**Biography (use verbatim):** "I'm Anastasia Novelly Moylan, a Lead Experience Designer focused on AI-involved B2B products, enterprise workflows, and design systems. Across more than a decade in UX and product design, I've worked in home security, aviation, telecommunications, finance, document intelligence, and customer-experience platforms. I lead design across complex engagements, mentor designers, and partner closely with product and engineering to carry decisions from evidence and strategy into implemented experiences."

**Career timeline:**
- Amdocs Studios (formerly Stellar Elements) — Lead Experience Designer, 2025–Present; Senior Experience Designer, July 2021–July 2025
- American Airlines — Senior Product Designer, December 2019–July 2021
- Brinks Home Security — Lead UI/UX Designer, June 2015–December 2019

**Domains:** Enterprise finance and financial operations, telecommunications and customer-experience platforms, aviation, home security and technology, AI-enabled B2B software, enterprise knowledge and document intelligence, data transformation/reporting/governance/analytics.

**Tools:** Figma, FigJam, Figma variables and components, Figma Make, React, Tailwind CSS, Vite, Flywheel UI, DCU, Heroicons, Windsurf, Jira, Notion.

**Education:** Bachelor of Science in Journalism (BSJ), Strategic Communications — The University of Kansas, Lawrence, Kansas. LUMA Design Thinking Practitioner — LUMA Institute.

Link "Resume" to `/resume` and reuse the existing contact CTA band.

---

## PROMPT 6 — Contact page (`/contact`)

Build `ContactPage.tsx`. Heading: "Let's collaborate on a complex product problem." Body: "I'm interested in senior product-design opportunities involving B2B SaaS, AI interaction design, complex workflows, design systems, and cross-functional product leadership."

Actions: email link to `anastasianmoylan.design@gmail.com` (real `mailto:` link), LinkedIn link to `linkedin.com/in/anastasia-novelly-moylan-76a70052`, and a link to `/resume`. **Do not build a contact form** — a direct email link is the primary contact path; a form can be added later as a progressive enhancement, not now.

---

## PROMPT 7 — Not Found page + final QA pass

Build `NotFoundPage.tsx`: a friendly "page not found" message with a link back to Home and a link to Work — not a dead end.

Then run a full QA pass across the whole site:
1. Confirm every nav link, footer link, card link, and CTA button routes to the correct page — click through all of them in the preview.
2. Confirm the mobile menu opens, traps/moves focus correctly, and closes on Escape and on route change.
3. Check every page at 320px, tablet, and desktop widths for clipping, overlap, or horizontal scroll.
4. Tab through the entire home page and work index using only the keyboard and confirm every interactive element has a visible focus ring.
5. Confirm no text is clipped at 200% browser zoom.
6. List anywhere in the site you used a placeholder, a `[TODO]`, or an invented detail so I have a clear list of what still needs real content before this goes live.
