var express = require('express');
var router = express.Router();
// var {TemplateEngine} = require('thymeleaf');
// var templateEngine = new TemplateEngine();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/test', (req, res) => {
//   templateEngine.processFile('test.html', null)
//   .then(result => {
//     console.log('result = ', result);
//   });
// });

module.exports = router;
