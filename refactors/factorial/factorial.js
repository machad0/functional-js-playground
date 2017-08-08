// Imperative Solution

function factorial (n) {
  let result = 1
  while (n > 1) {
    result *= n
    n -= 1
  }
  return result
}

// Declarative solution

const decFactorial = (n) =>
  n <= 1
  ? 1
  : n * decFactorial(n - 1)
