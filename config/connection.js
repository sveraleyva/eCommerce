require("dotenv").config();

const Sequelize = require("sequelize");

// jawsdb is the way we're connecting mySQL to Heroku
// checks if you have a jawsdb connection, if not, it uses the local
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: "localhost",
      dialect: "mysql",
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
