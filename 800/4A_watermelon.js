const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// read each line
rl.on("line", (lineInput) => {
  if (lineInput % 2 == 0 && lineInput != 2) {
    console.log("Yes");
  } else console.log("NO");
});

// when all file readed
rl.on("close", () => {});
