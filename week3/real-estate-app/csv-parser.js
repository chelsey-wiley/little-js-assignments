var fs = require ('fs');




function parse(callback) {
  console.log('#3 - time to read the file')

  var callbackForReadFile = function (err, fileContents){
    console.log("#6 - later, OS done reading Callback for fs.readFile.")

    var output = {
      city: 'Sacramento',
      homes: []
    };

      var lines = fileContents.split('\r');

      for (var i = 1; i < lines.length -1; i++) {
        var line = lines[i];

        var values = line.split(",");

        output.homes.push({
        street: values [0],
        zip: values [2],
        beds: values [4],
        baths: values [5],
        });

      }
  console.log(output);
  return output;

    console.log('#7 - done conerting CSV to object. Calling callback')
      callback(output);
  }

    fs.readFile('real-estate-data.csv', 'utf-8', callbackForReadFile);

    console.log('#4 - Delegated file reading responsibility to the OS. Moving on with my day.')




    var fileContents = '/real-estate-app/real-estate-data';
    var option = 'utf-8';
    function readCompleted(err, data) {
      if (err) throw err;
      console.log('here is the data that I read from the file!', data);
    }

    var output = fs.readFile(fileContents, option, readCompleted);

}

module.exports = parse;
