class Vector2D {
    public x: number;
    public y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public add(vector: Vector2D): Vector2D {
        var x = this.x + vector.x;
        var y = this.y + vector.y;
        return new Vector2D(x, y);
    }

    public sub(vector: Vector2D): Vector2D {
        var x = this.x - vector.x;
        var y = this.y - vector.y;
        return new Vector2D(x, y);
    }


    public mult(factor: number): Vector2D {
        var x = this.x * factor;
        var y = this.y * factor;
        return new Vector2D(x, y);
    }

    public div(factor: number): Vector2D {
        var x = this.x / factor;
        var y = this.y / factor;
        return new Vector2D(x, y);
    }


    public mag(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }

    public magSquared(): number {
        return this.x * this.x + this.y * this.y
    }

    public dot(vector: Vector2D) {
        return this.x * vector.x + this.y * vector.y;
    }

    /**
     * Projects this vector onto the specified vector
     */
    public project(vector: Vector2D): Vector2D {
        return vector.mult(vector.dot(this) / vector.magSquared());
    }

    /**
     * Projects this vector onto the specified vector and returns the length of the projection
     */
    public projectionMag(vector: Vector2D): number {
        return vector.dot(this) / vector.mag();
    }

    public norm(): Vector2D {
        var mag = this.mag();

        if (mag > 0) {
            return this.div(mag);
        }

        return this;
    }


    public hat() {
        return new Vector2D(-this.y, this.x);
    }


    public clone(): Vector2D {
        return new Vector2D(this.x, this.y);
    }
}