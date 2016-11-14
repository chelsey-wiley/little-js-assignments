var fs = require('fs');
var contentsOfFile = fs.readFileSync("Most+Recent+Cohorts+(Scorecard+Elements).csv", 'utf-8');
console.log(contentsOfFile);

var lines = contentsOfFile.split("\n");

var i = 1;

while (i < lines.length -1){
  var indivArray = lines[i].split(",");
  var thing = indivArray[3] + " " + indivArray[32];
  console.log(thing);
  i++;
}




/*
var lines = fileContents.split('\n');
console.log('yay lines', lines);

var i = 1;

while(i < lines.length - 1){
  var indivArray = lines[i].split(",");
  var lastThing = indivArray[3];
  lastThing = lastThing.replace(/"/g, '');


  console.log(lastThing);
  i++;
console.log(index)

var CScore = ["OPEID", "ACTCM75"];

var CScore

var lines = CScore.split("\n");


var i = 1;

while (lines.indexOf("OPEID", "ACTCM75") > -1){
  console.log(lines)
}
*/
