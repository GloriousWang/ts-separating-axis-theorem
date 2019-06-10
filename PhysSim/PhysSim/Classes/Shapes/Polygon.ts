class Polygon extends Shape {
    public vertices: Vector2D[];


    constructor(origin: Vector2D, vertices: Vector2D[]) {
        super(origin);
        this.vertices = vertices;
    }


    public render(ctx: CanvasRenderingContext2D, camera: Camera) {
        ctx.beginPath();

        ctx.lineWidth = 5;
        ctx.strokeStyle = "#000";

        ctx.moveTo(camera.toScreen(this.origin.add(this.vertices[this.vertices.length - 1])).x, camera.toScreen(this.origin.add(this.vertices[this.vertices.length - 1])).y);
        for (var i: number = 0; i < this.vertices.length - 1; i++) {
            ctx.lineTo(camera.toScreen(this.origin.add(this.vertices[i])).x, camera.toScreen(this.origin.add(this.vertices[i])).y);
        }
        ctx.closePath();

        ctx.stroke();
    }


    public getAxes(): Vector2D[] {
        var axes: Vector2D[] = [];

        for (var i:number = 0; i < this.vertices.length - 1; i++) {
            axes.push(this.vertices[i + 1].sub(this.vertices[i]).hat());
        }
        axes.push(this.vertices[this.vertices.length - 1].sub(this.vertices[0]).hat());

        return axes;
    }


    public project(axis: Vector2D): [number, number] {
        var max: number;
        var min: number;

        for (var i: number = 0; i < this.vertices.length; i++) {
            var projection: number = this.vertices[i].add(this.origin).projectionMag(axis);
            if (max == undefined || projection > max) {
                max = projection
            }
            if (min == undefined || projection < min) {
                min = projection
            }
        }

        return [min, max - min];
    }
}