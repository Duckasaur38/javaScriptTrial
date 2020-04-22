
let rectangles = [];
//goes through and sets coordinates of 9 rectangles (these will be the grid boxes)
for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
        rectangle = new MyRect(51+(i*50),75+(j*50),50,50)
        rectangles.push(rectangle);
        console.log(rectangle.x);
      }

}
function buildBtns() {
  for (var i = 0; i < rectangles.length; i++) {
    var btn = document.createElement("button"); //creates button
    btn.setAttribute("id", i.toString() + "btn"); //gives the button id : ibtn (where i is for loop variable)
    document.body.appendChild(btn); // puts button in body of html
    document.getElementById(i.toString() + "btn").style.padding = "75px 75px"; //sets size
    document.getElementById(i.toString() + "btn").style.position = "absolute"; // says to give absolute coordinates
    document.getElementById(i.toString() + "btn").style.left =
      rectangles[i].x.toString() + "px"; // x pos
    document.getElementById(i.toString() + "btn").style.top =
      rectangles[i].y.toString() + "px"; // ypos
    document.getElementById(i.toString() + "btn").style.background = "none"; //no background
    document.getElementById(i.toString() + "btn").style.border = "none"; //no border
    //btn.setAttribute('coords',rectangles[i].x.toString(),rectangles[i].y.toString(),(rectangles[i].x+50).toString(),(rectangles[i].y+50).toString());
    //btn.addEventListener("click",squareClicked(i));
    document.getElementById(i.toString() + "btn").onclick = function () {
      rectangles[i].containsX = true;
    };
  }
}

// draws grid
function ex(x, y) {
  var canvas = document.getElementById("can");
  var ctx = canvas.getContext("2d");
  ctx.font = "48px serif";
  ctx.fillText("X", 50 + 50 * x, 95 + 50 * y);
  ctx.stroke();
}

function o(x, y) {
  var canvas = document.getElementById("can");
  var ctx = canvas.getContext("2d");
  ctx.font = "48px serif";
  ctx.fillText("O", 50 + 50 * x, 95 + 50 * y);
  ctx.stroke();
}

//this method is an ass. it basically goes through and makes a button for each of the boxes
function buildBtns() {
  for (var i = 0; i < rectangles.length; i++) {
    var btn = document.createElement("button"); //creates button
    document.body.appendChild(btn); // puts button in body of html
    btn.setAttribute("id", i.toString() + "btn"); //gives the button id : ibtn (where i is for loop variable)
    document.getElementById(i.toString() + "btn").style.padding = "25px 25px"; //sets size
    document.getElementById(i.toString() + "btn").style.position = "absolute"; // says to give absolute coordinates
    document.getElementById(i.toString() + "btn").style.background = "none"; //no background
    document.getElementById(i.toString() + "btn").style.border = "none"; //no border
    document.getElementById(i.toString() + "btn").style.left =
      rectangles[i].x.toString() + "px"; // x pos
    document.getElementById(i.toString() + "btn").style.top =
      rectangles[i].y.toString() + "px"; // ypos
    document.getElementById(i.toString() + "btn").onclick = function () {
      squareClicked(this.id);
    };
  }
}
var turn = 0;
var squVals = new Array(9).fill(0);
// checks if the game is over
function checkWin(num) {
  if (
    (squVals[num] == squVals[(num + 3) % 9] &&
      squVals[num] == squVals[(num + 6) % 9]) ||
    (squVals[4] != 0 &&
      ((squVals[0] == squVals[4] && squVals[4] == squVals[8]) ||
        (squVals[6] == squVals[4] && squVals[4] == squVals[2])))
  ) {
    console.log("player " + squVals[num] + " wins!");
  }
  if (squVals[0] != 0) {
    if (squVals[0] == squVals[1] && squVals[1] == squVals[2]) {
      console.log("player " + squVals[num] + " wins vertically in column 1!");
    }
  }
  if (squVals[3] != 0) {
    if (squVals[3] == squVals[4] && squVals[4] == squVals[5]) {
      console.log("player " + squVals[num] + " wins vertically in column 2!");
    }
  }
  if (squVals[6] != 0) {
    if (squVals[6] == squVals[7] && squVals[7] == squVals[8]) {
      console.log("player " + squVals[num] + " wins vertically in column 3!");
    }
  }
  var draw = true;
  for (let i = 0; i < 10; i++) {
    if (squVals[i] == 0) {
      draw = false;
      break;
    }
    else{
        o(Math.floor(squNum/3),squNum%3);
        squVals[squNum] = 2;
    }
    checkWin(squNum);
    checkDraw();
}
setUpRects();
grid();
buildBtns();
}
