const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// read each line
rl.on("line", (lineInput) => {
  let params = lineInput.split(" ");
  console.log(Math.floor((params[0] * params[1]) / 2));
});

// when all file readed
rl.on("close", () => {});
