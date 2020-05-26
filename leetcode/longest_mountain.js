function longestMountain(A) {
  // find the number which has next two number less than this number
  let gCount = 0;
  for (let index = 1; index < A.length - 1; index++) {
    const el = A[index];

    if (A[index - 1] < el && A[index + 1] < el) {
      // we found portential element
      let count = 3;

      let twoStepLeft = index - 2;
      let oneStepLeft = index - 1;
      while (A[twoStepLeft] < A[oneStepLeft]) {
        twoStepLeft--;
        oneStepLeft--;
        count++;
      }

      let twoStepRight = index + 2;
      let oneStepRight = index + 1;
      while (A[twoStepRight] < A[oneStepRight]) {
        twoStepRight++;
        oneStepRight++;
        count++;
      }
      if (count > gCount) gCount = count;
    }
  }
  return gCount;
}

console.log(longestMountain([2, 1, 4, 7, 3, 2, 5]));
