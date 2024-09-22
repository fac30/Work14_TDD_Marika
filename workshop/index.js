// map()
function map(arr, fn) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i));
  }
  return result;
}

// filter()
function filter(arr, fn) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      result.push(arr[i]);
    }
  }
  return result;
}

// every()
function every(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    if (!fn(arr[i], i)) {
      return false;
    }
  }
  return true;
}

// some()
function some(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      return true;
    }
  }
  return false;
}

// find()
function find(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      return arr[i];
    }
  }
  return undefined;
}


function reduce(array, fn, initialAccumulator) {
  let accumulator = initialAccumulator;
  let i = 0;
  if (initialAccumulator == undefined) {
    accumulator = array[0]; // default to first value
    i = 1; // skip first loop
  }
  for (; i < array.length; i++) {
    const el = array[i];
    accumulator = fn(accumulator, el, i); // fn should return new acc each time
  }
  return accumulator;
}


