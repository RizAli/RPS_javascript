var Player = function(name){
  this.weapon = '';
  this.playerName = name;
};

Player.prototype.chooseWeapon = function(weapon_type) {
  this.weapon = weapon_type;
};
