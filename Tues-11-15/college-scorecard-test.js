var fs = require('fs');
var contentsOfFile = fs.readFileSync("Most-recent-college.csv", 'utf-8');
// console.log(contentsOfFile);

var lines = contentsOfFile.split("\n");

var i = 1;

while (i < lines.length - 1){
  var indivArray = lines[i].split(",");
  if (indivArray[32] === "NULL") {
    i++;
    continue;
  };

var thing = indivArray[3] + " " + indivArray[32];
  console.log(thing);
  i++;
};
