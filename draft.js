$('#button-start').on('click', function() {
  $('h1').text('ROUND 1!');
  flashColors()
});
// $('#red').on('click', function () {
//   $(this).css('background-color', '#EF9191');
// });

//start game - each array shows computer pattern
function playGame (){
    var roundSequence = [
      ["red", "green"],
      ["yellow", "yellow", "blue"],
      ["green", "blue", "red", "green"]
    ];
//round sequence will count to show beginning at 1 (not 0)
    for (var r = 0; r < roundSequence.length; r++) {
     var sequence = roundSequence[r];
     var round = r + 1;
   }
}
//function will alert color and print round number
function flashColors() {
  for(var round = 0; round <=5; round++) {
    $('h1').text('ROUND' + round + '!');

 // Put $('h1') code here
 //Put  flashColors() code here

//this loop changes color of each square
 for(var i = 0; i < sequence.length; i++) {
     $('#' + sequence[i]).css('background-color', 'white');
 }
// }
// }


// for(var i = 0; i ) //for loop for rounds
//figure out how to do a different color sequence for each round

// $('.board').on('click', function newRound() {
 //red, green, red
// 	animate(sequence);
// }

// function animate(sequence) {
// 	var i = 0;
// 	var interval = setInterval(function() {
// 		lightUp(sequence[i]);
//         i++;
//         if (i >= sequence.length) {
// 			clearInterval(interval);
//         }
//    }, 600);
// }
//
// function lightup(tile) {
// 	var $tile = $('[data-tile=' + tile + ']').addClass('lit');
// 	window.setTimeout(function() {
// 		$tile.removeClass('lit');
// 	}, 300);
//


//flashing boxes
// $('#box1').on('click', function () {
//   $('#box1').fadeOut(100);
//   $('#box1').fadeIn(100);
// });
//
// $('#box2').on('click', function () {
//   $('#box2').fadeOut(100);
//   $('#box2').fadeIn(100);
// });
//
// $('#box3').on('click', function () {
//   $('#box3').fadeOut(100);
//   $('#box3').fadeIn(100);
// });
//
// $('#box4').on('click', function () {
//   $('#box4').fadeOut(100);
//   $('#box4').fadeIn(100);
// });

//switching player turns
// function switchTurn() {
//   if (turn === "computer")
//     turn = "player"
//   else
//     turn = "computer"
//   }

//reset button jquery
// $(document).on("click", "#reset-button", function() {
//       restoreDefault();
//   });
// var computer =
// var player =
//
