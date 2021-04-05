'use strict';
var dbConn = require('./../db.config');

//Colier object create
var Colier = function(colier){
  this.name           = colier.name;
  this.price          = colier.price;
  this.description    = colier.description;
  this.dimensions     = colier.dimensions;
  this.imageUrl       = colier.imageUrl;
  this.imageUrl2      = colier.imageUrl2;
  this.imageUrl3      = colier.imageUrl3;
  this.quantity       = colier.quantity;
};

Colier.create = function (newColier, result) {
    dbConn.query("INSERT INTO coliere set ?", newColier, function (err, res) {
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

Colier.findById = function (id, result) {
    dbConn.query("Select * from coliere where id = ? ", id, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
      result(null, res);
    }
    });
};

Colier.findAll = function (result) {
    dbConn.query("Select * from coliere", function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      console.log('coliere : ', res);
      result(null, res);
    }
    });
};

Colier.update = function(id, colier, result){
    dbConn.query("UPDATE coliere SET name=? ,price=? ,description=? ,dimensions=? ,imageUrl=? ,imageUrl2=? ,imageUrl3=? ,quantity=? WHERE id = ?", [colier.name, colier.price, colier.description, colier.dimensions, colier.imageUrl, colier.imageUrl2, colier.imageUrl3, colier.quantity, id], function (err, res) {
        if(err) {
          console.log("error: ", err);
          result(null, err);
        }else{
          result(null, res);
        }
    });
};

Colier.delete = function(id, result){
    dbConn.query("DELETE FROM coliere WHERE id = ?", [id], function (err, res) {
        if(err) {
          console.log("error: ", err);
          result(null, err);
        }
        else{
          result(null, res);
        }
    });
};
module.exports= Colier;