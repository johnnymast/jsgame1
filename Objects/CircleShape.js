class CircleShape {
    constructor(x, y, radius) {
        this.radius = radius;
        this.x = x;
        this.y = y;
    }

    Draw() {
        circle(this.x, this.y, this.radius);
    }
}