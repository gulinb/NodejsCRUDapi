'use strict';
const User = require('../models/userAdmin.model');

exports.findUser = function(req, res) {
    User.findUser([req.body.username, req.body.password], function(err, user) {
      if (err)
      res.send(err);
      console.log("request3"+req.body.username+req.body.password);
      res.json(user);
    });
};
