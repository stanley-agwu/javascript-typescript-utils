export enum STATUS {
  error = 'ERROR',
  pending = 'PENDING',
  complete = 'COMPLETE',
}

export const asyncInterval = async (
  asyncCallback: any,
  ms: number,
  args: string[],
  triesLeft = 4, 
): Promise<string> =>
  new Promise((resolve, reject) => {
    const interval = setInterval(async () => {
      const response = await asyncCallback(...args);
      if (response === STATUS.complete) {
        resolve(STATUS.complete);
        clearInterval(interval);
      } else if (response !== STATUS.complete && triesLeft <= 0) {
        reject(STATUS.error);
        clearInterval(interval);
      }
      triesLeft -= 1;
    }, ms)
  })
