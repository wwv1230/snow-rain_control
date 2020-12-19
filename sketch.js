let particle = [] ;
let slider;
let force = 0;

function setup() {
  createCanvas(400,400);
    for (let i = 0; i < 20; i++) {
    particle.push(new Particle());
  }
  slider = createSlider(0, 30, 100);
  slider.position(10, 10);
  slider.style('width', '150px');
}

function draw() {
  background(140,190,255);
  for (let i = 0; i < particle.length; i++){
  particle[i].snow_rain();
  }

}

class Particle {
  snow_rain() {
    force = force + random(0.1);
    let val = slider.value();
    stroke(0,0,255);
    ellipse(random(width), force, val, 30);

    if (force > height) {
      force = 0;
    }
  }
}
