'use strict';
const Colier = require('../models/coliere.model');
exports.findAll = function(req, res) {
    Colier.findAll(function(err, colier) {
      console.log('controller')
      if (err)
        res.send(err);
        
      console.log('res', colier);
      res.send(colier);
    });
};

exports.create = function(req, res) {
    const new_colier = new Colier(req.body);
    //handles null error
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Colier.create(new_colier, function(err, colier) {
          if (err)
          res.send(err);
          res.json({error:false,message:"Colier added successfully!",data:colier});
        });
    }
};

exports.findById = function(req, res) {
    Colier.findById(req.params.id, function(err, colier) {
      if (err)
      res.send(err);
      res.json(colier);
    });
};

exports.update = function(req, res) {
    
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Colier.update(req.params.id, new Colier(req.body), function(err, colier) {
            if (err)
                res.send(err);
            res.json({ error:false, message: 'Colier successfully updated' });
       });
    }
};

exports.delete = function(req, res) {
    Colier.delete( req.params.id, function(err, colier) {
      if (err)
      res.send(err);
      res.json({ error:false, message: 'Colier successfully deleted' });
    });
};