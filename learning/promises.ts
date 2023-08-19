const nums = [1, 2, 3, 4, 5, 6, 7];
// const getSquares = async (x) => Math.pow(x, 2);
const getSquares = (x: number) => new Promise((resolve) => {
  setTimeout(() => {
    return resolve(Math.pow(x, 2));
  }, 500)
});

const getTriples = (x: number) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(Math.pow(x, 3));
  }, 500)
});

const factorial = (num: number) => {
  if (num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}
const getFactorial = (x: number) => new Promise((resolve) => {
    setTimeout(() => {
      resolve(factorial(x));
    }, 500)
  })

// Promise.all
const printSquares = async (numArray: number[]) => {
  const promiseArray = numArray.map((num) => getSquares(num));
  console.log({ promiseArray });
  const resolvedPromises = await Promise.all(promiseArray)
  console.log({ resolvedPromises });
};

// printSquares(nums);

// Resolve Promises sequentially
const promiseArray = (numArray: number[]) => numArray.map((num) => getSquares(num));
// console.log({ promiseArray });
const resolvePromiseSequentially = async (tasks: Promise<number>[]) => {
  const results: Promise<number>[] = [];
  for(const task of tasks) {
    results.push(await task as any);
  }
  console.log({ results });
  return results;
}

// console.log({ promiseArray: promiseArray(nums) });
console.log({ resolvedPromisesSequentially: resolvePromiseSequentially(promiseArray(nums) as Promise<number>[]) });
resolvePromiseSequentially(promiseArray(nums) as Promise<number>[])
 .then((promiseResults) => console.log({ promiseResults }));

// Promises in parallel (Concurrently -- More rightly (Javascript way))
const promisesInParallel = async (num: number) => {
  const [square, triple, factorial] = await Promise.all([getSquares(num), getTriples(num), getFactorial(num)]);
  return { square, triple, factorial };
}

promisesInParallel(5).then((results) => console.log({ results }));

// Promises in sequence
const promisesInSequence = async (num: number) => {
  const result = await getFactorial(num) as number;
  const res = await getSquares(result) as number;
  return await getTriples(res);
}

promisesInSequence(6).then((results) => console.log({ results }));
