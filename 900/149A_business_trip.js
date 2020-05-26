function businessTrip(k, months) {
  // sort the array
  months = months.split(" ");
  months = months.sort(function(a, b) {
    return b - a;
  });
  // itarate
  for (let i = 0; i < months.length; i++) {
    let sumOfFirsNLement = months
      .slice(0, i + 1)
      .reduce((startPoint, current) => {
        return parseInt(startPoint) + parseInt(current);
      });
    if (k == 0) return console.log(0);
    if (parseInt(sumOfFirsNLement) >= parseInt(k)) return console.log(i + 1);
  }
  return console.log("-1");
}

// businessTrip("5", "0 0 0 0 0 0 0 1 1 2 3 0");

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let arr = [];
rl.on("line", line => {
  arr.push(line);
});

rl.on("close", () => {
  businessTrip(arr[0], arr[1]);
});
