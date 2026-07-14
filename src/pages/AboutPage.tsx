import "./AboutPage.css";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";

const timeline = [
  {
    company: "Amdocs Studios (formerly Stellar Elements)",
    roles: [
      "Lead Experience Designer — 2025–Present",
      "Senior Experience Designer — July 2021–July 2025",
    ],
  },
  {
    company: "American Airlines",
    roles: ["Senior Product Designer — December 2019–July 2021"],
  },
  {
    company: "Brinks Home Security",
    roles: ["Lead UI/UX Designer — June 2015–December 2019"],
  },
];

const domains = [
  "Enterprise finance and financial operations",
  "Telecommunications and customer-experience platforms",
  "Aviation",
  "Home security and technology",
  "AI-enabled B2B software",
  "Enterprise knowledge and document intelligence",
  "Data transformation, reporting, governance, and analytics",
];

const tools = [
  "Figma", "FigJam", "Figma variables and components", "Figma Make",
  "React", "Tailwind CSS", "Vite", "Flywheel UI", "DCU", "Heroicons",
  "Windsurf", "Jira", "Notion",
];

export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="content-container">
        <SectionHeading eyebrow="About" title="Anastasia Novelly Moylan" />
        <div className="about-inner">
          <div className="about-section">
            <p className="about-section-title">Biography</p>
            <p className="about-bio">
              I&apos;m Anastasia Novelly Moylan, a Lead Experience Designer focused on AI-involved B2B products, enterprise workflows, and design systems. Across more than a decade in UX and product design, I&apos;ve worked in home security, aviation, telecommunications, finance, document intelligence, and customer-experience platforms. I lead design across complex engagements, mentor designers, and partner closely with product and engineering to carry decisions from evidence and strategy into implemented experiences.
            </p>
          </div>

          <div className="about-section">
            <p className="about-section-title">Career timeline</p>
            <ul className="about-timeline">
              {timeline.map(({ company, roles }) => (
                <li key={company} className="about-timeline-item">
                  <span className="about-timeline-company">{company}</span>
                  {roles.map((role) => (
                    <span key={role} className="about-timeline-role">{role}</span>
                  ))}
                </li>
              ))}
            </ul>
          </div>

          <div className="about-section">
            <p className="about-section-title">Domain experience</p>
            <ul className="about-tags">
              {domains.map((d) => (
                <li key={d} className="about-tag">{d}</li>
              ))}
            </ul>
          </div>

          <div className="about-section">
            <p className="about-section-title">Tools</p>
            <ul className="about-tags">
              {tools.map((t) => (
                <li key={t} className="about-tag">{t}</li>
              ))}
            </ul>
          </div>

          <div className="about-section">
            <p className="about-section-title">Education</p>
            <div className="about-edu-item">
              <p className="about-edu-school">The University of Kansas</p>
              <p className="about-edu-degree">Bachelor of Science in Journalism (BSJ), Strategic Communications — Lawrence, Kansas</p>
            </div>
            <div className="about-edu-item">
              <p className="about-edu-school">LUMA Institute</p>
              <p className="about-edu-degree">LUMA Design Thinking Practitioner</p>
            </div>
          </div>

          <div className="about-cta">
            <Button to="/resume" variant="outline">View Resume</Button>
            <Button to="/contact" variant="primary">Let&apos;s Collaborate</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
