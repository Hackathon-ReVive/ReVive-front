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

/**
 * App component that manages the routing for the application.
 *
 * @function App
 * @returns {JSX.element} The rendered application component with routing.
 * @author {Ángel Aragón}
 */
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<div>Hola mundo</div>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
