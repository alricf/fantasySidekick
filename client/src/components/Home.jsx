// Imports
import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import LineChart from "./LineChart";
import Button from "./Button";

Chart.register(CategoryScale);

export default function Home() {

  const [homeData, setHomeData] = useState([]);
  const [totalPointsChart, setTotalPointsChart] = useState(false);
  const [rankChart, setRankChart] = useState(false);
  const [managerId, setManagerId] = useState("");
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`http://localhost:8000/home-data/${managerId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.errorMsg) {
          setError(data.errorMsg);
          return;
        }
        setError("");
        setHomeData(data);
        return;
      });
  }, [managerId]);

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
        label: "Rank",
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
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      showChart();
    }
  };

  const showChart = () => {
    setManagerId(input);
    showTotalPointsChart();
  };

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
    <div>
      {/* Input logic */}
      <div className="flex justify-center my-5">
        <label htmlFor="home-managerId">Manager ID:</label>
        <input
          id="home-managerId"
          type="text"
          name="home-managerId"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={"ml-5 border-solid border-2 border-black"}
          onKeyDown={handleEnter}
        />
        <input
          type="submit"
          value="Submit"
          className={"border-solid border-black bg-yellow-300 border-2 ml-5"}
          onClick={showChart}
        />
      </div>
      {/* Chart logic */}
      {
        // Error handling
        (error) &&
        <p className="flex justify-center text-2xl text-red-600 font-bold">
          {error}
        </p>
      }
      {
        ((!error) && totalPointsChart) &&
        <div className={"flex justify-center mb-5"}>
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
      }
      {
        ((!error) && totalPointsChart) &&
        <LineChart
          chartData={homeTotalPointsChartData}
          text={"Season vs. Total Points"}
        />
      }
      {
        ((!error) && rankChart) &&
        <LineChart
          chartData={homeRankChartData}
          text={"Season vs. Rank"}
        />
      }
    </div>
  );
}