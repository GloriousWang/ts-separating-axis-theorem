var canvas;
var ctx;
window.onload = function () {
    canvas = document.getElementById("main-canvas");
    ctx = canvas.getContext("2d");
    fixCanvas();
    window.addEventListener("resize", fixCanvas);
    mouseC = new Circle(new Vector2D(0, 0), 250);
    staticC = new Circle(new Vector2D(0, 0), 250);
    step();
};
var mouseC;
var staticC;
function step() {
    mouseC.render(ctx, null);
    staticC.render(ctx, null);
    window.requestAnimationFrame(step);
}
function fixCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
//# sourceMappingURL=main.js.map