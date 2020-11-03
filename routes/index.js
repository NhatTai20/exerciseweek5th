const e = require('express');
var express = require('express');
var router = express.Router();

var app = express();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/', (req, res)=> {
  var num1 = req.body.first_TextBox_Value;
  var num2 = req.body.second_TextBox_Value;
  var op = req.body.math_Operators;
  var a = parseFloat(num1);
  var b = parseFloat(num2);
  var result;
  console.log(req.body);
  if(op == 'add'){
    result = a + b;
  }
  if(op == 'sub'){
    result = a - b;
  }
  if(op == 'mul'){
    result = a * b;
  }
  if(op == 'div'){
    result = a / b;
  }
  res.render('index', { title: 'Express', num1, num2, result, op})
});

module.exports = router;
