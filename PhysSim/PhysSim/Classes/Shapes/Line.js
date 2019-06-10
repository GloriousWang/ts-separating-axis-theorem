var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Line = (function (_super) {
    __extends(Line, _super);
    function Line(start, end) {
        _super.call(this, start);
        this.end = end;
    }
    Line.prototype.render = function (ctx, camera) {
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.moveTo(camera.toScreen(this.origin).x, camera.toScreen(this.origin).y);
        ctx.lineTo(camera.toScreen(this.end).x, camera.toScreen(this.end).y);
        ctx.stroke();
    };
    Line.prototype.getVector = function () {
        return this.origin.sub(this.end);
    };
    Line.prototype.project = function (axis) {
        var projection = this.origin.projectionMag(axis);
        var projectionEnd = this.getVector().projectionMag(axis);
        return [
            projection,
            projectionEnd
        ];
    };
    return Line;
}(Shape));
//# sourceMappingURL=Line.js.map