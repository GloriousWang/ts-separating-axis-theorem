var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Circle = (function (_super) {
    __extends(Circle, _super);
    function Circle(origin, radius) {
        _super.call(this, origin);
        this.radius = radius;
    }
    Circle.prototype.render = function (ctx, camera) {
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.strokeStyle = "#000";
        ctx.arc(camera.toScreen(this.origin).x, camera.toScreen(this.origin).y, this.radius, 0, Math.PI * 2);
        ctx.stroke();
    };
    Circle.prototype.project = function (axis) {
        var projection = this.origin.projectionMag(axis);
        return [
            projection - this.radius,
            2 * this.radius
        ];
    };
    return Circle;
}(Shape));
//# sourceMappingURL=Circle.js.map