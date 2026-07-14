import "./ResumeContent.css";

export default function ResumeContent() {
  return (
    <article className="resume">
      {/* ── Header ── */}
      <header>
        <h1 className="resume-name">Anastasia Novelly Moylan</h1>
        <p className="resume-tagline">
          Lead Product Designer | Complex B2B SaaS, AI Workflows &amp; Design Systems
        </p>
        <ul className="resume-contact">
          <li>
            <a href="tel:17858443388" className="resume-contact-link">
              1 (785) 844-3388
            </a>
          </li>
          <li>
            <a href="mailto:anastasianmoylan.design@gmail.com" className="resume-contact-link">
              anastasianmoylan.design@gmail.com
            </a>
          </li>
          <li>
            <a
              href="https://anastasiamoylan.github.io"
              className="resume-contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              anastasiamoylan.github.io
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/anastasia-novelly-moylan-76a70052"
              className="resume-contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/anastasia-novelly-moylan-76a70052
            </a>
          </li>
        </ul>
        <p className="resume-location">
          St. Marys, Kansas, United States &middot; Open to remote work across the Americas
        </p>
      </header>

      {/* ── Summary ── */}
      <section className="resume-section resume-summary" aria-labelledby="resume-summary-heading">
        <h2 className="resume-section-heading" id="resume-summary-heading">Summary</h2>
        <p>
          Lead Experience Designer and product design leader with 10+ years of experience turning complex, data-intensive systems into clear, trustworthy product experiences. Owns work from problem framing and product strategy through end-to-end flows, research, prototyping, design-system decisions, implementation support, and design QA. Experienced across enterprise B2B software, telecommunications, finance, aviation, home security, AI-assisted knowledge tools, workflow automation, and predictive customer experiences.
        </p>
        <p>
          Designs systems rather than isolated screens, defining roles, permissions, states, edge cases, failure conditions, handoffs, and recovery paths before they become implementation problems. Partners closely with product managers, engineers, data teams, architects, finance stakeholders, and client leaders to make tradeoffs explicit and preserve the user experience through delivery. Uses Figma, React, Tailwind CSS, Vite, and AI-assisted development tools to build interaction prototypes, test system behavior, and reduce ambiguity between design and engineering.
        </p>
        <p>
          Brings a specific point of view to AI product design: generated output should be inspectable, consequential actions should be reversible, latency and partial results require designed states, and users should retain control through evidence, review, versioning, and recovery. Leads critique with clear rationale, mentors two to three designers at a time, and changes direction when research or technical evidence reveals a better path.
        </p>
      </section>

      {/* ── Experience ── */}
      <section className="resume-section" aria-labelledby="resume-experience-heading">
        <h2 className="resume-section-heading" id="resume-experience-heading">Experience</h2>

        {/* Amdocs */}
        <div className="resume-job">
          <h3 className="resume-job-company">Amdocs Studios &mdash; formerly Stellar Elements</h3>
          <div className="resume-job-role-group">
            <p className="resume-job-title">Lead Experience Designer | 2025&ndash;Present</p>
            <p className="resume-job-title">Senior Experience Designer | July 2021&ndash;July 2025</p>
          </div>
          <p className="resume-job-meta">St. Marys, Kansas / Distributed enterprise consulting teams</p>
          <ul className="resume-job-bullets">
            <li>Own UX and product design across concurrent enterprise B2B engagements, guiding two to three designers while partnering with product, engineering, data, finance, architecture, and client stakeholders from early strategy through implementation.</li>
            <li>Translate ambiguous business and technical problems into product direction, requirements, capability maps, information architecture, and end-to-end flows covering roles, permissions, loading states, empty states, validation, exceptions, approval paths, and recovery behavior.</li>
            <li>Stay involved beyond handoff by creating development-ready flows, acceptance criteria, decision logs, asynchronous walkthroughs, Definition of Ready and Definition of Done gates, accessibility checks, and design-QA reviews; partner with engineering to assess UI feasibility, surface regressions, and protect interaction quality during delivery.</li>
            <li>Build code-aware interaction prototypes with React, Tailwind CSS, Vite, Windsurf, Figma Make, and enterprise UI libraries to validate behavior and reduce implementation ambiguity.</li>
            <li>Work as an experienced design-system practitioner across Figma variables and components, Flywheel React/Tailwind UI, and DCU patterns; extend systems with reusable validation, status, role, review-and-submit, audit-history, and workflow patterns.</li>
            <li>Lead requirements workshops, co-creation, usability research, working-POC evaluations, critique, backlog prioritization, roadmap definition, sprint planning, test planning, and executive storytelling across teams in the United States, Europe, APAC, and Israel.</li>
            <li>Mentor designers through pairing, structured critique, requirements clarification, and delivery reviews.</li>
            <li>Led an AI-heavy 2025 portfolio spanning finance transformation, enterprise knowledge tools, document intelligence, predictive customer experiences, workflow automation, and rapid proofs of concept.</li>
          </ul>

          <p className="resume-job-selected-label">Selected product ownership and outcomes:</p>

          <div className="resume-sub-job">
            <h4 className="resume-sub-job-title">Finance Transformation / CFO.ai &mdash; Lead UX / Product Designer, 2025&ndash;2026</h4>
            <ul className="resume-job-bullets">
              <li>Led the product model for a governed enterprise-finance workspace connecting Workflow Builder, Sandbox, promotion gates, Production, and monitoring for accountants, analysts, managers/controllers, finance leaders, admins, and viewers.</li>
              <li>Separated experimentation from production so users could test Python analysis, transformations, datasets, and AI-assisted plans without bypassing financial controls.</li>
              <li>Designed AI uncertainty and failure as first-class interaction states, including partial or low-confidence output, failed operations, missing permissions, blocked promotion, exception handling, retry/escalation, and pause/resume/rollback for consequential workflows.</li>
              <li>Made AI activity inspectable through previews, editable plans, generated-code visibility, evidence, logs, lineage, versions, human approvals, and audit history.</li>
              <li>Created PRDs, flows, role models, screeners, recruitment materials, training plans, and moderated research for a working POC.</li>
            </ul>
          </div>

          <div className="resume-sub-job">
            <h4 className="resume-sub-job-title">Custom Work Orders &mdash; Design Lead and UX / Product Strategy Lead, 2024&ndash;2025</h4>
            <ul className="resume-job-bullets">
              <li>Led an AT&amp;T client engagement that replaced fragmented billing-package assembly with a guided B2B workflow spanning project selection, evidence retrieval, screenshot generation, document merging, review, approval, and completion.</li>
              <li>Mapped the complete operational flow across admins, accountants, engineers, owners, and reviewers, including missing evidence, failed automation, loading, validation, interim spreadsheet editing, handoffs, and recovery without loss of progress.</li>
              <li>Defined a reusable status model &mdash; Initiated, In Progress, Review, Approved, Finalized, Completed &mdash; with permissions, ownership, notifications, activity history, UAT sign-off, and audit-trail concepts.</li>
              <li>Partnered with engineering and UI development during implementation and moved unsupported dashboard functionality into a visible future backlog instead of compromising the active release.</li>
              <li>Delivered a completed first MVP for interface and project querying plus a phased roadmap for document integration, in-product editing, expanded review, and automation.</li>
            </ul>
          </div>

          <div className="resume-sub-job">
            <h4 className="resume-sub-job-title">Document Insights / Enterprise Knowledge LLM &mdash; UX and Product Strategy Lead, 2025</h4>
            <ul className="resume-job-bullets">
              <li>Shaped a multi-phase AI document workspace spanning semantic search, document selection, sourced chat, inline citations, an embedded PDF viewer, related questions, side-by-side and table comparison, and AI-assisted drafting.</li>
              <li>Treated citations as navigation rather than decoration, kept selected-document state explicit, and preserved conversation and source context so generated answers remained verifiable.</li>
              <li>Designed privacy-aware persistence, requiring an intentional save rather than retaining user activity by default.</li>
              <li>Led or contributed to mixed-method research, protocol development, affinity synthesis, usage-metric definition, and roadmap prioritization; changed navigation and comparison recommendations based on evidence about tab confusion, trust, and preference for side-by-side review.</li>
            </ul>
          </div>

          <div className="resume-sub-job">
            <h4 className="resume-sub-job-title">Globe Connected Customer Journey &mdash; Senior UX Designer, completed by April 2025</h4>
            <ul className="resume-job-bullets">
              <li>Designed a complex, data-driven customer journey platform connecting dynamic segmentation, predictive churn signals, sentiment and NPS health, journey drop-offs, AI-assisted messaging, offer customization, and performance monitoring.</li>
              <li>Converted model output into decision support by pairing predictions with customer context, lifecycle stage, behavior, sentiment, and available actions instead of presenting an opaque score as a final answer.</li>
              <li>Created an end-to-end mitigation flow from segment and risk detection through context review, human-selected action, message or offer adjustment, launch, monitoring, and iteration.</li>
              <li>Preserved human control by requiring users to review and edit AI-assisted communication before delivery.</li>
            </ul>
          </div>
        </div>

        {/* American Airlines */}
        <div className="resume-job">
          <h3 className="resume-job-company">American Airlines</h3>
          <p className="resume-job-title">Senior Product Designer | December 2019&ndash;July 2021 | Dallas&ndash;Fort Worth, Texas</p>
          <ul className="resume-job-bullets">
            <li>Contributed senior product-design expertise within a large-scale aviation and digital-product environment, balancing customer needs, business priorities, operational requirements, and technical constraints.</li>
            <li>Applied product strategy, user advocacy, interaction design, prototyping, critique, and cross-functional collaboration to airline product work.</li>
            <li>Partnered across disciplines to translate requirements and complex workflows into usable digital experiences and clearer product direction.</li>
          </ul>
        </div>

        {/* Brinks */}
        <div className="resume-job">
          <h3 className="resume-job-company">Brinks Home Security</h3>
          <p className="resume-job-title">Lead UI/UX Designer | June 2015&ndash;December 2019 | Greater Chicago Area</p>
          <ul className="resume-job-bullets">
            <li>Led UX and UI design in the home-security and technology domain, with an emphasis on data-driven design and conversion-rate optimization.</li>
            <li>Translated customer, business, and technical needs into understandable digital-product experiences using systems thinking, interaction design, and user-centered problem solving.</li>
            <li>Collaborated across product, engineering, marketing, and business functions to improve usability and support measurable product and conversion goals.</li>
            <li>Brought strategic communication, audience understanding, and evidence-based design rationale to stakeholder reviews and product decisions.</li>
          </ul>
        </div>
      </section>

      {/* ── Skills ── */}
      <section className="resume-section" aria-labelledby="resume-skills-heading">
        <h2 className="resume-section-heading" id="resume-skills-heading">Skills</h2>

        <div className="resume-skills-group">
          <p className="resume-skills-label">Product design and ownership</p>
          <p className="resume-skills-body">End-to-end product-area ownership, product/UX strategy, complex B2B SaaS and enterprise platforms, systems thinking and information architecture, end-to-end flows/state models/edge cases/recovery paths, interaction design, workflow automation, requirements/PRDs/acceptance criteria, roadmaps/backlogs/prioritization, design QA and accessibility review.</p>
        </div>

        <div className="resume-skills-group">
          <p className="resume-skills-label">AI interaction design</p>
          <p className="resume-skills-body">AI-assisted workflows and LLM interaction design, uncertainty/latency/partial results/reversibility, human-in-the-loop review, evidence/citations/explainability, generated-plan and generated-code inspection, agent activity/logs/lineage/versioning/auditability, predictive analytics and decision-support interfaces, experimentation and promotion gates.</p>
        </div>

        <div className="resume-skills-group">
          <p className="resume-skills-label">Flow literacy and complex systems</p>
          <p className="resume-skills-body">Role and permission modeling, loading/empty/error/blocked/success states, progressive validation and preserved-progress patterns, approval/exception/escalation/retry/rollback paths, audit trails and compliance-aware workflows.</p>
        </div>

        <div className="resume-skills-group">
          <p className="resume-skills-label">Design systems and implementation</p>
          <p className="resume-skills-body">Figma variables, components, and libraries; design-system adoption and extension; Flywheel React/Tailwind UI and DCU; React and Tailwind CSS prototyping; Vite, Heroicons, Windsurf, Figma Make; engineering pairing, UI feasibility review, regression identification.</p>
        </div>

        <div className="resume-skills-group">
          <p className="resume-skills-label">Research, communication, and leadership</p>
          <p className="resume-skills-body">Moderated usability and working-POC testing, qualitative/quantitative research planning, affinity mapping and synthesis, stakeholder workshops, client consulting, executive storytelling, critique/mentorship/pairing, multi-team/multi-time-zone delivery.</p>
        </div>

        <div className="resume-skills-group">
          <p className="resume-skills-label">Tools</p>
          <p className="resume-skills-body">Figma, FigJam, Figma Make, React, Tailwind CSS, Vite, Flywheel UI, DCU, Heroicons, Windsurf, Jira, Notion, Excel, Markdown, Word, PowerPoint, Mermaid, draw.io, ChatGPT, Claude, MCP-enabled workflows.</p>
        </div>

        <div className="resume-skills-group">
          <p className="resume-skills-label">Domain experience</p>
          <p className="resume-skills-body">Enterprise finance and financial operations, telecommunications and customer-experience platforms, aviation, home security and technology, AI-enabled B2B software, enterprise knowledge and document intelligence, data governance and analytics.</p>
        </div>
      </section>

      {/* ── Education ── */}
      <section className="resume-section" aria-labelledby="resume-education-heading">
        <h2 className="resume-section-heading" id="resume-education-heading">Education</h2>
        <div className="resume-edu-item">
          <p className="resume-edu-school">The University of Kansas</p>
          <p className="resume-edu-degree">Bachelor of Science in Journalism (BSJ), Strategic Communications &mdash; Lawrence, Kansas</p>
        </div>
        <div className="resume-edu-item">
          <p className="resume-edu-school">LUMA Institute</p>
          <p className="resume-edu-degree">LUMA Design Thinking Practitioner</p>
        </div>
      </section>
    </article>
  );
}
