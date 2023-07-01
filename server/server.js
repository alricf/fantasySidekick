// Imports
const express = require('express');
const cors = require('cors');
const axios = require('axios');

// Configuration
const app = express();
const PORT = 8000;

// Middleware
app.use(cors());
app.use(express.json());

app.get(`/home-data/:managerId`, (req, res) => {
  managerId = req.params.managerId;
  fetch(`https://fantasy.premierleague.com/api/entry/${managerId}/history/`)
    .then((res) => res.json())
    .then((data) => res.json(data.past))
    .catch(() => res.json({ errorMsg: "Error: Manager ID incorrect - Enter a valid Manager ID" }));
});

app.get(`/chart`, (req, res) => {
  // Assigning variables
  let playerName = req.query.playerName;
  let gameweekFrom = req.query.gameweekFrom;
  let gameweekTo = req.query.gameweekTo;
  let stat = ""
  if (req.query.stat === "xgi") {
    stat = "expected_goal_involvements"
  }

  // Making axios call to fpl API for player id
  axios.get(`https://fantasy.premierleague.com/api/bootstrap-static/`)
    .then(res => {
      playerObj = res.data.elements.filter(element => element.second_name === playerName);
      let playerId = playerObj[0].id;
      return playerId;
    })
    .then((playerId) => {
      let playerGameweekStatObj = {}
      let promises = [];

      // Looping to get player gameweek data
      for (let i = gameweekFrom; i <= gameweekTo; i++) {
        promises.push(axios.get(`https://fantasy.premierleague.com/api/event/${i}/live/`)
          .then(res => {
            let playerGameweekObjArr = res.data.elements.filter(element => {
              return element.id === playerId;
            });
            // Assign key as gameweek and value as statistic for player in the gameweek
            playerGameweekStatObj[i] = playerGameweekObjArr[0].stats[stat]
          }));
      }
      Promise.all(promises)
        .then(() => {
          // Return player gameweek vs statistic object
          res.json(playerGameweekStatObj);
        });
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});