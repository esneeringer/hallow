var express = require('express');
var router = express.Router();

var mongoose = require('mongoose'); //mongo connection
var bodyParser = require('body-parser'); //parses information from POST

var Post = require('../model/post');

router.post('/', function(req, res, next){
    var title = req.body.title;
    var body = req.body.body;
    var author = req.body.author;
  
    mongoose.model('Post').create({
      title : title,
      body : body,
      author : author
    })
    
    res.json("Success");
  
  });

  module.exports = router;