var fs = require('fs');
var contentsOfFile = fs.readFileSync("Most+Recent+Cohorts+(Scorecard+Elements)2.csv", 'utf-8');

var lines = contentsOfFile.split("\n");

var i = 1;

while (i < lines.length -1){
  var indivArray = lines[i].split(",");

  if (indivArray[32] != "NULL") {
    var thing = indivArray[3] + " " + indivArray[32];
    console.log(thing);
  }
  i++;
}





// COMPLETED 
//while (i < lines.length -1){
//   var indivArray = lines[i].split(",");
//   var thing = indivArray[3] + " " + indivArray[32];
//     if (indivArray[32] = "NULL"){
//       indivArray = indivArray[32].replace("NULL", " ")
//       }
//   i++;
//   }
