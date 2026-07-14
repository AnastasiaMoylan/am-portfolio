import "./Hero.css";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="content-container hero-inner">
        <div>
          <p className="hero-eyebrow">
            Lead Experience Designer &middot; AI and systems
            designer.
          </p>
          <h1 className="hero-headline" id="hero-heading">
            Bridging the gap between product and human
            experience.
          </h1>
          <p className="hero-subheadline">
            For 10+ years, I&apos;ve turned complex enterprise
            workflows into clear, trustworthy
            products&mdash;leading teams and partnering with
            engineering from early strategy through
            implementation.
          </p>
          <div className="hero-actions">
            <Button to="/work" variant="primary">
              View Case Studies
            </Button>
            <Button to="/philosophy" variant="outline">
              Read My Philosophy
            </Button>
          </div>
          <p className="hero-proof">
            B2B SaaS &middot; Enterprise AI &middot; Fintech
          </p>
        </div>
        <div
          className="hero-visual"
          aria-label="Supporting visual — placeholder"
        >
          Supporting visual — placeholder
        </div>
      </div>
    </section>
  );
}