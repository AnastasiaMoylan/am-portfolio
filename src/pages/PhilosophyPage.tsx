import "./PhilosophyPage.css";
import SectionHeading from "../components/ui/SectionHeading";

const principles = [
  {
    title: "Design flows, not screens",
    body: "A screen is a moment in a sequence. I start by mapping the full flow — the role who acts, the state they start from, every branching path, what happens when something fails, and how the user recovers. Designing isolated screens before understanding the flow produces interfaces that work in demos and break in production.",
  },
  {
    title: "Treat implementation as part of design",
    body: "A decision made on a Figma canvas that the engineering team can't implement in the available time or technology isn't a decision — it's a deferred negotiation. I stay involved through handoff, sprint reviews, and QA so that what ships resembles what was designed, and so that necessary compromises are visible and intentional.",
  },
  {
    title: "Use systems before creating new patterns",
    body: "Design systems exist to make consistent decisions fast and to reduce the cost of change. When a new pattern is genuinely needed, it should be defined, documented, and added to the system — not solved quietly in one component and forgotten. I work to extend systems rather than around them.",
  },
  {
    title: "Make AI uncertainty visible and action reversible",
    body: "Generated output should carry evidence, not just answers. Latency and partial results need designed states, not spinners. Actions driven by AI recommendation — especially consequential ones — should be reviewable before they execute and reversible after. Users should stay in control through the full loop: generate, inspect, edit, approve, monitor.",
  },
  {
    title: "Use critique to improve the decision, not defend the artifact",
    body: "Good critique is about the problem the work is trying to solve, not the work itself. I lead critique by stating the design intent and asking whether the artifact achieves it — and I expect the same from designers I work with. Defending a specific solution against alternatives is less productive than asking whether either solution is solving the right problem.",
  },
  {
    title: "Mentor through context, constraints, and feedback",
    body: "Designers grow fastest when they understand why a decision was made, what constraints shaped it, and what would need to be true for it to be wrong. I mentor by sharing the full picture — the user evidence, the technical constraint, the stakeholder concern — and by giving feedback that explains the reasoning rather than just pointing to the result.",
  },
  {
    title: "Change direction when the evidence improves",
    body: "Research is only useful if it can change the plan. I've recommended navigation restructuring based on usability findings, dropped features after working-POC tests revealed preference mismatches, and changed comparison layouts after evidence showed side-by-side outperformed tabs. The goal is to make better decisions, not to be consistent with earlier ones.",
  },
];

export default function PhilosophyPage() {
  return (
    <div className="philosophy-page">
      <div className="content-container">
        <SectionHeading eyebrow="Philosophy" title="How I approach design" />
        <div className="philosophy-opening">
          <blockquote className="philosophy-opening-quote">
            &ldquo;Good product design makes the system understandable&mdash;not only when everything works, but when data is late, AI is uncertain, permissions change, or a user needs to recover.&rdquo;
          </blockquote>
        </div>
        <div className="philosophy-principles">
          {principles.map(({ title, body }, i) => (
            <div className="philosophy-principle" key={title}>
              <p className="philosophy-principle-number">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="philosophy-principle-title">{title}</h2>
              <p className="philosophy-principle-body">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
