const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// read each line
rl.on("line", (word) => {
  let arr = word.split("");
  arr[0] = arr[0].toUpperCase();
  console.log(arr.join(""));
});
