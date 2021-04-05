'use strict';
var dbConn = require('./../db.config');

//Decoratiune object create
var Decoratiune = function(decoratiune){
  this.name           = decoratiune.name;
  this.price          = decoratiune.price;
  this.description    = decoratiune.description;
  this.dimensions     = decoratiune.dimensions;
  this.imageUrl       = decoratiune.imageUrl;
  this.imageUrl2      = decoratiune.imageUrl2;
  this.imageUrl3      = decoratiune.imageUrl3;
  this.quantity       = decoratiune.quantity;
};

Decoratiune.create = function (newDecoratiune, result) {
    dbConn.query("INSERT INTO decoratiuni set ?", newDecoratiune, function (err, res) {
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

Decoratiune.findById = function (id, result) {
    dbConn.query("Select * from decoratiuni where id = ? ", id, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
      result(null, res);
    }
    });
};

Decoratiune.findAll = function (result) {
    dbConn.query("Select * from decoratiuni", function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      console.log('decoratiuni : ', res);
      result(null, res);
    }
    });
};

Decoratiune.update = function(id, decoratiune, result){
    dbConn.query("UPDATE decoratiuni SET name=? ,price=? ,description=? ,dimensions=? ,imageUrl=? ,imageUrl2=? ,imageUrl3=? ,quantity=? WHERE id = ?", [decoratiune.name, decoratiune.price, decoratiune.description, decoratiune.dimensions, decoratiune.imageUrl, decoratiune.imageUrl2, decoratiune.imageUrl3, decoratiune.quantity, id], function (err, res) {
        if(err) {
          console.log("error: ", err);
          result(null, err);
        }else{
          result(null, res);
        }
    });
};

Decoratiune.delete = function(id, result){
    dbConn.query("DELETE FROM decoratiuni WHERE id = ?", [id], function (err, res) {
        if(err) {
          console.log("error: ", err);
          result(null, err);
        }
        else{
          result(null, res);
        }
    });
};
module.exports= Decoratiune;