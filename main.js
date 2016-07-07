$('#button-start').on('click', function() {
  $('#button-start').text('Reset Game');
  playGame();
});

var isUsersTurn = false
var playerClicks = [];
var round = 1

//when code animates sequence, set this equal to true, then on the on-click
var roundSequence =
["red", "green"];
// ["yellow", "yellow", "blue"],
// ["green", "blue", "red", "green"]
// ];
function playGame (){
    animate(roundSequence);
}

function animate(sequence) {
	var i = 0;
	var interval = setInterval(function() {
		lightUp(sequence[i]);
        i++;
        if (i >= sequence.length) {
			clearInterval(interval);
        }
   }, 600);
}

function lightUp(box) {
	  var box = $('#' + box).addClass('lit');
	    window.setTimeout(function() {
		      box.removeClass('lit');
	    }, 300);
}

//prints id name when div is clicked
$('.tile').on('click', function(squares) {
//     // if(!isUsersTurn) {
//     //   return false;
//     // }
    playerClicks.push($(this).attr('id'));
    console.log(playerClicks);
    var result = arraysEqual(playerClicks, roundSequence);
    if(result) {
      if(playerClicks.length === roundSequence.length){
        // var playerWins = function (){
          $('#status').text('Player Wins!');
          round = round + 1
          $('#round').text("Round " + round)
          console.log(round);
        // }
      }
    }else {
      // var gameOver = function (){
        $('#status').text('Game Over!');
      // }
    }
});

//************HOMEWORK**********************
//write function to display winningSequence to print "Player Wins!" (instead of alert) create function in the global scope and call it from/within the click function

// var winningSequence = function () {
//   if(result === true){
//     return "Players Wins!";
//   }
//   else{
//     return "Game Over!";
//   }
// }

//write function to display gameOver to print "Game Over!" (instead of alert)

//create rounds(create global var roundCounter will begin at 0
//*******************************************

//this function is comparing the length of two arrays and if it passes it moves onto the for loop to compare the elements within the array. if they match, it returns true, if they do not match, it returns false.
function arraysEqual (arr1, arr2) {
    for(var i = 0; i < arr1.length; i++) {
      if(arr1[i] !== arr2[i]) {
          return false;
      }
    } return true;
}

//take out for loop for roundSequence, hard code to a sequence - use a global variable for roundNumber
//      $('h1').text('ROUND ' + round + '!');
//      animate(sequence);
//      isUsersTurn = true;
//    }
// }

//1) store users clicks in the empty array and check to see if this array is equal if so win that round, alert them they won!
//2) if not lose, and create reset button (write header message and create button)
