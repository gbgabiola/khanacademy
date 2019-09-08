/**
 * Challenge: Bucktooth Bunny
 * 
 * 
 * Step 1: Change the eyes
 * Bucky's eyes are drawn as ellipses, and the last two numbers represent their width and height. 
 * Create a variable that stores the eye size and use that to change the size of both eyes.
 * Once you've done that, have fun dragging the slider to make HUGE eyes and teeeeny tiny eyes.
 * 
 * 
 * Step 2: Longer teeth!
 * Bucky's buckteeth are drawn as rectangles, and the last number is the height of the rectangle. Create a variable to store the length of the teeth so that you can change the length of both buckteeth at once.
 */

var eyeSize = 55;
var teethLength = 20;

ellipse(150, 70, 60, 120);  // left ear
ellipse(240, 70, 60, 120);  // right ear

ellipse(200, 170, 150, 150);    // face

fill(0, 0, 0);
ellipse(170, 150, eyeSize, eyeSize);  // left eye
ellipse(230, 150, eyeSize, eyeSize);  // right eye

line(150, 200, 250, 200);   // mouth

noFill();
rect(185, 200, 15, teethLength); // left tooth
rect(200, 200, 15, teethLength); // right tooth