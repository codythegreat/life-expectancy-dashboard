const sql = require("./db.js");


const Life_Expectancy = {
    findByCountry: (country, result) => {
        sql.query("select * from human_life_expectancy where country = ? and region = 'Total';",
        country, 
        (err, res) => {
            if (err) {
                result(null, err);
                return
            }
            if (res.length) {
                result(null, res[0]);
                return;
            }
            result({ kind: "not_found" }, null);
        })
    },
};

module.exports = Life_Expectancy;