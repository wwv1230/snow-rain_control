let slider;
function setup() {
  createCanvas(400,400);
  slider = createSlider(0, 30, 100);
  slider.position(10, 10);
  slider.style('width', '150px');
}

function draw() {
  background(200);
  let val = slider.value();
  stroke(0,0,255);
  ellipse(width/2, height/2, val, 30);

}
