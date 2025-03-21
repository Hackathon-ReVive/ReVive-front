import React from "react";
import Router from "./config/Router";
import { UserProvider } from "./UserContext";

function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}

export default App;
