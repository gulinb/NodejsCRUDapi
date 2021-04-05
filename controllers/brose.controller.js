'use strict';
const Brosa = require('../models/brose.model');
exports.findAll = function(req, res) {
    Brosa.findAll(function(err, brosa) {
      console.log('controller')
      if (err)
        res.send(err);
        
      console.log('res', brosa);
      res.send(brosa);
    });
};

exports.create = function(req, res) {
    const new_brosa = new Brosa(req.body);
    //handles null error
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Brosa.create(new_brosa, function(err, brosa) {
          if (err)
          res.send(err);
          res.json({error:false,message:"Brosa added successfully!",data:brosa});
        });
    }
};

exports.findById = function(req, res) {
    Brosa.findById(req.params.id, function(err, brosa) {
      if (err)
      res.send(err);
      res.json(brosa);
    });
};

exports.update = function(req, res) {
    
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Brosa.update(req.params.id, new Brosa(req.body), function(err, brosa) {
            if (err)
                res.send(err);
            res.json({ error:false, message: 'Brosa successfully updated' });
       });
    }
};

exports.delete = function(req, res) {
    Brosa.delete( req.params.id, function(err, brosa) {
      if (err)
      res.send(err);
      res.json({ error:false, message: 'Brosa successfully deleted' });
    });
};