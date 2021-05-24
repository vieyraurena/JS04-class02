const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

let xPositionSquare = 300;
let yPositionSquare = 300;

let velocity = getRandomArbitrary(-5, 3);
let yVelocity = getRandomArbitrary(-5, 3);

// Circle
let xPositionCircle = 250;
let yPositionCircle = 250;

let velocityCircle = getRandomArbitrary(-6, 6);
let yVelocityCircle = getRandomArbitrary(-6, 6);

let radiusBall = 50


function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function shapes() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  
  context.fillStyle = "#4cb748";
  context.fillRect(xPositionSquare, yPositionSquare, 120, 120);
  
  context.beginPath();
  context.fillStyle = "#f01e3d";
  context.arc(xPositionCircle, yPositionCircle, radiusBall, 0, 2 * Math.PI);
  context.fill();
  
  // square condicional
  if (xPositionSquare > canvas.width - 120 || xPositionSquare < 0) {
    velocity *= -1;
  }
  
  if (yPositionSquare > canvas.height - 120 || yPositionSquare < 0) {
    yVelocity *= -1;
  }
  
  // circle conditional
  if (xPositionCircle - radiusBall < 0 || xPositionCircle + radiusBall > canvas.width) {
    velocityCircle *= -1;
  }
  
  if (yPositionCircle + radiusBall > canvas.height || yPositionCircle - radiusBall < 0) {
    yVelocityCircle *= -1;
  }
  
  
  // square
  xPositionSquare += velocity;
  yPositionSquare += yVelocity;
  
  // circle
  xPositionCircle += velocityCircle;
  yPositionCircle += yVelocityCircle;
  
  window.requestAnimationFrame(shapes);
}


window.requestAnimationFrame(shapes);