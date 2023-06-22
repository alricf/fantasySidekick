// Imports
import React, { useState, useEffect } from "react";
import "./App.css";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import LineChart from "./components/LineChart";

Chart.register(CategoryScale);

// Mock data
const homeData = [
  {
    "season_name": "2017/18",
    "total_points": 2186,
    "rank": 156281
  },
  {
    "season_name": "2018/19",
    "total_points": 2091,
    "rank": 920916
  },
  {
    "season_name": "2019/20",
    "total_points": 2122,
    "rank": 739779
  },
  {
    "season_name": "2020/21",
    "total_points": 2212,
    "rank": 829576
  },
  {
    "season_name": "2021/22",
    "total_points": 2217,
    "rank": 1091914
  },
  {
    "season_name": "2022/23",
    "total_points": 2359,
    "rank": 969228
  }
];

export default function App() {
  // Hooks

  // States
  const [homeTotalPointsChartData, setHomeTotalPointsChartData] = useState({
    labels: homeData.map((data) => data.season_name),
    datasets: [
      {
        label: "Total Points",
        data: homeData.map((data) => data.total_points),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });

  const [homeRankChartData, setHomeRankChartData] = useState({
    labels: homeData.map((data) => data.season_name),
    datasets: [
      {
        label: "Total Points",
        data: homeData.map((data) => data.rank),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });

  const [totalPointsChart, setTotalPointsChart] = useState(false);
  const [rankChart, setRankChart] = useState(false);

  // Helper Functions
  const showTotalPointsChart = () => {
    setTotalPointsChart(true);
    setRankChart(false);
  };

  const showRankChart = () => {
    setRankChart(true);
    setTotalPointsChart(false);
  };

  // Template
  return (
    <div className="App">
      {/* Chart Logic */}
      <button onClick={showTotalPointsChart}>Season vs Total Points</button>
      <button onClick={showRankChart}>Season vs Rank</button>
      {(!totalPointsChart && !rankChart) &&
        <LineChart
          chartData={homeTotalPointsChartData}
          text={"Season vs. Total Points"}
        />}
      {totalPointsChart &&
        <LineChart
          chartData={homeTotalPointsChartData}
          text={"Season vs. Total Points"}
        />}
      {rankChart &&
        <LineChart
          chartData={homeRankChartData}
          text={"Season vs. Rank"}
        />}
    </div>
  );
}