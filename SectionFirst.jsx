import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "../public/calendar.png";
import "react-datepicker/dist/react-datepicker.css";

function SectionFirst() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
      easing: "ease-n-out",
    });
  }, []);

  return (
    <section className="main-section">
      <div className="top-section container">
        <div className="welcome-box" data-aos="fade-right">
          <h3 className="welcome-title">Welcome back, Akon! 👋</h3>
          <h6 className="text-muted">We're Glad You're Here 😊</h6>
        </div>
        <div className="col-12 col-md-6 text-md-end" data-aos="fade-left">
          <div className="position-relative d-inline-block">
            <img
              src="/calendar.png"
              alt="Calendar"
              width="18"
              height="18"
              className="position-absolute top-50 start-0 translate-middle-y ms-3"
              style={{ zIndex: 10 }}
            />

            <DatePicker
              className="form-control ps-5"
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd MMM yyyy"
            />
          </div>
        </div>
        <div className="cards-wrapper">
          <div className="content-box" data-aos="fade-up">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="80"
              fill="currentColor"
              style={{ color: "blue" }}
              className="bi bi-bag-heart-fill me-3"
              viewBox="0 0 16 16"
            >
              {" "}
              <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />{" "}
            </svg>

            <div className="ms-3">
              <h6 className="heading">Total Job</h6>
              <h4 className="heading-number">128+</h4>
              <h6 className="heading">
                <span className="text-success">↑ 12%</span> from last Month
              </h6>
            </div>
          </div>

          {/* Card 2 */}
          <div className="content-box" data-aos="fade-up" data-aos-delay="200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="80"
              fill="currentColor"
              style={{ color: "green" }}
              className="bi bi-file-earmark-fill me-3"
              viewBox="0 0 16 16"
            >
              <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m5.5 1.5v2a1 1 0 0 0 1 1h2z" />
            </svg>

            <div>
              <h6 className="heading mt-3">Application</h6>
              <h4 className="heading-number">45+</h4>
              <h6 className="heading">
                <span className="text-success">&uarr; 8%</span> from last Month
              </h6>
            </div>
          </div>

          {/* Card 3 */}
          <div className="content-box" data-aos="fade-up" data-aos-delay="400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="80"
              fill="currentColor"
              style={{ color: "red" }}
              className="bi bi-calendar-check-fill me-3"
              viewBox="0 0 16 16"
            >
              <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2m-5.146-5.146-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708" />
            </svg>

            <div>
              <h6 className="heading mt-3">Interviews</h6>
              <h4 className="heading-number">99+</h4>
              <h6 className="heading">
                <span className="text-success">&uarr; 20%</span> from last Month
              </h6>
            </div>
          </div>
          {/* Card 4 */}
          <div className="content-box" data-aos="fade-up" data-aos-delay="600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="80"
              fill="currentColor"
              style={{ color: "orange" }}
              className="bi bi-bookmark-fill me-3"
              viewBox="0 0 16 16"
            >
              <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2" />
            </svg>

            <div>
              <h6 className="heading mt-3">Interviews</h6>
              <h4 className="heading-number">99+</h4>
              <h6 className="heading">
                <span className="text-success">&uarr; 20%</span> from last Month
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionFirst;
