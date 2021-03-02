var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var bg;
var input=[]
var passes=[]
var avater;
var back;

var form, player, game;

var cars, car1, car2, car3, car4;
var adam;
var load;
var loadimg;
var shoots;

var track, car1_img, car2_img, car3_img, car4_img;
var slamp1,slamp2,slamp3,slamp4,slamp5,slamp6,slamp7,slamp8,slamp9,slamp10;
var a,b;
var slampGroup;
var cars1;
var cars2;
var cars3;
var cars4;

function preload(){
   track = loadImage("../images/download (4).png");
   car1_img = loadImage("images/alok.png");
   car2_img = loadImage("images/alok.png");
   car3_img = loadImage("images/alok.png");
   car4_img = loadImage("../images/alok.png");
   avaterr=loadImage("../images/avater.png");
   ground = loadImage("../images/ground.png");
   bg=loadImage("../images/background.JPG");
   bg2=loadImage("../images/s.JPG");
   adamimg=loadImage("../images/adam.png");
   loadimg=loadImage("../images/load.jpg");
   adam=loadAnimation("images/adam.png","images/car1.png");


}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  game.main();
  slampGroup=new Group();
  cars1=new Group();
  cars2=new Group();
  cars3=new Group();
  cars4=new Group();

}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 10){
    clear();
    game.main();
  }
  if(gameState === 2){
    game.end();
  }
}
