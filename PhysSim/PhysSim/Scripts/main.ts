var canvas: HTMLCanvasElement;
var ctx: CanvasRenderingContext2D;

window.onload = () => {
    canvas = <HTMLCanvasElement> document.getElementById("main-canvas");
    ctx = canvas.getContext("2d");
    fixCanvas();
    window.addEventListener("resize", fixCanvas);

    Input.init();

    mouseC = new Circle(new Vector2D(0, 0), 100);
    mouseP = new Polygon(new Vector2D(0, 0), [new Vector2D(-90, -75), new Vector2D(-40, -110), new Vector2D(70, -140), new Vector2D(50, 100), new Vector2D(50, 100), new Vector2D(0, 100)])
    staticC = new Circle(new Vector2D(0, 0), 25);

    poly = new Polygon(new Vector2D(0, 0), [new Vector2D(-100, -50), new Vector2D(-50, -100), new Vector2D(75, -100), new Vector2D(100, 50), new Vector2D(50, 100), new Vector2D(0, 100)])
    line = new Line(new Vector2D(0, 0), new Vector2D(100, 100))

    camera = new Camera(ctx);

    step();
};

var mouseC: Circle;
var mouseP: Polygon;
var staticC: Circle;
var poly: Polygon;
var line: Line;

var camera: Camera;

function step() {
    if (Input.isKeyDown("KeyW")) {
        camera.offset.y += 10;
    } else if (Input.isKeyDown("KeyS")) {
        camera.offset.y -= 10;
    }
    if (Input.isKeyDown("KeyA")) {
        camera.offset.x += 10;
    } else if (Input.isKeyDown("KeyD")) {
        camera.offset.x -= 10;
    }

    mouseP.origin = camera.toWorld(Input.getMousePos());

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var overlaps = poly.getAxisOverlap(mouseP);

    var minOverlap: { axis: Vector2D, overlap: [number, number]};
    for (var i = 0; i < overlaps.length; i++) {
        var o = overlaps[i];

        if (minOverlap === undefined || Math.abs(o.overlap[1]) < Math.abs(minOverlap.overlap[1])) {
            minOverlap = o;
        }

        ctx.beginPath();
        ctx.strokeStyle = "#000";
        ctx.lineWidth = 2;
        ctx.moveTo(o.axis.x * -3000 + camera.offset.x, o.axis.y * -3000 + camera.offset.y);
        ctx.lineTo(o.axis.x * 3000 + camera.offset.x, o.axis.y * 3000 + camera.offset.y);
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = o.overlap[1] > 0 ? "#f00" : "#0f0";
        ctx.lineWidth = 5;
        var projStart = o.axis.mult(o.overlap[0]);
        var projEnd = o.axis.mult(o.overlap[0] + o.overlap[1]);
        ctx.moveTo(projStart.x + camera.offset.x, projStart.y + camera.offset.y);
        ctx.lineTo(projEnd.x + camera.offset.x, projEnd.y + camera.offset.y);
        ctx.stroke();

    }

    if (minOverlap !== undefined) {
        poly.origin = poly.origin.add(minOverlap.axis.mult(minOverlap.overlap[1]));
    } 

    mouseC.render(ctx, camera);
    mouseP.render(ctx, camera);
    staticC.render(ctx, camera);

    poly.render(ctx, camera);
    line.render(ctx, camera);

    window.requestAnimationFrame(step);
}


function fixCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
