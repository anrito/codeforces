function bautifulMartix(matrix) {
  // determine the location of the current 1 point
  let coordinates = [];
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] == "1") {
        coordinates.push(row);
        coordinates.push(col);
      }
    }
  }
  console.log(Math.abs(coordinates[0] - 2) + Math.abs(coordinates[1] - 2));
}

// read file
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputs = [];

// read each line
rl.on("line", (lineInput) => {
  inputs.push(lineInput);
});

// when all file readed
rl.on("close", () => {
  // call the function
  let matrix = [];
  inputs.forEach(function (el) {
    matrix.push(el.split(" "));
  });
  bautifulMartix(matrix);
});
