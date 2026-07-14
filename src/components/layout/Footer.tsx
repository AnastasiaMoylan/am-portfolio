import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="content-container footer-inner">
        <ul className="footer-links">
          <li>
            <a
              href="mailto:anastasianmoylan.design@gmail.com"
              className="footer-link"
            >
              anastasianmoylan.design@gmail.com
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/anastasia-novelly-moylan-76a70052"
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="/resume" className="footer-link">
              Resume
            </a>
          </li>
        </ul>
        <div className="footer-meta">
          <span className="footer-copyright">
            &copy; {new Date().getFullYear()} Anastasia Novelly Moylan
          </span>
          <a href="#top" className="footer-back-top">
            Back to top &uarr;
          </a>
        </div>
      </div>
    </footer>
  );
}
