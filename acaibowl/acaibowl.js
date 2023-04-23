var bg, bana, strw, blub, kiwi, tang, gran, coco;
var initials = 'ej';
var choice='1';
var screenbg=250;
var lastscreenshot=61;

function preload(){
  //background as acai bowl
  bg = loadImage('https://eunsojung.github.io/images/acaibowl.png');
  //images
  bana = loadImage('https://eunsojung.github.io/images/banana.png');
  strw = loadImage('https://eunsojung.github.io/images/strawberry.png');
  blub = loadImage('https://eunsojung.github.io/images/blueberry.png');
  kiwi = loadImage('https://eunsojung.github.io/images/kiwi.png');
  tang = loadImage('https://eunsojung.github.io/images/tangerine.png');
  gran = loadImage('https://eunsojung.github.io/images/granola.png');
  coco = loadImage('https://eunsojung.github.io/images/coconut.png');
}



function setup() {
  //background
  createCanvas(800, 800);
  background(bg);
  image(bg, 0, 0);
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

function newkeyChoice(toolChoice) {
  
  //b: banana
  if(toolChoice == 'n' || toolChoice == 'N') {
    image(bana, mouseX-60, mouseY-60);
  }
  //s: strawberry
  else if(toolChoice == 's' || toolChoice == 'S') {
    image(strw, mouseX-30, mouseY-30);
  }
  //bb: blueberry'
  else if(toolChoice == 'b' || toolChoice == 'B') {
    image(blub, mouseX-30, mouseY-30);
  }
  //k: kiwi
  else if(toolChoice == 'k' || toolChoice == 'K') {
    image(kiwi, mouseX-40, mouseY-40);
  }
  //t: tangerine
  else if(toolChoice == 't' || toolChoice == 'T') {
    image(tang, mouseX-60, mouseY-60);
  }
  //g: granola
  else if(toolChoice == 'g' || toolChoice == 'G') {
    image(gran, mouseX-30, mouseY-30);
  }
  //cc: coconut flake
  else if(toolChoice == 'c' || toolChoice == 'C') {
    image(coco, mouseX-70, mouseY-70);
  }
  //1. honey RGB(235, 169, 55) make it tranparent
  else if(toolChoice == '1') {
    stroke(235, 169, 55, 70);
    strokeWeight(8);
    line(mouseX, mouseY, pmouseX, pmouseY); 
  }
  //2. peanut butter RGB(220, 164, 101)
  else if(toolChoice == '2') {
    stroke(220, 164, 101);
    strokeWeight(12);
    line(mouseX, mouseY, pmouseX, pmouseY); 
  }
  //3. condensed milk RGB(245, 227, 210)/(255, 248, 231)
  else if(toolChoice == '3') {
    stroke(255, 248, 231, 85);
    strokeWeight(5);
    line(mouseX, mouseY, pmouseX, pmouseY); 
  }
  
}


function clear_print() {
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
    image(bg, 0, 0);
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
    key="";
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
