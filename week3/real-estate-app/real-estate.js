var express = require('express');
var app = express();

var app = express();

app.use(express.static('public'))

app.get('/real-estate-data', function (req, res) {
  console.log("#1 - request from browser received.");






  console.log("#2 - time to call the parser");
  parser(callback);
  console.log("#5 - having delegated, I'm back in the handeler");
});








app.listen(4001, function() {
});
