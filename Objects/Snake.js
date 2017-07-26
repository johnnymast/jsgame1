class Snake {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.velx = 5;
        this.vely = 0;
        this.eatenfoodcolor = 'darkgreen';
        this.color = 'rgb(32,32,32)';
        this.tail = [{
            x: this.x,
            y: this.y,
            w: this.w,
            h: this.h,
            color: this.color
        }];
    }

    Grow() {
        this.tail.push({
           x: this.x + 5,
           y: this.y + 5,
           w: this.w + 2,
           h: this.h + 2,
           color: this.eatenfoodcolor, // just eaten food color
        });
    }

    Draw() {

        if (this.velx != 0) {
            this.x += this.velx;
        }
        if (this.vely != 0) {
            this.y += this.vely;
        }

        // Draw the tale
        if (this.tail.length > 0) {
            var tipOfTail = this.tail.pop();
            tipOfTail.x = this.x;
            tipOfTail.y = this.y;
            this.tail.unshift(tipOfTail);
        }
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);

        // Draw head
        rect(this.x, this.y, this.w, this.h);

        // Draw tail
        for(var i = 0; i < this.tail.length; i++) {
            var part = this.tail[i];
            if (i+1 == this.tail.length) {
                part.w = this.w;
                part.h = this.h;
                part.color = this.color;
            }

            fill(part.color);
            rect(part.x, part.y, part.w, part.h);
        }

    }

    TailCollides() {
        if (this.tail.length > 1) {
            for (var i = 1; i < this.tail.length; i++) {
                var part = this.tail[i];
                if (this.x == part.x && this.y == part.y) {
                    return true;
                }
            }
        }
        return false;
    }
}