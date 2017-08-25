// Applies a callback function on each element of an array
// accumulationg a final return value
const arr = [1, 2, 3, 4]
const square = x => x ** 2
const sum = (x, y) => x + y

const sqrSum = arr.map(square).reduce(sum, 0)
// map -> [1, 4, 9, 16] reduce -> 30

// Vanilla reduce implementation

// simmilar to map, applying pattern maching to array
// and return the accumulator whenever the array is empy
// if the array is not empty, the function calls reduce on
// the tail of the array, and the same reducer function, in
// this case, the call back `fun`.
// The new accumulator value becomes the return values of
// 'fun' accumulator 'fun'. This pattern is called foldLeft,
// since application of the function 'fun', is done from left
// to right

const Reduce = ([head, ...tail], fun, accum) =>
  typeof head === 'undefined'
  ? accum
  : Reduce(tail, fun, fun(accum, head))
