'use strict';
var dbConn = require('./../db.config');

//Comanda object create
var Comanda = function(comanda){
  this.nume             = comanda.nume;
  this.prenume          = comanda.prenume;
  this.adresa           = comanda.adresa;
  this.oras             = comanda.oras;
  this.judet            = comanda.judet;
  this.telefon          = comanda.telefon;
  this.adresaEmail      = comanda.adresaEmail;
  this.modalitatePlata  = comanda.modalitatePlata;
  this.total            = comanda.total;
  this.comandaProcesata = comanda.comandaProcesata;
};

Comanda.create = function (newComanda, result) {
    dbConn.query("INSERT INTO comenzi set ?", newComanda, function (err, res) {
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

Comanda.findById = function (id, result) {
    dbConn.query("Select * from comenzi where id = ? ", id, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
      result(null, res);
    }
    });
};

Comanda.findByNameAndTotal = function ([nume, prenume, total], result) {
  dbConn.query("Select * from comenzi where nume = ? AND prenume = ? AND total = ?", [nume, prenume, total], function (err, res) {
  if(err) {
    console.log("error: ", err);
    result(err, null);
  }
  else{
    result(null, res);
  }
  });
};


Comanda.findAll = function (result) {
    dbConn.query("Select * from comenzi", function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      console.log('comenzi : ', res);
      result(null, res);
    }
    });
};

Comanda.update = function(id, comanda, result){
    dbConn.query("UPDATE comenzi SET nume=? ,prenume=? ,adresa=? ,oras=? ,judet=? ,telefon=? ,adresaEmail=? ,modalitatePlata=?, total=? ,comandaProcesata=? WHERE id = ?", [comanda.nume, comanda.prenume, comanda.adresa, comanda.oras, comanda.judet, comanda.telefon, comanda.adresaEmail, comanda.modalitatePlata, comanda.total, comanda.comandaProcesata, id], function (err, res) {
        if(err) {
          console.log("error: ", err);
          result(null, err);
        }else{
          result(null, res);
        }
    });
};

Comanda.delete = function(id, result){
    dbConn.query("DELETE FROM comenzi WHERE id = ?", [id], function (err, res) {
        if(err) {
          console.log("error: ", err);
          result(null, err);
        }
        else{
          result(null, res);
        }
    });
};
module.exports= Comanda;