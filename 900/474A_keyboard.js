function keyboard(direction, string) {
  let keyboard = "qwertyuiopasdfghjkl;zxcvbnm,./".split("");
  let result = "";
  let indicator = direction === "R" ? -1 : 1;
  for (let i = 0; i < string.length; i++) {
    result += keyboard[keyboard.indexOf(string[i]) + indicator];
  }
  console.log(result);
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let arr = [];
rl.on("line", (line) => {
  arr.push(line);
});

rl.on("close", () => {
  keyboard(arr[0], arr[1]);
});
