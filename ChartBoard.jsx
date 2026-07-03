import RevenueChart from "./RevenueChart";
import PieChart from "./PieChart";

function ChartBoard() {
  return (
    <div className="container py-4">
      <div className="row g-4">
        {/* Line Chart */}
        <div className="col-xl-8 col-lg-7 col-md-12">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body p-4">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                  <h3 className="fw-bold mb-1">Application Overview</h3>
                  <p className="text-muted mb-0">Monthly Overview</p>
                </div>

                <button className="btn btn-primary px-4">This Month</button>
              </div>

              <RevenueChart />
            </div>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="col-xl-4 col-lg-5 col-md-12">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body p-4">
              <h3 className="fw-bold mb-1">Application Status</h3>

              <p className="text-muted mb-4">Department-wise Revenue</p>

              <PieChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChartBoard;
