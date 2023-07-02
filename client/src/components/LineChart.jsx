// Imports
import React from "react";
import { Line } from "react-chartjs-2";

export default function LineChart({ chartData, text }) {
  // Template
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Manager Chart</h2>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: text
            },
            legend: {
              display: false
            }
          },
          scales: {
            x: {
              title: {
                display: true,
                text: 'Season',
                color: 'black'
              }
            },
            y: {
              title: {
                display: true,
                text: chartData.datasets[0].label,
                color: 'black'
              }
            }
          }
        }}
      />
    </div>
  );
}