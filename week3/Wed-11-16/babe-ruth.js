var fs = require('fs');

fs.readFile('babe-ruth-info.csv', 'utf-8', function(err, data) {

  var lines = data.split('\n')
  //console.log(lines); -- WORKS
  //data is in the readFile built into Node to call the second parameter in the function.
  for (var i = 0; i < lines.length; i++){
    var newArray = lines[i].split(',');
    //console.log(newArray); -- split at every comma
    var rbi = newArray[12]
    console.log(rbi);
    // -- pulled out info at pos. 12
  }

});

//fs.readFile('babe-ruth-info.csv', 'utf-8', function(err, data) --- or this goes at the bottom and create a function at the very top under var fs = require('fs') function callback(err, data){
