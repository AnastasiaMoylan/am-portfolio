# Figma Make Prompt — Resume Page
Anastasia Novelly Moylan

## How to use this file
- **If you're adding this to the same portfolio Figma Make file** from `portfolio-figma-make-prompt.md`, paste this after Prompt 7 (or whenever you're ready) — it will slot into the existing `/resume` route and reuse your design tokens automatically.
- **If you want a fully standalone resume site** (separate link, nothing else on it), paste this into a brand-new Figma Make file. The prompt below works either way; just say which one you want in the first line when you paste it, e.g. "Add this as the ResumePage at the /resume route of the site we've been building" vs. "Build this as its own standalone single-page site."

## The gotcha this prompt is built around
Web/AI page builders — including Figma Make — tend to treat resume content as a **visual layout problem** and render text inside styled boxes, multi-column grids, or icon-heavy blocks. That's exactly what breaks resumes in the real world: multi-column layouts scramble reading order for ATS parsers, text baked into graphics or exported as a flattened PDF often can't be selected or copied, and recruiters increasingly reject links to a locked visual artifact instead of real text. This prompt explicitly forces:
1. **Real semantic HTML** — actual `<h1>`–`<h3>`, `<p>`, and `<ul>` elements holding real text, not text-in-a-frame that gets rasterized.
2. **Single-column reading order** on-screen and especially in print, so visual order matches document order.
3. **A separate plain-text/ATS-safe export**, not just a styled PDF of the pretty version.
4. Real `mailto:`/`tel:` links instead of plain text or icon-only contact info.

Before you consider this page "done," select and copy a paragraph of body text directly out of the Figma Make preview to confirm it's real text and not an image — that one check catches most of the problem.

---

## PROMPT — Build the resume page

Build a resume page that reuses the site's existing design tokens (dark background `#121212`, text `#FAFAFA`, muted text `#B8B8B8`, accent blue `#2F5FDB`/`#9DBAFF`, Inter typeface) for on-screen viewing, but is fundamentally **content-first**: every word below must render as real, selectable HTML text — never as an image, an SVG with text-as-paths, or text baked into a graphic.

