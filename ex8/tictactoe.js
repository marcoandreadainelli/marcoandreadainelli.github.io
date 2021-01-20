let currentPlayer = "X";
let gameStatus = ""; // "" - continue game, 'Tie', 'X Wins', 'O Wins'
let numTurns = 0;


let idNames = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

// reset the borad and all the variables
function newGame() {                                                                                                                                                                                                                                                                                                                                                                                                                     
	for (var i = 0; i < idNames.length; i++) {
		document.getElementById(idNames[i]).innerHTML = "";
	} //for

	numTurns = 0;
	gameStatus = "";
	currentPlayer = "X";

	changeVisibility("controls");

} //newGame

//randomly chooses a free box for computer
function computerTakeTurn () {
	
	let idName = "";
console.log("Numturns = " + numTurns);


let cb = []; //cb is short for current board
	cb[0] = ""; // not going to use it
	cb[1] = document.getElementById("one").innerHTML;
	cb[2] = document.getElementById("two").innerHTML;
	cb[3] = document.getElementById("three").innerHTML;
	cb[4] = document.getElementById("four").innerHTML;
	cb[5] = document.getElementById("five").innerHTML;
	cb[6] = document.getElementById("six").innerHTML;
	cb[7] = document.getElementById("seven").innerHTML;
	cb[8] = document.getElementById("eight").innerHTML;
	cb[9] = document.getElementById("nine").innerHTML;


	// choose random boxes until an empty box is found
    
		if (numTurns == 1) {
			if(cb[5] == "") {
				document.getElementById("five").innerHTML = currentPlayer;
				return;
			} else {
				do {   
					let rand = parseInt(Math.random()*9) + 1; //1-9
					idName = idNames[rand-1];

					//check if chosen box is empty
					if (document.getElementById(idName).innerHTML == "") {
						document.getElementById(idName).innerHTML = currentPlayer;
						
						break;
					} //if

				} while (true);

			} //else

		} else {	 
                // to win if there's the possibility



				if (cb[1] == "O" && cb[2] == "O" && cb[3] == "") {
					document.getElementById("three").innerHTML = currentPlayer;
					return;
				}
				
							if (cb[3] == "O" && cb[5] == "O" && cb[7] == "") {
					document.getElementById("seven").innerHTML = currentPlayer;
					return;
				}
				
							if (cb[4] == "O" && cb[5] == "O" && cb[6] == "") {
					document.getElementById("six").innerHTML = currentPlayer;
					return;
				}
				
							if (cb[7] == "O" && cb[8] == "O" && cb[9] == "") {
					document.getElementById("nine").innerHTML = currentPlayer;
					return;
				}
				
							if (cb[1] == "O" && cb[4] == "O" && cb[7] == "") {
					document.getElementById("seven").innerHTML = currentPlayer;
					return;
				}
				
							if (cb[2] == "O" && cb[5] == "O" && cb[8] == "") {
					document.getElementById("eight").innerHTML = currentPlayer;
					return;
				}
				
							if (cb[3] == "O" && cb[6] == "O" && cb[9] == "") {
					document.getElementById("nine").innerHTML = currentPlayer;
					return;
				}
				
							if (cb[1] == "O" && cb[5] == "O" && cb[9] == "") {
					document.getElementById("nine").innerHTML = currentPlayer;
					return;
				}
				

				
							if (cb[1] == "O" && cb[3] == "O" && cb[2] == "") {
					document.getElementById("two").innerHTML = currentPlayer;
					return;
				}
				
							if (cb[3] == "O" && cb[7] == "O" && cb[5] == "") {
					document.getElementById("five").innerHTML = currentPlayer;
					return;
				}
				
							if (cb[4] == "O" && cb[6] == "O" && cb[5] == "") {
					document.getElementById("five").innerHTML = currentPlayer;
					return;
				}
				
							if (cb[7] == "O" && cb[9] == "O" && cb[8] == "") {
					document.getElementById("eight").innerHTML = currentPlayer;
					return;
				}
				
							if (cb[1] == "O" && cb[7] == "O" && cb[4] == "") {
					document.getElementById("four").innerHTML = currentPlayer;
					return;
				}
				
							if (cb[2] == "O" && cb[8] == "O" && cb[5] == "") {
					document.getElementById("five").innerHTML = currentPlayer;
					return;
				}
				
							if (cb[3] == "O" && cb[9] == "O" && cb[6] == "") {
					document.getElementById("six").innerHTML = currentPlayer;
					return;
				}
				
							if (cb[1] == "O" && cb[9] == "O" && cb[5] == "") {
					document.getElementById("five").innerHTML = currentPlayer;
					return;
				}
				

				
							if (cb[3] == "O" && cb[2] == "O" && cb[1] == "") {
					document.getElementById("one").innerHTML = currentPlayer;
					return;
				}
				
							if (cb[7] == "O" && cb[5] == "O" && cb[1] == "") {
					document.getElementById("one").innerHTML = currentPlayer;
					return;
				}
				
							if (cb[6] == "O" && cb[5] == "O" && cb[4] == "") {
					document.getElementById("four").innerHTML = currentPlayer;
					return;
				}
				
							if (cb[9] == "O" && cb[8] == "O" && cb[7] == "") {
					document.getElementById("seven").innerHTML = currentPlayer;
					return;
				}
				
							if (cb[7] == "O" && cb[4] == "O" && cb[1] == "") {
					document.getElementById("one").innerHTML = currentPlayer;
					return;
				}
				
							if (cb[8] == "O" && cb[5] == "O" && cb[2] == "") {
					document.getElementById("two").innerHTML = currentPlayer;
					return;
				}
				
							if (cb[9] == "O" && cb[6] == "O" && cb[3] == "") {
					document.getElementById("three").innerHTML = currentPlayer;
					return;
				}
				
							if (cb[9] == "O" && cb[5] == "O" && cb[1] == "") {
					document.getElementById("one").innerHTML = currentPlayer;
					return;
				}


		        // to block the user's win			

							if (cb[1] == "X" && cb[2] == "X" && cb[3] == "") {
					document.getElementById("three").innerHTML = currentPlayer;
					return;
				}
				
							if (cb[3] == "X" && cb[5] == "X" && cb[7] == "") {
					document.getElementById("seven").innerHTML = currentPlayer;
					return;
				}
				
							if (cb[4] == "X" && cb[5] == "X" && cb[6] == "") {
					document.getElementById("six").innerHTML = currentPlayer;
					return;
				}
				
							if (cb[7] == "X" && cb[8] == "X" && cb[9] == "") {
					document.getElementById("nine").innerHTML = currentPlayer;
					return;
				}
				
							if (cb[1] == "X" && cb[4] == "X" && cb[7] == "") {
					document.getElementById("seven").innerHTML = currentPlayer;
					return;
				}
				
							if (cb[2] == "X" && cb[5] == "X" && cb[8] == "") {
					document.getElementById("eight").innerHTML = currentPlayer;
					return;
				}
				
							if (cb[3] == "X" && cb[6] == "X" && cb[9] == "") {
					document.getElementById("nine").innerHTML = currentPlayer;
					return;
				}
				
							if (cb[1] == "X" && cb[5] == "X" && cb[9] == "") {
					document.getElementById("nine").innerHTML = currentPlayer;
					return;
				}
				

				
							if (cb[1] == "X" && cb[3] == "X" && cb[2] == "") {
					document.getElementById("two").innerHTML = currentPlayer;
					return;
				}
				
							if (cb[3] == "X" && cb[7] == "X" && cb[5] == "") {
					document.getElementById("five").innerHTML = currentPlayer;
					return;
				}
				
							if (cb[4] == "X" && cb[6] == "X" && cb[5] == "") {
					document.getElementById("five").innerHTML = currentPlayer;
					return;
				}
				
							if (cb[7] == "X" && cb[9] == "X" && cb[8] == "") {
					document.getElementById("eight").innerHTML = currentPlayer;
					return;
				}
				
							if (cb[1] == "X" && cb[7] == "X" && cb[4] == "") {
					document.getElementById("four").innerHTML = currentPlayer;
					return;
				}
				
							if (cb[2] == "X" && cb[8] == "X" && cb[5] == "") {
					document.getElementById("five").innerHTML = currentPlayer;
					return;
				}
				
							if (cb[3] == "X" && cb[9] == "X" && cb[6] == "") {
					document.getElementById("six").innerHTML = currentPlayer;
					return;
				}
				
							if (cb[1] == "X" && cb[9] == "X" && cb[5] == "") {
					document.getElementById("five").innerHTML = currentPlayer;
					return;
				}
				

				
							if (cb[3] == "X" && cb[2] == "X" && cb[1] == "") {
					document.getElementById("one").innerHTML = currentPlayer;
					return;
				}
				
							if (cb[7] == "X" && cb[5] == "X" && cb[1] == "") {
					document.getElementById("one").innerHTML = currentPlayer;
					return;
				}
				
							if (cb[6] == "X" && cb[5] == "X" && cb[4] == "") {
					document.getElementById("four").innerHTML = currentPlayer;
					return;
				}
				
							if (cb[9] == "X" && cb[8] == "X" && cb[7] == "") {
					document.getElementById("seven").innerHTML = currentPlayer;
					return;
				}
				
							if (cb[7] == "X" && cb[4] == "X" && cb[1] == "") {
					document.getElementById("one").innerHTML = currentPlayer;
					return;
				}
				
							if (cb[8] == "X" && cb[5] == "X" && cb[2] == "") {
					document.getElementById("two").innerHTML = currentPlayer;
					return;
				}
				
							if (cb[9] == "X" && cb[6] == "X" && cb[3] == "") {
					document.getElementById("three").innerHTML = currentPlayer;
					return;
				}
				
							if (cb[9] == "X" && cb[5] == "X" && cb[1] == "") {
					document.getElementById("one").innerHTML = currentPlayer;
					return;
				}  else {
					
					do {   
						let rand = parseInt(Math.random()*9) + 1; //1-9
						idName = idNames[rand-1];

						//check if chosen box is empty
						if (document.getElementById(idName).innerHTML == "") {
							document.getElementById(idName).innerHTML = currentPlayer;
							break;
						}
					} while (true);

				} //else

			} //else	

	
}


