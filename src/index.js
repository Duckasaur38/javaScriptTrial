// sets up a rectangle object (there is a built in version which is apparently janky)


//var setup = false; //setup boolean

// //Runs the setup and drawing methods
// if(setup){
//     setUpRects();
//     buildBtns();
// } else {
//     grid();
//     checkBtns();
// }



// //this method is an ass. it basically goes through and makes a button for each of the boxes 
// //lol
// function buildBtns() {
//     for (var i=0; i<rectangles.length; i++){
//         var btn = document.createElement("button"); //creates button
//         document.body.appendChild(btn); // puts button in body of html 
//         btn.setAttribute("id",i.toString()+"btn") //gives the button id : ibtn (where i is for loop variable)
//         document.getElementById(i.toString()+"btn").style.padding = '25px 25px'; //sets size
//         document.getElementById(i.toString()+"btn").style.position = 'absolute'; // says to give absolute coordinates
//         document.getElementById(i.toString()+"btn").style.left = rectangles[i].x.toString()+'px'; // x pos
//         document.getElementById(i.toString()+"btn").style.top = rectangles[i].y.toString()+'px'; // ypos
//         document.getElementById(i.toString()+"btn").style.background= 'none'; //no background
//         document.getElementById(i.toString()+"btn").style.border = 'none'; //no border
//         btn.onclick = function(){
//             rectangles[i].containsX = true;
//         }
//         //btn.setAttribute('coords',rectangles[i].x.toString(),rectangles[i].y.toString(),(rectangles[i].x+50).toString(),(rectangles[i].y+50).toString());
//         //btn.addEventListener("click",squareClicked(i));
//     }
//     setup = false;
// }

// draws grid
let rectangles =[];
class MyRect {
    constructor(x, y, scaledX, scaledY, w, h) {
        this.x = x;
        this.y = y;
        this.scaledX = scaledX;
        this.scaledY = scaledY;
        this.width = w;
        this.height = h;
        this.containsX = false;
        this.containsO = false;
        this.contains = function (x, y) {
            return this.x <= x && x <= this.x + this.width && this.y <= y && y <= this.y + this.height;
        };
        this.draw = function (ctx) {
            ctx.rect(this.x, this.y, this.width, this.height);
        };
    }
}
// all good
// //goes through and sets coordinates of 9 rectangles (these will be the grid boxes)
function setUpRects(){
for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
        rectangle = new MyRect(51+(i*50),75+(j*50), i+1, j+2, 50,50)
        rectangles.push(rectangle);
        console.log(rectangle.x);
    }
}
}
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
    ctx.stroke();
}

function o(x, y){
    var canvas = document.getElementById("can");
    var ctx = canvas.getContext("2d");
    ctx.font = "48px serif";
    ctx.fillText("O", 50+(50*x), 95+(50*y));
    ctx.stroke();
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
    document.getElementById(i.toString()+"btn").onclick = function() {
    squareClicked(this.id);
  }
    }
}
 var turn = 0;
 var squVals = new Array(9).fill(0);
// checks if the game is over
function checkWin(num){
    if((squVals[num]==squVals[(num+3)%9] && squVals[num]==squVals[(num+6)%9])||(squVals[4]!=0 && ((squVals[0]==squVals[4]&& squVals[4]==squVals[8]) || (squVals[6]== squVals[4] && squVals[4]== squVals[2])))){
        console.log("player "+squVals[num]+" wins!");
    }
    if(squVals[0]!=0){
        if(squVals[0]==squVals[1] && squVals[1] == squVals[2]){
        console.log("player "+squVals[num]+" wins vertically in column 1!");
    }}
    if(squVals[3]!=0){
        if(squVals[3]==squVals[4] && squVals[4] ==squVals[5]){
        console.log("player "+squVals[num]+" wins vertically in column 2!");
    }}
    if(squVals[6]!=0){
        if(squVals[6]==squVals[7]&& squVals[7]==squVals[8]){
        console.log("player "+squVals[num]+" wins vertically in column 3!");
    }}
    var draw = true;    
    for(let i=0;i<10;i++){
        if(squVals[i] == 0){
            draw = false;
            break;
        }
    }
    if(draw){
            console.log("DRAW!")
        }
    }
function squareClicked(square){
    document.getElementById(square).setAttribute('disabled','true');
    turn++;
    turn %=2;
    var squNum = parseInt(square);
    console.log(squNum);
    if(turn == 0){
        ex(Math.floor(squNum/3),squNum%3);
        squVals[squNum] = 1;
    }
    else{
        o(Math.floor(squNum/3),squNum%3);
        squVals[squNum] = 2;
    } 
    checkWin(squNum);
}
setUpRects();
grid();
buildBtns();



// //checks the contents of each square and draws X or O if necessary
// function checkBtns(){
//     for(var z=0; z<9; z++){
//         if(rectangles[z].containsX){
//             ex(rectangles[z].scaledX, rectangle[z].scaledY);
//         } else if(rectangles[z].containsO){
//             o(rectangles[z].scaledX, rectangle[z].scaledY);
//         }
//     }
// }

// //checks whether or not the mouse clicked in a square
// function squareClicked(square){
//     console.log("YAY"+square.toString());
//     MouseEvent(); //Creates MouseEvent
//     if(MouseEvent.buttons == square){ //checks if the button clicked is the same as the input
//         return true; //returns true if it is
//     } else {
//         return false; //returns false if it isn't
//     }
// }
// >>>>>>> 691f012884eacb3c7c59c75d3822925b4cf5353