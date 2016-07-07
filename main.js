//button starts game and changes Start Game text to Reset Game then initiates playGame function.
$('#button-start').on('click', function() {
  $('#button-start').text('Reset Game');
  playGame();
});

var isUsersTurn = false
var playerClicks = [];
var round = 0

//lists the round sequences that will light up acting as the Computer
var roundSequence = [
  ["red", "green"],
  ["yellow", "yellow", "blue"],
  ["green", "blue", "red", "green"],
  ["red", "blue", "blue", "yellow", "red"],
  ["blue", "blue", "red", "green", "yellow", "red"],
  ["red", "yellow", "blue", "red", "blue", "green", "green", "yellow"],
  ["green", "green", "yellow", "blue", "red", "red", "blue"],
  ["green", "red", "yellow", "blue", "blue", "red", "green", "yellow", "blue"],
  ["green", "red", "yellow", "red", "blue", "green", "yellow", "yellow", "blue", "green"]
];

//sets the round counter at zero, changes the 'Press Start Game' background to black and removes the text, lastly, calls the playRound function
function playGame() {
  $('#status').css({
    'background-color': 'black'
  }).text('');
  round = 0;
  playRound(round);

}

//increases the round# displayed in the text as the player wins the round
function playRound(roundNumber) {
  $('#round').text("Round " + (roundNumber + 1)); //adds one because we indicated above that the rounds start at 0, but the text will show rounds starting at 1
  animate(roundSequence[roundNumber]); //calls animate function and pushes through these two parameters
  playerClicks = [];
}

function animate(sequence) {
  isUsersTurn = false; //function should only executive if it is NOT the players turn
  var i = 0;
  var interval = setInterval(function() {  //setInterval is a function that executes a fixed time delay between each call (regulates the timing of each action)
    lightUp(sequence[i]); //second function is set off as it goes through array lighting up the current color in sequence
    i++;
    if (i >= sequence.length) { //clearInterval cancels the repeated action sent from setInterval when the end of the sequence is reached
      clearInterval(interval);
      isUsersTurn = true;
    }
  }, 600);
}

function lightUp(boxId) {
  var box = $('#' + boxId).addClass('lit'); //selects each div by ID to addClass of lit  which changes the background opacity to give the effect of lighting up
  window.setTimeout(function() {//setTimeout is a method that calls this function after a specified time
    box.removeClass('lit'); //lit class is removed going back to its normal color
  }, 300); //second parameter tells it to wait this # of milliseconds before exeucting code
}

$('.tile').on('click', function(squares) {
  var id = $(this).attr('id'); //onclick function selects the id attribute
  console.log("Clicked on " + id + ", isUsersTurn = " + isUsersTurn);
  if (!isUsersTurn) { //if not users turn this function will not execute
    return false;
  }

  lightUp(id); //calls lightUp function and passes through id parameter
  playerClicks.push(id); //when the player indicates their user selection, the id name will be pushed into an empty playerClicks array
  console.log(playerClicks);
  var result = arraysEqual(playerClicks, roundSequence[round]); //this array compares the playerClicks and the roundSequence to see if it is a match or not. a match will continue the game, a mismatch will end the game
  if (result) {
    if (playerClicks.length === roundSequence[round].length) { //this compares to see if the length is the same
      $('#status').text('Player Wins!');
      round = round + 1
      playRound(round);
    }
  } else {
    $('#status').css({
      'background-color': 'red',
      'color': 'white'
    }).text('Game Over!');
  }
});

//compares after the length is compared above, the for loop will execute to compare the values within the array. if they match, it returns true, if they do not match, it returns false.
function arraysEqual(arr1, arr2) {
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
