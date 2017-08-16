const formatCurrency = (symbol, decimal) => {
  return function (val) {
    const fullVal = Math.trunc(val / 100)
    let fractionPart = val % 100
    if (fractionPart < 10) fractionPart = '0' + fractionPart
    return `${symbol}${fullVal},${decimal},${fractionPart}`
  }
}

const formatter = formatCurrency('$', '.')
const currencies = [0, 1234, 2000, 10010]

let formattedCurrencies = []
currencies.forEach(val =>
  formattedCurrencies.push(formatter(val)))

console.log('formatting ->', formattedCurrencies)

let sum = 0
currencies.forEach(val => {
  sum += val
})

console.log('sum ->', sum)

let expensiveItems = []
currencies.forEach(val => {
  if (val >= 1000) expensiveItems.push(val)
})

console.log('expensivveItems ->', expensiveItems)
