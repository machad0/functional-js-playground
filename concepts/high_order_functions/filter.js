// Filter iterates on all elements of an array, and returns
// a new array with elements for which function passed to filter
// yields a truthy value

// Using built-in filter

const arr = [1, 2, 3, 4, 5, 6]

const findOdds = arr.filter(x => x % 2 === 1)

findOdds()

// Vanilla filter implementation
// Same head/tail example from map and reduce
// but with a predicate function to test the elements
// of the array. So it's first check if the array is empty
// otherwise,  If the predicate returns true to the head of
// the array, it will be included as the first element of the
// return value and continue to filtering the tail. If the predicate
// retuns false, It simply filter the tail of the array.
// Note that implementation it's kinda bad, since you have a value of
// a ternary operator linking another one.

const Filter = ([head, ...tail], predicate) =>
  typeof head === 'undefined'
  ? []
  : predicate(head)
  ? [head, ...Filter(tail, predicate)]
  : Filter(tail, predicate)

const findOddsAgain = Filter(arr, x => x % 2 === 0)
findOddsAgain()
