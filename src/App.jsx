/**
 * Application Router Component.
 *
 * This component defines the main application routes using React Router.
 * It ensures that all routing logic is handled within a valid <BrowserRouter> context.
 *
 * @module App
 * @author {Ángel Aragón}
 */

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

/**
 * App component that manages the routing for the application.
 *
 * @function App
 * @modified `RV-26` Update App.jsx to include Header component
 * @returns {JSX.element} The rendered application component with routing.
 * @author {Ángel Aragón} {Kat Leverton}
 */
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<div>Hola mundo</div>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
