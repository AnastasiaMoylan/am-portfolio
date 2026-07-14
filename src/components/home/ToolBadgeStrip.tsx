import "./ToolBadgeStrip.css";
import Badge from "../ui/Badge";

const tools = ["Figma", "React", "Tailwind CSS", "GitHub", "Webflow"];

export default function ToolBadgeStrip() {
  return (
    <div className="tool-strip">
      <div className="content-container">
        <p className="tool-strip-label">Tools I work with</p>
        <ul className="tool-strip-list">
          {tools.map((tool) => (
            <li key={tool}>
              <Badge variant="default">{tool}</Badge>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
