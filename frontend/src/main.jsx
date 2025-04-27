import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
// import { ContextPorvider } from "./utils/userContex";
import {ContextProvider} from './utils/userContex.jsx'

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ContextProvider>
      <App />
    </ContextProvider>/
  </BrowserRouter>
);
