import { useRef, useState } from "react";
import { NavLink } from "react-router";
import { Menu } from "lucide-react";
import "./Header.css";
import Button from "../ui/Button";
import MobileNav from "./MobileNav";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/philosophy", label: "Philosophy" },
  { to: "/about", label: "About" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuBtnRef = useRef<HTMLButtonElement>(null);

  return (
    <header className="header">
      <div className="content-container header-inner">
        <NavLink to="/" className="header-wordmark">
          Anastasia Novelly Moylan
        </NavLink>

        <nav aria-label="Main navigation">
          <ul className="header-nav">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === "/"}
                  className={({ isActive }) =>
                    isActive ? "header-nav-link active" : "header-nav-link"
                  }
                  aria-current={undefined}
                >
                  {({ isActive }) => (
                    <span aria-current={isActive ? "page" : undefined}>
                      {label}
                    </span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-cta">
          <Button to="/contact" variant="primary">
            Let&apos;s Collaborate
          </Button>
        </div>

        <button
          ref={menuBtnRef}
          className="header-menu-btn"
          onClick={() => setMenuOpen(true)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label="Open navigation menu"
        >
          <Menu size={22} aria-hidden="true" />
        </button>
      </div>

      <MobileNav
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        triggerRef={menuBtnRef}
      />
    </header>
  );
}
