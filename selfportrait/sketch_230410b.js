function setup() {
  //always set canvas as (600, 600)
  createCanvas(600, 600);
  background(color(236, 252, 220));
  
}
function draw() {
  //hair
  noStroke();
  fill(32, 19, 19);
  //arc(300, 300, 300, 380, QUARTER_PI + HALF_PI, QUARTER_PI, OPEN);
  //arc(300, 355, 480, 660, QUARTER_PI + HALF_PI, QUARTER_PI, OPEN);
  //ellipse(300, 600, 500, 1100);
  rect(90, 45, 420, 720, 900);
  
  //face
  noStroke();
  fill(255, 220, 194);
  ellipse(300, 300, 320, 400);
  
  //Ears
  arc(130, 300, 60, 90, 0, PI + PI, OPEN);
  arc(470, 300, 60, 90, 0, PI + PI, OPEN);
  
  
  
  
  //shirt
  fill(189, 240, 255);
  rect(140, 520, 320, 160, 45);
  
  //arms
  //left
  fill(189, 240, 255);
  arc(185, 595, 150, 150, HALF_PI, PI + HALF_PI, OPEN);
  //right
  fill(189, 240, 255);
  circle(415, 595, 150);
  //line
  fill(255, 255, 255);
  line(140, 550, 140, 600);
  
  //neck
  //ellipse(300, 500, 100, 500);
  fill(255, 220, 194);
  rect(255, 475, 90, 99, 20);
  
  //neck collar left
  fill(189, 240, 255);
  triangle(255, 520, 300, 574, 255, 574);
  //neck collar right
  fill(189, 240, 255);
  triangle(345, 520, 300, 574, 345, 574);
  
  
  //line
  strokeWeight(1);
  stroke(0, 0, 0);
  line(185, 585, 180, 600);
  stroke(0, 0, 0);
  line(415, 585, 420, 600);
  
  //front hair
  noFill();
  //stroke(255, 102, 0);
  //line(85, 20, 10, 10);
  //line(90, 90, 15, 80);
  strokeWeight(1.5);
  stroke(0, 0, 0);
  bezier(300, 97, 150, 250, 50, 80, 150, 800);
  bezier(300, 90, 100, 250, 50, 80, 150, 800);
  bezier(300, 85, 150, 250, 50, 80, 150, 800);
  bezier(300, 70, 150, 250, 50, 80, 150, 800);
  bezier(270, 97, 150, 250, 50, 80, 150, 800);
  bezier(250, 97, 150, 250, 50, 80, 150, 800);
  bezier(251, 97, 150, 250, 50, 80, 150, 800);
  bezier(253, 97, 150, 250, 50, 80, 150, 800);
  bezier(244, 97, 150, 250, 50, 80, 150, 800);
  bezier(240, 97, 150, 250, 50, 80, 150, 800);
  bezier(260, 97, 150, 250, 50, 80, 150, 800);
  
  bezier(380, 110, 400, 300, 700, 400, 150, 1000);
  bezier(380, 110, 400, 300, 700, 400, 150, 990);
  bezier(380, 110, 370, 280, 700, 450, 150, 1000);
  bezier(380, 110, 400, 300, 700, 430, 150, 1000);
  
  //front hair
  
  //eyes
  strokeWeight(1.5);
  fill(255, 255, 255);
  ellipse(225, 275, 60, 25);
  ellipse(375, 275, 60, 25);
  fill(0, 0, 0);
  //eyeball
  strokeWeight(1)
  fill(32, 19, 19);
  ellipse(225, 275, 28, 25);
  ellipse(375, 275, 28, 25);
  //inside
  noStroke()
  fill(255)
  ellipse(217, 272, 8, 8);
  ellipse(366, 272, 8, 8);
  //double
  stroke(21, 19, 19);
  strokeWeight(1);
  noFill();
  arc(225, 267, 60, 15, PI, TWO_PI, OPEN);
  arc(375, 267, 60, 15, PI, TWO_PI, OPEN);
  
  //Eyebrows
  stroke(21, 19, 19);
  noFill();
  strokeWeight(3);
  arc(225, 235, 70, 17, PI, TWO_PI, OPEN);
  arc(375, 235, 65, 15, PI, TWO_PI, OPEN);
  
  //Nose
  strokeWeight(1);
  triangle(300, 290, 285, 350, 315, 350); 
  
  //Mouth
  strokeWeight(2);
  fill(255, 102, 102);
  arc(300, 405, 70, 45, 0, PI);
  
  
  
  
}
