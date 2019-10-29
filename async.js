// function readFile(file, cb) {
//   // read the file
//     /////////

//   cb(contentFile.length);
// }

// readFile("odyssey.txt", function(textSize) {
//   console.log(textSize);
// });
// // console.log(textSize); // => undefined => wrong!
// let fs = require("fs");

// function readFile(filename, cb) {
//   let characters = 0;

//   fs.readFile(filename, "utf8", function(err, data) {
//     characters = data.length;
//     cb(characters);
//   });
// }

// readFile("odissey.txt", function(characters) {
//   console.log("file contents from main code flow=" + characters);
// });

i = 0
let intervalID = setInterval(() => {
  console.log(i++)

  if (i > 20) clearInterval(intervalID)
}, 100)
