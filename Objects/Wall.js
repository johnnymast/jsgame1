class Wall {
    constructor(size) {
        this.boxes = [];

        var padding = 0;
        var w = 10;
        var h = 10;
        var x = 0;
        var y = 0;

        var cntx = parseInt(size.width / w);
        var cnty = parseInt(size.height / h);

        for (var ly = 0; ly < cnty; ly++) {
            x = 0;
            var skipx = false;

            for (var lx = 0; lx < cntx; lx++) {

                if (skipx)
                    continue;

                if (ly == 0 || (ly +1) == cnty) {

                    if (y > size.height) {
                        y = size.height - (h + padding);
                    }

                    var box = new Box(x, y, w, h);
                    x += (w + padding);
                    this.boxes.push(box);

                } else {

                    var box1 = new Box(0, y, w, h);
                    this.boxes.push(box1);

                    var box2 = new Box(size.width - (w + padding), y, w, h);
                    this.boxes.push(box2);

                    skipx = true;
                }
            }

            y += (h + padding);
        }
    }

    Draw() {
        fill('gray');

        this.boxes.forEach(function (box) {
            box.Draw();
        });
    }

    Contains(x, y) {
        var contains = false;

        this.boxes.forEach(function (box) {
           var bx = box.x;
           var by = box.y;
           var h = box.h;
           var w = box.w;

            if (bx >= x && bx <= x + w && by >= y && by <= y + h) {
                contains = true;
            }
        });
        return contains;
    }
}