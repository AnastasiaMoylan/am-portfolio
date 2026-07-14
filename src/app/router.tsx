import { Routes, Route } from "react-router";
import AppShell from "../components/layout/AppShell";
import HomePage from "../pages/HomePage";
import WorkPage from "../pages/WorkPage";
import CaseStudyPage from "../pages/CaseStudyPage";
import PhilosophyPage from "../pages/PhilosophyPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import ResumePage from "../pages/ResumePage";
import NotFoundPage from "../pages/NotFoundPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<HomePage />} />
        <Route path="work" element={<WorkPage />} />
        <Route path="work/:slug" element={<CaseStudyPage />} />
        <Route path="philosophy" element={<PhilosophyPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="resume" element={<ResumePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
