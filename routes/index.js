var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'), //mongo connection
    bodyParser = require('body-parser'); //parses information from POST

var Post = require('../model/post');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('post/create', function(req, res, next){
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