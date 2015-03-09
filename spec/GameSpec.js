describe('Game', function() {
  var game;
  var player;
  var player2;
  var player3;

  beforeEach(function() {
    game = new Game();
    player = new Player("Frank");
    player2 = new Player("Betty");
    player3 = new Player("Sam");
  });

  it('should be able to add a player', function() {
    game.addPlayer(player);
    expect(game.playerCount()).toEqual(1);
  });

  it('should only allow 2 players to join', function() {
    game.addPlayer(player);
    game.addPlayer(player2);
    expect(function(){game.addPlayer(player3)}).toThrowError("only 2 players allowed");
  });

  it('knows if it is a draw', function() {
    game.addPlayer(player);
    game.addPlayer(player2);
    player.chooseWeapon("paper");
    player2.chooseWeapon("paper");
    expect(game.winner()).toEqual("Draw");
  });

  it ('knows who has won', function(){
    game.addPlayer(player);
    game.addPlayer(player2);
    player.chooseWeapon("paper");
    player2.chooseWeapon("rock");
    expect(game.winner()).toEqual("Frank");
  });

});