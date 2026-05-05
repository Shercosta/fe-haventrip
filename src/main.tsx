import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { HeroProvider } from "./context/HeroContext.tsx";
import { BrowserRouter } from "react-router-dom";
import { UserLocationProvider } from "./context/UserLocationContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <UserLocationProvider>
        <HeroProvider>
          <App />
        </HeroProvider>
      </UserLocationProvider>
    </BrowserRouter>
  </StrictMode>,
);
