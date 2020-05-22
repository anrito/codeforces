function caseOfTheZerosAndOnes(str) {
  let acnt = 0;
  let bcnt = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == 1) acnt++;
    if (str[i] == 0) bcnt++;
  }
  console.log(Math.abs(acnt - bcnt));
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
  caseOfTheZerosAndOnes(arr[1]);
});
