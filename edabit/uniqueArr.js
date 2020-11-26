// Find Unique Positive Numbers from Array

function uniqueArr(arr) {
  // create the object
  // fill the object with positive numbers
  var obj = {};
  var ret = [];
  arr.forEach((element) => {
    if (parseInt(element) > 0 && obj[element] === undefined) {
      obj[element.toString()] = true;
      ret.push(element);
    }
  });

  return ret;
}

// console.log(uniqueArr([-5, 1, -7, -5, -2, 3, 3, -5, -1, -1]));
// console.log(uniqueArr([3, -3, -3, 5, 5, -6, -2, -4, -1, 3]));
console.log(uniqueArr([10, 6, -12, 13, 5, 5, 13, 6, 5]));
