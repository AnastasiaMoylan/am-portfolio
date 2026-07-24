import ReactGA from "react-ga4";
import AppRouter from "./router";

if (typeof window !== "undefined") {
  const host = window.location.hostname;
  const isLocal = host === "localhost" || host === "127.0.0.1";
  const optedOut = window.localStorage.getItem("ga-optout") === "1";

  // Skip analytics for dev builds, local previews, and your own visits
  // (set localStorage "ga-optout" = "1" in the browser to opt out on the live site).
  if (import.meta.env.PROD && !isLocal && !optedOut) {
    ReactGA.initialize("G-7CVPZRVJQ5");
  }
}

export default function App() {
  return <AppRouter />;
}
