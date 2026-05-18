"use strict";

const symbols = " ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function quickSum(str) {
  const reqExp = /^[A-Z][A-Z ]*[A-Z]$/;

  if (!str) return 0;
  if (!reqExp.test(str)) return 0;
  if (str.length == 1) return symbols.indexOf(str[0]);

  return str.split("").reduce((acc, element, index) => {
    return acc + (index + 1) * symbols.indexOf(element);
  }, 0);
}

console.log(quickSum("AGDR RFDHG"));
console.log(quickSum("Aа"));
console.log(quickSum("   "));
console.log(quickSum("//"));
console.log(quickSum("AB C"));
console.log(quickSum(" ABC"));