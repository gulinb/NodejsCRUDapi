'use strict';
var dbConn = require('./../db.config');

//Cercel object create
var Cercel = function(cercel){
  this.name           = cercel.name;
  this.price          = cercel.price;
  this.description    = cercel.description;
  this.dimensions     = cercel.dimensions;
  this.imageUrl       = cercel.imageUrl;
  this.imageUrl2      = cercel.imageUrl2;
  this.imageUrl3      = cercel.imageUrl3;
  this.quantity       = cercel.quantity;
};

Cercel.create = function (newCercel, result) {
    dbConn.query("INSERT INTO cercei set ?", newCercel, function (err, res) {
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

Cercel.findById = function (id, result) {
    dbConn.query("Select * from cercei where id = ? ", id, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
      result(null, res);
    }
    });
};

Cercel.findAll = function (result) {
    dbConn.query("Select * from cercei", function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      console.log('cercei : ', res);
      result(null, res);
    }
    });
};

Cercel.update = function(id, cercel, result){
    dbConn.query("UPDATE cercei SET name=? ,price=? ,description=? ,dimensions=? ,imageUrl=? ,imageUrl2=? ,imageUrl3=? ,quantity=? WHERE id = ?", [cercel.name, cercel.price, cercel.description, cercel.dimensions, cercel.imageUrl, cercel.imageUrl2, cercel.imageUrl3, cercel.quantity, id], function (err, res) {
        if(err) {
          console.log("error: ", err);
          result(null, err);
        }else{
          result(null, res);
        }
    });
};

Cercel.delete = function(id, result){
    dbConn.query("DELETE FROM cercei WHERE id = ?", [id], function (err, res) {
        if(err) {
          console.log("error: ", err);
          result(null, err);
        }
        else{
          result(null, res);
        }
    });
};
module.exports= Cercel;