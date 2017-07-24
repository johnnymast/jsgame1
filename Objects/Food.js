class Food {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.color = 'rgb(32,32,32)';
    }

    Draw() {
        fill(this.color);
        rect(this.x, this.y, this.width, this.height);
    }

    Contains(x, y) {
        if (x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height) {
            return true;
        }
        return false;
    }
}