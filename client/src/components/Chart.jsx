import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function Chart() {


  useEffect(() => {
    axios
      .get(`http://localhost:8000/chart`, {
        params: {
          playerName: 'Xhaka',
          gameWeekFrom: 37,
          gameWeekTo: 38,
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