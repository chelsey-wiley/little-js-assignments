var fs = require('fs');

fs.readFile('MS-sample.csv', 'utf-8', function(err, data) {

  var lines = data.split('\n')

  for (var i = 0; i < lines.length; i++){
    var arr = lines[i].split(',');
    var name = arr[0]
    var display = arr[0] + " " + arr[3];
    console.log(display);
  }

});
