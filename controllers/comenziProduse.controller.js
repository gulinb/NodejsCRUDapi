'use strict';
const ComendaProduse = require('../models/comenziProduse.model');
exports.findAll = function(req, res) {
    ComendaProduse.findAll(function(err, comendaProduse) {
      console.log('controller')
      if (err)
        res.send(err);
        
      console.log('res', comendaProduse);
      res.send(comendaProduse);
    });
};

exports.create = function(req, res) {
    const new_comendaProduse = new ComendaProduse(req.body);
    //handles null error
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        ComendaProduse.create(new_comendaProduse, function(err, comendaProduse) {
          if (err)
          res.send(err);
          res.json({error:false,message:"ComendaProduse added successfully!",data:comendaProduse});
        });
    }
};

exports.findById = function(req, res) {
    ComendaProduse.findById(req.params.id, function(err, comendaProduse) {
      if (err)
      res.send(err);
      res.json(comendaProduse);
    });
};

exports.update = function(req, res) {
    
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        ComendaProduse.update(req.params.id, new ComendaProduse(req.body), function(err, comendaProduse) {
            if (err)
                res.send(err);
            res.json({ error:false, message: 'ComendaProduse successfully updated' });
       });
    }
};

exports.delete = function(req, res) {
    ComendaProduse.delete( req.params.id, function(err, comendaProduse) {
      if (err)
      res.send(err);
      res.json({ error:false, message: 'ComendaProduse successfully deleted' });
    });
};