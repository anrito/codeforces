const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// read each line
let i = 0;
let count = 0;
rl.on("line", (lineInput) => {
  if (i != 0) {
    if (lineInput.indexOf("++") > -1) count++;
    if (lineInput.indexOf("--") > -1) count--;
  }
  i++;
});

// when all file readed
rl.on("close", () => {
  console.log(count);
});
