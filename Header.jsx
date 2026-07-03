import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
function Header({ toggleSidebar }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <nav className="navbar">
        <div className="container-fluid header-content">
          <div className="left-section">
            <button
              className="btn btn-outline-light me-3"
              onClick={toggleSidebar}
            >
              <FaBars />
            </button>

            <h4 className="text-white m-0 dashboard-title">User Dashboard</h4>
          </div>

          <div className="profile-area  position-relative">
            <div className="profile" onClick={() => setOpen(!open)}>
              <img
                src="https://i.pravatar.cc/40"
                className="rounded-circle"
                alt="profile"
                width={40}
                height={40}
              />
              <span className="text-white ms-2 user-name">Akon ▼</span>
            </div>

            {open && (
              <div className="dropdown">
                <button>
                  <Link
                    to="/profile"
                    className="text-decoration-none text-dark align-items-center gap-2"
                  >
                    👤 Profile
                  </Link>
                </button>
                <button>
                  <Link
                    to="/settings"
                    className="text-decoration-none text-dark align-items-center gap-2"
                  >
                    ⚙ Settings
                  </Link>
                </button>
                <button>🚪 Logout</button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
