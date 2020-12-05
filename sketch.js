var canvas, backgroundImage;
var startBackground;

var gameState = 0;
var playerCount;

var database;

var form, player, game;

function preload(){
  backgroundImage = loadImage("images/background.jpg");
  startBackground = loadImage("images/startbg.png");
}

function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
}
