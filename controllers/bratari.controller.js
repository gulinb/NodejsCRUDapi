'use strict';
const Bratara = require('../models/bratari.model');
exports.findAll = function(req, res) {
    Bratara.findAll(function(err, bratara) {
      console.log('controller')
      if (err)
        res.send(err);
        
      console.log('res', bratara);
      res.send(bratara);
    });
};

exports.create = function(req, res) {
    const new_bratara = new Bratara(req.body);
    //handles null error
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Bratara.create(new_bratara, function(err, bratara) {
          if (err)
          res.send(err);
          res.json({error:false,message:"Bratara added successfully!",data:bratara});
        });
    }
};

exports.findById = function(req, res) {
    Bratara.findById(req.params.id, function(err, bratara) {
      if (err)
      res.send(err);
      res.json(bratara);
    });
};

exports.update = function(req, res) {
    
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Bratara.update(req.params.id, new Bratara(req.body), function(err, bratara) {
            if (err)
                res.send(err);
            res.json({ error:false, message: 'Bratara successfully updated' });
       });
    }
};

exports.delete = function(req, res) {
    Bratara.delete( req.params.id, function(err, bratara) {
      if (err)
      res.send(err);
      res.json({ error:false, message: 'Bratara successfully deleted' });
    });
};