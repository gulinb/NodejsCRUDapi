'use strict';
var dbConn = require('./../db.config');

//Bratara object create
var User = function(user){
  this.username           = user.username;
  this.password          = user.password;

};

User.findUser = function ([username, password] , result) {
    dbConn.query("Select * from adminUser where username = ? AND password = ? ", [username, password], function (err, res) {
      console.log("request1"+username)
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
      console.log("request2"+username)
      result(null, res);
    }
    });
};

module.exports= User;