class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      background(rgb(0,0,0));
      image(bg, 0,0,displayWidth/2, displayHeight-30);
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    // back = createSprite(displayWidth/2,displayHeight/2,100,100);
    // back.addImage("track",track);
    // back.scale=1;
    //var rectt;
    slamp1 = createSprite(0,displayHeight/2+150,320,displayHeight/2);
    slamp2 = createSprite(250,displayHeight/2+350,200,displayHeight/2+200);
    slamp3 = createSprite(390,displayHeight/2+255,200,displayHeight/2-550);
    slamp4 = createSprite(650,displayHeight/2+200,350,displayHeight/100+30);
    slamp5 = createSprite(390,displayHeight/2+320,displayWidth+10000000000000000000000000000000000000000000000000000000000000000000000,displayHeight/100+30);
    a = createSprite(650,displayHeight/2+320,3500,displayHeight/100+30);
    slamp2 = createSprite(0,displayHeight/2+150,320,displayHeight);
    slamp3 = createSprite(1100,displayHeight-300,350,displayHeight/100+30);
   // slamp4 = createSprite(650,displayHeight/2+255,600,displayHeight/100+30);
   // slamp3 = createSprite(390,displayHeight/2+255,200,displayHeight/2-550);
   // slamp4 = createSprite(650,displayHeight/2+255,600,displayHeight/100+30);
    shoots=createGroup();
    car1 = createSprite(100,300,10,10);
    car1.addImage("car1",car1_img);
    car2 = createSprite(300,300,10,10);
    car2.addImage("car2",car2_img);
    car3 = createSprite(500,300,10,10);
    car3.addImage("car3",car3_img);
    car4 = createSprite(700,300,10,10);
    car4.addImage("car4",car4_img);
    cars = [car1, car2, car3, car4];
    car1.scale=0.3;
    car2.scale=0.3;
    car3.scale=0.3;
    car4.scale=0.3;
    slampGroup.add(slamp1)
    slampGroup.add(slamp2)
    slampGroup.add(slamp3)
       slampGroup.add(slamp4)   
       slampGroup.add(slamp5)
          slampGroup.add(a)   
    cars1.add(car1);    cars2.add(car2);    cars3.add(car3);    cars4.add(car4);
          //slampGroup.add(b)
  }

  play(){
    form.hide();
    
    Player.getPlayerInfo();
    player.getCarsAtEnd();

    if(allPlayers !== undefined){
      background(rgb(198,135,103));
     // image(track, 0,-displayHeight*4,displayWidth+3000, displayHeight*5);
      
      //var display_position = 100;

      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 175 ;
      var y=2500;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = displayWidth-allPlayers[plr].distancex;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;
       // console.log(index, player.index)

       
        if (index === player.index){
          //rectt = createSprite(displayWidth - 20,displayHeight+300,100,20);
        //   if(car1.isTouching(shoots)){
        //     cars[index - 1].hp=player.hp-1; 
        // }else if(car3.isTouching(shoots)){
        //   cars[index - 1].hp=player.hp-1;
        // }else if(car4.isTouching(shoots)){
        //   cars[index - 1].hp=player.hp-1;
        // }else if(car2.isTouching(shoots)){
        //   cars[index - 1].hp=player.hp-1;
        // }
          // rect.x=cars[index - 1].x;
          // rect.y=cars[index - 1].y+250;
          // rect.shapeColor="white";
           stroke(10);
           fill("red");
           ellipse(x,y,60,60);
          camera.position.x = cars[index-1].x;
          camera.position.y = cars[index-1].y;
          if(keyDown("space")){
          var shoot = createSprite();
          shoot.x=cars[index - 1].x+70;
          shoot.y=cars[index - 1].y+70;
          shoot.width=20;
          shoot.height=20;
          shoot.velocityX=10;
          shoot.shapeColor = "red";
            shoots.add(shoot);

          }

          // if(cars[index - 1].isTouching(shoots)){
          //   player.hp=player.hp-1; 
          //   rect.width=rect.width-50;
          //   player.update();
          // }
          
          // /text(player.id + ": " + allPlayers[plr].distance, x,y)
        }
       
        // cars[index - 1].collide(slampGroup);
;
        text(player.id + ": " + allPlayers[plr].hp, x,y+30)
      }

    }

     if(keyIsDown(UP_ARROW) && player.index !== null){
       player.distance +=10
       player.update();
     }
      if(keyIsDown(DOWN_ARROW) && player.index !== null){
        player.distance -=10
        player.update();
      }
    if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
      player.distancex -= 10
      player.update();
  }
  if (keyIsDown(LEFT_ARROW) && player.index !== null) {
      player.distancex += 10
      player.update();
  }
  if (player.index !== null) {
    for (var i = 0; i < shoots.length; i++) {
    if (shoots.get(i).isTouching(cars4)) {
      shoots.get(i).destroy();
    player.hp4=player.hp4-1
    player.update();
    }  
     if (shoots.get(i).isTouching(cars1)) {
      shoots.get(i).destroy();
    player.hp1=player.hp1-1
    player.update();
    }  
      if (shoots.get(i).isTouching(cars2)) {
      shoots.get(i).destroy();
    player.hp2=player.hp2-1
    player.update();
    }  
      if (shoots.get(i).isTouching(cars3)) {
      shoots.get(i).destroy();
    player.hp3=player.hp3-1
    player.update();
    }
    }
   }
//   if (keyDown("space") && player.index !== null) {
//   // player.velocityY=-10;   
//   player.distance=player.distance-50;
//   player.update();
//    console.log("hello"); 
//  }
 //player.distance=player.distance+50;
 if(player.distance > 3860){
      gameState = 2;
      player.rank +=1;
      Player.updateCarsAtEnd(player.rank);
    }
    if(player.distance < 0){
     // gameState = 2;
    }

  car1.collide(slampGroup);
  car2.collide(slampGroup);
  car3.collide(slampGroup);
  car4.collide(slampGroup);

    drawSprites();
  }

  main(){
    if(gameState===10){
      image(bg2, 0,0,displayWidth, displayHeight-30);
      form.name.html(player.id);
      form.name.position(displayWidth - 1250, 20);
     // avater = createSprite(displayWidth - 1250, 40);
      //avater.addImage("avaterr",avaterr);
      form.play.mousePressed(()=>{
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        textSize(20);
        text("Loading...",200,200);
        if(playerCount===4){
        gameState=1;
        }
      });

    }
  }

  end(){
    console.log("Game Ended");
    console.log(player.rank);
    //textSize(15);
    //text(player.id + ": " + allPlayers[plr].distance, x,y+30)
  }
}
