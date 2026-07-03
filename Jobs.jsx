import React, { useState } from "react";
import LatestJobs from "./LatestJobs";
function Jobs() {
  const [filters, setFilters] = useState({
    keyword: "",
    location: "",
    category: "",
    experience: "",
    range: "",
  });

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = () => {
    console.log(filters); // Yahan API ya filter logic lagana hai
  };

  return (
    <div className="container mt-4">
      <div className="card shadow border-0 rounded-4">
        <div className="card-body p-8" style={{ minHeight: "250px" }}>
          <h4 className="fw-bold mb-4">🔍 Search Jobs</h4>

          <div className="row g-3 mt-3">
            {/* Search */}
            <div className="col-lg-3 col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Job Title or Keyword"
                name="keyword"
                value={filters.keyword}
                onChange={handleChange}
              />
            </div>

            {/* Location */}
            <div className="col-lg-2 col-md-6">
              <select
                className="form-select"
                name="location"
                value={filters.location}
                onChange={handleChange}
              >
                <option value="">Location</option>
                <option>Delhi</option>
                <option>Noida</option>
                <option>Gurugram</option>
                <option>Bangalore</option>
                <option>Hyderabad</option>
              </select>
            </div>

            {/* Category */}
            <div className="col-lg-2 col-md-6">
              <select
                className="form-select"
                name="category"
                value={filters.category}
                onChange={handleChange}
              >
                <option value="">Category</option>
                <option>💻 IT & Software</option>
                <option>🎨 Design</option>
                <option>📈 Marketing</option>
                <option>💰 Finance</option>
                <option>🏥 Healthcare</option>
                <option>📚 Education</option>
                <option>🏗 Engineering</option>
                <option>📞 Customer Support</option>
              </select>
            </div>

            {/* Experience */}
            <div className="col-lg-2 col-md-6">
              <select
                className="form-select"
                name="experience"
                value={filters.experience}
                onChange={handleChange}
              >
                <option value="">Experience</option>
                <option>Fresher</option>
                <option>1+ Years</option>
                <option>2+ Years</option>
                <option>5+ Years</option>
              </select>
            </div>
            {/* {Salary Range} */}
            <div className="col-lg-2 col-md-6">
              <select
                className="form-select"
                name="range"
                value={filters.range}
                onChange={handleChange}
              >
                <option value="">Salary Range</option>
                <option>1- Lakh</option>
                <option>1+ Lakh</option>
                <option>2+ Lakh</option>
                <option>5+ Lakh</option>
              </select>
            </div>
            {/* Button */}
            <div className="col-lg-3 col-md-12 d-grid">
              <button className="btn btn-primary" onClick={handleSearch}>
                Search Jobs
              </button>
            </div>
          </div>
        </div>
      </div>
      <LatestJobs />
    </div>
  );
}

export default Jobs;
