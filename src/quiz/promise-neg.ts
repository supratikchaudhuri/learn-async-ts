const array2D_3 = [
  [1, 2, 3, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 - 1],
  [4, 5, 6],
  [7, 8, -9],
];

function sumNeg2DArrayConcurrent(arr: number[][]): Promise<number> {
  return new Promise((resolve, reject) => {
    if (arr.length === 0) {
      reject("Cannot sum an empty array");
    }

    const sumPromises = arr.map((row, rowIdx) => {
      return new Promise<number>((resolve) => {
        let foundNegative = false;
        let rowSum = 0;

        for (let i = 0; i < row.length; i++) {
          if (row[i] < 0) {
            foundNegative = true;
          }
          rowSum += row[i];
        }

        if (foundNegative) {
          console.log(`Found negative number in row: ${rowIdx + 1}`);
        }

        resolve(rowSum);
      });
    });

    Promise.all(sumPromises)
      .then((rowSums) => {
        const totalSum = rowSums.reduce((acc, val) => acc + val, 0);
        resolve(totalSum);
      })
      .catch((error) => {
        reject("Failed to compute the sum: " + error);
      });
  });
}

sumNeg2DArrayConcurrent(array2D_3)
  .then((sum) => {
    console.log(`Sum of 2D array: ${sum}`);
  })
  .catch((error) => {
    console.error(`Failed to sum 2D array: ${error}`);
  });
