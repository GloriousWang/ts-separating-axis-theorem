var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Shape = (function (_super) {
    __extends(Shape, _super);
    function Shape(origin) {
        _super.call(this);
        this.origin = origin;
    }
    Shape.prototype.getAxes = function () {
        return [];
    };
    Shape.prototype.project = function (axis) {
        return [0, 0];
    };
    Shape.prototype.getAxisOverlap = function (shape) {
        var output = [];
        var collision = true;
        // Get axes
        var axes = this.getAxes().concat(shape.getAxes());
        if (axes.length == 0) {
            axes.push(shape.origin.sub(this.origin));
        }
        // Project and compare
        for (var i = 0; i < axes.length; i++) {
            axes[i] = axes[i].norm();
            var projectionA = this.project(axes[i]);
            var projectionB = shape.project(axes[i]);
            var overlapStart = Math.max(projectionA[0], projectionB[0]);
            if (projectionA[0] > projectionB[0]) {
                var overlap = [projectionA[0], Math.min(projectionA[0] + projectionA[1], projectionB[0] + projectionB[1]) - projectionA[0]];
                if (overlap[1] < 0)
                    return [];
            }
            else {
                var overlap = [projectionB[0], projectionB[0] - Math.min(projectionA[0] + projectionA[1], projectionB[0] + projectionB[1])];
                if (overlap[1] > 0)
                    return [];
            }
            output.push({
                axis: axes[i],
                overlap: overlap
            });
        }
        return output;
    };
    Shape.prototype.render = function (ctx, camera) {
    };
    return Shape;
}(RenderObject));
//# sourceMappingURL=Shape.js.map