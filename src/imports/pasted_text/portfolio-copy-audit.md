# Portfolio Copy Audit & Tightening Instructions
Site: https://anastasiamoylan.github.io/ (repo: AnastasiaMoylan/Anastasiamoylan.github.io)
Prepared: July 14, 2026

This doc is written as a source-of-truth instruction set. Each section names the file to edit, quotes the current copy, and gives the replacement. Where there's a decision only Anastasia can make (contact info, unfinished case studies), it's flagged as an open item instead of rewritten.

---

## 0. Open items to resolve before editing (don't guess on these)

1. **Email inconsistency.** The site uses `anastasianmoylan.design@gmail.com` everywhere (Header nav via Contact, Footer, ContactPage, ResumeContent, resume.txt). The old uploaded resume PDF uses a different address and drops "Moylan" entirely, listing just "Anastasia Novelly." Confirm which name and email are current before any copy ships — this affects `src/pages/ContactPage.tsx`, `src/components/layout/Footer.tsx`, `src/components/resume/ResumeContent.tsx`, and `public/resume.txt`.
2. **Unfinished case studies.** `src/pages/CaseStudyPage.tsx` only has full content for one of four projects (`governed-ai-finance-workspace`). The other three (`auditable-billing-workflow`, `enterprise-document-knowledge`, `connected-customer-journey`) fall through to "Full case study coming soon." Even the one finished case study has three `[TODO]` placeholders in "Key decisions," plus TODOs in "Outcome and impact" and "What I learned." A portfolio with 3 of 4 featured case studies unbuilt undercuts the "selected work" framing on the homepage — worth finishing before wide distribution.
3. **Location claim.** Resume and Contact both say "St. Marys, Kansas... open to remote work across the Americas." Confirm this is still accurate.

---

## 1. Homepage (`src/pages/HomePage.tsx`, `src/components/home/Hero.tsx`)

**Current hero eyebrow:**
> "Lead Experience Designer · AI and systems design."

Trailing period after a sentence fragment reads like a typo. Tighten:
> "Lead Experience Designer · AI & Systems Design"

**Current headline:**
> "Bridging the gap between product and human experience."

This is a stock phrase — "bridging the gap" shows up on thousands of designer portfolios and doesn't say what's distinctive about the work (systems complexity, AI trust, implementation follow-through). Replace with something that reflects the actual differentiator already stated in the Capability Grid and Philosophy page:
> "Designing enterprise systems people can actually trust."

Alternate if you want to keep it closer to the original structure:
> "Turning complex systems into products people trust."

**Current subhead:**
> "For 10+ years, I've turned complex enterprise workflows into clear, trustworthy products—leading teams and partnering with engineering from early strategy through implementation and quality assurance."

Solid content, slightly long for a hero subhead (37 words). Tighten to:
> "10+ years turning complex enterprise workflows into clear, trustworthy products — leading teams and staying involved from early strategy through implementation and QA."

**Section heading before the "Get in Touch" CTA:**
> "Working on something complex?"

Keep — it's short and on-brand. No change needed.

---

## 2. Capability Grid (`src/components/home/CapabilityGrid.tsx`)

Section eyebrow/title/subtitle are strong and don't need edits. Card bodies run long (45-55 words each) for a 3-column grid meant to be scanned. Tightened versions:

**Card 1 — current:**
> "Roles, permissions, loading states, empty states, failure paths, recovery flows, approval logic — I map all of it before a pixel gets placed. Teams that have worked with me spend less time discovering edge cases in QA and more time shipping work that holds up."

**Tightened:**
> "Roles, permissions, states, failure paths, recovery flows — mapped before a pixel gets placed. Teams I work with spend less time discovering edge cases in QA and more time shipping work that holds up."

**Card 2 — current:**
> "Generated output needs evidence. Latency needs a designed state. Consequential actions need review before they execute and a rollback path after. I've built these patterns into production AI products across finance, telecom, and document intelligence."

**Tightened:**
> "Generated output needs evidence. Latency needs a designed state. Consequential actions need review before they execute and a rollback after. I've shipped these patterns in production AI products across finance, telecom, and document intelligence."

(Minor trim only — this one is already tight and specific. Good copy.)

**Card 3 — current:**
> "Design doesn't end at handoff. I write acceptance criteria, pair with engineers on feasibility, catch regressions in QA, and flag interaction quality issues before they reach users. What I design and what ships are the same thing."

