'use strict';
var dbConn = require('./../db.config');

//Pandantiv object create
var Pandantiv = function(pandantiv){
  this.name           = pandantiv.name;
  this.price          = pandantiv.price;
  this.description    = pandantiv.description;
  this.dimensions     = pandantiv.dimensions;
  this.imageUrl       = pandantiv.imageUrl;
  this.imageUrl2      = pandantiv.imageUrl2;
  this.imageUrl3      = pandantiv.imageUrl3;
  this.quantity       = pandantiv.quantity;
};

Pandantiv.create = function (newPandantiv, result) {
    dbConn.query("INSERT INTO pandantive set ?", newPandantiv, function (err, res) {
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

Pandantiv.findById = function (id, result) {
    dbConn.query("Select * from pandantive where id = ? ", id, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
      result(null, res);
    }
    });
};

Pandantiv.findAll = function (result) {
    dbConn.query("Select * from pandantive", function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      console.log('pandantive : ', res);
      result(null, res);
    }
    });
};

Pandantiv.update = function(id, pandantiv, result){
    dbConn.query("UPDATE pandantive SET name=? ,price=? ,description=? ,dimensions=? ,imageUrl=? ,imageUrl2=? ,imageUrl3=? ,quantity=? WHERE id = ?", [pandantiv.name, pandantiv.price, pandantiv.description, pandantiv.dimensions, pandantiv.imageUrl, pandantiv.imageUrl2, pandantiv.imageUrl3, pandantiv.quantity, id], function (err, res) {
        if(err) {
          console.log("error: ", err);
          result(null, err);
        }else{
          result(null, res);
        }
    });
};

Pandantiv.delete = function(id, result){
    dbConn.query("DELETE FROM pandantive WHERE id = ?", [id], function (err, res) {
        if(err) {
          console.log("error: ", err);
          result(null, err);
        }
        else{
          result(null, res);
        }
    });
};
module.exports= Pandantiv;