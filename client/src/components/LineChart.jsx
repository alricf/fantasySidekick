import React from "react";
import { Line } from "react-chartjs-2";

export default function LineChart({ homeChartData }) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Manager Chart</h2>
      <Line
        data={homeChartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Season vs Total Points"
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
}