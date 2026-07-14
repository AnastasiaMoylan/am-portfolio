import "./HomePage.css";
import Hero from "../components/home/Hero";
import ToolBadgeStrip from "../components/home/ToolBadgeStrip";
import CapabilityGrid from "../components/home/CapabilityGrid";
import ProcessPreview from "../components/home/ProcessPreview";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import WorkCard from "../components/work/WorkCard";
import { projects } from "../data/projects";

const featuredProjects = [...projects].sort((a, b) => a.featuredOrder - b.featuredOrder);

export default function HomePage() {
  return (
    <>
      <Hero />
      <ToolBadgeStrip />

      <section className="home-work-section" aria-labelledby="home-work-heading">
        <div className="content-container">
          <SectionHeading
            eyebrow="Selected work"
            title="Case studies"
            subtitle="Complex B2B products, enterprise AI, and systems that survive real use."
          />
          <div className="home-work-grid">
            {featuredProjects.map((project) => (
              <WorkCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <CapabilityGrid />
      <ProcessPreview />

      <section className="home-philosophy-section" aria-labelledby="philosophy-teaser-heading">
        <div className="content-container">
          <div className="home-philosophy-inner">
            <SectionHeading eyebrow="Philosophy" title="How I think about design" />
            <blockquote className="home-philosophy-quote">
              &ldquo;Good product design makes the system understandable&mdash;not only when everything works, but when data is late, AI is uncertain, permissions change, or a user needs to recover.&rdquo;
            </blockquote>
            <Button to="/philosophy" variant="outline">Read My Philosophy</Button>
          </div>
        </div>
      </section>

      <section className="home-cta-band" aria-labelledby="home-cta-heading">
        <div className="content-container">
          <h2 className="home-cta-heading" id="home-cta-heading">
            Let&apos;s collaborate on a complex product problem.
          </h2>
          <Button to="/contact" variant="primary">Get in Touch</Button>
        </div>
      </section>
    </>
  );
}
