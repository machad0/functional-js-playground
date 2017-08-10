// based on the same example from chaining.js
// showing only the declarative way
// f1/f2 = first and second function

const seqChain = (f1, f2) =>
  (...args) =>
    f1(f2(...args))

const sequence = (f1, ...fTail) =>
  fTail.reduce(seqChain, f1)

const numVal = {
  num: 10
}

const up = increment => {
  return {
    num: increment.num + 1
  }
}

const down = decrement => {
  return {
    num: decrement.num - 1
  }
}

const upAndDown = sequence(up, up, down, down, up)
const newNumVal = upAndDown(numVal)

console.log(newNumVal) // 11
