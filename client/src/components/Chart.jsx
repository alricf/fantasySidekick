import React, { useState, useEffect } from "react";
// const axios = require('axios');
import axios from 'axios'

export default function Chart() {


  useEffect(() => {
    axios.get(`http://localhost:8000/chart`)
      .then((res) => {
        console.log(res.data);
      });
  }, []);

  return (
    <>
    </>
  );
}