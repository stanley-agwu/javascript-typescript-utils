// Debounce
function debounce(callback: Function, delay = 1000) {
  let timeout: number | undefined;

  return (...args: IArguments[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback(...args);
    }, delay);
  }
}

// Throttle
function throttle(callback: Function, delay = 1000) {
  let wait = false;

  return (...args: IArguments[]) => {
    if (wait) {
      return;
    }

    callback(...args);
    wait = true;
    setTimeout(() => {
      wait = false;
    }, delay);
  }
}

// Refactored Throttle to save arguements from last call
function throttleWithSavedArgs(callback: Function, delay = 1000) {
  let wait = false;
  let savedArgs: IArguments[] | null;

  function executeWithSavedArgs () {
    if (savedArgs == null) {
      wait = false;
    } else {
      callback(...savedArgs);
      savedArgs = null;
      setTimeout(executeWithSavedArgs, delay);
    }
  }

  return (...args: IArguments[]) => {
    if (wait) {
      savedArgs = args;
      return;
    }

    callback(...args);
    wait = true;
    setTimeout(executeWithSavedArgs, delay);
  }
}