'use strict';
var dbConn = require('./../db.config');

//Produs object create
var Produs = function(produs){
  this.category       = produs.category;
  this.name           = produs.name;
  this.price          = produs.price;
  this.description    = produs.description;
  this.dimensions     = produs.dimensions;
  this.imageUrl       = produs.imageUrl;
  this.imageUrl2      = produs.imageUrl2;
  this.imageUrl3      = produs.imageUrl3;
  this.quantity       = produs.quantity;
};

Produs.create = function (newProdus, result) {
    dbConn.query("INSERT INTO produse set ?", newProdus, function (err, res) {
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

Produs.findById = function ([collection, id], result) {
    dbConn.query("Select * from produse where category = ? AND id = ? ", [collection, id], function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
      result(null, res);
    }
    });
};

Produs.findByCategory = function (collection, result) {
  dbConn.query("Select * from produse where category = ? ", collection, function (err, res) {
  if(err) {
    console.log("error: ", err);
    result(err, null);
  }
  else{
    result(null, res);
  }
  });
};

Produs.findAll = function (result) {
    dbConn.query("Select * from produse", function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      console.log('produse : ', res);
      result(null, res);
    }
    });
};

Produs.update = function(id, produs, result){
    dbConn.query("UPDATE produse SET name=? ,price=? ,description=? ,dimensions=? ,imageUrl=? ,imageUrl2=? ,imageUrl3=? ,quantity=? WHERE id = ?", [produs.name, produs.price, produs.description, produs.dimensions, produs.imageUrl, produs.imageUrl2, produs.imageUrl3, produs.quantity, id], function (err, res) {
        if(err) {
          console.log("error: ", err);
          result(null, err);
        }else{
          result(null, res);
        }
    });
};

Produs.delete = function(id, result){
    dbConn.query("DELETE FROM produse WHERE id = ?", [id], function (err, res) {
        if(err) {
          console.log("error: ", err);
          result(null, err);
        }
        else{
          result(null, res);
        }
    });
};
module.exports= Produs;