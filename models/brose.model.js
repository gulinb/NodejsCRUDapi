'use strict';
var dbConn = require('./../db.config');

//Brosa object create
var Brosa = function(brosa){
  this.name           = brosa.name;
  this.price          = brosa.price;
  this.description    = brosa.description;
  this.dimensions     = brosa.dimensions;
  this.imageUrl       = brosa.imageUrl;
  this.imageUrl2      = brosa.imageUrl2;
  this.imageUrl3      = brosa.imageUrl3;
  this.quantity       = brosa.quantity;
};

Brosa.create = function (newBrosa, result) {
    dbConn.query("INSERT INTO brose set ?", newBrosa, function (err, res) {
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

Brosa.findById = function (id, result) {
    dbConn.query("Select * from brose where id = ? ", id, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
      result(null, res);
    }
    });
};

Brosa.findAll = function (result) {
    dbConn.query("Select * from brose", function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      console.log('brose : ', res);
      result(null, res);
    }
    });
};

Brosa.update = function(id, brosa, result){
    dbConn.query("UPDATE brose SET name=? ,price=? ,description=? ,dimensions=? ,imageUrl=? ,imageUrl2=? ,imageUrl3=? ,quantity=? WHERE id = ?", [brosa.name, brosa.price, brosa.description, brosa.dimensions, brosa.imageUrl, brosa.imageUrl2, brosa.imageUrl3, brosa.quantity, id], function (err, res) {
        if(err) {
          console.log("error: ", err);
          result(null, err);
        }else{
          result(null, res);
        }
    });
};

Brosa.delete = function(id, result){
    dbConn.query("DELETE FROM brose WHERE id = ?", [id], function (err, res) {
        if(err) {
          console.log("error: ", err);
          result(null, err);
        }
        else{
          result(null, res);
        }
    });
};
module.exports= Brosa;