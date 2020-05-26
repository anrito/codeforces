// /**
//  * @param {string} s
//  * @return {string}
//  */

// function isPalendrome(str) {
//   let strReverce = "";
//   for (let index = str.length - 1; index >= 0; index--) {
//     strReverce += str[index];
//   }
//   if (strReverce === str) return true;
//   return false;
// }

// var longestPalindrome = function(s) {
//   if (isPalendrome(s)) return s;
//   let longeestPallendrome = "";

//   for (let i = 0; i < s.length; i++) {
//     for (let j = s.length - 1; j > i; j--) {
//       let pal = s.substr(i, j);
//       console.log(pal);
//       if (isPalendrome(pal)) {
//         if (pal.length > longeestPallendrome.length) longeestPallendrome = pal;
//       }
//     }
//   }

//   return longeestPallendrome;
// };

// console.log(longestPalindrome("abcd"));

// // console.log("abcd".substr(0, 2));

var lengthOfLongestSubstring = function (s) {
  let storage = "";
  let object = {};
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    console.log("here i ", i);

    if (object.hasOwnProperty(s[i])) {
      i = object[s[i]];
      object = {};
      storage = "";
      console.log("here", storage);
    } else {
      storage = storage + s[i];
      object[s[i]] = i;
      arr.push(storage);
    }
  }

  console.log(arr);

  let size = 0;
  let str = "";
  for (let z = 0; z < arr.length; z++) {
    if (arr[z].length > size) {
      str = arr[z];
      size = arr[z].length;
    }
  }
  return str.length;
};

// console.log(lengthOfLongestSubstring("axdftejjbgd"));
console.log(lengthOfLongestSubstring("abcabcbb"));
