import { useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router";
import { X } from "lucide-react";
import "./MobileNav.css";
import Button from "../ui/Button";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  triggerRef: React.RefObject<HTMLButtonElement>;
}

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/philosophy", label: "Philosophy" },
  { to: "/about", label: "About" },
];

export default function MobileNav({ isOpen, onClose, triggerRef }: MobileNavProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      closeRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    onClose();
  }, [location.pathname]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && isOpen) {
        onClose();
        triggerRef.current?.focus();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, triggerRef]);

  if (!isOpen) return null;

  return (
    <>
      <div className="mobile-nav-overlay" onClick={onClose} aria-hidden="true" />
      <nav
        className="mobile-nav"
        id="mobile-nav"
        aria-label="Mobile navigation"
      >
        <div className="mobile-nav-header">
          <span className="mobile-nav-title">Navigation</span>
          <button
            ref={closeRef}
            className="mobile-nav-close"
            onClick={() => { onClose(); triggerRef.current?.focus(); }}
            aria-label="Close navigation menu"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>
        <ul className="mobile-nav-list">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  isActive ? "mobile-nav-link active" : "mobile-nav-link"
                }
                aria-current={location.pathname === to ? "page" : undefined}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="mobile-nav-cta">
          <Button to="/contact" variant="primary" fullWidth>
            Let&apos;s Collaborate
          </Button>
        </div>
      </nav>
    </>
  );
}
