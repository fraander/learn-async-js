function sum2DArray(arr) {
  return new Promise((resolve, reject) => {
    console.log("Sum called ... ");
    if (Array.isArray(arr)) {
      setTimeout(() => {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
          for (let j = 0; j < arr[i].length; j++) {
            sum += arr[i][j];
          }
        }
        console.log("resolving ... ");
        resolve(sum);
      }, 0);
    } else {
      console.log("rejecting ... ");
      reject("BAD INPUT: Expected array as input");
    }
    console.log("returning from sum");
  });
}

// Example usage:
const array2D = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const sumPromise1 = sum2DArray(array2D)
  .then((r) => console.log(r))
  .catch((e) => console.log(e));
console.log(sumPromise1);

const sumPromise2 = sum2DArray("array2d")
  .then((r) => console.log(r))
  .catch((e) => console.log(e));
console.log(sumPromise2);
