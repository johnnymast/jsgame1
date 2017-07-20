class Screen {
    constructor(size) {
        var canvas = document.createElement('canvas');
        canvas.width = size.width;
        canvas.height = size.height;
        this.width = size.width;
        this.height = size.height;
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
    }

    Clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }
}
