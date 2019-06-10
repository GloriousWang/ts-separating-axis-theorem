var Layer = (function () {
    function Layer() {
        this.queue = [];
    }
    Layer.prototype.render = function (camera) {
        for (var i = 0; i < this.queue.length; i++) {
            this.queue[i].render(camera.ctx, camera);
        }
    };
    return Layer;
}());
//# sourceMappingURL=Layer.js.map