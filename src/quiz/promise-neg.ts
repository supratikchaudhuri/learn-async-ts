const array2D_3 = [
  [
    1, 2, 3, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 4, 5, 3, 4, 5, 6, 3, 3, 3, 2, 1,
    2, 4, 5, 6, 7, 8, 9, 3, 1, 6, 5, 4, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3,
    2, 1, 1, 2, 1, 2, 1, 2, 5, 4, 3, 2, 1, 0, 1, 2, 3, 2, 3, 4, 5, 6, 7, 8, 9,
    8, 7, 6, 4, 5, 3, 4, 5, 6, 3, 3, 3, 2, 1, 2, 4, 5, 6, 7, 8, 9, 3, 1, 6, 5,
    4, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 2, 1, 2, 1, 2, 5, 4, 3,
    2, 1, 0, 1, 2, 3, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 4, 5, 3, 4, 5, 6, 3, 3,
    3, 2, 1, 2, 4, 5, 6, 7, 8, 9, 3, 1, 6, 5, 4, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6,
    5, 4, 3, 2, 1, 1, 2, 1, 2, 1, 2, 5, 4, 3, 2, 1, 0, -1,
  ],
  [4, 5, 6],
  [-9],
];

function findNegativeInRow(arr: number[][]): void {
  const promises = arr.map((row, rowIdx) => {
    return new Promise<string>((resolve, reject) => {
      if (row.length === 0) {
        reject("Empty row: " + rowIdx);
      }

      for (let i = 0; i < row.length; i++) {
        if (row[i] < 0) {
          resolve("Found negative number in row: " + rowIdx);
        }
      }

      reject("No negative number found in row: " + rowIdx);
    });
  });

  Promise.any(promises)
    .then((verdict) => {
      console.log(verdict);
    })
    .catch((error) => {
      console.log(error);
    });
}

findNegativeInRow(array2D_3);
