function grid(){
    var canvas = document.getElementById("can");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    //v1
    ctx.moveTo(95,50);
    ctx.lineTo(95,200);
    //v2
    ctx.moveTo(145,50);
    ctx.lineTo(145,200);
    //h1
    ctx.moveTo(45,100);
    ctx.lineTo(195,100);
    //h2
    ctx.moveTo(45,150);
    ctx.lineTo(195,150);
    ctx.stroke();
}
function circle(x,y){
    var canvas = document.getElementById("can");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(45+(50*x),50+(50*y), 20, 0, 2 * Math.PI);
    // x, y, diameter, ???, arc size in radians
    ctx.stroke();
}
function x(x,y){
    var canvas = document.getElementById("can");
    var ctx = canvas.getContext("2d");  
    var f = "x";
    ctx.font = "70px serif";
    ctx.fillText(f, 30+(50*x), 65+(50*y));
    ctx.stroke();
}

grid();
circle(.5,.5);
circle(1.5,1.5);
circle(2.5,2.5);
x(0.5, 2.5);
x(2.5, 1.5);
x(1.5, 0.5)
