const pool = require('../../config/database');

//: Création et récupération des différents champs de notre DATABASE
module.exports = {
  create: (data, callback) => {
    pool.query(
      `insert into sn_users(firstname_user, firstname_user, is_admin, email_user, password_user)
        values(?,?,?,?,?,?)`,
      [
        data.firstname_user,
        data.lastname_user,
        data.is_admin,
        data.email_user,
        data.password_user
      ],
      (error, results, fields) => {
        if(error) {
          return callback(error);
        }
        return callback(null, results);
      }
      );
  },

  getUsers: callback => {
    pool.query(
      `select id_user,firstname_user,lastname_user, is_admin,email_user,password_user from sn_users`,
      [],
      (error, results, fields) => {
        if(error) {
          return callback(error);
        }
        return callback(null, results);
      }
      );
  },
  getUserByUserId: (id, callback) => {
    pool.query(
      `select firstname_user, lastname_user, is_admin, email_user, password_user from sn_users where id_user = ?`,
      [id],
      (error, results, fields) => {
        if(error) {
         callback(error);
        }
        return callback(null, results[0]);
      }
      );
  },
  updateUser: (data, callback) => {
    pool.query(
      `update sn_users set firstname_user=?, lastname_user=?, is_admin=?, email_user=?, password_user=? where id_user = ?`,
      [
        data.firstname_user,
        data.lastname_user,
        data.is_admin,
        data.email_user,
        data.password_user,
        data.id_user
      ],
      (error, results, fields) => {
        if(error) {
         callback(error);
        }
        return callback(null, results);
      }
      );
  },
  deleteUser: (data, callback) => {
    pool.query(
      `delete from sn_users where id_user= ?`,
      [data.id_user],
      (error, results, fields) => {
        if(error) {
          return callback(error);
        }
        return callback(null, results[0]);
      }
      );
  },
  getUserByUserEmail: (email_user, callback) => {
    pool.query(
      `select * from sn_users where email_user = ?`,
      [email_user],
      (error, results, fields) => {
        if(error) {
         callback(error);
        }
        return callback(null, results[0]);
      }
      );
  }
};

/*
* INFORMATION DATABASE CONNECTION
: Permet de faire le lien avec le fichier : 
:: "database.js" et la constcreate pool
*/