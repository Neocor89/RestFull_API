const pool = require('../../config/database');

module.exports = {
  create: (data, callback) => {
    pool.query(
      `insert into registration()`
      );
  }
};
/*
* INFORMATION DATABASE CONNECTION
: Permet de faire le lien avec le fichier : 
:: "database.js" et la constcreate pool
*/