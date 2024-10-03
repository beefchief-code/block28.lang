import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Red from "./Red.jsx";
import Blue from "./Blue.jsx";
import Home from "./Home.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="container">
        <h1 className="hello">Hello React Router!</h1>
        <div id="navbar">
          {/* navigation here */}
          <Link to="/blue" className="link">
            Blue
          </Link>
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/red" className="link">
            Red
          </Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
