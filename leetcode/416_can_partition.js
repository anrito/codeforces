/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  let result = false;
  // sort the array
  nums.sort(function (a, b) {
    return a - b;
  });
  // if array is less than two
  if (nums.length < 2) return result;
  // get sum of the all elemets but first
  let leftSum = nums[0];
  let rightSum =
    nums.reduce(function (starter, curr) {
      return starter + curr;
    }) - nums[0];
  //   let index = 1;
  // reduse sum add to first elemet and compare
  for (let i = 1; i < nums.length; i++) {
    if (leftSum == rightSum) return true;
    leftSum = leftSum + nums[i];
    rightSum = rightSum - nums[i];
  }

  return result;
};

console.log(canPartition([1, 2, 3, 4, 5, 6, 7]));
