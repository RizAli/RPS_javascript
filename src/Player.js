var Player = function(name){
  this.weapon = '';
  this.playerName = name;
};

Player.prototype.chooseWeapon = function(weapon_type) {
  this.weapon = weapon_type;
};


Player.prototype.randomChoice = function() {
  var choice =["rock", "paper", "scissors"];
  this.weapon = choice[Math.floor(Math.random()*3)];

};