## Currying

Transforms a function with multiple arguments to a chain of function applications with one argument each

```
const f = (x, y) => x * y

f(3, 5) // 15

```

becomes

```
const fCurried = x => y => x * y

const fx = fCurried(3) // y => x * y

fx(5) // 15

```
