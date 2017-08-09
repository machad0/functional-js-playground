// Imperative
// pushing to an array causes code side effects

const list = []

function addToList (itemOne, itemTwo) {
  list.push({itemOne, itemTwo})
}
addToList(1, 3)

// Declarative
// no side effects, immutable values
const listTwo = []

const decAddToList = (acc, itemOne, itemTwo) =>
  acc.concat([{itemOne, itemTwo}])

const addingIt = decAddToList(listTwo, 1, 3)
console.log(addingIt)
