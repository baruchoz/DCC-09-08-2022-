// Codewars 8kyu How good are you really?
/*
There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!
*/

// Solution One
function betterThanAverage(classPoints, yourPoints) {
  let total = 0;
  classPoints.forEach((classPoint) => {
    total += classPoint;
  });
  const average = total / classPoints.length;
  return yourPoints > average ? true : false;
}
console.log(betterThanAverage([2, 3], 2));

// Solution Two - Refactored
function betterThanAverageTwo(classPoints, yourPoints) {
  let total = 0;
  classPoints.forEach((classPoint) => {
    total += classPoint;
  });
  const average = total / classPoints.length;
  return yourPoints > average;
}
console.log(betterThanAverageTwo([2, 3], 2));

// Solution Three - Using reduce() method
function betterThanAverageThree(classPoints, yourPoints) {
  const classPointsSum = classPoints.reduce(
    (total, currentValue) => total + currentValue,
    0
  );
  const classAverage = classPointsSum / classPoints.length;
  return yourPoints > classAverage;
}
console.log(betterThanAverageThree([2, 3], 2));

// Solution Four - Using reduce() method refactored to one line
function betterThanAverageFour(classPoints, yourPoints) {
  return (
    yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length
  );
}
console.log(betterThanAverageFour([2, 3], 5));
