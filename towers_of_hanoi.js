var readline = require("readline");

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function HanoiGame() {
  this.stacks = [[3,2,1],[],[]]
};

HanoiGame.prototype.isWon = function(){
  if(this.stacks[2].length === 3){
    return true;
  }
  else{
    return false;
  }
};

HanoiGame.prototype.isValidMove = function(startTowerIdx, endTowerIdx){
  var startLstIdx = this.stacks[startTowerIdx].length - 1;
  var endLstIdx = this.stacks[endTowerIdx].length - 1;

  if(endLstIdx === -1 || this.stacks[startTowerIdx][startLstIdx] <
     this.stacks[endTowerIdx][endLstIdx]){
    return true;
  }
  else{
    return false;
  }
};

HanoiGame.prototype.move = function(startTowerIdx, endTowerIdx){
  if(this.isValidMove(startTowerIdx, endTowerIdx)){
    this.stacks[endTowerIdx].push(this.stacks[startTowerIdx].pop());
    return true;
  }
  else {
    return false;
  }

};

HanoiGame.prototype.print = function(){
  console.log(JSON.stringify(this.stacks));
};

HanoiGame.prototype.promptMove = function(callback){
  var that = this;
  this.print();

  reader.question("Which tower do you want to move from?", function(answer1){
    reader.question("Which tower do you want to move to?", function(answer2){
      callback(parseInt(answer1), parseInt(answer2));
    });
  });
};

HanoiGame.prototype.run = function(completionCallback){
  var that = this;
  this.promptMove(function(firstpos,secondpos){
    var movestatus = that.move(firstpos,secondpos);

    if(movestatus === false){
      console.log("Invalid move");
      that.run(completionCallback);
    }else{
      if(that.isWon()){
        completionCallback();
      }
      else{
        that.run(completionCallback);
      }
    }
  });

};

var game = new HanoiGame();
game.run(function(){
  console.log("You've won!");
  reader.close();
});