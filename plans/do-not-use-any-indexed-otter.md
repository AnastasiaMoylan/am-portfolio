# Plan: Full Portfolio + Resume Site — Anastasia Novelly Moylan

## Context
Build a complete portfolio website for Anastasia Novelly Moylan (Lead Product Designer) using both the portfolio prompt file and the resume-page prompt. The user requires:
- **No inline CSS / no Tailwind utility strings in JSX** — all styles live in CSS class definition files
- **CSS class sheets only** — every component imports its own `.css` file; className values are semantic names like `.hero-headline`, never utility chains
- **React components** — proper file-per-component structure
- **React Router** — `react-router` v7 (already installed) with all routes wired

---

## Design Tokens
Set in `src/styles/globals.css` as CSS custom properties, then referenced in component CSS files via `var(--token)`:

```
--background: #121212
--surface: #1A1A1A
--surface-raised: #242424
--text: #FAFAFA
--text-muted: #B8B8B8
--border: #3A3A3A
--accent: #2F5FDB
--accent-hover: #244BB0
--accent-text: #9DBAFF
--focus: #FFBF69
--danger: #FF8A8A
--radius-sm: 8px
--radius-md: 14px
--radius-lg: 20px
```

Also update `src/styles/theme.css` tokens to match (keep `@theme inline` block intact).

---

## File Structure

```
src/
  app/
    App.tsx               — BrowserRouter + Routes
    router.tsx            — route table
  components/
    layout/
      AppShell.tsx + AppShell.css
      Header.tsx + Header.css
      MobileNav.tsx + MobileNav.css
      Footer.tsx + Footer.css
    ui/
      Button.tsx + Button.css
      Badge.tsx + Badge.css
      SectionHeading.tsx + SectionHeading.css
    home/
      Hero.tsx + Hero.css
      ToolBadgeStrip.tsx + ToolBadgeStrip.css
      CapabilityGrid.tsx + CapabilityGrid.css
      ProcessPreview.tsx + ProcessPreview.css
    work/
      WorkCard.tsx + WorkCard.css
      WorkFilters.tsx + WorkFilters.css
      DecisionCard.tsx + DecisionCard.css
      ProjectSnapshot.tsx + ProjectSnapshot.css
      OutcomeList.tsx + OutcomeList.css
      StatusBadge.tsx + StatusBadge.css
    resume/
      ResumeContent.tsx + ResumeContent.css
  pages/
    HomePage.tsx + HomePage.css
    WorkPage.tsx + WorkPage.css
    CaseStudyPage.tsx + CaseStudyPage.css
    PhilosophyPage.tsx + PhilosophyPage.css
    AboutPage.tsx + AboutPage.css
    ContactPage.tsx + ContactPage.css
    ResumePage.tsx + ResumePage.css
    NotFoundPage.tsx + NotFoundPage.css
  styles/
    globals.css           — CSS custom properties / design tokens
    fonts.css             — Google Fonts Inter import
    theme.css             — Tailwind token mapping (keep @theme inline)
    index.css             — imports all above + base styles
public/
  resume.txt              — ATS plain-text download
```

---

## CSS Approach (Critical)

Every component file has a paired `.css` file. JSX uses only semantic class names:

```tsx
// CORRECT
<h1 className="hero-headline">...</h1>

// WRONG — no utility chains in JSX
<h1 className="text-4xl font-bold text-white">...</h1>
```

All layout, color, typography, spacing, hover/focus states, responsive breakpoints, and print overrides go in the `.css` files using `var(--token)` references.

---

## Routes (react-router v7)

```
/           → HomePage
/work       → WorkPage
/work/:slug → CaseStudyPage
/philosophy → PhilosophyPage
/about      → AboutPage
/contact    → ContactPage
/resume     → ResumePage
*           → NotFoundPage
```

`App.tsx` wraps with `<BrowserRouter>`. `router.tsx` exports the `<Routes>` tree. `AppShell.tsx` wraps all routes with Header + Footer.

---

## Resume Page Specifics

- `ResumeContent.tsx` — single source of truth: `<h1>` name, `<h2>` sections, `<h3>` companies, `<h4>` titles, `<ul>/<li>` bullets, real `mailto:` and `tel:` links. All exact content from the resume prompt, no rewriting.
- `ResumePage.tsx` — wraps `<ResumeContent>` + action bar (Print button → `window.print()`, Download plain-text link → `/resume.txt`).
- `ResumeContent.css` includes `@media print`: white background, black text, no dark surfaces, standard margins, `break-after: avoid` on headings.
- `public/resume.txt` — ATS-safe plain text: same order, plain hyphens for bullets, no tables/columns/special characters.

---

## Key Constraints
- One `<h1>` per page; proper heading hierarchy below it
- WCAG AA contrast in on-screen and print versions
- Visible focus states (amber `--focus` ring) on every interactive element
- `prefers-reduced-motion` support
- No multi-column layout on resume (on-screen or print)
- All resume text is real DOM text — no images/SVG/canvas rendering

---

## Verification
1. Every nav link and CTA routes to the correct page
2. Mobile menu opens, traps focus, closes on Escape/route change
3. Pages render correctly at 320px, tablet, desktop
4. Tab through home page — every element has a visible focus ring
5. Resume page: select and copy body text — confirms real DOM text, not images
6. Print resume — preview shows black-on-white single-column layout
7. Download `resume.txt` — clean ATS text
8. Zero `style={}` attributes in JSX; zero Tailwind utility strings in `className`
