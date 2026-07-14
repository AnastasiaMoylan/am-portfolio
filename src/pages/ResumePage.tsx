import "./ResumePage.css";
import ResumeContent from "../components/resume/ResumeContent";

export default function ResumePage() {
  return (
    <div className="resume-page">
      <div className="content-container">
        <div className="resume-page-actions">
          <span className="resume-page-actions-label">
            Anastasia Novelly Moylan &mdash; Resume
          </span>
          <a
            href="/resume.txt"
            download="anastasia-novelly-moylan-resume.txt"
            className="resume-download-link"
          >
            Download plain-text version
          </a>
          <button
            className="resume-print-btn"
            onClick={() => window.print()}
            type="button"
          >
            Print / Save as PDF
          </button>
        </div>

        <ResumeContent />
      </div>
    </div>
  );
}
