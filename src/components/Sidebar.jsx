import { NavLink } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

function Sidebar() {
  const { logout } = useContext(AuthContext);

  return (
    <div className="sidebar">
      <h2>SchoolHub</h2>

      {/* DASHBOARD */}
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Dashboard
      </NavLink>

      {/* STUDENTS */}
      <NavLink
        to="/students"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Students
      </NavLink>

      {/* ADD STUDENT */}
      <NavLink
        to="/register"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Add Student
      </NavLink>

      {/* LOGOUT */}
      <button
        className="logout-btn"
        onClick={() => {
          logout();
          window.location.href = "/";
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Sidebar;
