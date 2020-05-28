/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
  let result = [];
  if (nums.length < 3) return result;
  // sort first here
  nums.sort(function (a, b) {
    return a - b;
  });

  for (let i = 0; i < nums.length && nums[i] <= 0; i++) {
    let leftFlag = i + 1;
    let rightFlag = nums.length - 1;

    while (leftFlag < rightFlag) {
      let sum = nums[i] + nums[leftFlag] + nums[rightFlag];
      if (sum == 0) {
        result.push([nums[i], nums[leftFlag], nums[rightFlag]]);
        leftFlag++;
        rightFlag--;

        // remove unique
        while (leftFlag < rightFlag && nums[leftFlag] == nums[leftFlag - 1])
          leftFlag++;

        while (leftFlag < rightFlag && nums[rightFlag] == nums[rightFlag + 1])
          rightFlag--;
      } else if (sum < 0) {
        leftFlag++;
      } else {
        rightFlag--;
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
}

console.log(threeSum([-2, 0, 1, 1, 2]));
