
//Init du context 2d pour la balise canvas (nav pris en charge)
var context = document.getElementById('canvas').getContext("2d");

var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();
var paint;
var id;

$('#canvas').on( "mousedown touchstart",function(e){
  var mouseX = e.pageX - this.offsetLeft;
  var mouseY = e.pageY - this.offsetTop;

  console.log("paint");
		
  paint = true;
  addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
  redraw();
});

$('#canvas').on( "mousemove touchmove", function(e){
  if(paint){
    addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
    redraw();
  }
});

$('#canvas').on( "mouseup mouseleave touchend", function(e){
  paint = false;
});


function addClick(x, y, dragging ){
  clickX.push(x);
  clickY.push(y);
  clickDrag.push(dragging);
}

function redraw(){
  context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas
  
  context.strokeStyle = "#343a40";
  context.lineJoin = "round";
  context.lineWidth = 5;
			
  for(var i=0; i < clickX.length; i++) {		
    context.beginPath();
    if(clickDrag[i] && i){
      context.moveTo(clickX[i-1], clickY[i-1]);
     }else{
       context.moveTo(clickX[i]-1, clickY[i]);
     }
     context.lineTo(clickX[i], clickY[i]);
     context.closePath();
     context.stroke();
  }
}

function openCanevas(id){
    this.id = id;
    $("#support_canvas").css("display", "block");
    $("#info").css("display", "none");
}

function clearCanvas(){
    context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas
    clickX =  new Array();
    clickY =  new Array();
    clickDrag =  new Array();
}

function clearAndHide(){
    clearCanvas();
    $("#support_canvas").css("display", "none");
    $("#info").css("display", "block");
}

function validSign(){
    alert('reservation effectuée !!!');
    clearAndHide();
    $("#info").css("display", "block");
    bookValid(this.id);
    console.log("valid " + id, this.id);
}