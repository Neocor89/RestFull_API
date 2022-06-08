const { 
  create, 
  getUserByUserId, 
  getUsers, 
  updateUser, 
  deleteUser,
  getUserByUserEmail
} = require('./user.service');

// const bcrypt = require('bcrypt');
const { genSaltSync, hashSync, compareSync } = require('bcrypt');
const { sign } = require('jsonwebtoken');

module.exports = {
  createUser: (req, res) => {
    const body = req.body;
    // bcrypt.hash(body.password, 10);
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    create(body, (err, results) => {
      if(err) { 
        console.log(err);
        return res.status(500).json({ 
          success: 0,
          message: "DataBase Connection error"
        });
      }
      return res.status(200).json({
        success: 1,
        data: results
      });
    });
  },
  getUserByUserId: (req, res) => {
    const id = req.params.id;
    getUserByUserId(id, (req, results) => {
      if(err) {
        console.log(err);
        return;
      }
      if(!results) {
        return res.json({ 
          success: 0,
          message: 'Reccord not found'
        });
      }
      return res.json({ 
        success: 1,
        data: results
      });
    });
  },
  getUsers: (req, res) => {
    getUsers(id, (req, results) => {
      if(err) {
        console.log(err);
        return;
      }
      return res.json({ 
        success: 1,
        data: results
      });
    });
  },
  updateUser: (req, res) => {
    const body = req.body;
    // bcrypt.hash(body.password, 10);
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    updateUser(body, (err, results) => {
      if(err) { 
        console.log(err);
        return false;
      }
      if(!results) {
        return res.json({
          success: 0,
          message: 'Failed update user'
        })
      }
      return res.json({
        success: 1,
        message: 'Update successfully'
      });
    });
  },
  deleteUser: (req, res) => {
    const id = req.body;
    deleteUser(data, (err, results) => {
      if(err) {
        console.log(err);
        return;
      }
      if(!results) {
        return res.json({ 
          success: 0,
          message: 'Reccord not found'
        });
      }
      return res.json({ 
        success: 1,
        message: 'User deleted successfully'
      });
    });
  },
  login: (req, res) => {
    const body = req.body;
    getUserByUserEmail(body.email, (err, results) => {
      if(err) {
        console.log(err);
      }
      if(!results) {
        return res.json({ 
          success: 0,
          data: "Invalid user email"
        });
      }
      const result = compareSync(body.password, results.password);
      if(result) {
        results.password = undefined;
        const jwt = sign({ result: results }, "qwe1234", {
          expiresIn: "24h"
        });
        return res.json({
          success: 1,
          message: "Login Validated",
          token: jwt
        });
      } else {
        return res.json({ 
          success: 0,
          data: "Invalid user email"
        });
      }
    });
  }
};