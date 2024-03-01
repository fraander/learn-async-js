async function sumRow(row) {
  if (Array.isArray(row)) {
    return row.reduce((partialSum, a) => {
      if (isNaN(a)) {
        throw Error("Not a number");
      } else {
        return partialSum + a;
      }
    }, 0);
  } else {
    throw Error("Not an array");
  }
}

async function sum2DArray(arr) {
  if (Array.isArray(arr)) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += await sumRow(arr[i]);
    }
    return sum
  } else {
    throw Error("Not an array");
  }
}

async function main() {
  const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  try {
    const res = await sum2DArray(array2D);
    console.log(res);
  } catch (e) {
    console.log("Error");
  }
}

main();
