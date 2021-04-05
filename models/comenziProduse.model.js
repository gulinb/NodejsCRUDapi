'use strict';
var dbConn = require('./../db.config');

//ComandaProduse object create
var ComandaProduse = function(comandaProduse){
  this.idComanda           = comandaProduse.idComanda;
  this.numeProdus          = comandaProduse.numeProdus;
  this.pret    = comandaProduse.pret;
  this.cantitate     = comandaProduse.cantitate;
};

ComandaProduse.create = function (newComandaProduse, result) {
    dbConn.query("INSERT INTO comenziProduse set ?", newComandaProduse, function (err, res) {
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

ComandaProduse.findById = function (id, result) {
    dbConn.query("Select * from comenziProduse where id = ? ", id, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
      result(null, res);
    }
    });
};

ComandaProduse.findAll = function (result) {
    dbConn.query("Select * from comenziProduse", function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      console.log('comenziProduse : ', res);
      result(null, res);
    }
    });
};

ComandaProduse.update = function(id, comandaProduse, result){
    dbConn.query("UPDATE comenziProduse SET idComanda=? ,numeProdus=? ,pret=? ,cantitate=? WHERE id = ?", [comandaProduse.idComanda, comandaProduse.numeProdus, comandaProduse.pret, comandaProduse.cantitate, id], function (err, res) {
        if(err) {
          console.log("error: ", err);
          result(null, err);
        }else{
          result(null, res);
        }
    });
};

ComandaProduse.delete = function(id, result){
    dbConn.query("DELETE FROM comenziProduse WHERE id = ?", [id], function (err, res) {
        if(err) {
          console.log("error: ", err);
          result(null, err);
        }
        else{
          result(null, res);
        }
    });
};
module.exports= ComandaProduse;