// Exemple of how to use map, filter and reduce methods
// together

const sqr = x => x ** 2
const sum = (x, y) => x + y
const twoOrHigher = x => x >= 2
const arr = [1, 2, 3, 4, 5, 6]

const mapFilterReduce = arr.map(sqr).filter(twoOrHigher).reduce(sum, 0)
mapFilterReduce()
