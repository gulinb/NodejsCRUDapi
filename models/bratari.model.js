'use strict';
var dbConn = require('./../db.config');

//Bratara object create
var Bratara = function(bratara){
  this.name           = bratara.name;
  this.price          = bratara.price;
  this.description    = bratara.description;
  this.dimensions     = bratara.dimensions;
  this.imageUrl       = bratara.imageUrl;
  this.imageUrl2      = bratara.imageUrl2;
  this.imageUrl3      = bratara.imageUrl3;
  this.quantity       = bratara.quantity;
};

Bratara.create = function (newBratara, result) {
    dbConn.query("INSERT INTO bratari set ?", newBratara, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
      console.log(res.insertId);
      result(null, res.insertId);
    }
    });
};

Bratara.findById = function (id, result) {
    dbConn.query("Select * from bratari where id = ? ", id, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
      result(null, res);
    }
    });
};

Bratara.findAll = function (result) {
    dbConn.query("Select * from bratari", function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      console.log('bratari : ', res);
      result(null, res);
    }
    });
};

Bratara.update = function(id, bratara, result){
    dbConn.query("UPDATE bratari SET name=? ,price=? ,description=? ,dimensions=? ,imageUrl=? ,imageUrl2=? ,imageUrl3=? ,quantity=? WHERE id = ?", [bratara.name, bratara.price, bratara.description, bratara.dimensions, bratara.imageUrl, bratara.imageUrl2, bratara.imageUrl3, bratara.quantity, id], function (err, res) {
        if(err) {
          console.log("error: ", err);
          result(null, err);
        }else{
          result(null, res);
        }
    });
};

Bratara.delete = function(id, result){
    dbConn.query("DELETE FROM bratari WHERE id = ?", [id], function (err, res) {
        if(err) {
          console.log("error: ", err);
          result(null, err);
        }
        else{
          result(null, res);
        }
    });
};
module.exports= Bratara;