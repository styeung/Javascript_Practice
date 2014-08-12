var Board = require("./board");

function Game (reader) {
  this.player1 = "x";
  this.player2 = "o";
  this.board = new Board();
  this.reader = reader;
  this.turn = [this.player1,this.player2];
  this.counter = 0;
}

Game.prototype.prompt = function(callback) {
  var that = this;
  that.reader.question("Enter in which row:", function(answer1) {
    that.reader.question("Enter in which column:", function(answer2) {
      var pos = [parseInt(answer1), parseInt(answer2)]
      callback(pos)
    })
  })
}

Game.prototype.run = function (completionCallback) {
  var that = this;
  this.board.display();
  var mark = this.turn[ this.counter % 2];
  console.log(mark + "'s turn");

  this.prompt(function(pos){
    var successful = that.board.placeMark(pos,mark)

    if(successful){
      if(that.board.won()){
        completionCallback(mark);
      }
      else{
        that.counter++;
        that.run(completionCallback);
      }
    }
    else{
      console.log("Invalid Move!")
      that.run(completionCallback)
    }
  });

}

module.exports = Game;