**Structure — file/component setup:**
- `/src/pages/ResumePage.tsx` — the on-screen resume, styled to match the rest of the site
- `/src/components/resume/ResumeContent.tsx` — the actual resume content as a standalone component, so the same content source feeds both the screen version and the print stylesheet (don't duplicate the text in two places)
- A `resume.txt` (or similar) plain-text export available as a direct download link on the page, in addition to the styled page — see "ATS-safe export" below
- A "Print / Save as PDF" button that triggers the browser's native print dialog (`window.print()`), not a canvas-rendered or exported-image PDF

**Layout — on-screen (dark theme, matches the rest of the site):**
Single column, generous line height, clear hierarchy between name, role, section headings, and body text. No multi-column layout, no icon-only contact row — pair any icon with visible text. Use the site's existing `Header`/`Footer` if this lives inside the portfolio; if standalone, include just a minimal header with the name and a link back to the portfolio.

**Layout — print (`@media print`):**
Switch to plain black text on white background (no dark background, no colored accents that won't print well), single column, no shadows/borders/decorative elements, standard print margins, page-break-avoid on section headings so a heading never lands alone at the bottom of a page. This is the version a recruiter will actually print or save as PDF, so it needs to look like a normal one-to-two page resume, not a dark-mode website screenshot.

**Content — use this exactly, do not summarize, invent, or add unlisted claims:**

### Header
Anastasia Novelly Moylan
Lead Product Designer | Complex B2B SaaS, AI Workflows & Design Systems
1 (785) 844-3388 · anastasianmoylan.design@gmail.com (mailto: link) · anastasiamoylan.github.io (link) · linkedin.com/in/anastasia-novelly-moylan-76a70052 (link)
St. Marys, Kansas, United States · Open to remote work across the Americas

### Summary
Lead Experience Designer and product design leader with 10+ years of experience turning complex, data-intensive systems into clear, trustworthy product experiences. Owns work from problem framing and product strategy through end-to-end flows, research, prototyping, design-system decisions, implementation support, and design QA. Experienced across enterprise B2B software, telecommunications, finance, aviation, home security, AI-assisted knowledge tools, workflow automation, and predictive customer experiences.

Designs systems rather than isolated screens, defining roles, permissions, states, edge cases, failure conditions, handoffs, and recovery paths before they become implementation problems. Partners closely with product managers, engineers, data teams, architects, finance stakeholders, and client leaders to make tradeoffs explicit and preserve the user experience through delivery. Uses Figma, React, Tailwind CSS, Vite, and AI-assisted development tools to build interaction prototypes, test system behavior, and reduce ambiguity between design and engineering.

Brings a specific point of view to AI product design: generated output should be inspectable, consequential actions should be reversible, latency and partial results require designed states, and users should retain control through evidence, review, versioning, and recovery. Leads critique with clear rationale, mentors two to three designers at a time, and changes direction when research or technical evidence reveals a better path.

### Experience

**Amdocs Studios — formerly Stellar Elements**
Lead Experience Designer | 2025–Present
Senior Experience Designer | July 2021–July 2025
St. Marys, Kansas / Distributed enterprise consulting teams

- Own UX and product design across concurrent enterprise B2B engagements, guiding two to three designers while partnering with product, engineering, data, finance, architecture, and client stakeholders from early strategy through implementation.
- Translate ambiguous business and technical problems into product direction, requirements, capability maps, information architecture, and end-to-end flows covering roles, permissions, loading states, empty states, validation, exceptions, approval paths, and recovery behavior.
- Stay involved beyond handoff by creating development-ready flows, acceptance criteria, decision logs, asynchronous walkthroughs, Definition of Ready and Definition of Done gates, accessibility checks, and design-QA reviews; partner with engineering to assess UI feasibility, surface regressions, and protect interaction quality during delivery.
- Build code-aware interaction prototypes with React, Tailwind CSS, Vite, Windsurf, Figma Make, and enterprise UI libraries to validate behavior and reduce implementation ambiguity.
- Work as an experienced design-system practitioner across Figma variables and components, Flywheel React/Tailwind UI, and DCU patterns; extend systems with reusable validation, status, role, review-and-submit, audit-history, and workflow patterns.
- Lead requirements workshops, co-creation, usability research, working-POC evaluations, critique, backlog prioritization, roadmap definition, sprint planning, test planning, and executive storytelling across teams in the United States, Europe, APAC, and Israel.
- Mentor designers through pairing, structured critique, requirements clarification, and delivery reviews.
- Led an AI-heavy 2025 portfolio spanning finance transformation, enterprise knowledge tools, document intelligence, predictive customer experiences, workflow automation, and rapid proofs of concept.

*Selected product ownership and outcomes:*

**Finance Transformation / CFO.ai — Lead UX / Product Designer, 2025–2026**
- Led the product model for a governed enterprise-finance workspace connecting Workflow Builder, Sandbox, promotion gates, Production, and monitoring for accountants, analysts, managers/controllers, finance leaders, admins, and viewers.
- Separated experimentation from production so users could test Python analysis, transformations, datasets, and AI-assisted plans without bypassing financial controls.
- Designed AI uncertainty and failure as first-class interaction states, including partial or low-confidence output, failed operations, missing permissions, blocked promotion, exception handling, retry/escalation, and pause/resume/rollback for consequential workflows.
- Made AI activity inspectable through previews, editable plans, generated-code visibility, evidence, logs, lineage, versions, human approvals, and audit history.
- Created PRDs, flows, role models, screeners, recruitment materials, training plans, and moderated research for a working POC.

**Custom Work Orders — Design Lead and UX / Product Strategy Lead, 2024–2025**
- Led an AT&T client engagement that replaced fragmented billing-package assembly with a guided B2B workflow spanning project selection, evidence retrieval, screenshot generation, document merging, review, approval, and completion.
- Mapped the complete operational flow across admins, accountants, engineers, owners, and reviewers, including missing evidence, failed automation, loading, validation, interim spreadsheet editing, handoffs, and recovery without loss of progress.
- Defined a reusable status model — Initiated, In Progress, Review, Approved, Finalized, Completed — with permissions, ownership, notifications, activity history, UAT sign-off, and audit-trail concepts.
- Partnered with engineering and UI development during implementation and moved unsupported dashboard functionality into a visible future backlog instead of compromising the active release.
- Delivered a completed first MVP for interface and project querying plus a phased roadmap for document integration, in-product editing, expanded review, and automation.

**Document Insights / Enterprise Knowledge LLM — UX and Product Strategy Lead, 2025**
- Shaped a multi-phase AI document workspace spanning semantic search, document selection, sourced chat, inline citations, an embedded PDF viewer, related questions, side-by-side and table comparison, and AI-assisted drafting.
- Treated citations as navigation rather than decoration, kept selected-document state explicit, and preserved conversation and source context so generated answers remained verifiable.
- Designed privacy-aware persistence, requiring an intentional save rather than retaining user activity by default.
- Led or contributed to mixed-method research, protocol development, affinity synthesis, usage-metric definition, and roadmap prioritization; changed navigation and comparison recommendations based on evidence about tab confusion, trust, and preference for side-by-side review.

**Globe Connected Customer Journey — Senior UX Designer, completed by April 2025**
- Designed a complex, data-driven customer journey platform connecting dynamic segmentation, predictive churn signals, sentiment and NPS health, journey drop-offs, AI-assisted messaging, offer customization, and performance monitoring.
- Converted model output into decision support by pairing predictions with customer context, lifecycle stage, behavior, sentiment, and available actions instead of presenting an opaque score as a final answer.
- Created an end-to-end mitigation flow from segment and risk detection through context review, human-selected action, message or offer adjustment, launch, monitoring, and iteration.
- Preserved human control by requiring users to review and edit AI-assisted communication before delivery.

**American Airlines**
Senior Product Designer | December 2019–July 2021 | Dallas–Fort Worth, Texas
- Contributed senior product-design expertise within a large-scale aviation and digital-product environment, balancing customer needs, business priorities, operational requirements, and technical constraints.
- Applied product strategy, user advocacy, interaction design, prototyping, critique, and cross-functional collaboration to airline product work.
- Partnered across disciplines to translate requirements and complex workflows into usable digital experiences and clearer product direction.

**Brinks Home Security**
Lead UI/UX Designer | June 2015–December 2019 | Greater Chicago Area
- Led UX and UI design in the home-security and technology domain, with an emphasis on data-driven design and conversion-rate optimization.
- Translated customer, business, and technical needs into understandable digital-product experiences using systems thinking, interaction design, and user-centered problem solving.
- Collaborated across product, engineering, marketing, and business functions to improve usability and support measurable product and conversion goals.
- Brought strategic communication, audience understanding, and evidence-based design rationale to stakeholder reviews and product decisions.

### Skills
Group these under clear subheadings (don't just run them as one long list):
- **Product design and ownership:** end-to-end product-area ownership, product/UX strategy, complex B2B SaaS and enterprise platforms, systems thinking and information architecture, end-to-end flows/state models/edge cases/recovery paths, interaction design, workflow automation, requirements/PRDs/acceptance criteria, roadmaps/backlogs/prioritization, design QA and accessibility review.
- **AI interaction design:** AI-assisted workflows and LLM interaction design, uncertainty/latency/partial results/reversibility, human-in-the-loop review, evidence/citations/explainability, generated-plan and generated-code inspection, agent activity/logs/lineage/versioning/auditability, predictive analytics and decision-support interfaces, experimentation and promotion gates.
- **Flow literacy and complex systems:** role and permission modeling, loading/empty/error/blocked/success states, progressive validation and preserved-progress patterns, approval/exception/escalation/retry/rollback paths, audit trails and compliance-aware workflows.
- **Design systems and implementation:** Figma variables, components, and libraries; design-system adoption and extension; Flywheel React/Tailwind UI and DCU; React and Tailwind CSS prototyping; Vite, Heroicons, Windsurf, Figma Make; engineering pairing, UI feasibility review, regression identification.
- **Research, communication, and leadership:** moderated usability and working-POC testing, qualitative/quantitative research planning, affinity mapping and synthesis, stakeholder workshops, client consulting, executive storytelling, critique/mentorship/pairing, multi-team/multi-time-zone delivery.
- **Tools:** Figma, FigJam, Figma Make, React, Tailwind CSS, Vite, Flywheel UI, DCU, Heroicons, Windsurf, Jira, Notion, Excel, Markdown, Word, PowerPoint, Mermaid, draw.io, ChatGPT, Claude, MCP-enabled workflows.
- **Domain experience:** enterprise finance and financial operations, telecommunications and customer-experience platforms, aviation, home security and technology, AI-enabled B2B software, enterprise knowledge and document intelligence, data governance and analytics.

### Education
**The University of Kansas** — Bachelor of Science in Journalism (BSJ), Strategic Communications, Lawrence, Kansas
**LUMA Institute** — LUMA Design Thinking Practitioner

**Accessibility (non-negotiable):** one `<h1>` (the name), proper heading hierarchy below it, list markup for bullets (not styled `<div>`s), WCAG AA contrast in both the on-screen and print versions, visible focus states on every link, no information conveyed by color alone.

**ATS-safe export:** In addition to the styled page, generate a plain-text version of the exact same content — same section order, no tables, no columns, no special characters standing in for bullets (use plain hyphens), no header/footer graphics — and expose it as a "Download plain-text version" link near the top of the page. This is the version that survives being pasted into an applicant tracking system; the styled page is for a human clicking the link directly.

**Do not:**
- Render any of this content as an image, icon set, or canvas graphic — it all needs to be real text in the DOM.
- Use a multi-column layout anywhere, on-screen or in print — it breaks reading order for both ATS parsers and screen readers.
- Shorten, reword, or add to the experience bullets or skills — use them exactly as given.
- Build the "Print / Save as PDF" button as anything other than the browser's native print function.

Once built, verify by selecting a paragraph of body text directly in the preview to confirm it's real, copyable text — not an image.
