const PORT = 3005;
const { cors } = require("./middlewares/cors")
const fs = require('fs').promises;
const express = require('express');
const path = require("path");
const bodyParser = require('body-parser');
const gamesRouter = require('./routes/games');

const app = express();

app.use(
    cors,
    bodyParser.json(),
    express.static(path.join(__dirname, 'public')),
    gamesRouter
)

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})