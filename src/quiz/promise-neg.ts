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

function findNegativeInRow(arr: number[][]): Promise<string> {
  return new Promise((resolve, reject) => {
    if (arr.length === 0) {
      reject("Cannot sum an empty array");
    }

    const promises = arr.map((row, rowIdx) => {
      return new Promise<string>((resolve) => {
        for (let i = 0; i < row.length; i++) {
          if (row[i] < 0) {
            resolve("Found negative number in row: " + rowIdx);
          }
        }

        resolve("No negative number found in row: " + rowIdx);
      });
    });

    Promise.any(promises)
      .then((verdict) => {
        resolve(verdict);
      })
      .catch((error) => {
        reject("Failed to compute the sum: " + error);
      });
  });
}

findNegativeInRow(array2D_3)
  .then((verdict) => {
    console.log(verdict);
  })
  .catch((error) => {
    console.error(`Error: ${error}`);
  });
