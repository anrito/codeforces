function wayTooLongWords(word) {
  if (word.length <= 10) return console.log(word);
  let middle = word.length - 2;
  return console.log(word[0] + middle + word[word.length - 1]);
}

// read file
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// read each line
let bool = false;
rl.on("line", (lineInput) => {
  if (bool) wayTooLongWords(lineInput);
  bool = true;
});

// when all file readed
rl.on("close", () => {});
