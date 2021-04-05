'use strict';
const Pandantiv = require('../models/pandantive.model');
exports.findAll = function(req, res) {
    Pandantiv.findAll(function(err, pandantiv) {
      console.log('controller')
      if (err)
        res.send(err);
        
      console.log('res', pandantiv);
      res.send(pandantiv);
    });
};

exports.create = function(req, res) {
    const new_pandantiv = new Pandantiv(req.body);
    //handles null error
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Pandantiv.create(new_pandantiv, function(err, pandantiv) {
          if (err)
          res.send(err);
          res.json({error:false,message:"Pandantiv added successfully!",data:pandantiv});
        });
    }
};

exports.findById = function(req, res) {
    Pandantiv.findById(req.params.id, function(err, pandantiv) {
      if (err)
      res.send(err);
      res.json(pandantiv);
    });
};

exports.update = function(req, res) {
    
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Pandantiv.update(req.params.id, new Pandantiv(req.body), function(err, pandantiv) {
            if (err)
                res.send(err);
            res.json({ error:false, message: 'Pandantiv successfully updated' });
       });
    }
};

exports.delete = function(req, res) {
    Pandantiv.delete( req.params.id, function(err, pandantiv) {
      if (err)
      res.send(err);
      res.json({ error:false, message: 'Pandantiv successfully deleted' });
    });
};