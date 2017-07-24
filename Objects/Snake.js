class Snake {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.velx = 0;
        this.vely = 0;
    }

    Draw() {
        fill('green');
        if (this.velx != 0) {
            this.x += this.velx;
        }
        if (this.vely != 0) {
            this.y += this.vely;
        }

        this.x = Math.round(this.x);
        this.y = Math.round(this.y);


        rect(this.x, this.y, this.w, this.h);
    }

    Contains(x, y) {
        if (x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height) {
            return true;
        }
        return false;
    }
}