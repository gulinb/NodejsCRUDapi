'use strict';
const Decoratiune = require('../models/decoratiuni.model');
exports.findAll = function(req, res) {
    Decoratiune.findAll(function(err, decoratiune) {
      console.log('controller')
      if (err)
        res.send(err);
        
      console.log('res', decoratiune);
      res.send(decoratiune);
    });
};

exports.create = function(req, res) {
    const new_decoratiune = new Decoratiune(req.body);
    //handles null error
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Decoratiune.create(new_decoratiune, function(err, decoratiune) {
          if (err)
          res.send(err);
          res.json({error:false,message:"Decoratiune added successfully!",data:decoratiune});
        });
    }
};

exports.findById = function(req, res) {
    Decoratiune.findById(req.params.id, function(err, decoratiune) {
      if (err)
      res.send(err);
      res.json(decoratiune);
    });
};

exports.update = function(req, res) {
    
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Decoratiune.update(req.params.id, new Decoratiune(req.body), function(err, decoratiune) {
            if (err)
                res.send(err);
            res.json({ error:false, message: 'Decoratiune successfully updated' });
       });
    }
};

exports.delete = function(req, res) {
    Decoratiune.delete( req.params.id, function(err, decoratiune) {
      if (err)
      res.send(err);
      res.json({ error:false, message: 'Decoratiune successfully deleted' });
    });
};