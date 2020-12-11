var database;
var gameState = 0;
var playerCount;
var form, player, game;
var allPlayers;
var car1, car2, car3, car4;
var cars;
var car1Img, car2Img, car3Img, car4Img;
var groundImg, trackImg;
var carsAtEnd = 0;

function preload(){
  car1Img = loadImage("images/car1.png")
  car2Img = loadImage("images/car2.png")
  car3Img = loadImage("images/car3.png")
  car4Img = loadImage("images/car4.png")
  groundImg = loadImage("images/ground.png")
  trackImg = loadImage("images/track.jpg")
}

function setup(){
  database = firebase.database();
  createCanvas(displayWidth * 9/10,displayHeight * 7/10);
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  if(playerCount === 4 && gameState === 0){
    gameState = 1;
    game.update(gameState)
  }
  
  if (gameState === 1){
    background(groundImg);
    image(trackImg, 0, -3 * displayHeight, displayWidth * 9/10, displayHeight * 4);
    game.play();
    drawSprites();
  }
  if(gameState === 2){
    game.end();
  }
}