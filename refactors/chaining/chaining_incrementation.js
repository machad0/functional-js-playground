// imperative

const upAndDown = {
  num: 10,
  up () {
    this.num += 1
    return this
  },
  down () {
    this.num -= 1
    return this
  }
}

const newCount =
 upAndDown
  .up()
  .up()
  .down()
  .down()
  .up()
  .num

console.log(newCount) // 11

// Declarative

const upsAndDowns = {
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

const newCounting =
  up(up(
    down(down(
      up(upsAndDowns)))))

console.log(newCounting) // 11
