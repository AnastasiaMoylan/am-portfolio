import { Link } from "react-router";
import "./ProcessPreview.css";
import SectionHeading from "../ui/SectionHeading";

const steps = [
  { label: "Context", number: "01" },
  { label: "Evidence", number: "02" },
  { label: "Decisions", number: "03" },
  { label: "Execution", number: "04" },
  { label: "Outcomes", number: "05" },
];

export default function ProcessPreview() {
  return (
    <section className="process-section" aria-labelledby="process-heading">
      <div className="content-container">
        <SectionHeading
          eyebrow="How I work"
          title="A repeatable design process"
        />
        <div className="process-steps">
          {steps.map(({ label, number }) => (
            <Link to="/philosophy" className="process-step" key={label}>
              <p className="process-step-number">{number}</p>
              <p className="process-step-label">{label}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
