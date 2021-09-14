const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();

app.use(cors());

app.get("/", (req, res) => [
  axios.default
    .get("https://api.covidtracking.com/v1/us/daily.json")
    .then((response) => {
      console.log(response);
      res.status(200).json(response.data);
    })
    .catch((err) => {
      res.status(500).send(err);
    }),
]);

app.listen(4000, () => console.log("Server listening at port 4000"));
