import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/" />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Header />
      <Banner />
      <Footer />
    </Router>
  );
}

export default App;
