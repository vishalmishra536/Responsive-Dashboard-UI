import React from "react";

function Application() {
  return (
    <section className="application-section container">
      <div className="cards-wrapper">
        {/* Card 1 */}
        <div className="content-box" data-aos="fade-up">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            fill="currentColor"
            style={{ color: "green" }}
            className="bi bi-file-earmark-fill"
            viewBox="0 0 16 16"
          >
            <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m5.5 1.5v2a1 1 0 0 0 1 1h2z" />
          </svg>

          <div>
            <h6 className="heading">Applications</h6>
            <h3 className="heading-number">245</h3>
            <p>Total applications submitted</p>
            <small className="text-success">↑ 15% from last month</small>
          </div>
        </div>

        {/* Card 2 */}
        <div className="content-box" data-aos="fade-up" data-aos-delay="200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            fill="currentColor"
            style={{ color: "#0d6efd" }}
            className="bi bi-hourglass-split"
            viewBox="0 0 16 16"
          >
            <path d="M2.5 15a.5.5 0 0 1 0-1c2 0 3.5-1.5 3.5-3.5S4.5 7 2.5 7a.5.5 0 0 1 0-1C4.5 6 6 4.5 6 2.5S4.5 0 2.5 0a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1C11.5 0 10 1.5 10 2.5S11.5 6 13.5 6a.5.5 0 0 1 0 1C11.5 7 10 8.5 10 10.5S11.5 14 13.5 14a.5.5 0 0 1 0 1z" />
          </svg>

          <div>
            <h6 className="heading">Pending</h6>
            <h3 className="heading-number">38</h3>
            <p>Waiting for review</p>
            <small className="text-warning">8 added today</small>
          </div>
        </div>

        {/* Card 3 */}
        <div className="content-box" data-aos="fade-up" data-aos-delay="400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            fill="currentColor"
            style={{ color: "#198754" }}
            className="bi bi-check-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.97 11.03 12 6l-1.06-1.06-3.97 3.97-1.91-1.91L4 8z" />
          </svg>

          <div>
            <h6 className="heading">Approved</h6>
            <h3 className="heading-number">142</h3>
            <p>Successfully approved</p>
            <small className="text-success">↑ 20%</small>
          </div>
        </div>

        {/* Card 4 */}
        <div className="content-box" data-aos="fade-up" data-aos-delay="600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            fill="currentColor"
            style={{ color: "#dc3545" }}
            className="bi bi-x-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.35 5.35 8 8l2.65-2.65 1 1L9 9l2.65 2.65-1 1L8 10 5.35 12.65l-1-1L7 9 4.35 6.35z" />
          </svg>

          <div>
            <h6 className="heading">Rejected</h6>
            <h3 className="heading-number">14</h3>
            <p>Applications rejected</p>
            <small className="text-danger">↓ 5%</small>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Application;
