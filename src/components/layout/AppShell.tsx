import { Outlet } from "react-router";
import "./AppShell.css";
import Header from "./Header";
import Footer from "./Footer";

export default function AppShell() {
  return (
    <div className="app-shell" id="top">
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main className="app-main" id="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
