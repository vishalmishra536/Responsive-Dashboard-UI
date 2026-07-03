import React from "react";

function Notification() {
  const notifications = [
    {
      id: 1,
      icon: "🟢",
      title: "New Job Posted",
      message: "Google posted a new Frontend Developer job.",
      time: "2 minutes ago",
      color: "success",
    },
    {
      id: 2,
      icon: "📄",
      title: "Application Submitted",
      message: "Your application has been submitted successfully.",
      time: "Today • 10:30 AM",
      color: "primary",
    },
    {
      id: 3,
      icon: "👀",
      title: "Application Viewed",
      message: "Microsoft viewed your application.",
      time: "1 hour ago",
      color: "info",
    },
    {
      id: 4,
      icon: "📅",
      title: "Interview Scheduled",
      message: "Interview with Amazon on 05 Jul 2026 at 10:00 AM.",
      time: "Today • 2:00 PM",
      color: "warning",
    },
    {
      id: 5,
      icon: "✅",
      title: "Shortlisted",
      message: "Congratulations! You have been shortlisted.",
      time: "Yesterday",
      color: "success",
    },
    {
      id: 6,
      icon: "🎯",
      title: "Recommended Jobs",
      message: "5 new React Developer jobs match your profile.",
      time: "Yesterday",
      color: "dark",
    },
  ];

  return (
    <div className="container py-4">
      {/* Heading */}
      <div className="mb-4">
        <h2 className="fw-bold">🔔 Notifications</h2>
        <p className="text-muted">
          Stay updated with your applications and job activities.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="row g-4 mb-4">
        <div className="col-6 col-lg-3">
          <div className="card border-0 shadow-sm text-center">
            <div className="card-body">
              <h6 className="text-muted">Notifications</h6>
              <h3 className="fw-bold text-primary">24</h3>
            </div>
          </div>
        </div>

        <div className="col-6 col-lg-3">
          <div className="card border-0 shadow-sm text-center">
            <div className="card-body">
              <h6 className="text-muted">Applications</h6>
              <h3 className="fw-bold text-success">245</h3>
            </div>
          </div>
        </div>

        <div className="col-6 col-lg-3">
          <div className="card border-0 shadow-sm text-center">
            <div className="card-body">
              <h6 className="text-muted">Interviews</h6>
              <h3 className="fw-bold text-warning">8</h3>
            </div>
          </div>
        </div>

        <div className="col-6 col-lg-3">
          <div className="card border-0 shadow-sm text-center">
            <div className="card-body">
              <h6 className="text-muted">Shortlisted</h6>
              <h3 className="fw-bold text-danger">18</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Notifications List */}
      <div className="card border-0 shadow-sm">
        <div className="card-header bg-dark text-white">
          Recent Notifications
        </div>

        <div className="list-group list-group-flush">
          {notifications.map((item) => (
            <div
              key={item.id}
              className="list-group-item d-flex justify-content-between align-items-start"
            >
              <div className="d-flex">
                <div
                  className={`bg-${item.color} text-white rounded-circle d-flex align-items-center justify-content-center me-3`}
                  style={{ width: "45px", height: "45px", fontSize: "20px" }}
                >
                  {item.icon}
                </div>

                <div>
                  <h6 className="mb-1 fw-bold">{item.title}</h6>
                  <p className="mb-1 text-muted">{item.message}</p>
                </div>
              </div>

              <small className="text-muted">{item.time}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Notification;
