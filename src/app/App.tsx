import { BrowserRouter } from "react-router";
import ReactGA from "react-ga4";
import AppRouter from "./router";

ReactGA.initialize("G-7CVPZRVJQ5");

export default function App() {
  return (
    <BrowserRouter basename="/">
      <AppRouter />
    </BrowserRouter>
  );
}