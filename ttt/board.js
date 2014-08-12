function Board () {
  this.grid = [["","",""],["","",""],["","",""]];

}

Board.prototype.display = function(){
  for(var i = 0; i < 3; i++) {
    console.log(JSON.stringify(this.grid[i])+ "\n");
  }
}

Board.prototype.horizontalWon = function () {
  for(var i = 0; i < 3; i++){
    var oCounter = 0;
    var xCounter = 0;

    for(var j = 0; j < 3; j++){
      var space = this.grid[i][j];

      if( space === "x"){
        xCounter += 1;
      }
      else if( space === "o"){
        oCounter += 1;
      }
      if(xCounter === 3 || oCounter === 3){
        return true
      }
    }
  }
  return false
}

Board.prototype.verticalWon = function () {
  for(var i = 0; i < 3; i++){
    var oCounter = 0;
    var xCounter = 0;

    for(var j = 0; j < 3; j++){
      var space = this.grid[i][j];

      if( space === "x"){
        xCounter += 1;
      }
      else if( space === "o"){
        oCounter += 1;
      }
      if(xCounter === 3 || oCounter === 3){
        return true
      }
    }
  }
  return false
}

Board.prototype.diagonalWon = function () {
  //diagonal
  var diagonals = [[0,1,2],[2,1,0]]
  //left
  var xCounter = 0;
  var oCounter = 0;
  for(var i = 0; i < 3; i++){
    var x = diagonals[0][i]
    var y = diagonals[0][i]
    var space = this.grid[x][y]
    if( space === "x"){
      xCounter += 1;
    }
    else if( space === "o"){
      oCounter += 1;
    }
    if(xCounter === 3 || oCounter === 3){
      return true
    }
  }
  //right
  xCounter = 0;
  oCounter = 0;
  for(var i = 0; i < 3; i++){
    var x = diagonals[1][i]
    var y = diagonals[0][i]
    var space = this.grid[x][y]
    if( space === "x"){
      xCounter += 1;
    }
    else if( space === "o"){
      oCounter += 1;
    }
    if(xCounter === 3 || oCounter === 3){
      return true;
    }
  }

  return false;
}

Board.prototype.won = function() {
  if (this.horizontalWon() || this.verticalWon() || this.diagonalWon()) {
    return true;
  }
  else {
    return false;
  }
}

Board.prototype.winner = function () {

}

Board.prototype.empty = function (pos) {
  if(this.grid[pos[0]][pos[1]] === "") {
    return true;
  }
  else {
    return false;
  }
}

Board.prototype.placeMark = function (pos, mark) {
  if(this.empty(pos)){
    this.grid[pos[0]][pos[1]] = mark;
    return true;
  }
  else {
    return false;
  }
}

module.exports = Board;