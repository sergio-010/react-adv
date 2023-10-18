import { BrowserRouter } from "react-router-dom";
import { NavLink, Route, Navigate } from "react-router-dom";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <h1>React Router</h1>
          <ul>
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Users
              </NavLink>
            </li>
          </ul>
        </nav>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/users" element={<h1>Users</h1>} />
        <Route path="/*" element={<Navigate to="/home" replace />} />
      </div>
    </BrowserRouter>
  );
};
