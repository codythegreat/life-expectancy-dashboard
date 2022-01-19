const express = require('express');
const fs = require('fs');
const model = require('./app/models/life_expectancy.model');
const cors = require("cors");

const port = process.env.PORT || 8080;
const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// use static files, allows for css/javascript links
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

require("./app/routes/life_expectancy.routes.js")(app);

app.listen(port);
console.log("Server is initialized and listening on port " + port);