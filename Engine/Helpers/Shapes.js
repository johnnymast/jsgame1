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



