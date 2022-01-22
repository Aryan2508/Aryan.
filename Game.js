class Game {
  constructor() {}

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }

  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();

    bucket1 = createSprite(width / 2 - 50, height - 100);
    bucket1.addImage("bucket1", bucket1_img);
    bucket1.scale = 0.25;

    bucket2 = createSprite(width / 2 + 100, height - 100);
    bucket2.addImage("bucket2", bucket2_img);
    bucket2.scale = 0.25;

    buckets = [bucket1, bucket2];
  }

  

  handleElements() {
    form.hide();
    //form.titleImg.position(40, 50);
    //form.titleImg.class("gameTitleAfterEffect");
  }

  play() {
    this.handleElements();
    this.handlePlayerControls();

    Player.getPlayersInfo();

    if (allPlayers !== undefined) {
      image(backImg, 0, 0, width, height);

      drawSprites();
    }
  }

  handlePlayerControls() {
    
    if (keyIsDown(LEFT_ARROW) && player.positionX > width / 3 - 50) {
      player.positionX -= 5;
      player.update();
      
    }

    if (keyIsDown(RIGHT_ARROW) && player.positionX < width / 2 + 300) {
      player.positionX += 5;
      player.update();
    }
  }

}
