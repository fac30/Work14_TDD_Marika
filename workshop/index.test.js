// testing map()
test("map() should return an array with the same number of elements", () => {
  const result = map([1], () => {});
  equal(result.length, 1);
});

test("map() should transform each element of the array using the fn argument", () => {
  const result = map([1], (x) => x + 1);
  equal(result[0], 2);
});

test("map([1,2,3], x => x + 1) should return [2,3,4]", () => {
  const result = map([1, 2, 3], (x) => x + 1);
  equal(result[0], 2);
  equal(result[1], 3);  
  equal(result[2], 4);  
});

// testing filter
test("filter([1,2,3], x => x > 1) should return [2,3]", () => {
  const result = filter([1, 2, 3], (x) => x > 1);
  equal(result.toString(), [2, 3].toString());
});

test("filter() should remove elements that don't pass the test from the array", () => {
  const result = filter([1, 100], (x) => x > 10);  
  equal(result[0], 100);
});

// testing every()
test("every([1, 2, 3], x => x > 0) should return true", () => {
  const result = every([1, 2, 3], (x) => x > 0);
  equal(result, true);
});

// testing some()
test("some([1, 2, 3], x => x > 2) should return true", () => {
  const result = some([1, 2, 3], (x) => x > 2);
  equal(result, true);
});

// testing find()
test("find([1, 2, 3], x => x > 1) should return 2", () => {
  const result = find([1, 2, 3], (x) => x > 1);
  equal(result, 2);
});

// testing reduce()
test("reduce() should call the fn for each element and use the return value as the new accumolator", () => {
  const result = reduce([1,2,3], (total, x) => total + x, 0);
  equal(result, 6);
});
