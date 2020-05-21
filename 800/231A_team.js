function team(n, inputs) {
  // n integer
  n = parseInt(n);
  let globalCount = 0;
  for (let i = 0; i < inputs.length; i++) {
    count = 0;
    inputs[i] = inputs[i].split(" ");
    for (let j = 0; j < inputs[i].length; j++) {
      if (inputs[i][j] == 1) count++;
    }
    if (count > 1) globalCount++;
  }
  console.log(globalCount);
}

// read file
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// read each line
let i = 0;
let n = null;
let inputs = [];
rl.on("line", (line) => {
  if (i == 0) n = line;
  else inputs.push(line);
  i++;
});

// when all file readed
rl.on("close", () => {
  team(n, inputs);
});
