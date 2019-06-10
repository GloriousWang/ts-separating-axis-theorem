class Circle extends Shape {
    public radius: number;

    constructor(origin: Vector2D, radius: number) {
        super(origin);
        this.radius = radius;
    }


    public render(ctx: CanvasRenderingContext2D, camera: Camera) {
        ctx.beginPath();

        ctx.lineWidth = 5;
        ctx.strokeStyle = "#000";
        ctx.arc(camera.toScreen(this.origin).x, camera.toScreen(this.origin).y, this.radius, 0, Math.PI * 2);

        ctx.stroke();
    }


    public project(axis: Vector2D): [number, number] {
        var projection: number = this.origin.projectionMag(axis);
        return [
            projection - this.radius,
            2 * this.radius
        ];
    }
}