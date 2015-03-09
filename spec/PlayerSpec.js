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

  xit ('should only be able to set the weapon to rock, paper or scissors', function() {

  });

});