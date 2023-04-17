var img;
var initials = 'ej';
var choice='1';
var screenbg=250;
var lastscreenshot=61;

function preload(){
  img = loadImage('https://eunsojung.github.io/images/smallMacaron.png');
}

function setup() {
  createCanvas(600, 600);
  background(screenbg);
}

function draw() {
  if (keyIsPressed){
    choice = key;
    clear_print();
  }
  if (mouseIsPressed){
    newkeyChoice(choice);
  }
}

function newkeyChoice(toolChoice){
  if(toolChoice == '1'){
    stroke(1);
    ellipse(mouseX, mouseY, pmouseX, pmouseY);
  }
  else if(toolChoice == '2'){
    stroke(20);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
  else if(toolChoice == '3'){
    fill(100, 200, 100);
    rect(mouseX, mouseY, 20, 20);
  }
  else if(toolChoice == 'g' || toolChoice == 'G') {
    image(img, mouseX-30, mouseY-30);
  }
  
} 

function clear_print() {
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

//function saveme(){
//  filename=initials+day() + hour() + minute() +second();
//  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
//    saveCanvas(filename, 'jpg');
//    key="";
//  }
//  lastscreenshot=second(); // set this to the current second so no more than one per second
  
//}
