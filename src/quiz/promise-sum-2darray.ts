const array2D_1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function sum2DArrayConcurrent(arr: number[][]): Promise<number> {
  return new Promise((resolve, reject) => {
    if (arr.length === 0) {
      reject("Cannot sum an empty array");
    }

    const sumPromises = arr.map((row) => {
      return new Promise<number>((resolve) => {
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
        resolve(totalSum);
      })
      .catch((error) => {
        reject("Failed to compute the sum: " + error);
      });
  });
}

sum2DArrayConcurrent(array2D_1)
  .then((sum) => {
    console.log(`Sum of 2D array: ${sum}`);
  })
  .catch((error) => {
    console.error(`Failed to sum 2D array: ${error}`);
  });
