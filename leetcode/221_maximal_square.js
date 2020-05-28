/**
 * @param {character[][]} matrix
 * @return {number}
 */
function chackSequareSize(iPoint, jPoint, square, matrix) {
  for (let i = iPoint; i < iPoint + square; i++) {
    for (let j = jPoint; j < jPoint + square; j++) {
      if (matrix[i] === undefined) return false;
      if (matrix[i][j] === undefined) return false;
      if (matrix[i][j] != 1) return false;
    }
  }
  return true;
}

var maximalSquare = function (matrix) {
  let squareMeter = 0;
  if (matrix.length == 1 && matrix[0].includes(1)) return 1;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let square = 0;
      if (matrix[i][j] == 1) {
        square++;
        while (chackSequareSize(i, j, square, matrix)) {
          square++;
        }
      }
      if (square - 1 > squareMeter) squareMeter = square - 1;
    }
  }
  return squareMeter * squareMeter;
};

console.log(
  maximalSquare([
    ["0", "0", "0"],
    ["0", "0", "0"],
    ["0", "0", "1"],
    ["0", "1", "1"]
  ])
);
