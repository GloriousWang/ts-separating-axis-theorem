class RenderObject {
    public renderIndex: number;
    public renderLayer: Layer;


    constructor() {
        this.renderIndex = null;
        this.renderLayer = null;
    }


    public addToLayer(layer: Layer, index: number) {
        if (!Utils.exists(layer)) { return };

        this.renderIndex = Utils.exists(index) ? index : layer.queue.length;

        this.renderLayer = layer;
        this.renderLayer.queue.splice(this.renderIndex, 0, this);
    }

    public removeFromLayer() {
        this.renderLayer.queue.splice(this.renderIndex, 1);
        this.renderIndex = null;
        this.renderLayer = null;
    }


    public render(ctx: CanvasRenderingContext2D, camera: Camera) {

    }
}