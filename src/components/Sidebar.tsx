import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="leftSide">
      <nav>
        <NavLink to="/about" className={({ isActive }) => isActive ? "nav-active" : ""}>
          About
        </NavLink>
        <NavLink to="/blog" className={({ isActive }) => isActive ? "nav-active" : ""}>
          Blog
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-active" : ""}>
          Projects
        </NavLink>
      </nav>
    </div>
  );
}
