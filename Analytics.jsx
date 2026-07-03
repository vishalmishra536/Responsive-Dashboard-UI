import React from "react";

function Analytics() {
  return (
    <div className="container py-4">
      {/* Heading */}
      <div className="mb-4">
        <h2 className="fw-bold">📊 Analytics Dashboard</h2>
        <p className="text-muted">
          Track your job applications and performance.
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="row g-4 mb-4">
        <div className="col-md-6 col-lg-3">
          <div className="card shadow-sm border-0">
            <div className="card-body text-center">
              <h6 className="text-muted">Total Applications</h6>
              <h2 className="text-primary fw-bold">245</h2>
              <small className="text-success">↑ 15% this month</small>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="card shadow-sm border-0">
            <div className="card-body text-center">
              <h6 className="text-muted">Interviews</h6>
              <h2 className="text-success fw-bold">36</h2>
              <small className="text-success">↑ 8 scheduled</small>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="card shadow-sm border-0">
            <div className="card-body text-center">
              <h6 className="text-muted">Shortlisted</h6>
              <h2 className="text-warning fw-bold">18</h2>
              <small>7.3% Success Rate</small>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="card shadow-sm border-0">
            <div className="card-body text-center">
              <h6 className="text-muted">Rejected</h6>
              <h2 className="text-danger fw-bold">27</h2>
              <small>Needs Improvement</small>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Section */}
      <div className="row g-4 mb-4">
        <div className="col-lg-6">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-header bg-primary text-white">
              Application Status
            </div>

            <div className="card-body">
              <p className="mb-1">Applied</p>
              <div className="progress mb-3">
                <div
                  className="progress-bar bg-primary"
                  style={{ width: "80%" }}
                >
                  80%
                </div>
              </div>

              <p className="mb-1">Interview</p>
              <div className="progress mb-3">
                <div
                  className="progress-bar bg-success"
                  style={{ width: "60%" }}
                >
                  60%
                </div>
              </div>

              <p className="mb-1">Selected</p>
              <div className="progress">
                <div
                  className="progress-bar bg-warning"
                  style={{ width: "35%" }}
                >
                  35%
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-header bg-success text-white">
              Weekly Performance
            </div>

            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                  Monday
                  <span>12 Applications</span>
                </li>

                <li className="list-group-item d-flex justify-content-between">
                  Tuesday
                  <span>18 Applications</span>
                </li>

                <li className="list-group-item d-flex justify-content-between">
                  Wednesday
                  <span>15 Applications</span>
                </li>

                <li className="list-group-item d-flex justify-content-between">
                  Thursday
                  <span>20 Applications</span>
                </li>

                <li className="list-group-item d-flex justify-content-between">
                  Friday
                  <span>14 Applications</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity Table */}
      <div className="card shadow-sm border-0">
        <div className="card-header bg-dark text-white">Recent Activity</div>

        <div className="table-responsive">
          <table className="table table-hover mb-0">
            <thead className="table-light">
              <tr>
                <th>Company</th>
                <th>Role</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Google</td>
                <td>Frontend Developer</td>
                <td>
                  <span className="badge bg-success">Interview</span>
                </td>
                <td>02 Jul 2026</td>
              </tr>

              <tr>
                <td>Microsoft</td>
                <td>React Developer</td>
                <td>
                  <span className="badge bg-warning text-dark">Pending</span>
                </td>
                <td>01 Jul 2026</td>
              </tr>

              <tr>
                <td>Amazon</td>
                <td>UI Engineer</td>
                <td>
                  <span className="badge bg-danger">Rejected</span>
                </td>
                <td>29 Jun 2026</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
