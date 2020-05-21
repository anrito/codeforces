// function gameWithStiks(n, m) {
//   // "7 x 4"  => '6 x 3' => '5 x 2' => '4 x 1'
//   let turn = "Akshat";
//   while (true) {
//     if (n == 1 && m == 1) break;
//     if (n != 1) n = n - 1;
//     if (m != 1) m = m - 1;
//     if (turn == "Akshat") turn = "Malvika";
//     else turn = "Akshat";
//   }
//   return console.log(turn);
// }

// gameWithStiks(2, 3);

// read file
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// read each line
rl.on("line", (lineInput) => {
  let params = lineInput.split(" ");

  let turn = "Akshat";
  while (true) {
    if (params[0] == 1 && params[1] == 1) break;
    if (params[0] != 1) params[0] = params[0] - 1;
    if (params[1] != 1) params[1] = params[1] - 1;
    if (turn == "Akshat") turn = "Malvika";
    else turn = "Akshat";
  }
  return console.log(turn);
});

// when all file readed
rl.on("close", () => {});
