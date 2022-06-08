const { createPool } = require('mysql');

const pool = createPool({
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.MYSQL_DB,
  connectionLimit: 10
});

module.exports = pool;

/*
* INFORMATION DATABASE CONNECTION
: On export le module du fichier
:: pour faire le lien avec pool dans : 
::: "api /users /user.service.js"
*/