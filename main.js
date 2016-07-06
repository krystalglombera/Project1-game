// var squares = $('.tile')

$('#button-start').on('click', function() {
  $('#button-start').text('Reset Game');
  playGame();
});

var isUsersTurn = false

//when code animates sequence, set this equal to true, then on the on-click
function playGame (){
    var roundSequence = [
      ["red", "green"]
      // ["yellow", "yellow", "blue"]
      // ["green", "blue", "red", "green"]
    ];
}
//take out for loop for roundSequence, hard code to a sequence - use a global variable for roundNumber
//      $('h1').text('ROUND ' + round + '!');
//      animate(sequence);
//      isUsersTurn = true;
//    }
// }
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

function lightUp(tile) {
	  var $tile = $('#' + tile).addClass('lit');
	    window.setTimeout(function() {
		      $tile.removeClass('lit');
	    }, 300);
}

// function activateSimonBoard() {
// 		$('.tile').on('click', function(e) {
// 					$(this).registerClick(e);
// 		});
//     console.log(hello);
// }
var playerClicks = [];

//prints id name when div is clicked
$('.tile').on('click', function(squares) {
    // if(!isUsersTurn) {
    //   return false;
    // }
    playerClicks.push($(this).attr('id'));
    console.log(playerClicks);
});


//1) store users clicks in the empty array and check to see if this array is equal if so win that round, alert them they won!
//2) if not lose, and create reset button (write header message and create button)


// $('.tile').push(attr of tile into emptyArray[];
