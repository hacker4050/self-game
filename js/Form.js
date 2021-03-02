class Form {

  constructor() {
    this.input = createInput("Name");
    //this.pass = createInput("password");
    //this.sign = createButton('SignUp');
    this.login = createButton('Login');
    this.name = createElement('name');
    //this.title = createElement('h2');
    //this.reset = createButton('Reset');
    this.play = createButton('START');

  }
  hide(){
    this.name.hide();
    //this.pass.hide();
    this.login.hide();

    this.input.hide();
    this.play.hide();
   // this.title.hide();
  }

  display(){
    //background(this.image);
   // imageMode(CENTER);
    //image(this.image,0,0,displayWidth,displayHeight);r
    this.input.position(displayWidth/2+100 ,displayHeight/2 - 100);
   // this.sign.position(displayWidth/2+100,50);
    this.login.position(displayWidth/2+100,150);

    this.login.mousePressed(()=>{
      player.id = this.input.value();
      this.input.hide();
      this.login.hide();
     // this.play.hide();
      // player.name = this.input.value();
      // playerCount+=1;
      // player.index = playerCount;
      // player.update();
      // player.updateCount(playerCount);
      //this.save.html(player.name)
      this.play.position(displayWidth-100 , displayHeight-80);
      gameState=10;

    });

    this.play.mousePressed(()=>{
      player.id = this.input.value();
      this.input.hide();
      this.login.hide();
     // this.play.hide();
      // player.name = this.input.value();
      // playerCount+=1;
      // player.index = playerCount;
      // player.update();
      // player.updateCount(playerCount);
      //this.save.html(player.name)
      this.play.position(displayWidth-100 , displayHeight-80);
      gameState=10;

    });

    //this.sign.mousePressed(()=>{
      // player.updateCount(0);
      // game.update(0);
    //});

  }
}
