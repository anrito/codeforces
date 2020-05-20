const readline = require("readline");

function nextRound(balls, params) {
  balls = balls.split(" ").map((x) => parseInt(x));
  params = params.split(" ").map((x) => parseInt(x));
  console.log(balls);

  const [n, k] = params;
  console.log(k);

  let answer = 0;
  balls.forEach((b) => {
    if (b >= balls[k - 1] && b > 0) {
      answer += 1;
    }
  });

  console.log(answer);
}

// console.log("str");
nextRound("1 1 1 1 1", "5 1");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
rl.on("line", (line) => {
  input.push(line);
});

rl.on("close", () => {
  nextRound(input[1], parseInt(input[0].split("").pop()));
});
