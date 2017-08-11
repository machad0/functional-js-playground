// Map transforms each element of an array and retuns
// a new array of transformed values

const square = (x) => x ** 2
const arr = [2, 3, 4, 10]
arr.map(square) // [4, 9, 16, 100]

// vanilla map implementation

const Map = ([head, ...tail], fun) =>
  typeof head === 'undefined'
  ? []
  : [fun(head), ...Map(tail, fun)]

const sqrRoot = Map(arr, x => x ** 2) // [4, 9, 16, 100]
