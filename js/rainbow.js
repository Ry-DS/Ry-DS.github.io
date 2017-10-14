const elCount = 200,
    rectWidth = 10,
    rectLength = 100,
    step = 2 * Math.PI / elCount,
    radius = 200,
    canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");
let angle = 0,
    rotateAngle = elCount * Math.PI,
    windowWidth = window.innerWidth,
    windowHeight = window.innerHeight;

window.addEventListener("resize", resizeCanvas, false);

function resizeCanvas() {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;

    canvas.width = windowWidth;
    canvas.height = windowHeight;

    draw();
}
resizeCanvas();

function draw() {
    ctx.clearRect(0, 0, windowWidth, windowHeight);
    let increment = 1;
    for (let i = 0; i < elCount; i++) {
        let red = Math.sin(i + rotateAngle) * 127 + 180,
            green = Math.sin(i + 2 + rotateAngle) * 127 + 180,
            blue = Math.sin(i + 4 + rotateAngle) * 127 + 180,
            color =
                "rgb(" +
                Math.floor(red) +
                ", " +
                Math.floor(green) +
                ", " +
                Math.floor(blue) +
                ")";

        const x = Math.round(windowWidth / 2 - radius * Math.sin(angle)),
            y = Math.round(windowHeight / 2 + radius * Math.cos(angle)) - 50;
        angle += step;

        ctx.save();

        ctx.beginPath();
        ctx.translate(x + 5, y + 50);
        ctx.rotate(rotateAngle);
        ctx.rect(-5, -50, rectWidth, rectLength);
        ctx.fillStyle = color;
        ctx.fill();

        rotateAngle += Math.PI / elCount +increment
        ctx.restore();
    }
    window.requestAnimationFrame(draw);
}
draw();

function init() {
    window.requestAnimationFrame(draw);
}

init();