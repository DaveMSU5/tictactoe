$(document).ready(function(){
	var x = "x";
	var o = "o";
	var turns = 0;
	var playerXwins = 0;
	var playerOwins = 0;

	// box variables
	var box1 = $('#box1');
	var box2 = $('#box2');
	var box3 = $('#box3');
	var box4 = $('#box4');
	var box5 = $('#box5');
	var box6 = $('#box6');
	var box7 = $('#box7');
	var box8 = $('#box8');
	var box9 = $('#box9');
 
	var board = $('#board li');

	// checks to see if player 'O' has won
	board.on('click', function(){
		if(box1.hasClass('o') && box2.hasClass('o') && box3.hasClass('o') ||
			box4.hasClass('o') && box5.hasClass('o') && box6.hasClass('o') ||
			box7.hasClass('o') && box8.hasClass('o') && box9.hasClass('o') ||
			box1.hasClass('o') && box4.hasClass('o') && box7.hasClass('o') ||
			box2.hasClass('o') && box5.hasClass('o') && box8.hasClass('o') ||
			box3.hasClass('o') && box6.hasClass('o') && box9.hasClass('o') ||
			box1.hasClass('o') && box5.hasClass('o') && box9.hasClass('o') ||
			box3.hasClass('o') && box5.hasClass('o') && box7.hasClass('o')
		){
			// increments player O wins by 1 and displays it on scoreboard
			playerOwins = playerOwins + 1;
			document.getElementById("score_o").innerHTML = "Player O: "+playerOwins;
			// clears the board after O wins
			board.text('_');
			board.removeClass('disable');
			board.removeClass('o');
			board.removeClass('x');
		} 
		// checks to see if player 'X' has won
		else if(box1.hasClass('x') && box2.hasClass('x') && box3.hasClass('x') ||
			box4.hasClass('x') && box5.hasClass('x') && box6.hasClass('x') ||
			box7.hasClass('x') && box8.hasClass('x') && box9.hasClass('x') ||
			box1.hasClass('x') && box4.hasClass('x') && box7.hasClass('x') ||
			box2.hasClass('x') && box5.hasClass('x') && box8.hasClass('x') ||
			box3.hasClass('x') && box6.hasClass('x') && box9.hasClass('x') ||
			box1.hasClass('x') && box5.hasClass('x') && box9.hasClass('x') ||
			box3.hasClass('x') && box5.hasClass('x') && box7.hasClass('x')
		){
			// increments player X wins by 1 and displays it on scoreboard
			playerXwins = playerXwins + 1;
			document.getElementById("score_x").innerHTML = "Player X: " +playerXwins;
			// clears the board after 'X' has won
			board.text('_');
			board.removeClass('disable');
			board.removeClass('o');
			board.removeClass('x');
		} 
		// if all spaces have been filled with no winner alert tie game and clear board
		else if(turns == 9){
			alert('Tie Game');
			board.text('_');
			board.removeClass('disable');
			board.removeClass('o');
			board.removeClass('x');
			turns = 0;
		} 
		// if user clicks on a box that's aleady been picked display alert
		else if($(this).hasClass('disable')){
			alert('This box is already filled');
		} 
		// check to see who's turn it is
		else if(turns%2 == 0){
			turns++;
			$(this).text(o);
			$(this).addClass('disable o');
			if(box1.hasClass('o') && box2.hasClass('o') && box3.hasClass('o') ||
				box4.hasClass('o') && box5.hasClass('o') && box6.hasClass('o') ||
				box7.hasClass('o') && box8.hasClass('o') && box9.hasClass('o') ||
				box1.hasClass('o') && box4.hasClass('o') && box7.hasClass('o') ||
				box2.hasClass('o') && box5.hasClass('o') && box8.hasClass('o') ||
				box3.hasClass('o') && box6.hasClass('o') && box9.hasClass('o') ||
				box1.hasClass('o') && box5.hasClass('o') && box9.hasClass('o') ||
				box3.hasClass('o') && box5.hasClass('o') && box7.hasClass('o')
			){
				alert('Winner: O');
				turns = 0;
			}
		} 
		else {
			turns++;
			$(this).text(x);
			$(this).addClass('disable x');
			if(box1.hasClass('x') && box2.hasClass('x') && box3.hasClass('x') ||
				box4.hasClass('x') && box5.hasClass('x') && box6.hasClass('x') ||
				box7.hasClass('x') && box8.hasClass('x') && box9.hasClass('x') ||
				box1.hasClass('x') && box4.hasClass('x') && box7.hasClass('x') ||
				box2.hasClass('x') && box5.hasClass('x') && box8.hasClass('x') ||
				box3.hasClass('x') && box6.hasClass('x') && box9.hasClass('x') ||
				box1.hasClass('x') && box5.hasClass('x') && box9.hasClass('x') ||
				box3.hasClass('x') && box5.hasClass('x') && box7.hasClass('x')
			){
			alert('Winner: X');
			turns = 0;
			}
		}
	});

		// Reset Handler
		$("#reset").click(function(){
		board.text("_");
		board.removeClass('disable');
		board.removeClass('o');
		board.removeClass('x');
		turns = 0;
	});
});