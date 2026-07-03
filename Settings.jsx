import React, { useState } from "react";

function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [jobAlerts, setJobAlerts] = useState(true);

  return (
    <div className="container py-4">
      <h2 className="fw-bold mb-4">⚙️ Settings</h2>

      <div className="row g-4">
        {/* Profile Settings */}
        <div className="col-lg-6">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-header bg-primary text-white">
              <h5 className="mb-0">👤 Profile Settings</h5>
            </div>

            <div className="card-body">
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="John Doe"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="john@gmail.com"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="+91 9876543210"
                />
              </div>

              <button className="btn btn-primary">Save Profile</button>
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="col-lg-6">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-header bg-success text-white">
              <h5 className="mb-0">🔒 Security</h5>
            </div>

            <div className="card-body">
              <div className="mb-3">
                <label className="form-label">Current Password</label>
                <input type="password" className="form-control" />
              </div>

              <div className="mb-3">
                <label className="form-label">New Password</label>
                <input type="password" className="form-control" />
              </div>

              <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input type="password" className="form-control" />
              </div>

              <button className="btn btn-success">Change Password</button>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="col-lg-6">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-header bg-warning">
              <h5 className="mb-0">🔔 Notifications</h5>
            </div>

            <div className="card-body">
              <div className="form-check form-switch mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={notifications}
                  onChange={() => setNotifications(!notifications)}
                />
                <label className="form-check-label">Email Notifications</label>
              </div>

              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={jobAlerts}
                  onChange={() => setJobAlerts(!jobAlerts)}
                />
                <label className="form-check-label">Job Alerts</label>
              </div>
            </div>
          </div>
        </div>

        {/* Job Preferences */}
        <div className="col-lg-6">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-header bg-info text-white">
              <h5 className="mb-0">💼 Job Preferences</h5>
            </div>

            <div className="card-body">
              <div className="mb-3">
                <label className="form-label">Preferred Role</label>
                <input
                  className="form-control"
                  placeholder="Frontend Developer"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Preferred Location</label>
                <input className="form-control" placeholder="Delhi" />
              </div>

              <div className="mb-3">
                <label className="form-label">Experience</label>

                <select className="form-select">
                  <option>Fresher</option>
                  <option>1-2 Years</option>
                  <option>3-5 Years</option>
                  <option>5+ Years</option>
                </select>
              </div>

              <button className="btn btn-info text-white">
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
