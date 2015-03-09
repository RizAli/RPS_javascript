describe('Player', function() {

  var player;

  beforeEach(function() {
      player = new Player("Frank");
  });


  it ('should be able to choose a weapon', function() {
    player.chooseWeapon("paper");
    expect(player.weapon).toEqual("paper")
  });

  it ('should have a name', function() {
    expect(player.playerName).toEqual("Frank")
  });

  it ('should only be able tos et the weapon to rck paper or scissors', function() {
  });

});