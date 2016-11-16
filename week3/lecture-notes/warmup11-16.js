var i =0;

var stuff = [
  { name: 'Nora Theriot',
    age: 67},
  { name: 'Bob Smith',
    age: 89 },
  { name: 'Fred Jones',
    age: 45 },
  { name: 'Steven Strange',
    age: 38 }
];

for (var i = 0; i < stuff.length; i++){
  var obj = stuff[i];

console.log (obj.name, obj.age );
}

//for loop this will always be the same:

// for (var i = 0; i < stuff.length; i++){
