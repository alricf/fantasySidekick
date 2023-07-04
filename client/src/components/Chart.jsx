import React, { useState, useEffect } from "react";
import axios from 'axios';
import LineChart from "./LineChart";

// Mock data
const pName = [
  { fullName: 'Granit Xhaka' },
  { fullName: 'Bruno Fernandes' },
  { fullName: 'Marcus Rashford' },
];

export default function Chart() {

  const [chartPageData, setChartPageData] = useState([]);
  let gameweekArr = [];
  let statArr = [];

  const [playerQuery, setPlayerQuery] = useState('');
  const [playersFullNameData, setPlayersFullNameData] = useState([]);
  const [showPlayerFullNameFilter, setShowPlayerFullNameFilter] = useState(false)

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
        let sortResDataArr = Object.entries(res.data);

        // Sort array by keys of response data object
        let sortResDataByKeyArr = sortResDataArr.sort((a, b) => a[0] - b[0]);
        setChartPageData(sortResDataByKeyArr);
      });
  }, []);
  // console.log(chartPageData)
  for (let data of chartPageData) {
    gameweekArr.push(data[0]);
    statArr.push(data[1]);
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
  };

  return (
    <>
      <div className="flex justify-center my-5">
        <label htmlFor="player-name">Player Name:</label>
        <div classNAme="flex flex-col">
          <input
            className={"ml-5 border-solid border-2 border-black"}
            id="player-name"
            name="player-name"
            type="text"
            value={playerQuery}
            onChange={(e) => {
              setShowPlayerFullNameFilter(true)
              setPlayerQuery(e.target.value)}
            }
          />{
            (showPlayerFullNameFilter && playerQuery) &&
            <ul className="border-solid border-1 border-black">
              { playerQuery &&
                pName
                  .filter(item => {
                    return playerQuery && (item.fullName.startsWith(playerQuery) || item.fullName.toLowerCase().startsWith(playerQuery)) && playerQuery !== item.fullName;
                  })
                  .map((item) => {
                    return (
                      <li
                        className="border-solid border-2 border-black"
                        onClick={(e) => 
                          {
                            setShowPlayerFullNameFilter(false)
                            setPlayerQuery(item.fullName)
                          }}
                      >
                        {item.fullName}
                      </li>);
                  })}
            </ul>
          }
        </div>
      </div>
      <LineChart
        chartData={playerGameweekStatChartData}
        text={"Season vs. Statistic"}
        title={"Player Chart"}
      />
    </>
  );
}