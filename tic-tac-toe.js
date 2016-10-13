$(document).ready(function() {
  // var click_count = 0
  var lastClicked = "X";
  $('.square').on('click', function(event){
    event.preventDefault();
    $target = $(event.target);
    if (!$target.hasClass('clicked')) {
      $target.addClass('clicked');
      $target.text(lastClicked);
      lastClicked = (lastClicked === "X") ? "O" : "X";
    }

    var gameHash = {1: [1,2,3], 2: [1,2,3], 3: [1,2,3]}

    // $target = $(event.target)



    // click_count ++
      // $target.text("O");
      // $target.addClass("o");


 });
})


// function Player(letter) {
//   this.letter = letter;
// };

// function Game() {
//   this.game = game;
// };








// Player.prototype.move = function(){

//     };

//start:
//x goes first
//each player takes a turn?
//logic to win tic-tac-toe?