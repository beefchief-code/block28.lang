import { NavLink, Outlet } from "react-router-dom";
import "./index.css";

export default function Layout() {
  return (
    <>
      <div id="container">
        <header>
          <h1>React Router Color Picker</h1>
          <nav id="navbar">
            <NavLink to="/blue" className="link">
              Blue
            </NavLink>
            <NavLink to="/" className="link">
              Home
            </NavLink>
            <NavLink to="/red" className="link">
              Red
            </NavLink>
          </nav>
        </header>
        <Outlet id="main-section" />
      </div>
    </>
  );
}
