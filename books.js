"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function printResult(x) {
  process.stdout.write(x);
}

function main() {
  const nm = readLine().split(" ").map(Number);
  const arr = readLine().split(" ").map(Number);

  const n = nm[0];
  const m = nm[1];

  // console.log(nm, requirements, complexities)
  const result = books(n, m, arr);
  printResult(result.toString());
}

function books(n, t, books) {
  let gcount = 0;
  for (let i = 0; i < books.length; i++) {
    let time = parseInt(books[i]);
    let count = 0;
    let indicator = 1;
    while (time <= parseInt(t)) {
      time = time + parseInt(books[i + indicator]);
      indicator++;
      count++;
    }
    if (count > gcount) gcount = count;
  }
  return gcount;
}

// console.log(Books([3, 1, 2, 1], 5));

// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let index = 0;
// let time = null;
// let bArray = [];
// rl.on("line", (line) => {
//   if (index == 0) time = line.split(" ");
//   else bArray = line.split(" ");
//   index++;
// });

// rl.on("close", () => {
//   //   console.log(time);
//   //   console.log(bArray);
//   Books(bArray, time[1]);
// });
