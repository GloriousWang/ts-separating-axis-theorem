var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Polygon = (function (_super) {
    __extends(Polygon, _super);
    function Polygon(origin, vertices) {
        _super.call(this, origin);
        this.vertices = vertices;
    }
    Polygon.prototype.render = function (ctx, camera) {
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.strokeStyle = "#000";
        ctx.moveTo(camera.toScreen(this.origin.add(this.vertices[this.vertices.length - 1])).x, camera.toScreen(this.origin.add(this.vertices[this.vertices.length - 1])).y);
        for (var i = 0; i < this.vertices.length - 1; i++) {
            ctx.lineTo(camera.toScreen(this.origin.add(this.vertices[i])).x, camera.toScreen(this.origin.add(this.vertices[i])).y);
        }
        ctx.closePath();
        ctx.stroke();
    };
    Polygon.prototype.getAxes = function () {
        var axes = [];
        for (var i = 0; i < this.vertices.length - 1; i++) {
            axes.push(this.vertices[i + 1].sub(this.vertices[i]).hat());
        }
        axes.push(this.vertices[this.vertices.length - 1].sub(this.vertices[0]).hat());
        return axes;
    };
    Polygon.prototype.project = function (axis) {
        var max;
        var min;
        for (var i = 0; i < this.vertices.length; i++) {
            var projection = this.vertices[i].add(this.origin).projectionMag(axis);
            if (max == undefined || projection > max) {
                max = projection;
            }
            if (min == undefined || projection < min) {
                min = projection;
            }
        }
        return [min, max - min];
    };
    return Polygon;
}(Shape));
//# sourceMappingURL=Polygon.js.map