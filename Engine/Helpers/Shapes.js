circle = (x, y, radius) => {
    var ctx = Context();
    ctx.fillStyle = fill();
    ctx.strokeStyle = stroke();

    ctx.beginPath();
    ctx.arc(x,y,radius,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();
}

rect = (x, y, width, height) => {
    var ctx = Context();
    ctx.fillStyle = fill();
    ctx.fillRect(x, y, width, height);
}

image = (img,x, y, width, height, dx = 0, dy = 0) => {
    var ctx = Context();
    ctx.fillStyle = fill();

    if (typeof img == 'string') {
        src = img;
        img = new Image();
        img.src = src;
    }

    ctx.drawImage(
        img,
        dx,
        dy,
        width,
        height,
        x, y,
        width,
        height
    );
}

text = (str, x, y, fontsize = 30) => {
    var ctx = Context();
    ctx.fillStyle = fill();

    ctx.font = fontsize+"px Arial";
    ctx.fillText(str,x,y);
}