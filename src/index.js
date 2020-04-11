
var canvas = document.getElementById("can");
var ctx = canvas.getContext("2d");

function draw(){
    ctx.beginPath();
    ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    ctx.stroke();
}

function x(x, y){
    var x = 'X';
    ctx.font = "48px serif";
    ctx.fillText(x, 100, 100);
}

draw();
x();