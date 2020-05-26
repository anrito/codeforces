/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
  let maxliter = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = 0; j < height.length; j++) {
      if (j != i) {
        let min = Math.min(height[i], height[j]);
        let module = Math.abs(i - j);
        if (min * module > maxliter) maxliter = min * module;
      }
    }
  }
  return maxliter;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
