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

axios.get(`https://fantasy.premierleague.com/api/bootstrap-static/`)
  .then(res => {
    playerObj = res.data.elements.filter(element => element.second_name === 'Xhaka');
    let playerId = playerObj[0].id;
    return playerId;
  })
  .then((playerId) => {
    let playerGameweekExtractedObjArr = [];
    let promises = [];
    for (let i = 37; i <= 38; i++) {
      promises.push(axios.get(`https://fantasy.premierleague.com/api/event/${i}/live/`)
        .then(res => {
          let playerGameweekObjArr = res.data.elements.filter(element => {
            return element.id === playerId;
          });
          // console.log(playerGameweekObjArr)
          playerGameweekExtractedObjArr.push(...playerGameweekObjArr);
          // console.log(arr)
          return playerGameweekObjArr;
        }));
      // console.log(arr)
    }
    Promise.all(promises)
      .then(() => {
        let statArr = [];
        for (let i = 0; i < playerGameweekExtractedObjArr.length; i++) {
          statArr.push(playerGameweekExtractedObjArr[i].stats.expected_goal_involvements);
        }
        console.log(statArr);
      });
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});