'use strict';
const Cercel = require('../models/cercei.model');
exports.findAll = function(req, res) {
    Cercel.findAll(function(err, cercel) {
      console.log('controller')
      if (err)
        res.send(err);
        
      console.log('res', cercel);
      res.send(cercel);
    });
};

exports.create = function(req, res) {
    const new_cercel = new Cercel(req.body);
    //handles null error
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Cercel.create(new_cercel, function(err, cercel) {
          if (err)
          res.send(err);
          res.json({error:false,message:"Cercel added successfully!",data:cercel});
        });
    }
};

exports.findById = function(req, res) {
    Cercel.findById(req.params.id, function(err, cercel) {
      if (err)
      res.send(err);
      res.json(cercel);
    });
};

exports.update = function(req, res) {
    
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Cercel.update(req.params.id, new Cercel(req.body), function(err, cercel) {
            if (err)
                res.send(err);
            res.json({ error:false, message: 'Cercel successfully updated' });
       });
    }
};

exports.delete = function(req, res) {
    Cercel.delete( req.params.id, function(err, cercel) {
      if (err)
      res.send(err);
      res.json({ error:false, message: 'Cercel successfully deleted' });
    });
};