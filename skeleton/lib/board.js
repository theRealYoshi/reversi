var Piece = require("./piece");

/**
 * Returns a 2D array (8 by 8) with two black pieces at [3, 4] and [4, 3]
 * and two white pieces at [3, 3] and [4, 4]
 */
function _makeGrid () {
  var grid = [];
  for (var i = 0; i < 8; i++){
    grid.push(new Array(8));
  }
  grid[3][4] = new Piece("black");
  grid[4][3] = new Piece("black");
  grid[3][3] = new Piece("white");
  grid[4][4] = new Piece("white");
  return grid;
}

/**
 * Constructs a Board with a starting grid set up.
 */
function Board () {
  this.grid = _makeGrid();
}

Board.DIRS = [
  [ 0,  1], [ 1,  1], [ 1,  0],
  [ 1, -1], [ 0, -1], [-1, -1],
  [-1,  0], [-1,  1]
];

/**
 * Returns the piece at a given [x, y] position,
 * throwing an Error if the position is invalid.
 */
Board.prototype.getPiece = function (pos) {
  var x = pos[0];
  var y = pos[1];
  return this.grid[x][y];
};

/**
 * Checks if there are any valid moves for the given color.
 */
Board.prototype.hasMove = function (color) {
  // for (var i = 0; i < Board.DIRS.length; i++ ){
  //   //var opposingPiece = Board.DIRS[i];
  //   if (Board.DIRS[i].oppColor === color){
  //   }
  // }

};

/**
 * Checks if the piece at a given position
 * matches a given color.
 */
Board.prototype.isMine = function (pos, color) {
  var piece = this.getPiece(pos);
  if (this.isOccupied(pos) && piece.color === color){
    return true;
  } else {
    return false;
  }
};

/**
 * Checks if a given position has a piece on it.
 */
Board.prototype.isOccupied = function (pos) {
  space = this.getPiece(pos);
  if (space !== undefined && space.color !== undefined){
    return true;
  } else {
    return false;
  }
};

/**
 * Checks if both the white player and
 * the black player are out of moves.
 */
Board.prototype.isOver = function () {

};

/**
 * Checks if a given position is on the Board.
 */
Board.prototype.isValidPos = function (pos) {
  var x = pos[0];
  var y = pos[1];
  if (x > 7 || y > 7 || x < 0 || y < 0){
    return false
  } else {
    return true
  }
};

/**
 * Recursively follows a direction away from a starting position, adding each
 * piece of the opposite color until hitting another piece of the current color.
 * It then returns an array of all pieces between the starting position and
 * ending position.
 *
 * Returns null if it reaches the end of the board before finding another piece
 * of the same color.
 *
 * Returns null if it hits an empty position.
 *
 * Returns null if no pieces of the opposite color are found.
 */
function _positionsToFlip (board, pos, color, dir, piecesToFlip) {
}

/**
 * Adds a new piece of the given color to the given position, flipping the
 * color of any pieces that are eligible for flipping.
 *
 * Throws an error if the position represents an invalid move.
 */
Board.prototype.placePiece = function (pos, color) {
  var x = pos[0];
  var y = pos[1];
  // checks to see if this piece is on the board,
  // is not occupied and is a valid move
  // then place the piece.
  return this.grid[x][y] = color;
};

/**
 * Prints a string representation of the Board to the console.
 */
Board.prototype.print = function () {
  for (var i = 0; i < this.grid.length; i++){
    console.log(this.grid[i] + "\n");
    console.log("-------------------\n");
  }
};

/**
 * Checks that a position is not already occupied and that the color
 * taking the position will result in some pieces of the opposite
 * color being flipped.
 */
Board.prototype.validMove = function (pos, color) {
  // if (!this.isOccupied(pos) && ){
  //
  // }
};

/**
 * Produces an array of all valid positions on
 * the Board for a given color.
 */
Board.prototype.validMoves = function (color) {
};

module.exports = Board;
var b = new Board();
b.print();
