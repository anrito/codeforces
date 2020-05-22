const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", (line) => {
  let params = line.split(" ");
  let smaller = parseInt(params[0]);
  if (parseInt(params[1]) <= parseInt(params[0])) smaller = params[1];
  if (smaller % 2 == 0) console.log("Malvika");
  else console.log("Akshat");
});

rl.on("close", () => {});
