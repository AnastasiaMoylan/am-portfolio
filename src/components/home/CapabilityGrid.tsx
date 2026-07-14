import "./CapabilityGrid.css";
import SectionHeading from "../ui/SectionHeading";

const capabilities = [
  {
    icon: "◈",
    title: "System-level product ownership",
    body: "Strategy, information architecture, roles, states, edge cases, recovery, and roadmaps — across the full product lifecycle, not just the happy path.",
  },
  {
    icon: "⬡",
    title: "AI interaction design with guardrails",
    body: "Uncertainty, latency, evidence, human review, reversibility, and auditability — so generated output stays inspectable and consequential actions stay reversible.",
  },
  {
    icon: "◻",
    title: "Design through implementation",
    body: "Design systems, React/Tailwind prototypes, engineering pairing, QA, and regression review — staying involved until the experience ships correctly.",
  },
];

export default function CapabilityGrid() {
  return (
    <section className="capability-grid-section" aria-labelledby="capabilities-heading">
      <div className="content-container">
        <SectionHeading
          eyebrow="What I bring"
          title="End-to-end product thinking"
          subtitle="From problem framing to shipped experience — covering every state, edge case, and handoff in between."
        />
        <div className="capability-grid">
          {capabilities.map(({ icon, title, body }) => (
            <div className="capability-card" key={title}>
              <div className="capability-card-icon" aria-hidden="true">{icon}</div>
              <h3 className="capability-card-title">{title}</h3>
              <p className="capability-card-body">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
