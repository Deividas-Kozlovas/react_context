import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./components/app/App";
import { BrowserRouter } from "react-router-dom";
import { DogDataProvider } from "./contect/context";

createRoot(document.getElementById("root")).render(
  <DogDataProvider>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </DogDataProvider>
);
