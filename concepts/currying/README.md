## Currying

Transforms a function with multiple arguments to a chain of function applications with one argument each

```
const f = (x, y) => x * y

f(3, 5) // 15

```

becomes

```
const fCurried = x => y => x * y

// you can encapsulate it into another constant

const fx = fCurried(3) // y => x * y

fx(5) // 15

// or just call like this

fCurried(3)(5) // 15

```

### Ramda Currying

```
import curry from 'ramda'

const fun = (x, y, z) => x * y * z

const funRamdaCurried = curry(fun)

funRamdaCurried(3)(5)(2) // 30

funRamdaCurried(3, 5)(2) // 30

```
