import { useState } from "react";
import "./WorkPage.css";
import SectionHeading from "../components/ui/SectionHeading";
import WorkCard from "../components/work/WorkCard";
import WorkFilters from "../components/work/WorkFilters";
import Button from "../components/ui/Button";
import { projects } from "../data/projects";

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? [...projects].sort((a, b) => a.featuredOrder - b.featuredOrder)
      : projects.filter((p) => p.filterCategories.includes(activeFilter));

  return (
    <div className="work-page">
      <div className="content-container">
        <div className="work-page-intro">
          <SectionHeading
            eyebrow="Case studies"
            title="Selected product work"
            subtitle="Enterprise AI, complex B2B workflows, and design systems — across finance, telecommunications, aviation, and home security."
          />
        </div>

        <WorkFilters activeFilter={activeFilter} onFilterChange={setActiveFilter} />

        <div className="work-grid" aria-live="polite" aria-label="Case study results">
          {filtered.map((project) => (
            <WorkCard key={project.slug} project={project} />
          ))}
        </div>

        <aside className="work-page-note">
          All client and engagement details are kept confidential. Case study visuals shown are placeholders for real interface designs, which are available upon request during a recruiting conversation.
        </aside>

        <div className="work-page-cta">
          <h2 className="work-page-cta-heading">Let&apos;s work on something complex together.</h2>
          <Button to="/contact" variant="primary">Get in Touch</Button>
        </div>
      </div>
    </div>
  );
}
