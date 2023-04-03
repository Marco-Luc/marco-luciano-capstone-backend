const fs = require("fs");
const express = require("express");
const router = express.Router();

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
