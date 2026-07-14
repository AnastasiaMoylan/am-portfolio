import { BrowserRouter } from "react-router";
import AppRouter from "./router";

export default function App() {
  return (
    <BrowserRouter basename="/am-portfolio/">
      <AppRouter />
    </BrowserRouter>
  );
}
