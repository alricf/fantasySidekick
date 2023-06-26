// Imports
import React, { useState, useEffect } from "react";
import "./App.css";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import LineChart from "./components/LineChart";
import Button from "./components/Button";

Chart.register(CategoryScale);

export default function App() {

  const [homeData, setHomeData] = useState([]);
  const [showChart, setShowChart] = useState(false);
  const [totalPointsChart, setTotalPointsChart] = useState(false);
  const [rankChart, setRankChart] = useState(false);
  const [managerId, setManagerId] = useState("");
  // let showChart = false;
  useEffect(() => {
    // fetch(`http://localhost:8000/${managerId}`)
    fetch(`http://localhost:8000/home-data`)
      .then((res) => res.json())
      .then((data) => setHomeData(data));
  }, [showChart]);


  const seasonNames = homeData.map((data) => data.season_name);
  const totalPoints = homeData.map((data) => data.total_points);
  const rank = homeData.map((data) => data.rank);

  let homeTotalPointsChartData = {
    labels: seasonNames,
    datasets: [
      {
        label: "Total Points",
        data: totalPoints,
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
  };

  let homeRankChartData = {
    labels: seasonNames,
    datasets: [
      {
        label: "Total Points",
        data: rank,
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
  };

  // Helper Functions
  const showTotalPointsChart = () => {
    setTotalPointsChart(true);
    setRankChart(false);
    setShowChart(true);
  };

  const showRankChart = () => {
    setRankChart(true);
    setTotalPointsChart(false);
  };

  // Template
  return (
    <div>
      <form className="flex justify-center my-5" method="post" action="http://localhost:8000/home-data">
        <label htmlFor="home">Manager ID:</label>
        <input
          id="home"
          type="text"
          name="home"
          value={managerId}
          onChange={(e) => setManagerId(e.target.value)}
          className={"ml-5 border-solid border-2 border-black"}
        />
        <input
          type="submit"
          value="Submit"
          className={"border-solid border-black bg-yellow-300 border-2 ml-5"}
          onClick={showTotalPointsChart}
        />
      </form>
      {/* Chart Logic */}
      <div className={"flex justify-center"}>
        <Button
          className={"border-solid border-black bg-teal-500 border-2 mr-5"}
          onClick={showTotalPointsChart}
          buttonText={"Season vs Total Points"}
        />
        <Button
          className={"border-solid border-black bg-teal-500 border-2 ml-5"}
          onClick={showRankChart}
          buttonText={"Season vs Rank"}
        />
      </div>
      {totalPointsChart &&
        <LineChart
          chartData={homeTotalPointsChartData}
          text={"Season vs. Total Points"}
        />
      }
      {rankChart &&
        <LineChart
          chartData={homeRankChartData}
          text={"Season vs. Rank"}
        />
      }
    </div>
  );
}