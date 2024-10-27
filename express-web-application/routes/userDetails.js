var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function (req, res, next){
  // console.log(req);
  console.log(req.body);
  res.send("Thanks for Registering!!");
});

module.exports = router;
