import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function Chart() {


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
        console.log(res.data);
      });
  }, []);

  return (
    <>
    </>
  );
}