class Shape extends RenderObject{
    public origin: Vector2D;

    constructor(origin: Vector2D) {
        super();
        this.origin = origin;
    }


    public getAxes(): Vector2D[] {
        return [];
    }


    public project(axis: Vector2D): [number, number] {
        return [0, 0];
    }


    public getAxisOverlap(shape: Shape): { axis: Vector2D, overlap: [number, number] }[] {
        var output: any[] = [];
        var collision: boolean = true;

        // Get axes
        var axes: Vector2D[] = this.getAxes().concat(shape.getAxes());
        if (axes.length == 0) {
            axes.push(shape.origin.sub(this.origin));
        }

        // Project and compare
        for (var i: number = 0; i < axes.length; i++) {
            axes[i] = axes[i].norm();
            var projectionA: [number, number] = this.project(axes[i]);
            var projectionB: [number, number] = shape.project(axes[i]);

            var overlapStart = Math.max(projectionA[0], projectionB[0]);
            if (projectionA[0] > projectionB[0]) {
                var overlap: any[] = [projectionA[0], Math.min(projectionA[0] + projectionA[1], projectionB[0] + projectionB[1]) - projectionA[0]];
                if (overlap[1] < 0) return [];
            } else {
                var overlap: any[] = [projectionB[0], projectionB[0] - Math.min(projectionA[0] + projectionA[1], projectionB[0] + projectionB[1])];
                if (overlap[1] > 0) return [];
            }

            output.push({
                axis: axes[i],
                overlap: overlap
            });
        }

        return output;
    }

    public render(ctx: CanvasRenderingContext2D, camera: Camera) {

    }
}