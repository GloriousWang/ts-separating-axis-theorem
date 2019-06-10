class Line extends Shape{
    public end: Vector2D;


    constructor(start: Vector2D, end: Vector2D) {
        super(start);
        this.end = end;
    }


    public render(ctx: CanvasRenderingContext2D, camera: Camera) {
        ctx.beginPath();

        ctx.lineWidth = 5;

        ctx.moveTo(camera.toScreen(this.origin).x, camera.toScreen(this.origin).y)
        ctx.lineTo(camera.toScreen(this.end).x, camera.toScreen(this.end).y)

        ctx.stroke();
    }


    public getVector(): Vector2D {
        return this.origin.sub(this.end);
    }


    public project(axis: Vector2D): [number, number] {
        var projection: number = this.origin.projectionMag(axis);
        var projectionEnd: number = this.getVector().projectionMag(axis);
        return [
            projection,
            projectionEnd
        ];
    }
}