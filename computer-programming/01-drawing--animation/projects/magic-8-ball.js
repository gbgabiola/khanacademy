/**
 * Project: Magic 8-Ball
 * 
 * 
 * Ever played with a magic 8-ball? It's a toy that displays a random message every time you shake it, such as "It is certain" or "My sources say no."
 * Create your own magic 8-ball using if/else statements, so that you can use your program to answer your deepest questions about life.
 * 
  1. Change the if() to check if the answer variable equals a certain number and change the text of the starter message.
  Tip: Click restart until you see the message show up.

  2. Add else if() statements to check for all the other possible values of the answer variable, and show a different message for each value.
  Tip: For easy testing of specific values, you can add a line like var answer = 1 below the line that generates random numbers, then click restart to test it.
  Make sure you remove that debugging line before you send the project for evaluation.

  3. Bonus: Change the color for different messages or illustrate each message.
 */

fill(0, 0, 0);
ellipse(200, 200, 375, 375);

textSize(30);
var answer = floor(random(1, 5));
// var answer = 6;

var triangleColor = function(color) {
  if (color === 1) {
    fill(60, 0, 255);
    triangle(200, 104, 280, 280, 120, 280);
    fill(255, 255, 255);
  } else if (color <= 2) {
    fill(255, 0, 0);
    triangle(200, 104, 280, 280, 120, 280);
    fill(255, 255, 255);
  } else if (color <= 3) {
    fill(161, 159, 166);
    triangle(200, 104, 280, 280, 120, 280);
    fill(255, 255, 255);
  } else if (color >= 4 && color <= 5) {
      fill(213, 0, 255);
      triangle(200, 104, 280, 280, 120, 280);
      fill(255, 255, 255);
  } else {
    fill(255, 255, 255);
    triangle(200, 104, 280, 280, 120, 280);
    fill(0, 0, 0);
  }
};


if (answer === 1) {
  triangleColor(1);
  text("YES", 170, 240);
} else if (answer === 2) {
  triangleColor(2);
  text("NO", 180, 240);
} else if (answer === 3) {
  triangleColor(3);
  text("Maybe", 157, 230);
  text("Later", 165, 265);
} else if (answer >= 4 && answer <= 5) {
  triangleColor(4);
  text("Very", 170, 230);
  text("Doubtful", 145, 265);
} else {
  triangleColor(6);
  text("Try", 175, 230);
  text("Again!", 155, 265);
}