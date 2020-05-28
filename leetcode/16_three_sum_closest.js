function threeSumClosest(nums, target) {
  let closest = null;
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let z = j + 1; z < nums.length; z++) {
        let sum = nums[i] + nums[j] + nums[z];
        if (closest === null) closest = sum;
        if (Math.abs(sum - target) < Math.abs(target - closest)) closest = sum;
      }
    }
  }
  return closest;
}

console.log(threeSumClosest([1, 1, -1, -1, 3], 3));
