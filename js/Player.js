class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.distancex = 0;
    this.hp=100;
    this.hp1=100;
    this.hp2=100;
    this.hp3=100;
    this.hp4=100;
    this.name = null;
    this.rank = null;
    this.id = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance,
      distancex:this.distancex,
      car1HP:this.hp1,
      car2HP:this.hp2,
      car3HP:this.hp3,
      car4HP:this.hp4

    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }

  getCarsAtEnd(){
      database.ref('CarsAtEnd').on("value",(data)=>{
      this.rank = data.val();
    })
  }

  static updateCarsAtEnd (rank){
    database.ref('/').update({
      CarsAtEnd: rank
    });
  }
}
