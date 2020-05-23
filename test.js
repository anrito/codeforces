/**
 * @param {string} s
 * @return {string}
 */

function isPalendrome(str) {
  let strReverce = "";
  for (let index = str.length - 1; index >= 0; index--) {
    strReverce += str[index];
  }
  if (strReverce === str) return true;
  return false;
}

var longestPalindrome = function(s) {
  if (isPalendrome(s)) return s;
  let longeestPallendrome = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = s.length - 1; j > i; j--) {
      let pal = s.substr(i, j);
      console.log(pal);
      if (isPalendrome(pal)) {
        if (pal.length > longeestPallendrome.length) longeestPallendrome = pal;
      }
    }
  }
  return longeestPallendrome;
};

console.log(longestPalindrome("abcd"));

// console.log("abcd".substr(0, 2));
