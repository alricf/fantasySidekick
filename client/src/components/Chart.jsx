import React, { useState, useEffect } from "react";
import axios from 'axios';
import LineChart from "./LineChart";

export default function Chart() {

  const [chartPageData, setChartPageData] = useState([])
  let gameweekArr = []
  let statArr = []

  useEffect(() => {
    axios
      .get(`http://localhost:8000/chart`, {
        params: {
          playerName: 'Xhaka',
          gameweekFrom: 1,
          gameweekTo: 38,
          stat: "xgi"
        }
      })
      .then((res) => {
        // Convert response data object into array of key-value pairs
        let sortResDataArr = Object.entries(res.data)
        
        // Sort array by keys of response data object
        let sortResDataByKeyArr = sortResDataArr.sort((a,b) => a[0]-b[0]);
        setChartPageData(sortResDataByKeyArr)
      });
  }, []);
  // console.log(chartPageData)
  for(let data of chartPageData) {
    gameweekArr.push(data[0])
    statArr.push(data[1])
  }
  // console.log(gameweekArr)
  // console.log(statArr)
  let playerGameweekStatChartData = {
    labels: gameweekArr,
    datasets: [
      {
        label: "xGI",
        data: statArr,
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
  }

  return (
    <>
    <LineChart
          chartData={playerGameweekStatChartData}
          text={"Season vs. Statistic"}
          title={"Player Chart"}
        />
    </>
  );
}