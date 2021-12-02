function startGame() {
    myGameArea.start();
    myGameArea.draw(redSquare);
}
function updateGameArea(){
    myGameArea.wallpaper(wallpaper);
    redSquare.x+=redSquare.speedX;
    redSquare.y+=redSquare.speedY;
    
    myGameArea.draw(redSquare);
}
var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 800;
        this.canvas.height = 800;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 10);
    },

    draw: function(component) {
        this.context.fillStyle = component.color;
        this.context.fillRect(component.x, component.y, component.width, component.height);
      },
    wallpaper: function(component) {
        this.context.fillStyle = component.color;
        this.context.fillRect(component.x, component.y, component.width, component.height);
      }
}
var redSquare = {
    width: 20,
    height: 20,
    x: 10,
    y: 120,
    color: "red",
    speedX : 0,
    speedY : 0
  }
  var wallpaper = {
    width: 1200,
    height: 4000,
    x: 0,
    y: 0,
    color: "#f1f1f1"
  }
  let v=1
  function moveup() {
    redSquare.speedY -= v;
  }
  
  function movedown() {
    redSquare.speedY += v;
  }
  
  function moveleft() {
    redSquare.speedX -= v;
  }
  
  function moveright() {
    redSquare.speedX += v;
  }
   
  
  
