"use strict";
let first = [1, 2, "a", "b"];
let second = [1, "a", "b", 0, 15];
let third = [1, 2, "aasf", "1", "123", 123];

function isNUmber(l) {
  let filtered = [];
  for (let i = 0; i <= l.length; i++) {
    if (Number.isInteger(l[i])) {
      filtered.push(l[i]);
    }
  }
  return filtered;
}

console.log(isNUmber(first));
console.log(isNUmber(second));
console.log(isNUmber(third));
