import { Link } from "react-router";
import "./WorkCard.css";
import Badge from "../ui/Badge";
import type { Project } from "../../data/projects";

interface WorkCardProps {
  project: Project;
}

export default function WorkCard({ project }: WorkCardProps) {
  return (
    <article className="work-card">
      <div
        className="work-card-image"
        role="img"
        aria-label={`Case study visual — placeholder for: ${project.title}`}
      >
        Case study visual — placeholder
      </div>
      <div className="work-card-body">
        <div className="work-card-meta">
          <Badge variant="status">{project.status}</Badge>
          <span className="work-card-role">{project.role}</span>
        </div>
        <h3>
          <Link
            to={`/work/${project.slug}`}
            className="work-card-title"
            aria-label={`Read case study: ${project.title}`}
          >
            {project.title}
          </Link>
        </h3>
        <p className="work-card-problem">{project.problem}</p>
        <ul className="work-card-tags">
          {project.tags.map((tag) => (
            <li key={tag}>
              <Badge variant="accent">{tag}</Badge>
            </li>
          ))}
        </ul>
        <p className="work-card-outcome">{project.outcome}</p>
        <Link
          to={`/work/${project.slug}`}
          className="work-card-link"
          aria-label={`Read case study: ${project.title}`}
          tabIndex={-1}
          aria-hidden="true"
        >
          Read case study &rarr;
        </Link>
      </div>
    </article>
  );
}
