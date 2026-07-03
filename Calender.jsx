import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Calendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="container py-4">
      {/* Heading */}
      <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">
        <div>
          <h2 className="fw-bold">📅 Calendar</h2>
          <p className="text-muted mb-0">
            Manage your interviews and job schedule
          </p>
        </div>

        <div className="mt-3 mt-md-0">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            className="form-control"
            dateFormat="dd MMMM yyyy"
          />
        </div>
      </div>

      {/* Summary Cards */}
      <div className="row g-4 mb-4">
        <div className="col-md-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h6 className="text-muted">Today's Interviews</h6>
              <h2 className="fw-bold text-primary">03</h2>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h6 className="text-muted">Upcoming Events</h6>
              <h2 className="fw-bold text-success">08</h2>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h6 className="text-muted">Pending Meetings</h6>
              <h2 className="fw-bold text-danger">02</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Schedule */}
      <div className="card shadow-sm border-0">
        <div className="card-header bg-primary text-white">
          <h5 className="mb-0">Upcoming Schedule</h5>
        </div>

        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center border-bottom py-3 flex-wrap">
            <div>
              <h6 className="mb-1">Google Interview</h6>
              <small className="text-muted">Frontend Developer</small>
            </div>

            <span className="badge bg-success">05 Jul 2026 | 10:00 AM</span>
          </div>

          <div className="d-flex justify-content-between align-items-center border-bottom py-3 flex-wrap">
            <div>
              <h6 className="mb-1">Microsoft HR Round</h6>
              <small className="text-muted">React Developer</small>
            </div>

            <span className="badge bg-warning text-dark">
              07 Jul 2026 | 2:30 PM
            </span>
          </div>

          <div className="d-flex justify-content-between align-items-center py-3 flex-wrap">
            <div>
              <h6 className="mb-1">Amazon Technical Round</h6>
              <small className="text-muted">UI Engineer</small>
            </div>

            <span className="badge bg-info">10 Jul 2026 | 11:30 AM</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
