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
  if (this.beater[this.players[0].weapon] === this.players[1].weapon) {return this.players[0];}
  else if (this.players[0].weapon === this.players[1].weapon)
  {return "Draw";}
  else {return this.players[1];};
};

Game.prototype.victoryMessage = function() {
  return this.winner().playerName +" chose "+ this.winner().weapon +" and beats "+this.loser().playerName+" who chose "+this.loser().weapon;
};

Game.prototype.loser = function() {
  if (this.winner() === this.players[0]) {
    return this.players[1];}
  else {
    return this.players[0];};
};