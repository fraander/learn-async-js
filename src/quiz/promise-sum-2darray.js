// sum of a row is function
// return a promise
// Promise.all

function sumRow(row) {
  return new Promise((resolve, reject) => {
    try {
      resolve(row.sum());
    } catch {
      reject("BAD INPUT");
    }
  });
}

function sum2DArray(arr) {
  return new Promise((resolve, reject) => {
    console.log("Sum called ... ");
    if (Array.isArray(arr)) {
      setTimeout(async () => {
        let sum = 0;
        let promises = [];
        for (let i = 0; i < arr.length; i++) {
          promises.push(
            sumRow(arr[i])
              .then((r) => (sum += r))
              .catch((e) => reject(e))
          );
        }
        console.log("resolving ... ");
        await Promise.all(promises);
        resolve(sum);
      }, 0);
    } else {
      console.log("rejecting ... ");
      reject("BAD INPUT: Expected array as input");
    }
    console.log("returning from sum");
  }).then((r) => console.log(r));
}

const array2D = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(sum2DArray(array2D));
