class Camera {
    private layerQueue: Layer[];

    public ctx: CanvasRenderingContext2D;

    public offset: Vector2D;

    public zoom: number;
    public maxZoom: number;
    public minZoom: number;

    constructor(ctx: CanvasRenderingContext2D) {
        this.layerQueue = [];
        this.ctx = ctx;

        this.offset = new Vector2D(0, 0);

        this.zoom = 1;
        this.maxZoom = 2;
        this.minZoom = 0.5;
    }


    public renderAll() {
        for (var i = 0; i < this.layerQueue.length; i++) {
            this.layerQueue[i].render(this);
        }
    }


    public addLayer(index: number) {
        index = Utils.exists(index) ? index : this.layerQueue.length;

        this.layerQueue.splice(index, 0, new Layer())
    }

    public removeLayer(index: number) {
        this.layerQueue.splice(index, 1);
    }

    public getLayer(index: number): Layer {
        return this.layerQueue[index];
    }


    public toScreen(vector: Vector2D): Vector2D {
        return new Vector2D(
            (vector.x + this.offset.x) * this.zoom,
            (vector.y + this.offset.y) * this.zoom
        );
    }

    public toWorld(vector: Vector2D): Vector2D {
        return new Vector2D(
            vector.x / this.zoom - this.offset.x,
            vector.y / this.zoom - this.offset.y
        );
    }
}