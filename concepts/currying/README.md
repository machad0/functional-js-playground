## Currying

Transforms a function with multiple arguments to a chain of function applications with one argument each

```javascript
const f = (x, y) => x * y

f(3, 5) // 15

```

becomes

```javascript
const fCurried = x => y => x * y

// you can encapsulate it into another constant

const fx = fCurried(3) // y => x * y

fx(5) // 15

// or just call like this

fCurried(3)(5) // 15

```

### Ramda Currying

```javascript
import curry from 'ramda'

const fun = (x, y, z) => x * y * z

const funRamdaCurried = curry(fun)

funRamdaCurried(3)(5)(2) // 30

funRamdaCurried(3, 5)(2) // 30

```
