"use strict";

function generateYearBehavior(year) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const behaviorObject = {};

  months.forEach((month, index) => {
    behaviorObject[month] = {};
    const daysInMonth = new Date(year, index + 1, 0).getDate();

    for (let i = 1; i <= daysInMonth; i++) {
      behaviorObject[month][i] = Math.random() < 0.5 ? "Nice" : "Naughty";
    }
  });
  return behaviorObject;
}

function helpSanta(yearBehavior) {
  let result = 0;
  for (const month in yearBehavior) {
    for (const day in yearBehavior[month]) {
      result += yearBehavior[month][day] === "Nice" ? 1 : -1;
    }
  }
  return result >= 0;
}

console.log(helpSanta(generateYearBehavior(1997)));
console.log(helpSanta(generateYearBehavior(2012)));
console.log(helpSanta(generateYearBehavior(2024)));
console.log(helpSanta(generateYearBehavior(2026)));
