// Building a filter method using built-in reduce

// It takes an array to be filtered, and the filtering function
// which retuns a bool. The return value is a reduce operation
// using the built-in reducer method. The initial value of the
// accumulator is an empty array.
// The reducer takes the current value of the accumulator,
// cusumes the upcoming element of the array and returns the
// accumulator value. If the filtering function retuns a truthy
// value of the element, replace it at the end of the accumulator
// array. Otherwise, just return the accumulator without placing
// the element value in that.
// Just a decorative way to show how filter works using a reducer

const Filter = (arr, filtering) => {
  const reducer = (accum, element) =>
    filtering(element)
    ? [...accum, element]
    : accum
  return arr.reduce(reducer, [])
}
const array = [10, 20, 30, 100]

Filter([array, i => i < 100]) // 10, 20, 30
