var Vector2D = (function () {
    function Vector2D(x, y) {
        this.x = x;
        this.y = y;
    }
    Vector2D.prototype.add = function (vector) {
        this.x += vector.x;
        this.y += vector.y;
        return this;
    };
    Vector2D.prototype.sub = function (vector) {
        this.x -= vector.x;
        this.y -= vector.y;
        return this;
    };
    Vector2D.prototype.mult = function (vector) {
        this.x *= vector.x;
        this.y *= vector.y;
        return this;
    };
    Vector2D.prototype.div = function (vector) {
        this.x /= vector.x;
        this.y /= vector.y;
        return this;
    };
    Vector2D.prototype.mag = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    Vector2D.prototype.magSquared = function () {
        return this.x * this.x + this.y * this.y;
    };
    Vector2D.prototype.norm = function () {
        var mag = this.magSquared();
        if (mag > 0) {
            this.div(mag);
        }
        return this;
    };
    Vector2D.prototype.clone = function () {
        return new Vector2D(this.x, this.y);
    };
    return Vector2D;
}());
//# sourceMappingURL=Vector2D.js.map