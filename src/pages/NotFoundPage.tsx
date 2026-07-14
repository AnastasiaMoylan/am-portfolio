import "./NotFoundPage.css";
import Button from "../components/ui/Button";

export default function NotFoundPage() {
  return (
    <div className="not-found-page">
      <div className="content-container">
        <p className="not-found-code">404</p>
        <h1 className="not-found-heading">Page not found</h1>
        <p className="not-found-body">
          That page doesn&apos;t exist — but there&apos;s plenty here worth looking at.
        </p>
        <div className="not-found-actions">
          <Button to="/" variant="primary">Go to Home</Button>
          <Button to="/work" variant="outline">View Case Studies</Button>
        </div>
      </div>
    </div>
  );
}
