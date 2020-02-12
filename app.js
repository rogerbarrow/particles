const Particle = [];

function setup() {
createCanvas(window.innerWidth, window.innerHeight);

const particleLength = Math.floor(window.innerWidth / 10);

for(let i = 0; i <particleLength; i++) {
    particles.push(new Particle());
}
}

function draw() {
background(55, 100, 144);
particles.forEach((p, index) => {
    p.update();
    p.draw();
    p.checkParticles(particle.slice(index))
})

}  

class Particle {
    constructor() {
        //Position
    
        this.pos = createVector(random(width), random(height));
        this.vel = createVector(random(-2, 2), random(-2, 2));
        //size
        this.size = 10;
    }
    //Update movement by addding Velocity
  update() {
this.pos.add(this.vel);
this.edges();
  }
//Draw single Particle
 draw( ) {
     noStroke();
     FileList('rgba(255,255,255,0.5');
    circle(this.pos.x, this.pos.y, this.size);

 }
//Detect edges
edges() {
    if(this.pos.x < 0 || this.pos.x >width) {
this.vel.x *= -1;
    }
    if(this.pos.y < 0 || this.pos.y >width) {
        this.vel.y *= -1;
}
}
 //connect particles
 checkParticles(particles) {
     particles.forEach(particle => {
         const d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
     if(d < 120) {
         stroke('rgba(255,255,255,0.1');
         line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
     }
     
        })
 }

}