Keep as-is — this is the tightest, most concrete card on the page and doubles as the site's thesis statement. No change.

---

## 3. Process Preview (`src/components/home/ProcessPreview.tsx`)

Five phase blurbs average 55-65 words each, and they repeat ideas already covered in Philosophy and Capability Grid (edge cases, evidence-changes-the-brief, staying close to implementation). Since this is expandable/interactive copy (only shown on click), length is more tolerable here — but "Context" and "Decisions" phases restate content nearly verbatim from the Philosophy page's "Design flows, not screens" and "Change direction when evidence improves" principles. Recommend either:
- Cutting each blurb by ~30% to sharpen the click-to-read payoff, or
- Removing the two most redundant phases' overlap with Philosophy and cross-linking instead ("Full reasoning on the Philosophy page →").

No rewritten copy provided here since the fix is structural (de-duplicate against Philosophy) rather than line-level.

---

## 4. Philosophy Page (`src/pages/PhilosophyPage.tsx`)

This is the strongest-written page on the site — specific, non-generic, backed by concrete examples ("dropped features after POC tests," "changed comparison layouts after research showed side-by-side outperformed tabs"). No edits recommended. This is the copy voice the rest of the site should match.

---

## 5. About Page (`src/pages/AboutPage.tsx`)

Content is accurate and well-organized. Two small fixes:

**Subtitle** currently reads:
> "Lead Experience Designer · 10+ years in enterprise product and AI design"

Consistent with Hero eyebrow — good, no change.

**"Who I am" paragraph 1** is strong. Paragraph 3 ("I also mentor...") is good but slightly undersells scope compared to the Resume, which quantifies mentorship ("mentors two to three designers at a time"). Add the number for consistency and credibility:
> "I also mentor two to three designers at a time. I lead critique sessions, give feedback that explains reasoning — not just corrections — and work to build judgment, not just improve output on a specific project."

---

## 6. Work Page (`src/pages/WorkPage.tsx`)

Copy is clean and appropriately short. One accuracy flag: the confidentiality disclaimer says "the placeholder visuals here represent real interface work — full designs are available to share during a conversation." Confirm this is still true once real case-study visuals are added (see Open Item #2) — if actual screenshots replace placeholders, this line needs to change too.

---

## 7. Contact Page (`src/pages/ContactPage.tsx`)

Copy is direct and effective — no rewrite needed beyond the email fix in Open Item #1. One optional tightening:

**Current:**
> "The best first conversations start with what you're building and where the design challenge actually lives, not a job description."

This is good, keep it.

---

## 8. Resume Page / Resume Content (`src/pages/ResumePage.tsx`, `src/components/resume/ResumeContent.tsx`, `public/resume.txt`)

This is the most over-written content on the site. The Summary section alone is 3 paragraphs / ~230 words, and several Experience bullets exceed 40 words each. For an on-site resume this is workable since visitors are already invested, but it currently reads more like a cover letter than a resume — a hiring manager skimming will lose the shape of the career fast. See the companion resume document for a fully tightened, resume-formatted version of this same content (same facts, ~40% shorter, scannable bullet structure). Recommend replacing `ResumeContent.tsx` and `public/resume.txt` with the tightened version once you're happy with it, so the on-site resume and the downloadable one match.

---

## 9. Footer & Navigation (`src/components/layout/Footer.tsx`, `src/components/layout/Header.tsx`)

No copy issues. Functional and minimal, as it should be.

---

## Summary of concrete text changes

| File | Change |
|---|---|
| `src/components/home/Hero.tsx` | New headline, tightened subhead, eyebrow punctuation fix |
| `src/components/home/CapabilityGrid.tsx` | Tighten card 1 and card 2 body copy |
| `src/pages/AboutPage.tsx` | Add mentorship number to "Who I am" paragraph 3 |
| `src/pages/ContactPage.tsx`, `Footer.tsx`, `ResumeContent.tsx`, `resume.txt` | Resolve and standardize name/email (Open Item #1) |
| `src/pages/CaseStudyPage.tsx` | Fill in TODOs / build out remaining 3 case studies (Open Item #2) |
| `src/components/resume/ResumeContent.tsx`, `public/resume.txt` | Replace with tightened resume copy (see companion resume file) |

Everything else on the site — Philosophy, Work, Contact, Footer, Header — is in good shape as written.
