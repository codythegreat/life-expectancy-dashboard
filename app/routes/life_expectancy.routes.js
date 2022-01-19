module.exports = app => {
  const life_expectancy = require("../controllers/life_exptecancy.controller.js");

  var router = require("express").Router();

  // find life expectancy by country
  router.get("/", life_expectancy.findByCountry);

  app.use('/api/life_expectancy', router);
};