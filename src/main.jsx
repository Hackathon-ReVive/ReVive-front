import "./styles/styles.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { UserProvider } from "./UserContext.jsx";
import { CartProvider } from "./CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    
      <App />
    
  </StrictMode>
);
