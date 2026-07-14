import "./ContactPage.css";
import Button from "../components/ui/Button";

export default function ContactPage() {
  return (
    <div className="contact-page">
      <div className="content-container">
        <div className="contact-inner">
          <h1 className="contact-heading">
            Let&apos;s collaborate on a complex product problem.
          </h1>
          <p className="contact-body">
            I&apos;m interested in senior product-design opportunities involving B2B SaaS, AI interaction design, complex workflows, design systems, and cross-functional product leadership.
          </p>
          <div className="contact-actions">
            <Button
              href="mailto:anastasianmoylan.design@gmail.com"
              variant="primary"
            >
              Email Me
            </Button>
            <Button
              href="https://linkedin.com/in/anastasia-novelly-moylan-76a70052"
              variant="outline"
            >
              LinkedIn
            </Button>
            <Button to="/resume" variant="ghost">
              View Resume
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
