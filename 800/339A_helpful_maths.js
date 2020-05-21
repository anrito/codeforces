function helpfulMaths(str) {
  let arr = str.split("+");
  arr.sort(function (a, b) {
    return a - b;
  });
  return console.log(arr.join("+"));
}

// read file
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let input = "";
// read each line
rl.on("line", (lineInput) => {
  input = lineInput;
});

// when all file readed
rl.on("close", () => {
  helpfulMaths(input);
});
