import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function Chart() {

  const [chartPageData, setChartPageData] = useState([])
  let gameweekArr = []
  let statArr = []

  useEffect(() => {
    axios
      .get(`http://localhost:8000/chart`, {
        params: {
          playerName: 'Xhaka',
          gameweekFrom: 37,
          gameweekTo: 38,
          stat: "xgi"
        }
      })
      .then((res) => {
        // Convert response data object into array of key-value pairs
        let sortResDataArr = Object.entries(res.data)
        
        // Sort array by keys of response data object
        let sortResDataByKeyArr = sortResDataArr.sort((a,b) => a[0].localeCompare(b[0]));
        setChartPageData(sortResDataByKeyArr)
      });
  }, []);
  // console.log(chartPageData)
  for(let data of chartPageData) {
    gameweekArr.push(data[0])
    statArr.push(data[1])
  }
  console.log(gameweekArr)
  console.log(statArr)
  return (
    <>
    </>
  );
}