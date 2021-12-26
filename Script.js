var canvas = document.getElementById("c1");
var ctx = canvas.getContext("2d");

const balls = 100;

var colors = [balls];
for (let i = 0; i < balls; i++) {
	colors[i] = '#'+
        (Math.floor(Math.random() * 255)).toString(16) +
        (Math.floor(Math.random() * 255)).toString(16) +
        (Math.floor(Math.random() * 255)).toString(16)
}

var x = [balls];
var y = [balls];

for (let i = 0; i < balls; i++) {
        x[i] = canvas.width / 2;
        y[i] = canvas.height - 30;
}

var sx = [balls];
var sy = [balls];

for (let i = 0; i < balls; i++) {
        sx[i] = -5 * (Math.random() + 0.5);
        sy[i] = (Math.random() - 0.5);
}

function draw() {
        for (let i = 0; i < balls; i++) {
              sy[i] += 0.07;
              if (y[i] + 5 > canvas.height) {
                  sy[i] = -6 * (Math.random() + 0.5);
              }
              if (x[i] + 5 > canvas.width) {
                  sx[i] = -5 * (Math.random() + 0.5);
              }
              if (x[i] - 5 < 0) {
                  sx[i] = 5 * (Math.random() + 0.5);
              }

              x[i] += sx[i];
               y[i] += sy[i];
        }

        ctx.beginPath();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.closePath();

        for (let i = 0; i < balls; i++) {
              ctx.beginPath();
              ctx.arc(x[i], y[i], 10, 0, Math.PI * 2);
              ctx.fillStyle = colors[i];
              ctx.fill();
              ctx.closePath();
        }
}

setInterval(draw, 10);