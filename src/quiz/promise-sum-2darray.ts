const array2D_1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function sum2DArrayConcurrent(arr: number[][]): void {
  const sumPromises = arr.map((row) => {
    return new Promise<number>((resolve, reject) => {
      if (row.length === 0) {
        reject("Cannot sum an empty row");
      }

      let rowSum = 0;

      for (let i = 0; i < row.length; i++) {
        rowSum += row[i];
      }

      resolve(rowSum);
    });
  });

  Promise.all(sumPromises)
    .then((rowSums) => {
      const totalSum = rowSums.reduce((acc, val) => acc + val, 0);
      console.log(`Sum of 2D array: ${totalSum}`);
    })
    .catch((error) => {
      console.log("Failed to compute the sum: " + error);
    });
}

sum2DArrayConcurrent(array2D_1);
