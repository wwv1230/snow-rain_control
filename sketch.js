let slider;
let force = 0;

function setup() {
  createCanvas(1080,720);
  slider = createSlider(0, 30, 100);
  slider.position(10, 10);
  slider.style('width', '150px');
}

function draw() {

  force = force + 2 ;
  background(140,190,255);
  let val = slider.value();
  stroke(0,0,255);
  ellipse(width/2, force, val, 30);

}
