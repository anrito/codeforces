var canConstruct = function(ransomNote, magazine) {
  ransomNote = ransomNote
    .split("")
    .sort()
    .join("");
  magazine = magazine
    .split("")
    .sort()
    .join("");
  if (magazine.indexOf(ransomNote) >= 0) return true;
  return false;
};

console.log(canConstruct("baa", "abb"));
