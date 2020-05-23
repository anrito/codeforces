function isBadVersion(number) {
  let badVersion = 22;
  if (number >= badVersion) return false;
  else return true;
}

function solution(n) {
  let leftPointer = 0;
  let rightPointer = n;
  let middle = Math.floor((rightPointer - leftPointer) / 2);

  while (true) {
    if (!isBadVersion(middle)) {
      rightPointer = middle;
      middle = Math.floor((rightPointer - leftPointer) / 2);
    }

    if (isBadVersion(middle)) {
      leftPointer = middle;
      middle = middle + Math.floor((rightPointer - leftPointer) / 2);
    }

    if (rightPointer - leftPointer == 1) break;
  }
  return middle + 1;
}

console.log(solution(100));

// while (middle) {
//   if (!isBadVersion(middle)) {
//   }
// }
