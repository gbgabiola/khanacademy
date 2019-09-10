/**
 * Challenge: Calculator
 * 
 * 
 * Step 1: Fix our calculations!
 * This program shows the results of adding, subtracting, multiplying, and dividing some numbers... but only the addition calculations are correct.
 * To make all the calculations correct, change what the other three functions do so that:
  - subtract returns the difference between the two argumets;
  - multiply returns the product of the two arguments;
  - divide returns the quotient between the two arguments;
 */

var add = function(num1, num2) {
  return num1 + num2;
};
var subtract = function(num1, num2) {
  return num1 - num2;
};
var multiply = function(num1, num2) {
  return num1 * num2;
};
var divide = function(num1, num2) {
  return num1 / num2;
};

fill(255, 0, 0);
text("15 + 3 is " + add(15, 3), 10, 20);
text("15 - 3 is " + subtract(15, 3), 10, 50);
text("15 * 3 is " + multiply(15, 3), 10, 80);
text("15 / 3 is " + divide(15, 3), 10, 110);

text("8 + 4 is " + add(8, 4), 10, 170);
text("8 - 4 is " + subtract(8, 4), 10, 200);
text("8 * 4 is " + multiply(8, 4), 10, 230);
text("8 / 4 is " + divide(8, 4), 10, 260);