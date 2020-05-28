// AFTER SEE DISCUSS
function jewelsAndStones(J, S) {
  let set = new Set(J);
  return S.split("").reduce((start, current) => start + set.has(current), 0);
}

// // My INITIAL VERSION
// function jewelsAndStones(J, S) {
//   count = 0;
//   for (let index = 0; index < S.length; index++) {
//     let indexOf = S.indexOf(J, index);
//     if (indexOf !== -1) {
//       count++;
//       index = indexOf + J.length - 1;
//     }
//   }
//   return count;
// }
