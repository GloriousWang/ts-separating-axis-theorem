var RenderObject = (function () {
    function RenderObject() {
        this.renderIndex = null;
        this.renderLayer = null;
    }
    RenderObject.prototype.addToLayer = function (layer, index) {
        if (!Utils.exists(layer)) {
            return;
        }
        ;
        this.renderIndex = Utils.exists(index) ? index : layer.queue.length;
        this.renderLayer = layer;
        this.renderLayer.queue.splice(this.renderIndex, 0, this);
    };
    RenderObject.prototype.removeFromLayer = function () {
        this.renderLayer.queue.splice(this.renderIndex, 1);
        this.renderIndex = null;
        this.renderLayer = null;
    };
    RenderObject.prototype.render = function (ctx, camera) {
    };
    return RenderObject;
}());
//# sourceMappingURL=RenderObject.js.map