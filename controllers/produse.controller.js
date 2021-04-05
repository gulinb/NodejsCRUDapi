'use strict';
const Produs = require('../models/produse.model');
exports.findAll = function(req, res) {
    Produs.findAll(function(err, produs) {
      console.log('controller')
      if (err)
        res.send(err);
        
      console.log('res', produs);
      res.send(produs);
    });
};

exports.create = function(req, res) {
    const new_produs = new Produs(req.body);
    //handles null error
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Produs.create(new_produs, function(err, produs) {
          if (err)
          res.send(err);
          res.json({error:false,message:"Produs added successfully!",data:produs});
        });
    }
};

exports.findById = function(req, res) {
    Produs.findById([req.params.collection, req.params.id], function(err, produs) {
      if (err)
      res.send(err);
      res.json(produs);
    });
};

exports.findByCategory = function(req, res) {
  Produs.findByCategory(req.params.collection, function(err, produs) {
    if (err)
    res.send(err);
    res.json(produs);
  });
};

exports.update = function(req, res) {
    
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Produs.update(req.params.id, new Produs(req.body), function(err, produs) {
            if (err)
                res.send(err);
            res.json({ error:false, message: 'Produs successfully updated' });
       });
    }
};

exports.delete = function(req, res) {
    Produs.delete( req.params.id, function(err, produs) {
      if (err)
      res.send(err);
      res.json({ error:false, message: 'Produs successfully deleted' });
    });
};