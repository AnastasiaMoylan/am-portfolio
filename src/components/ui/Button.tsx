import { Link } from "react-router";
import "./Button.css";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  fullWidth?: boolean;
  disabled?: boolean;
  ariaLabel?: string;
}

export default function Button({
  children,
  variant = "primary",
  to,
  href,
  onClick,
  type = "button",
  fullWidth,
  disabled,
  ariaLabel,
}: ButtonProps) {
  const classes = [
    "btn",
    `btn-${variant}`,
    fullWidth ? "btn-full" : "",
  ]
    .filter(Boolean)
    .join(" ");

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
