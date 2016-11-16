//replaces stuff here

var longString = "MedAssets is a company in Plano. They do medical stuff. The North Dallas .NET Users Group meets at MedAssets. I knew some programmers there who had to deal with them changing their name to something else. I do not want to work at MedAssets because the train does not go anywhere near there. However, MedAssets has free soda, so that would be nice.";

var newString = longString;

while (newString.indexOf("MedAssets") > -1){
  newString = newString.replace("MedAssets", "nThrive")
}


//make sure your replace newString NOT longString

//also can do    newString = longString.replace(/MedAssets/gi, "nThrive") repalce while loop


console.log(newString);
