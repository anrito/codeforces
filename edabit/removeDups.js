// Remove Duplicates from an Array

// Create a function that takes an array of items,
// removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).

function removeDups(arr) {
  var obj = {};
  var res = [];
  arr.forEach((element) => {
    if (obj[element] === undefined) {
      obj[element] = true;
      res.push(element);
    }
  });
  return res;
}

console.log(removeDups([1, 0, 1, 0]));
console.log(removeDups(["The", "big", "cat"]));
console.log(removeDups(["John", "Taylor", "John"]));
