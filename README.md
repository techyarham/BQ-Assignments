# JavaScript Cheat Sheet

A quick-reference guide to common String, Array, and Object methods in JavaScript. Includes syntax, description, whether the method mutates the original value, and what it returns.

---

## 📜 String Methods

| Method        | Syntax                            | Description                                           | Mutates? | Returns                |
|---------------|-----------------------------------|-------------------------------------------------------|----------|------------------------|
| `charAt`      | `str.charAt(pos)`                 | Get character at index `pos`                          | No       | One-character string   |
| `charCodeAt`  | `str.charCodeAt(pos)`             | Get Unicode code point at `pos`                       | No       | Number                 |
| `concat`      | `str1.concat(str2, …)`            | Join two or more strings                              | No       | New string            |
| `includes`    | `str.includes(substr, pos?)`      | Check if `substr` appears (from `pos`)                | No       | `true` / `false`       |
| `indexOf`     | `str.indexOf(substr, pos?)`       | First index of `substr` (–1 if not found)             | No       | Number                 |
| `lastIndexOf` | `str.lastIndexOf(substr, pos?)`   | Last index of `substr`                                | No       | Number                 |
| `slice`       | `str.slice(start, end?)`          | Extracts a section from `start` up to `end`           | No       | New string            |
| `substring`   | `str.substring(start, end?)`      | Like `slice`, swaps args if `start > end`             | No       | New string            |
| `split`       | `str.split(separator, limit?)`    | Split into an array of substrings                     | No       | Array                  |
| `replace`     | `str.replace(substr\|regex, new)` | Replace first (or all with `/g`) match(es)            | No       | New string            |
| `toLowerCase` | `str.toLowerCase()`               | Convert all letters to lowercase                      | No       | New string            |
| `toUpperCase` | `str.toUpperCase()`               | Convert all letters to uppercase                      | No       | New string            |
| `trim`        | `str.trim()`                      | Remove whitespace from both ends                      | No       | New string            |
| `startsWith`  | `str.startsWith(substr, pos?)`    | Check if string starts with `substr`                  | No       | `true` / `false`       |
| `endsWith`    | `str.endsWith(substr, pos?)`      | Check if string ends with `substr`                    | No       | `true` / `false`       |
| `repeat`      | `str.repeat(count)`               | Repeat string `count` times                           | No       | New string            |
| `padStart`    | `str.padStart(len, padStr?)`      | Pad start until length `len`                          | No       | New string            |
| `padEnd`      | `str.padEnd(len, padStr?)`        | Pad end until length `len`                            | No       | New string            |

---

## 🗂 Array Methods

| Method        | Syntax                                 | Description                                           | Mutates? | Returns                  |
|---------------|----------------------------------------|-------------------------------------------------------|----------|--------------------------|
| `push`        | `arr.push(item1, …)`                   | Add item(s) to end                                    | Yes      | New length (number)      |
| `pop`         | `arr.pop()`                            | Remove last item                                      | Yes      | Removed item             |
| `shift`       | `arr.shift()`                          | Remove first item                                     | Yes      | Removed item             |
| `unshift`     | `arr.unshift(item1, …)`                | Add item(s) to front                                  | Yes      | New length (number)      |
| `splice`      | `arr.splice(start, deleteCount?, …)`   | Remove and/or insert items                            | Yes      | Array of removed items   |
| `slice`       | `arr.slice(start, end?)`               | Copy a sub-array                                      | No       | New array                |
| `concat`      | `arr.concat(arr2, value3, …)`          | Join arrays or add values                             | No       | New array                |
| `indexOf`     | `arr.indexOf(item, pos?)`              | First index of `item` (–1 if not found)               | No       | Number                   |
| `includes`    | `arr.includes(item, pos?)`             | Check if `item` is present                            | No       | `true` / `false`         |
| `forEach`     | `arr.forEach(fn(elem, idx, arr))`      | Run `fn` on each element (no return)                  | No       | `undefined`              |
| `map`         | `arr.map(fn)`                          | Transform each element into a new array               | No       | New array                |
| `filter`      | `arr.filter(fn)`                       | Keep elements where `fn` returns `true`               | No       | New array                |
| `reduce`      | `arr.reduce(fn, initial?)`             | “Fold” array into a single value                      | No       | Whatever `fn` returns    |
| `find`        | `arr.find(fn)`                         | First element matching `fn`                           | No       | Element or `undefined`   |
| `findIndex`   | `arr.findIndex(fn)`                    | Index of first match (–1 if none)                     | No       | Number                   |
| `sort`        | `arr.sort(compareFn?)`                 | Sort elements in place                                | Yes      | The sorted array         |
| `reverse`     | `arr.reverse()`                        | Reverse elements in place                             | Yes      | The reversed array       |
| `join`        | `arr.join(separator?)`                 | Join elements into a string                           | No       | String                   |

---

## 🔑 Object Methods

| Method                                   | Syntax                                            | Description                                        | Mutates?          | Returns                      |
|------------------------------------------|---------------------------------------------------|----------------------------------------------------|-------------------|------------------------------|
| `Object.keys(obj)`                       | `Object.keys(obj)`                                | List of own property names                         | No                | Array of strings             |
| `Object.values(obj)`                     | `Object.values(obj)`                              | List of own property values                        | No                | Array of values              |
| `Object.entries(obj)`                    | `Object.entries(obj)`                             | List of `[key, value]` pairs                       | No                | Array of pairs               |
| `Object.assign(target, …sources)`        | `Object.assign(target, source1, …)`               | Copy properties into `target`                      | Yes (target)      | Modified `target` object     |
| `Object.freeze(obj)`                     | `Object.freeze(obj)`                              | Make object and its props immutable                | Yes               | Frozen object                |
| `Object.hasOwn(obj, prop)`               | `Object.hasOwn(obj, 'prop')`                      | Check if own (not inherited) property exists       | No                | `true` / `false`             |
| `Object.fromEntries(arr)`                | `Object.fromEntries([[k,v], …])`                  | Create object from key/value pairs                 | No                | New object                   |
| `obj.hasOwnProperty(prop)`               | `myObj.hasOwnProperty('prop')`                    | Legacy own-property check                          | No                | `true` / `false`             |

---

## 🚀 How to Use

1. **Find** the method you need in the tables above.  
2. **Check** whether it mutates the original or creates a new value.  
3. **Copy** the syntax and paste into your code.

```js
// Example:
let s = "Hello World";
console.log(s.toLowerCase());  // "hello world" (s is unchanged)

let arr = [3, 1, 4];
arr.sort();                    // [1, 3, 4] (arr is mutated)
