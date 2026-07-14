import { useParams, Link, Navigate } from "react-router";
import "./CaseStudyPage.css";
import { projects } from "../data/projects";
import Button from "../components/ui/Button";

const caseStudyContent: Record<
  string,
  {
    outcomeLabel: string;
    snapshotFields: { label: string; value: string }[];
    context: string;
    ownership: string[];
    keyDecisions: string[];
    states: string[];
    outcome: string;
    learned: string;
  }
> = {
  "governed-ai-finance-workspace": {
    outcomeLabel: "Governed AI workspace — Proof of concept, 2025–2026",
    snapshotFields: [
      { label: "Role", value: "Lead UX / Product Designer" },
      { label: "Employer", value: "Amdocs Studios" },
      { label: "Client", value: "Confidential enterprise telecommunications organization" },
      { label: "Timeframe", value: "2025–2026" },
      { label: "Status", value: "Proof of concept (ongoing platform vision)" },
      { label: "Tools", value: "Figma, React, Tailwind CSS, Vite" },
    ],
    context:
      "Enterprise finance teams needed AI-assisted analysis and transformation tools without losing the governance controls, audit trails, and human accountability that financial operations require. The core tension: AI can accelerate analysis, but accountants, controllers, and compliance stakeholders need to remain responsible for journal entries, accruals, and close work.",
    ownership: [
      "Led the product model for a governed enterprise-finance workspace connecting Workflow Builder, Sandbox, promotion gates, Production, and monitoring for accountants, analysts, managers/controllers, finance leaders, admins, and viewers.",
      "Separated experimentation from production so users could test Python analysis, transformations, datasets, and AI-assisted plans without bypassing financial controls; made environment, data access, permissions, and promotion requirements visible throughout the flow.",
      "Designed AI uncertainty and failure as first-class interaction states: partial or low-confidence output, failed data/Python operations, missing permissions, blocked promotion, exception handling, preserved work, retry and escalation, plus pause/resume/rollback concepts for consequential workflows.",
      "Made AI activity inspectable through previews, editable plans, generated-code visibility, evidence, logs, lineage, versions, human approvals, and audit history; preserved human responsibility for accruals, journal entries, close work, and other high-consequence actions.",
      "Created PRDs, flows, role models, screeners, recruitment materials, training plans, and moderated research for a working POC.",
    ],
    keyDecisions: [
      "[TODO: add decision detail — environment separation rationale]",
      "[TODO: add decision detail — promotion gate design]",
      "[TODO: add decision detail — AI uncertainty state patterns]",
    ],
    states: [
      "Partial or low-confidence AI output — visual indicator, explanation, and option to proceed with review",
      "Failed Python/data operations — preserved work state, clear error, retry and escalation path",
      "Missing permissions — blocked state with explanation and request-access path",
      "Blocked promotion — reason visible, checklist of unmet requirements",
      "Pause/resume/rollback — for consequential multi-step workflows",
    ],
    outcome:
      "[TODO: add measured outcomes — POC reception, research findings, roadmap decisions driven by this work]",
    learned: "[TODO: add what was learned or changed direction during this engagement]",
  },
};

export default function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/work" replace />;

  const content = caseStudyContent[slug!];
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  if (!content) {
    return (
      <div className="case-study-page">
        <div className="content-container">
          <Link to="/work" className="case-study-back">&larr; All case studies</Link>
          <div className="case-study-header">
            <p className="case-study-outcome-label">Case study</p>
            <h1 className="case-study-title">{project.title}</h1>
          </div>
          <p className="case-study-text">Full case study coming soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="case-study-page">
      <div className="content-container">
        <Link to="/work" className="case-study-back">&larr; All case studies</Link>

        <div className="case-study-header">
          <p className="case-study-outcome-label">{content.outcomeLabel}</p>
          <h1 className="case-study-title">{project.title}</h1>
        </div>

        <div className="case-study-snapshot">
          <div className="case-study-snapshot-grid">
            {content.snapshotFields.map(({ label, value }) => (
              <div key={label}>
                <p className="case-study-snapshot-item-label">{label}</p>
                <p className="case-study-snapshot-item-value">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="case-study-body">
          <section className="case-study-section">
            <h2 className="case-study-section-heading">Context and stakes</h2>
            <p className="case-study-text">{content.context}</p>
          </section>

          <section className="case-study-section">
            <h2 className="case-study-section-heading">My ownership</h2>
            <ul className="case-study-bullets">
              {content.ownership.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="case-study-section">
            <h2 className="case-study-section-heading">Key decisions</h2>
            <ul className="case-study-bullets">
              {content.keyDecisions.map((item, i) => (
                <li key={i}>
                  <span className="todo-placeholder">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="case-study-section">
            <h2 className="case-study-section-heading">States, edge cases, and recovery</h2>
            <ul className="case-study-bullets">
              {content.states.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="case-study-section">
            <h2 className="case-study-section-heading">Execution</h2>
            <div className="case-study-placeholder" role="img" aria-label="Diagram/screenshot — placeholder">
              Diagram/screenshot — placeholder
              <p className="case-study-placeholder-caption">This would show the end-to-end workspace flow connecting Workflow Builder, Sandbox, and Production environments.</p>
            </div>
          </section>

          <section className="case-study-section">
            <h2 className="case-study-section-heading">Outcome and impact</h2>
            <p className="case-study-text">
              <span className="todo-placeholder">{content.outcome}</span>
            </p>
          </section>

          <section className="case-study-section">
            <h2 className="case-study-section-heading">What I learned</h2>
            <p className="case-study-text">
              <span className="todo-placeholder">{content.learned}</span>
            </p>
          </section>
        </div>

        <div className="case-study-next">
          <div>
            <p className="case-study-next-label">Next case study</p>
            <Link to={`/work/${nextProject.slug}`} className="case-study-next-link">
              {nextProject.title} &rarr;
            </Link>
          </div>
          <Button to="/contact" variant="primary">Let&apos;s Collaborate</Button>
        </div>
      </div>
    </div>
  );
}
