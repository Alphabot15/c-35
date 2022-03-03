var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var database;

var form, player, game;
var car1,car2,car3,car4,cars;
var allPlayers;
function setup(){
  canvas = createCanvas(displayWidth+600,displayHeight+50);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  backgroundImage=loadImage("images/fondo.jpeg")
}
function draw(){
if (playerCount===4) {
game.update(1)
}
if (gameState===1){
clear()  
game.play()
}
}
