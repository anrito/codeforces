function removeDuplicates(nums) {
  for (let i = 0; i < nums.length; i++) {
    // get each element of array
    if (nums[i + 2] !== undefined && nums[i] == nums[i + 2]) {
      // shipt array to left
      for (let j = i + 2; j < nums.length; j++) {
        if (j == nums.length - 1) {
          nums[j] = nums[i];
        } else {
          nums[j] = nums[j + 1];
        }
      }
      i = i - 1;
      nums.pop();
    }
  }
  return nums;
}

console.log(removeDuplicates([1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 6]));
