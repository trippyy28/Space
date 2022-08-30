const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 300);
let speed = 6;
class Space {
  constructor() {
    this.image = new Image();
    this.image.src = "Star.png";
    this.spriteWidth = 300;
    this.spriteHeight = 300;
    this.width = CANVAS_WIDTH;
    this.height = CANVAS_HEIGHT;
    this.speed = 1;
    this.x = 0;
    this.y = 0;
  }
  draw() {
    ctx.drawImage(this.image, 0, 0);
  }
}

class Ship {
  constructor() {
    this.image = new Image();
    this.image.src = "rocket.png";
    this.x = 0;
    this.y = 200;
    this.spriteWidth = 64;
    this.spriteHeight = 64;
    this.speed = 2;
  }
  draw() {
    ctx.drawImage(this.image, this.x * this.speed, this.y, 120, 120);
    if (this.x >= 252) {
      this.x -= 1;
    }
    if (this.x <= -4) {
      this.x += 1;
    }
    if (this.y >= 180) {
      this.y -= 1;
    }
    if (this.y <= -2) {
      this.y += 1;
    }

    console.log(this.y);
  }
}
const space = new Space();
const ship = new Ship();

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  space.draw();
  ship.draw();

  requestAnimationFrame(animate);
}

addEventListener("keydown", control);

function control(e) {
  if (e.keyCode === 39) {
    // console.log("right pressed");
    ship.x += speed;
    ship.image.src = "rocket.png";
  } else if (e.keyCode === 38) {
    // console.log("up pressed");
    ship.y -= speed;
    ship.image.src = "rocket-up.png";
  } else if (e.keyCode === 37) {
    ship.x -= speed;
    ship.image.src = "rocket2.png";
    // console.log("left pressed");
  } else if (e.keyCode === 40) {
    ship.y += speed;
    ship.image.src = "rocket-down.png";
    // console.log("down pressed");
  }
}

animate();
