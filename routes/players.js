const fs = require("fs");
const express = require("express");
const router = express.Router();

// I have these two router.get's that I want to connect to frontend server
// With the single player.get, can I fill my card properties with this? I believe
// the params should allow for me to do this

//Do I even need the get all players get request?
//I think I may need this for when I want to populate the drop down list of all the player names
//If I want to split the dropdown list so that one has Raptors players and the other has Celtics players --
//Should I be using two separate js files? How can I do this?

//Gets all players
router.get("/", function (request, response) {
  const playersFile = fs.readFileSync("./data/players.json");
  const playersArray = JSON.parse(playersFile);
  const mappedPlayers = playersArray.map((player) => {
    const newPlayer = {
      id: player.id,
      name: player.name,
      team: player.team,
      image: player.image,
      description: player.description,
      quote: player.quote,
      points: player.points,
      assists: player.assists,
      rebounds: player.rebounds,
      steals: player.steals,
      blocks: player.blocks,
      video: player.video,
      bio: player.bio,
    };
    return newPlayer;
  });
  response.json(mappedPlayers);
});

// Gets a single player
router.get("/:id", function (request, response) {
  const playersFile = fs.readFileSync("./data/players.json");
  const playersArray = JSON.parse(playersFile);
  const playersWithId = playersArray.find((player) => {
    return player.id === request.params.id;
  });
  if (!playersWithId) {
    response.status(404);
    response.json([]);
    return;
  }
  response.json(playersWithId);
});

module.exports = router;

// get requests look like:
// http://localhost:2323/players
// http://localhost:2323/players/fredvanvleet