// take player turn
function playerTakeTurn (e) {

	if (e.innerHTML == "") {
		e.innerHTML=currentPlayer;
		checkGameStatus();

        //if game not over, computer goes
        if (gameStatus == "") {
        	setTimeout(function() {
	        	computerTakeTurn();
	        	checkGameStatus();
        		}, 500
        	);
        }

	}
	else {
		showLightBox("This box is already selected.","Please try another.");
		
		return;
	} //else


} //playerTakeTurn

//after each turn, check for a winner, a tie,
//or continue playing
function checkGameStatus () {
	numTurns++;
	
	//Check Win
	if (checkWin()) {
		gameStatus = currentPlayer + " wins!";
		
	}
	
	//Check for Tie
	if (numTurns == 9) {
		gameStatus="Tie Game";
		
	} //if

	//switch current player
	currentPlayer = (currentPlayer == "X" ? "O" : "X");

    // game is over
	if (gameStatus != "") {
		setTimeout(function() {
			showLightBox (gameStatus, "Game Over.")
		    }, 500
        );
	}	
	
} //checkGameStatus

//check for a Win, there are 8 win paths
function checkWin () {
	let cb = []; //cb is short for current board
	cb[0] = ""; // not going to use it
	cb[1] = document.getElementById("one").innerHTML;
	cb[2] = document.getElementById("two").innerHTML;
	cb[3] = document.getElementById("three").innerHTML;
	cb[4] = document.getElementById("four").innerHTML;
	cb[5] = document.getElementById("five").innerHTML;
	cb[6] = document.getElementById("six").innerHTML;
	cb[7] = document.getElementById("seven").innerHTML;
	cb[8] = document.getElementById("eight").innerHTML;
	cb[9] = document.getElementById("nine").innerHTML;
	

	if (cb[1] != "" && cb[1] == cb[2] && cb[2] == cb[3]) {
		return true;
	}	
	if (cb[4] != "" && cb[4] == cb[5] && cb[5] == cb[6]) {
		return true;
	}
	if (cb[7] != "" && cb[7] == cb[8] && cb[8] == cb[9]) {
		return true;
	}
	if (cb[1] != "" && cb[1] == cb[4] && cb[4] == cb[7]) {
		return true;
	}
	if (cb[2] != "" && cb[2] == cb[5] && cb[5] == cb[8]) {
		return true;
	}
	if (cb[3] != "" && cb[3] == cb[6] && cb[6] == cb[9]) {
		return true;
	}
	if (cb[1] != "" && cb[1] == cb[5] && cb[5] == cb[9]) {
		return true;
	}
	if (cb[3] != "" && cb[3] == cb[5] && cb[5] == cb[7]) {
		return true;
	}

} //checkWin

//change the visibility of ID
function changeVisibility(divID) {
	var element = document.getElementById(divID);

	// if element exists, it is considered true
	if (element) {
		element.className = (element.className == 'hidden') ? 'unhidden' : 'hidden';
	} //if
} //changeVisibility

//display message in lightbox
function showLightBox(message, message2) {

	//set messages
	document.getElementById("message").innerHTML = message;
	document.getElementById("message2").innerHTML = message2;

	//show lightbox
    changeVisibility("lightbox");
    changeVisibility("boundaryMessage");

}

//close light box
function continueGame() {
	changeVisibility("lightbox");
    changeVisibility("boundaryMessage");

    // if game is over, show controls
    if (gameStatus != "") {
    	changeVisibility("controls");
    }
} //continueGame