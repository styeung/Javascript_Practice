var readline = require("readline");
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var Game = require("./game");
var Board = require("./board");

var game = new Game(reader);
game.run(function(mark) {
  console.log(mark + " wins the game!")
});
