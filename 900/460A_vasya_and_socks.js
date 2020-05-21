const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", (line) => {
  let n = "";
  let m = "";
  [n, m] = line.split(" ");
  for (let index = 1; index <= n; index++) if (index % m == 0) n++;
  console.log(n);
});

rl.on("close", () => {});
