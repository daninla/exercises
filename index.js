'use strict';

const symbols = " ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

function quickSum(str) {
  const reqExp1 = /\s/;
  const reqExp2 = /[^A-Z0-9\s]/;

  if (str.length === 0) return 0;
  if (reqExp1.test(str[0]) || reqExp1.test(str[str.length - 1])) return 0;

  for (let symbol of str) {
    if (reqExp2.test(symbol)) return 0;
  }
  if (str.trim().length === 1) return symbols.indexOf(str[0]);

  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += (i + 1) * symbols.indexOf(str[i]);
  }
  return sum;
}

console.log(quickSum('A'));
console.log(quickSum('Aа'));
console.log(quickSum('helloworld'));
console.log(quickSum('   '));
console.log(quickSum('//'));
console.log(quickSum('A1B2C3'));
