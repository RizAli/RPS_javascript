var Game = function() {
  this.players = [];
  this.beater = [];
  this.beater["rock"] = "scissors";
  this.beater["scissors"] = "paper";
  this.beater["paper"] = "rock";
};

Game.prototype.addPlayer = function(player) {
  if (this.playerCount() === 2) {
    throw new Error("only 2 players allowed");
    }
  else{
    this.players.push(player);
  };
};

Game.prototype.playerCount = function() {
  return this.players.length;
};

Game.prototype.winner = function() {
  if (this.players[0].weapon === this.players[1].weapon)
  {return "Draw";};

};
