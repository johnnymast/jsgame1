class SpriteSheet {
    constructor(img, width, height, positions) {
        this.img = img;
        this.width = width;
        this.height = height;
        this.positions = positions;
    }

    Draw(position, x, y) {
        var pos = this.positions[position];
        Context().drawImage(
            this.img,
            pos[0],
            pos[1],
            this.width,
            this.height,
            x, y,
            this.width,
            this.height
        );
    }
}