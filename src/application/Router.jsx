import { BrowserRouter, Route, Routes } from "react-router";
import App from "./../App.jsx";
import LoginForm from "../components/LoginForm.jsx";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
