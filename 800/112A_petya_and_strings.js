function lexicographically(str1, str2) {
  console.log(str1.toLocaleLowerCase().localeCompare(str2.toLocaleLowerCase()));
}

const readline = require("readline");
// Create readline Interface
let inputs = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on("line", (lineInput) => {
  inputs.push(lineInput);
});
rl.on("close", () => {
  // call the function
  let firstWord = inputs[0];
  let secondWord = inputs[1];
  lexicographically(firstWord, secondWord);
});
