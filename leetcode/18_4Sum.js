/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  // variables
  let [result, leftFlag, rightFlag] = [[], null, null];

  // sort the array
  nums.sort(function (a, b) {
    return a - b;
  });

  if (nums.length < 3) return result;

  // itarate the array
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      leftFlag = j + 1;
      rightFlag = nums.length - 1;
      while (leftFlag < rightFlag) {
        let sum = nums[i] + nums[j] + nums[leftFlag] + nums[rightFlag];
        // [-3, -2, -1, 0, 0, 1, 2, 3]
        if (sum == target) {
          result.push([nums[i], nums[j], nums[leftFlag], nums[rightFlag]]);
          leftFlag++;
          rightFlag--;
        } else if (sum < target) {
          leftFlag++;
        } else {
          rightFlag--;
        }
      }
    }
  }

  // remove unique
  let tmpArr = [];
  let arr = [];
  for (let z = 0; z < result.length; z++) {
    if (!tmpArr.includes(result[z].join("_"))) {
      tmpArr.push(result[z].join("_"));
      arr.push(result[z]);
    }
  }

  return arr;
};

// -2 -1 0 3
console.log(fourSum([-3, -2, -1, 0, 0, 1, 2, 3], 0));
