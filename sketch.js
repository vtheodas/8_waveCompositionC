/* DM3008 Generative Art, Ashley Hi 2026
 * Week 4 - Waves & Distribution
 * Wave Composition C
*/

var magnify = 300; // how big we want the rose to be
var rotation = 180;
var radius = 50;
var elements = 256; // no. of elements to draw

var rad = 150;
var amp = 90;
var frequency = 500;

function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
  colorMode(HSB);
}
 
function draw() {
  background(0);
    
  radius = (cos(frameCount * 0.0013) + 42) * 10; // radius of the rose
rotation = (sin(frameCount * 0.001) + 1) * 10; // rotation of the rose
  
  var spacing = TWO_PI/elements; // how far apart each 'node' will be
  translate(width*0.5, height*0.5); // translate the whole sketch to the centre of the screen
  
  for (var i = 0; i < elements ;i++) { // loop through the number of elements
      stroke(i*2, 255, 255); // stroke colour based on the index of the loop
      fill(random(0, 255), random(0, 255), random(0, 255)); //  fill colour based on the index of the loop
      let hue = map(i, 0, elements, 80, 340); // map the hue to the index of the loop
fill(hue, 75, 90, 90);
      
      push();
      rotate(spacing * i * rotation);
     var a = rad + sin(radians(i * frequency)) * amp;

translate(sin(spacing * i * radius) * a, 0);
      //comment out the line above and swap for the line below for uneven spacing
      //translate(i * 5 ,0);
      rect(0, 0, random(60, 20), random(20, 10)); // draw a rectangle at the current position
      pop();
  }
}