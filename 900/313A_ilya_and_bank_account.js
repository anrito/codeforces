var Stack = require("mnemonist/stack");

/**
 * ilya and bank account
 */
function ilyaAndBankAccount(line) {
  if (line > 0) console.log(parseInt(line) + "");
  else {
    line = line.split("");
    if (line.length == 2) console.log(0);
    else {
      if (line[line.length - 1] > line[line.length - 2]) {
        line.pop();
        line = line.join("");
        console.log(parseInt(line) + "");
      } else {
        let save = line.pop();
        line.pop();
        line.push(save);
        line = line.join("");
        console.log(parseInt(line) + "");
      }
    }
  }
}

ilyaAndBankAccount("-100");

// ------------------------------------------------------------------------------------------
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", (line) => {
  ilyaAndBankAccount(line);
});
rl.on("close", () => {});
