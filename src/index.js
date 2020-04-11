
// sets up a rectangle object (there is a built in version which is apparently janky)
class MyRect {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.contains = function (x, y) {
            return this.x <= x && x <= this.x + this.width && this.y <= y && y <= this.y + this.height;
        };
        this.draw = function (ctx) {
            ctx.rect(this.x, this.y, this.width, this.height);
        };
    }
}

//starts an array of rectangles
let rectangles = [];
//goes through and sets coordinates of 9 rectangles (these will be the grid boxes)
for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
        rectangle = new MyRect(51+(i*50),75+(j*50),50,50)
    rectangles.push(rectangle);
    console.log(rectangle.x);
}
}
//prints the rectangles
for(let i=0;i<rectangles.length;i++){
    console.log(rectangles[i]);
}
// draws grid
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
// methods to draw x's and o's takes (x,y) where each are 0,1,2
function ex(x, y){
    
    var canvas = document.getElementById("can");
    var ctx = canvas.getContext("2d");
        ctx.font = "48px serif";
        ctx.fillText("X", 50+(50*x), 95+(50*y));
    }

function o(x, y){
    
    var canvas = document.getElementById("can");
    var ctx = canvas.getContext("2d");
        ctx.font = "48px serif";
        ctx.fillText("O", 50+(50*x), 95+(50*y));
}
//this method is an ass. it basically goes through and makes a button for each of the boxes 
function buildBtns() {
    for (var i = 0; i < rectangles.length; i++){
       var btn = document.createElement("button"); //creates button
       document.body.appendChild(btn); // puts button in body of html 
       btn.setAttribute("id",i.toString()+"btn") //gives the button id : ibtn (where i is for loop variable)
    document.getElementById(i.toString()+"btn").style.padding = '25px 25px'; //sets size
    document.getElementById(i.toString()+"btn").style.position = 'absolute'; // says to give absolute coordinates
    document.getElementById(i.toString()+"btn").style.background= 'none'; //no background
    document.getElementById(i.toString()+"btn").style.border = 'none'; //no border
    document.getElementById(i.toString()+"btn").style.left = rectangles[i].x.toString()+'px'; // x pos
    document.getElementById(i.toString()+"btn").style.top = rectangles[i].y.toString()+'px'; // ypos
    //    btn.setAttribute('coords',rectangles[i].x.toString(),rectangles[i].y.toString(),(rectangles[i].x+50).toString(),(rectangles[i].y+50).toString());
    //    btn.addEventListener("click",squareClicked(i));
    }
}
// ignore this for now....
function squareClicked(square){
console.log("YAY"+square.toString());
}

buildBtns();
grid();