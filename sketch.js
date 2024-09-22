let newCanvas;
let backgroundColor;
let horizontalColor;
let verticalColor;

function setup() {
  newCanvas = createCanvas(510, 510);
  newCanvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);
  colorMode(RGB, 255);

  backgroundColor = color(252,241,226);
  horizontalColor = color(140,45,45);
  verticalColor = color(200,77,47);

  background(backgroundColor);

  noStroke();

  //Line 1
  verticalShape(30,30,90,verticalColor);
  horizontalShape(120,30,90,horizontalColor);
  verticalShape(210,30,90,verticalColor);
  horizontalShape(300,30,90,horizontalColor);
  verticalShape(390,30,90,verticalColor);

  //Line 2
  horizontalShape(30,120,90,horizontalColor);
  verticalShape(120,120,90,verticalColor);
  horizontalShape(210,120,90,horizontalColor);
  verticalShape(300,120,90,verticalColor);
  horizontalShape(390,120,90,horizontalColor);

  //Line 3
  verticalShape(30,210,90,verticalColor);
  horizontalShape(120,210,90,horizontalColor);
  verticalShape(210,210,90,verticalColor);
  horizontalShape(300,210,90,horizontalColor);
  verticalShape(390,210,90,verticalColor);

  //Line 4
  horizontalShape(30,300,90,horizontalColor);
  verticalShape(120,300,90,verticalColor);
  horizontalShape(210,300,90,horizontalColor);
  verticalShape(300,300,90,verticalColor);
  horizontalShape(390,300,90,horizontalColor);

  //Line 5
  verticalShape(30,390,90,verticalColor);
  horizontalShape(120,390,90,horizontalColor);
  verticalShape(210,390,90,verticalColor);
  horizontalShape(300,390,90,horizontalColor);
  verticalShape(390,390,90,verticalColor);

}

function draw() {
  
}

function verticalShape(x,y,s,color){
  fill(color);
  square(x,y,s);
  fill(backgroundColor);
  square(x+s/3,y,s/3);
  square(x+s/3,y+s*2/3,s/3);
}

function horizontalShape(x,y,s,color){
  fill(color);
  square(x,y,s);
  fill(backgroundColor);
  square(x,y+s/3,s/3);
  square(x+s*2/3,y+s/3,s/3);
}


//credit artist: Vera Molnar