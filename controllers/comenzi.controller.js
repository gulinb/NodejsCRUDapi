'use strict';
const Comenda = require('../models/comenzi.model');
exports.findAll = function(req, res) {
    Comenda.findAll(function(err, comenda) {
      console.log('controller')
      if (err)
        res.send(err);
        
      console.log('res', comenda);
      res.send(comenda);
    });
};

exports.create = function(req, res) {
    const new_comenda = new Comenda(req.body);
    //handles null error
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Comenda.create(new_comenda, function(err, comenda) {
          if (err)
          res.send(err);
          res.json({error:false,message:"Comenda added successfully!",data:comenda});
        });
    }
};

exports.findById = function(req, res) {
    Comenda.findById(req.params.id, function(err, comenda) {
      if (err)
      res.send(err);
      res.json(comenda);
    });
};

exports.findByNameAndTotal = function(req, res) {
  Comenda.findByNameAndTotal([req.params.nume, req.params.prenume, req.params.total], function(err, comenda) {
    if (err)
    res.send(err);
    res.json(comenda);
  });
};

exports.update = function(req, res) {
    
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Comenda.update(req.params.id, new Comenda(req.body), function(err, comenda) {
            if (err)
                res.send(err);
            res.json({ error:false, message: 'Comenda successfully updated' });
       });
    }
};

exports.delete = function(req, res) {
    Comenda.delete( req.params.id, function(err, comenda) {
      if (err)
      res.send(err);
      res.json({ error:false, message: 'Comenda successfully deleted' });
    });
};