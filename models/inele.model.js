'use strict';
var dbConn = require('./../db.config');

//Inel object create
var Inel = function(inel){
  this.name           = inel.name;
  this.price          = inel.price;
  this.description    = inel.description;
  this.dimensions     = inel.dimensions;
  this.imageUrl       = inel.imageUrl;
  this.imageUrl2      = inel.imageUrl2;
  this.imageUrl3      = inel.imageUrl3;
  this.quantity       = inel.quantity;
};

Inel.create = function (newInel, result) {
    dbConn.query("INSERT INTO inele set ?", newInel, function (err, res) {
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

Inel.findById = function (id, result) {
    dbConn.query("Select * from inele where id = ? ", id, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
      result(null, res);
    }
    });
};

Inel.findAll = function (result) {
    dbConn.query("Select * from inele", function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      console.log('inele : ', res);
      result(null, res);
    }
    });
};

Inel.update = function(id, inel, result){
    dbConn.query("UPDATE inele SET name=? ,price=? ,description=? ,dimensions=? ,imageUrl=? ,imageUrl2=? ,imageUrl3=? ,quantity=? WHERE id = ?", [inel.name, inel.price, inel.description, inel.dimensions, inel.imageUrl, inel.imageUrl2, inel.imageUrl3, inel.quantity, id], function (err, res) {
        if(err) {
          console.log("error: ", err);
          result(null, err);
        }else{
          result(null, res);
        }
    });
};

Inel.delete = function(id, result){
    dbConn.query("DELETE FROM inele WHERE id = ?", [id], function (err, res) {
        if(err) {
          console.log("error: ", err);
          result(null, err);
        }
        else{
          result(null, res);
        }
    });
};
module.exports= Inel;