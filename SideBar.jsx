import React from "react";

import { Link } from "react-router-dom";
function SideBar({ sidebarOpen, toggleSidebar }) {
  return (
    <div>
      <aside className={`sideBar ${sidebarOpen ? "show" : ""}`}>
        {/* <button className="close-btn" onClick={toggleSidebar}>
          ×
        </button> */}
        <ul className="list-unstyled m-0 p-4">
          <li className="py-3">
            <Link
              to="/"
              className="text-decoration-none text-white d-flex align-items-center gap-2"
            >
              🏠 Dashboard
            </Link>
          </li>
          <li className="py-3">
            <Link
              to="/profile"
              className="text-decoration-none text-white d-flex align-items-center gap-2"
            >
              👤 Profile
            </Link>
          </li>
          <li className="py-3">
            <Link
              to="/jobs"
              className="text-decoration-none text-white d-flex align-items-center gap-2"
            >
              💼 Jobs
            </Link>
          </li>
          <li className="py-3">
            <Link
              to="/application"
              className="text-decoration-none text-white d-flex align-items-center gap-2"
            >
              📄 Applications
            </Link>
          </li>
          <li className="py-3">
            <Link
              to="/analytics"
              className="text-decoration-none text-white d-flex align-items-center gap-2"
            >
              📊 Analytics
            </Link>
          </li>
          <li className="py-3">
            <Link
              to="/calender"
              className="text-decoration-none text-white d-flex align-items-center gap-2"
            >
              📅 Calendar
            </Link>
          </li>
          <li className="py-3">
            <Link
              to="/settings"
              className="text-decoration-none text-white d-flex align-items-center gap-2"
            >
              ⚙ Settings
            </Link>
          </li>
          <li className="py-3">
            <Link
              to="/notification"
              className="text-decoration-none text-white d-flex align-items-center gap-2"
            >
              🔔 Notifications <span className="badge bg-danger">4+</span>
            </Link>
          </li>
        </ul>
        <div className="spinner ms-2">
          <h3 className="text-center pt-2" style={{ fontSize: "15px" }}>
            Your Performance
          </h3>

          <h5 className="text-center">Good Job</h5>
          <h6 className="text-center">Keep it up and improve more </h6>
          <div className="progress ms-2">
            <div
              className="progress-bar progress-bar-striped progress-bar-animated bg-success"
              role="progressbar"
              style={{ width: "65%" }}
              aria-valuenow={65}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
          </div>

          <p className="text-white mt-2 text-center">65% Loading...</p>
        </div>
      </aside>
    </div>
  );
}

export default SideBar;
