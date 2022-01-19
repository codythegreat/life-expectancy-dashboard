const Life_Expectancy = require("../models/life_expectancy.model.js");

// Retrieve life expectancy of a given country
exports.findByCountry = (req, res) => {
  Life_Expectancy.findByCountry(req.query.country, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving life expectancy."
      });
    else res.send(data);
  });
};