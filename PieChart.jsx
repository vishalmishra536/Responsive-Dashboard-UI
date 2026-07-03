import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Sales", "Marketing", "Development", "Support"],
  datasets: [
    {
      data: [35, 20, 30, 15],
      backgroundColor: ["#0d6efd", "#198754", "#ffc107", "#dc3545"],
      borderColor: "#fff",
      borderWidth: 2,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom",
    },
  },
};

function PieChart() {
  return (
    <div style={{ width: "100%", height: "350px" }}>
      <Pie data={data} options={options} />
    </div>
  );
}

export default PieChart;
